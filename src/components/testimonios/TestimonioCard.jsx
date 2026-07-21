import {
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  ArrowRight,
  Maximize2,
  Quote,
} from 'lucide-react'
import TestimonioMedia from './TestimonioMedia'
import TestimonioModal from './TestimonioModal'

const nombresCategorias = {
  comunidad: 'Comunidad PEV',
  mentoria: 'Mentoría PEV',
  libro: 'Libro',
  sala: 'Sala escrita',
  eventos: 'Eventos',
  general: 'CMRBolsa',
}

function dividirTextoEnParrafos(texto, limite = 420) {
  if (!texto) return []

  const frases =
    texto
      .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
      ?.map((frase) => frase.trim())
      .filter(Boolean) || [texto]

  const parrafos = []
  let parrafoActual = ''

  frases.forEach((frase) => {
    const textoCombinado = parrafoActual
      ? `${parrafoActual} ${frase}`
      : frase

    if (
      textoCombinado.length > limite &&
      parrafoActual
    ) {
      parrafos.push(parrafoActual)
      parrafoActual = frase
    } else {
      parrafoActual = textoCombinado
    }
  })

  if (parrafoActual) {
    parrafos.push(parrafoActual)
  }

  return parrafos
}

export default function TestimonioCard({
  testimonio,
  compact = false,
}) {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [textoRecortado, setTextoRecortado] = useState(false)

  const textoRef = useRef(null)

  if (!testimonio) return null

  const {
    nombre,
    texto,
    categoriaInterna,
    mostrarCategoria,
    imagenUrl,
    videoUrl,
    portadaUrl,
  } = testimonio

  const tieneMedia = Boolean(
    imagenUrl ||
    videoUrl ||
    portadaUrl
  )

  const categoriaVisible =
    nombresCategorias[categoriaInterna] || 'CMRBolsa'

  const tituloModal =
    nombre || 'Alumno de CMRBolsa'

  const parrafosTexto =
    dividirTextoEnParrafos(texto)

  useEffect(() => {
    const elemento = textoRef.current

    if (!elemento || !texto) {
      setTextoRecortado(false)
      return undefined
    }

    function comprobarRecorte() {
      const estaRecortado =
        elemento.scrollHeight > elemento.clientHeight + 2

      setTextoRecortado(estaRecortado)
    }

    comprobarRecorte()

    window.addEventListener(
      'resize',
      comprobarRecorte
    )

    return () => {
      window.removeEventListener(
        'resize',
        comprobarRecorte
      )
    }
  }, [texto, compact])

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-cmr-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,32,29,0.12)]">
        {tieneMedia && (
          <div className="relative p-3 pb-0">
            <TestimonioMedia
              testimonio={testimonio}
              vistaPrevia
            />

            <button
              type="button"
              onClick={() => setModalAbierto(true)}
              aria-label={`Ampliar testimonio de ${tituloModal}`}
              className="absolute inset-3 bottom-0 z-10 flex items-end justify-end rounded-[1.5rem] bg-transparent p-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-cmr-dark/78 text-white shadow-lg backdrop-blur transition group-hover:scale-105 group-hover:bg-cmr-dark">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          </div>
        )}

        <div
          className={`flex flex-1 flex-col ${
            compact ? 'p-5' : 'p-6 sm:p-7'
          }`}
        >
          {(texto || mostrarCategoria) && (
            <div
              className={`flex items-center gap-4 ${
                mostrarCategoria && !texto
                  ? 'justify-end'
                  : 'justify-between'
              }`}
            >
              {texto && (
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                  <Quote className="h-5 w-5" />
                </div>
              )}

              {mostrarCategoria && (
                <span className="rounded-full border border-cmr-line bg-cmr-paper px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-cmr-muted">
                  {categoriaVisible}
                </span>
              )}
            </div>
          )}

          {texto && (
            <div className="mt-5 flex-1">
              <p
                ref={textoRef}
                className={`font-display font-black leading-relaxed tracking-[-0.015em] text-cmr-ink ${
                  compact
                    ? 'text-lg'
                    : 'text-xl'
                }`}
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: compact ? 5 : 6,
                  overflow: 'hidden',
                }}
              >
                “{texto}”
              </p>

              {textoRecortado && (
                <button
                  type="button"
                  onClick={() => setModalAbierto(true)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-green transition hover:gap-3 hover:text-cmr-ink"
                >
                  Leer testimonio completo
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          <div
            className={
              texto
                ? 'mt-6 border-t border-cmr-line pt-5'
                : tieneMedia
                  ? 'mt-1'
                  : 'mt-5 border-t border-cmr-line pt-5'
            }
          >
            <p className="font-display text-lg font-black text-cmr-ink">
              {tituloModal}
            </p>

            <p className="mt-1 text-sm font-semibold text-cmr-muted">
              Experiencia real
            </p>
          </div>
        </div>
      </article>

      <TestimonioModal
        abierto={modalAbierto}
        titulo={tituloModal}
        onCerrar={() => setModalAbierto(false)}
      >
        {tieneMedia && (
          <TestimonioMedia
            testimonio={testimonio}
            className="mx-auto w-full"
          />
        )}

        {texto && (
          <div
            className={`rounded-[1.5rem] border border-white/10 bg-white/6 p-5 sm:p-6 ${
              tieneMedia ? 'mt-5' : ''
            }`}
          >
            <div className="space-y-5">
              {parrafosTexto.map((parrafo, indice) => (
                <p
                  key={`${testimonio.id}-parrafo-${indice}`}
                  className="font-display text-lg font-black leading-8 text-white sm:text-xl"
                >
                  {indice === 0 && '“'}
                  {parrafo}
                  {indice === parrafosTexto.length - 1 && '”'}
                </p>
              ))}
            </div>

            <p className="mt-6 text-sm font-bold text-cmr-green">
              {tituloModal}
            </p>
          </div>
        )}
      </TestimonioModal>
    </>
  )
}