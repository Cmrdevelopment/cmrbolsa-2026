import {
  useEffect,
  useState,
} from 'react'

import {
  ArrowRight,
  Newspaper,
} from 'lucide-react'

function formatearFecha(fecha) {
  if (!fecha) {
    return ''
  }

  const fechaArticulo =
    new Date(fecha)

  if (
    Number.isNaN(
      fechaArticulo.getTime()
    )
  ) {
    return ''
  }

  return new Intl.DateTimeFormat(
    'es-ES',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  ).format(fechaArticulo)
}

function EstadoAlternativo({
  cargando = false,
}) {
  return (
    <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/[0.16] bg-cmr-dark3 p-7 sm:min-h-[390px]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cmr-green/[0.28] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cmr-gold/[0.16] blur-3xl" />

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cmr-green/[0.35] bg-cmr-green/[0.18] text-[#91DDD3]">
          <Newspaper
            className="h-7 w-7"
            aria-hidden="true"
          />
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#91DDD3]">
          El Informe de CMRBolsa
        </p>

        <p className="mt-3 font-display text-3xl font-black leading-tight text-white">
          {cargando
            ? 'Cargando el último artículo…'
            : 'Análisis y reflexiones sobre el mercado.'}
        </p>

        <p className="mt-4 max-w-md text-sm leading-7 text-white/[0.68]">
          Precio, estructura, volumen y contexto para mirar el mercado con más
          orden.
        </p>
      </div>
    </div>
  )
}

export default function UltimoArticuloSubstack() {
  const [
    articulo,
    setArticulo,
  ] = useState(null)

  const [
    cargando,
    setCargando,
  ] = useState(true)

  const [
    error,
    setError,
  ] = useState(false)

  useEffect(() => {
    const controller =
      new AbortController()

    async function cargarUltimoArticulo() {
      try {
        const response =
          await fetch(
            '/api/substack',
            {
              method: 'GET',
              headers: {
                Accept:
                  'application/json',
              },
              signal:
                controller.signal,
            }
          )

        if (!response.ok) {
          throw new Error(
            'No se pudo cargar el último artículo.'
          )
        }

        const data =
          await response.json()

        const ultimoArticulo =
          Array.isArray(
            data.articulos
          )
            ? data.articulos[0]
            : null

        if (!ultimoArticulo) {
          throw new Error(
            'No hay artículos disponibles.'
          )
        }

        setArticulo(
          ultimoArticulo
        )
      } catch (errorCarga) {
        if (
          errorCarga.name ===
          'AbortError'
        ) {
          return
        }

        console.error(
          'Error cargando el último artículo de Substack:',
          errorCarga
        )

        setError(true)
      } finally {
        if (
          !controller.signal.aborted
        ) {
          setCargando(false)
        }
      }
    }

    cargarUltimoArticulo()

    return () => {
      controller.abort()
    }
  }, [])

  if (cargando) {
    return (
      <EstadoAlternativo
        cargando
      />
    )
  }

  if (
    error ||
    !articulo
  ) {
    return (
      <EstadoAlternativo />
    )
  }

  const fecha =
    formatearFecha(
      articulo.fecha
    )

  return (
    <a
      href={articulo.enlace}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block min-h-[340px] overflow-hidden rounded-[2rem] border border-white/[0.16] bg-cmr-dark3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[390px]"
    >
      {articulo.imagen ? (
        <img
          src={articulo.imagen}
          alt={`Imagen del artículo ${articulo.titulo}`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="eager"
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-cmr-dark bg-cmr-radial">
          <Newspaper
            className="absolute right-8 top-8 h-16 w-16 text-[#79CFC4]/50"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#041713] via-[#041713]/70 to-transparent" />

      <div className="relative flex min-h-[340px] flex-col justify-end p-7 sm:min-h-[390px]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#79CFC4]/35 bg-[#0B312B]/85 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#91DDD3] backdrop-blur">
            Último artículo
          </span>

          {fecha && (
            <span className="text-xs font-bold text-white/[0.68]">
              {fecha}
            </span>
          )}
        </div>

        <h2 className="mt-5 max-w-xl font-display text-3xl font-black leading-tight tracking-[-0.025em] text-white sm:text-4xl">
          {articulo.titulo}
        </h2>

        <div className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#91DDD3]">
          Leer artículo

          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  )
}