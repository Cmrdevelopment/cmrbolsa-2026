import {
  useState,
} from 'react'
import {
  Link,
  useSearchParams,
} from 'react-router-dom'

import CampoFormulario from '../components/forms/CampoFormulario'
import PageHero from '../components/PageHero'

/*
|--------------------------------------------------------------------------
| INTERRUPTOR DE LA MENTORÍA
|--------------------------------------------------------------------------
|
| true  → muestra Calendly para reservar la sesión estratégica.
| false → muestra el formulario de lista de espera conectado con Brevo.
|
*/

const MENTORIA_ABIERTA = false

const CALENDLY_URL =
  'https://calendly.com/cmrbolsa/sesion-estrategica'

function CalendlyEmbebido() {
  return (
    <iframe
      src={CALENDLY_URL}
      title="Reserva tu sesión estratégica con CMRBolsa"
      className="h-[800px] w-full border-0"
      style={{
        minWidth: '320px',
      }}
      loading="eager"
    />
  )
}



function MensajeConfirmacion() {
  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-cmr-green/25 bg-white p-8 text-center shadow-soft transition-colors duration-300 dark:border-cmr-green/35 dark:bg-cmr-dark3 sm:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cmr-green/10 text-3xl text-cmr-green dark:bg-cmr-green/20 dark:text-[#79CFC4]">
        ✓
      </div>

      <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-cmr-green dark:text-[#79CFC4]">
        Confirmación completada
      </p>

      <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-4xl">
        Tu interés en la Mentoría PEV ha quedado confirmado
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-cmr-muted dark:text-white/[0.68]">
        Ya formas parte de la lista de personas interesadas. Cuando
        vuelva a abrir nuevas plazas, recibirás la información por
        correo.
      </p>

      <Link
        to="/"
        className="btn-primary mt-8 inline-flex"
      >
        Volver a inicio
      </Link>
    </div>
  )
}

function FormularioListaEspera() {
  const [estadoEnvio, setEstadoEnvio] =
    useState('inicial')

  const [mensajeError, setMensajeError] =
    useState('')

  async function enviarSolicitud(event) {
    event.preventDefault()

    if (estadoEnvio === 'enviando') {
      return
    }

    const formulario = event.currentTarget
    const datosFormulario = new FormData(formulario)

    const datos = {
      nombre: String(
        datosFormulario.get('nombre') || ''
      ).trim(),

      email: String(
        datosFormulario.get('email') || ''
      ).trim(),

      experienciaTrading: String(
        datosFormulario.get('experienciaTrading') || ''
      ).trim(),

      bloqueoPrincipal: String(
        datosFormulario.get('bloqueoPrincipal') || ''
      ).trim(),

      aceptaComunicaciones:
        datosFormulario.get('aceptaComunicaciones') ===
        'on',

      sitioWeb: String(
        datosFormulario.get('sitioWeb') || ''
      ).trim(),
    }

    setEstadoEnvio('enviando')
    setMensajeError('')

    try {
      const respuesta = await fetch(
        '/api/mentoria-interes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datos),
        }
      )

      const resultado = await respuesta
        .json()
        .catch(() => ({}))

      if (!respuesta.ok) {
        throw new Error(
          resultado.error ||
            'No se pudo enviar el formulario.'
        )
      }

      formulario.reset()
      setEstadoEnvio('enviado')
    } catch (error) {
      setMensajeError(
        error.message ||
          'Ha ocurrido un error. Inténtalo de nuevo.'
      )

      setEstadoEnvio('error')
    }
  }

  if (estadoEnvio === 'enviado') {
    return (
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-cmr-green/25 bg-white p-8 text-center shadow-soft transition-colors duration-300 dark:border-cmr-green/35 dark:bg-cmr-dark3 sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cmr-green/10 text-3xl text-cmr-green dark:bg-cmr-green/20 dark:text-[#79CFC4]">
          ✓
        </div>

        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-cmr-green dark:text-[#79CFC4]">
          Solicitud recibida
        </p>

        <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.025em] text-cmr-ink dark:text-white">
          Revisa ahora tu correo
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-cmr-muted dark:text-white/[0.68]">
          Te he enviado un correo para confirmar que quieres
          recibir información sobre las próximas aperturas de la
          Mentoría PEV.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-cmr-muted dark:text-white/[0.58]">
          Tu registro no quedará confirmado hasta que pulses el
          botón incluido en ese correo.
        </p>
      </div>
    )
  }

  return (
    <form
      className="mx-auto grid max-w-3xl gap-6 rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_28px_90px_rgba(0,0,0,0.30)] sm:p-8"
      onSubmit={enviarSolicitud}
    >
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cmr-green dark:text-[#79CFC4]">
          Próximas aperturas
        </p>

        <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.025em] text-cmr-ink dark:text-white">
          Avísame cuando vuelva a abrir la Mentoría PEV
        </h2>

        <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.68]">
          Ahora mismo no hay nuevas plazas. Déjame tus datos
          para avisarte cuando vuelva a abrir el proceso de
          selección.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <CampoFormulario
          id="nombre"
          name="nombre"
          label="Nombre y apellidos"
          placeholder="Tu nombre completo"
          autoComplete="name"
          required
        />

        <CampoFormulario
          id="email"
          name="email"
          label="Correo electrónico"
          type="email"
          placeholder="nombre@correo.com"
          autoComplete="email"
          required
        />
      </div>

      <CampoFormulario
        id="experienciaTrading"
        name="experienciaTrading"
        label="¿Qué experiencia tienes en trading?"
        formato="textarea"
        rows={4}
        placeholder="Cuánto tiempo llevas, qué mercados trabajas y si operas actualmente."
        required
      />

      <CampoFormulario
        id="bloqueoPrincipal"
        name="bloqueoPrincipal"
        label="¿Cuál es tu principal bloqueo ahora mismo?"
        formato="textarea"
        rows={4}
        placeholder="Cuéntame brevemente qué es lo que más te está impidiendo avanzar."
        required
      />

      <div
        className="hidden"
        aria-hidden="true"
      >
        <label htmlFor="sitioWeb">
          No rellenar este campo
        </label>

        <input
          id="sitioWeb"
          name="sitioWeb"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="rounded-3xl border border-cmr-line bg-cmr-light p-5 transition-colors duration-300 dark:border-white/[0.12] dark:bg-white/[0.06]">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="aceptaComunicaciones"
            required
            className="mt-1 h-5 w-5 shrink-0 accent-cmr-green"
          />

          <span className="text-sm font-normal leading-7 text-cmr-muted dark:text-white/[0.68]">
            Quiero recibir por correo información sobre próximas
            aperturas de la Mentoría PEV y acepto el tratamiento
            de mis datos conforme a la{' '}

            <Link
              to="/politica-privacidad"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-cmr-green underline decoration-cmr-green/30 underline-offset-4 dark:text-[#79CFC4]"
            >
              Política de privacidad
            </Link>
            .
          </span>
        </label>
      </div>

      {mensajeError && (
        <div
          className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-sm font-bold text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200"
          role="alert"
        >
          {mensajeError}
        </div>
      )}

      <button
        type="submit"
        disabled={estadoEnvio === 'enviando'}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {estadoEnvio === 'enviando'
          ? 'Enviando…'
          : 'Avisarme de próximas aperturas'}
      </button>
    </form>
  )
}

export default function SolicitudMentoria() {
  const [parametrosBusqueda] = useSearchParams()

  const confirmacionCompletada =
    parametrosBusqueda.get('confirmado') === '1'

  const contenidoHero = confirmacionCompletada
    ? {
        eyebrow: 'Confirmación',
        title: 'Interés confirmado',
        text: 'Tu registro para recibir información sobre la Mentoría PEV ha quedado confirmado.',
      }
    : MENTORIA_ABIERTA
      ? {
          eyebrow: 'Sesión estratégica',
          title: 'Reserva tu sesión estratégica',
          text: 'Selecciona directamente el día y la hora disponibles que mejor te encajen.',
        }
      : {
          eyebrow: 'Mentoría PEV',
          title: 'Las plazas están cerradas ahora mismo',
          text: 'Déjame tus datos y te avisaré cuando vuelva a abrir el proceso de selección.',
        }

  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow={contenidoHero.eyebrow}
        title={contenidoHero.title}
        text={contenidoHero.text}
        primaryLabel="Volver a inicio"
        primaryTo="/"
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-20 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-80 w-80 rounded-full bg-cmr-gold/[0.05] blur-3xl dark:block" />

        <div className="section-shell relative">
          {confirmacionCompletada ? (
            <MensajeConfirmacion />
          ) : MENTORIA_ABIERTA ? (
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cmr-line bg-white p-3 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 sm:p-6">
              <CalendlyEmbebido />
            </div>
          ) : (
            <FormularioListaEspera />
          )}
        </div>
      </section>
    </div>
  )
}