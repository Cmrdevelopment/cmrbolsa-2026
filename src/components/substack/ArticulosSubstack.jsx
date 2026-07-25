import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  ArrowRight,
  ExternalLink,
  Newspaper,
  RefreshCw,
} from 'lucide-react'

const SUBSTACK_URL =
  'https://cmrbolsa.substack.com/'

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

function ArticuloImagen({
  articulo,
}) {
  if (!articulo.imagen) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center bg-cmr-dark bg-cmr-radial">
        <Newspaper
          className="h-12 w-12 text-[#79CFC4]"
          aria-hidden="true"
        />
      </div>
    )
  }

  return (
    <img
      src={articulo.imagen}
      alt=""
      className="aspect-[16/9] w-full object-cover"
      loading="lazy"
    />
  )
}

function ArticuloCard({
  articulo,
}) {
  const fecha =
    formatearFecha(
      articulo.fecha
    )

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cmr-line bg-white shadow-soft transition duration-200 hover:-translate-y-1 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]">
      <ArticuloImagen
        articulo={articulo}
      />

      <div className="flex flex-1 flex-col p-6">
        {fecha && (
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-cmr-green dark:text-[#79CFC4]">
            {fecha}
          </p>
        )}

        <h3 className="mt-3 font-display text-xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white">
          {articulo.titulo}
        </h3>

        {articulo.resumen && (
          <p className="mt-4 flex-1 text-sm leading-7 text-cmr-muted dark:text-white/[0.66]">
            {articulo.resumen}
          </p>
        )}

        <a
          href={articulo.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-extrabold text-cmr-green transition hover:text-cmr-greenDark dark:text-[#79CFC4]"
        >
          Leer artículo

          <ExternalLink
            className="h-4 w-4"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  )
}

function ArticulosCargando() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map(
        (item) => (
          <div
            key={item}
            className="overflow-hidden rounded-[1.75rem] border border-cmr-line bg-white shadow-soft dark:border-white/[0.14] dark:bg-cmr-dark3"
          >
            <div className="aspect-[16/9] animate-pulse bg-cmr-surfaceStrong dark:bg-white/[0.08]" />

            <div className="p-6">
              <div className="h-3 w-28 animate-pulse rounded-full bg-cmr-surfaceStrong dark:bg-white/[0.08]" />

              <div className="mt-4 h-6 animate-pulse rounded-full bg-cmr-surfaceStrong dark:bg-white/[0.08]" />

              <div className="mt-3 h-6 w-4/5 animate-pulse rounded-full bg-cmr-surfaceStrong dark:bg-white/[0.08]" />

              <div className="mt-6 h-4 animate-pulse rounded-full bg-cmr-surfaceStrong dark:bg-white/[0.08]" />

              <div className="mt-3 h-4 w-3/4 animate-pulse rounded-full bg-cmr-surfaceStrong dark:bg-white/[0.08]" />
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default function ArticulosSubstack() {
  const [
    articulos,
    setArticulos,
  ] = useState([])

  const [
    cargando,
    setCargando,
  ] = useState(true)

  const [
    error,
    setError,
  ] = useState(false)

  const cargarArticulos =
    useCallback(
      async (
        signal
      ) => {
        setCargando(true)
        setError(false)

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
                signal,
              }
            )

          if (!response.ok) {
            throw new Error(
              'No se pudieron cargar los artículos.'
            )
          }

          const data =
            await response.json()

          if (
            !data.ok ||
            !Array.isArray(
              data.articulos
            )
          ) {
            throw new Error(
              'La respuesta de Substack no es válida.'
            )
          }

          setArticulos(
            data.articulos
          )
        } catch (errorCarga) {
          if (
            errorCarga.name ===
            'AbortError'
          ) {
            return
          }

          console.error(
            'Error cargando los artículos de Substack:',
            errorCarga
          )

          setError(true)
        } finally {
          if (!signal?.aborted) {
            setCargando(false)
          }
        }
      },
      []
    )

  useEffect(() => {
    const controller =
      new AbortController()

    cargarArticulos(
      controller.signal
    )

    return () => {
      controller.abort()
    }
  }, [cargarArticulos])

  if (cargando) {
    return (
      <ArticulosCargando />
    )
  }

  if (
    error ||
    articulos.length === 0
  ) {
    return (
      <div className="rounded-[2rem] border border-cmr-line bg-white p-7 text-center shadow-soft dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]">
        <Newspaper
          className="mx-auto h-9 w-9 text-cmr-green dark:text-[#79CFC4]"
          aria-hidden="true"
        />

        <h3 className="mt-5 font-display text-2xl font-black text-cmr-ink dark:text-white">
          Los artículos no han podido cargarse
        </h3>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-cmr-muted dark:text-white/[0.66]">
          Puedes volver a intentarlo o entrar directamente en El Informe de
          CMRBolsa.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              cargarArticulos()
            }
            className="btn-secondary-light"
          >
            <RefreshCw
              className="h-4 w-4"
              aria-hidden="true"
            />

            Volver a intentar
          </button>

          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ir a Substack

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articulos.map(
        (articulo) => (
          <ArticuloCard
            key={
              articulo.enlace
            }
            articulo={
              articulo
            }
          />
        )
      )}
    </div>
  )
}