import {
  useMemo,
  useState,
} from 'react'

import {
  Image,
  LayoutGrid,
  MessageSquareText,
  PlayCircle,
} from 'lucide-react'

import TestimonioCard from './TestimonioCard'

const filtros = [
  {
    id: 'todos',
    label: 'Todos',
    icono: LayoutGrid,
  },
  {
    id: 'video',
    label: 'Vídeos',
    icono: PlayCircle,
  },
  {
    id: 'imagen',
    label: 'Fotos y mensajes',
    icono: Image,
  },
  {
    id: 'texto',
    label: 'Opiniones escritas',
    icono: MessageSquareText,
  },
]

function coincideConFiltro(
  testimonio,
  filtroActivo
) {
  if (filtroActivo === 'todos') {
    return true
  }

  const tieneVideo = Boolean(
    testimonio.videoUrl
  )

  const tieneImagen = Boolean(
    testimonio.imagenUrl
  )

  const tieneTexto = Boolean(
    testimonio.texto
  )

  if (filtroActivo === 'video') {
    return (
      tieneVideo ||
      testimonio.tipo === 'video'
    )
  }

  if (filtroActivo === 'imagen') {
    return (
      tieneImagen ||
      testimonio.tipo === 'imagen' ||
      testimonio.tipo === 'mixto'
    )
  }

  if (filtroActivo === 'texto') {
    return (
      tieneTexto &&
      !tieneVideo &&
      !tieneImagen
    )
  }

  return true
}

function obtenerTipoVisual(
  testimonio
) {
  if (
    testimonio.videoUrl ||
    testimonio.tipo === 'video'
  ) {
    return 'video'
  }

  if (
    testimonio.imagenUrl ||
    testimonio.tipo === 'imagen' ||
    testimonio.tipo === 'mixto'
  ) {
    return 'imagen'
  }

  return 'texto'
}

function mezclarTestimoniosPorFormato(
  testimonios
) {
  const colas = {
    imagen: [],
    texto: [],
    video: [],
  }

  testimonios.forEach(
    (testimonio) => {
      const tipo =
        obtenerTipoVisual(
          testimonio
        )

      colas[tipo].push(
        testimonio
      )
    }
  )

  const patrones = [
    [
      'imagen',
      'texto',
      'video',
    ],
    [
      'video',
      'imagen',
      'texto',
    ],
    [
      'texto',
      'video',
      'imagen',
    ],
    [
      'imagen',
      'video',
      'texto',
    ],
    [
      'texto',
      'imagen',
      'video',
    ],
    [
      'video',
      'texto',
      'imagen',
    ],
  ]

  const resultado = []
  let indicePatron = 0

  while (
    colas.imagen.length > 0 ||
    colas.texto.length > 0 ||
    colas.video.length > 0
  ) {
    const patron =
      patrones[
        indicePatron %
          patrones.length
      ]

    patron.forEach((tipo) => {
      const testimonio =
        colas[tipo].shift()

      if (testimonio) {
        resultado.push(
          testimonio
        )
      }
    })

    indicePatron += 1
  }

  return resultado
}

export default function TestimoniosGrid({
  testimonios = [],
  cantidadInicial = 9,
}) {
  const [
    filtroActivo,
    setFiltroActivo,
  ] = useState('todos')

  const [
    cantidadVisible,
    setCantidadVisible,
  ] = useState(
    cantidadInicial
  )

  const testimoniosFiltrados =
    useMemo(() => {
      const resultado =
        testimonios.filter(
          (testimonio) =>
            coincideConFiltro(
              testimonio,
              filtroActivo
            )
        )

      if (
        filtroActivo !== 'todos'
      ) {
        return resultado
      }

      return mezclarTestimoniosPorFormato(
        resultado
      )
    }, [
      testimonios,
      filtroActivo,
    ])

  const testimoniosVisibles =
    testimoniosFiltrados.slice(
      0,
      cantidadVisible
    )

  const quedanTestimonios =
    cantidadVisible <
    testimoniosFiltrados.length

  function cambiarFiltro(
    filtro
  ) {
    setFiltroActivo(
      filtro
    )

    setCantidadVisible(
      cantidadInicial
    )
  }

  function mostrarMas() {
    setCantidadVisible(
      (cantidadActual) =>
        cantidadActual + 6
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filtros.map(
          (filtro) => {
            const Icono =
              filtro.icono

            const estaActivo =
              filtroActivo ===
              filtro.id

            return (
              <button
                key={filtro.id}
                type="button"
                aria-pressed={
                  estaActivo
                }
                onClick={() =>
                  cambiarFiltro(
                    filtro.id
                  )
                }
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-extrabold transition duration-200 ${
                  estaActivo
                    ? 'border-cmr-green bg-cmr-green text-white shadow-soft dark:border-[#79CFC4] dark:bg-[#367F76] dark:shadow-[0_12px_35px_rgba(0,0,0,0.24)]'
                    : 'border-cmr-line bg-white text-cmr-muted hover:border-cmr-green/40 hover:text-cmr-ink dark:border-white/[0.14] dark:bg-white/[0.08] dark:text-white/[0.68] dark:hover:border-cmr-green/45 dark:hover:bg-white/[0.12] dark:hover:text-white'
                }`}
              >
                <Icono
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                {filtro.label}
              </button>
            )
          }
        )}
      </div>

      <div className="mt-10 columns-1 gap-6 md:columns-2 xl:columns-3">
        {testimoniosVisibles.map(
          (testimonio) => (
            <div
              key={
                testimonio.id
              }
              className="mb-6 inline-block w-full break-inside-avoid"
            >
              <TestimonioCard
                testimonio={
                  testimonio
                }
              />
            </div>
          )
        )}
      </div>

      {testimoniosVisibles.length ===
        0 && (
        <div className="mt-10 rounded-[2rem] border border-cmr-line bg-white p-8 text-center shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]">
          <p className="font-display text-2xl font-black text-cmr-ink dark:text-white">
            Todavía no hay
            testimonios en este
            formato
          </p>

          <p className="mt-3 text-cmr-muted dark:text-white/[0.66]">
            Puedes volver a
            “Todos” para ver el
            resto de experiencias.
          </p>
        </div>
      )}

      {quedanTestimonios && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={mostrarMas}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-cmr-line bg-white px-6 py-3 text-sm font-extrabold text-cmr-ink shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/40 hover:text-cmr-green dark:border-white/[0.16] dark:bg-white/[0.08] dark:text-white dark:shadow-[0_16px_45px_rgba(0,0,0,0.22)] dark:hover:border-cmr-green/45 dark:hover:bg-white/[0.12] dark:hover:text-[#79CFC4]"
          >
            Ver más testimonios
          </button>
        </div>
      )}
    </div>
  )
}