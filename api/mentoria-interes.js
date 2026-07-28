const LISTA_PENDIENTES_MENTORIA_ID = 2

const LIMITE_SOLICITUDES = 5
const VENTANA_LIMITE_MS =
  15 * 60 * 1000

const limitesPorIp =
  globalThis.__cmrbolsaMentoriaLimites ??
  new Map()

globalThis.__cmrbolsaMentoriaLimites =
  limitesPorIp

function responder(
  response,
  status,
  body
) {
  response.status(status).json(body)
}

function obtenerBody(request) {
  if (!request.body) {
    return {}
  }

  if (
    typeof request.body === 'string'
  ) {
    return JSON.parse(request.body)
  }

  return request.body
}

function obtenerTexto(valor) {
  if (typeof valor !== 'string') {
    return ''
  }

  return valor.trim()
}

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    correo
  )
}

function obtenerIp(request) {
  const forwardedFor =
    request.headers[
      'x-forwarded-for'
    ]

  if (
    typeof forwardedFor === 'string'
  ) {
    return forwardedFor
      .split(',')[0]
      .trim()
  }

  return (
    request.socket?.remoteAddress ??
    ''
  )
}

function superaLimite(ip) {
  if (!ip) {
    return false
  }

  const ahora = Date.now()

  for (
    const [
      ipGuardada,
      datos,
    ] of limitesPorIp.entries()
  ) {
    if (
      ahora - datos.inicio >
      VENTANA_LIMITE_MS
    ) {
      limitesPorIp.delete(
        ipGuardada
      )
    }
  }

  const datosActuales =
    limitesPorIp.get(ip)

  if (!datosActuales) {
    limitesPorIp.set(ip, {
      inicio: ahora,
      total: 1,
    })

    return false
  }

  if (
    ahora - datosActuales.inicio >
    VENTANA_LIMITE_MS
  ) {
    limitesPorIp.set(ip, {
      inicio: ahora,
      total: 1,
    })

    return false
  }

  datosActuales.total += 1

  return (
    datosActuales.total >
    LIMITE_SOLICITUDES
  )
}

export default async function handler(
  request,
  response
) {
  if (request.method !== 'POST') {
    response.setHeader(
      'Allow',
      'POST'
    )

    return responder(
      response,
      405,
      {
        ok: false,
        error:
          'Método no permitido.',
      }
    )
  }

  let body

  try {
    body = obtenerBody(request)
  } catch {
    return responder(
      response,
      400,
      {
        ok: false,
        error:
          'La solicitud no es válida.',
      }
    )
  }

  const sitioWeb = obtenerTexto(
    body.sitioWeb
  )

  /*
   * Honeypot:
   * si un bot completa este campo,
   * respondemos correctamente pero
   * no enviamos nada a Brevo.
   */
  if (sitioWeb) {
    return responder(
      response,
      200,
      {
        ok: true,
      }
    )
  }

  const ip = obtenerIp(request)

  if (superaLimite(ip)) {
    return responder(
      response,
      429,
      {
        ok: false,
        error:
          'Has realizado demasiados intentos. Espera unos minutos antes de volver a intentarlo.',
      }
    )
  }

  const nombre = obtenerTexto(
    body.nombre
  )

  const email = obtenerTexto(
    body.email
  ).toLowerCase()

  const experienciaTrading =
    obtenerTexto(
      body.experienciaTrading
    )

  const bloqueoPrincipal =
    obtenerTexto(
      body.bloqueoPrincipal
    )

  const aceptaComunicaciones =
    body.aceptaComunicaciones === true

  if (
    nombre.length < 2 ||
    nombre.length > 100
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        error:
          'Introduce un nombre válido.',
      }
    )
  }

  if (
    email.length > 254 ||
    !correoValido(email)
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        error:
          'Introduce un correo electrónico válido.',
      }
    )
  }

  if (
    experienciaTrading.length < 10 ||
    experienciaTrading.length > 2500
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        error:
          'Explica brevemente tu experiencia en trading.',
      }
    )
  }

  if (
    bloqueoPrincipal.length < 10 ||
    bloqueoPrincipal.length > 2500
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        error:
          'Explica brevemente cuál es tu principal bloqueo.',
      }
    )
  }

  if (!aceptaComunicaciones) {
    return responder(
      response,
      400,
      {
        ok: false,
        error:
          'Debes aceptar la Política de privacidad y el envío de información sobre la Mentoría PEV.',
      }
    )
  }

  const apiKey =
    process.env.BREVO_API_KEY

  if (!apiKey) {
    console.error(
      'Falta la variable BREVO_API_KEY.'
    )

    return responder(
      response,
      500,
      {
        ok: false,
        error:
          'El servicio de registro no está disponible en este momento.',
      }
    )
  }

  const controller =
    new AbortController()

  const timeout = setTimeout(
    () => controller.abort(),
    10000
  )

  try {
    const brevoResponse =
      await fetch(
        'https://api.brevo.com/v3/contacts',
        {
          method: 'POST',
          headers: {
            Accept:
              'application/json',
            'Content-Type':
              'application/json',
            'api-key':
              apiKey,
            'User-Agent':
              'CMRBolsa-Mentoria/1.0',
          },
          body: JSON.stringify({
            email,
            attributes: {
              NOMBRE:
                nombre,
              EXPERIENCIA_EN_TRADING:
                experienciaTrading,
              BLOQUEO_PRINCIPAL:
                bloqueoPrincipal,
            },
            listIds: [
              LISTA_PENDIENTES_MENTORIA_ID,
            ],
            updateEnabled: true,
          }),
          signal:
            controller.signal,
        }
      )

    const textoRespuesta =
      await brevoResponse.text()

    let resultado = {}

    if (textoRespuesta) {
      try {
        resultado =
          JSON.parse(
            textoRespuesta
          )
      } catch {
        resultado = {
          respuesta:
            textoRespuesta,
        }
      }
    }

    if (!brevoResponse.ok) {
      console.error(
        'Error de Brevo:',
        brevoResponse.status,
        resultado
      )

      return responder(
        response,
        502,
        {
          ok: false,
          error:
            'No se ha podido completar el registro. Inténtalo de nuevo en unos minutos.',
        }
      )
    }

    return responder(
      response,
      200,
      {
        ok: true,
      }
    )
  } catch (error) {
    console.error(
      'Error registrando el interés en la Mentoría:',
      error
    )

    return responder(
      response,
      502,
      {
        ok: false,
        error:
          'No se ha podido completar el registro. Inténtalo de nuevo en unos minutos.',
      }
    )
  } finally {
    clearTimeout(timeout)
  }
}