import {
  useEffect,
  useId,
  useRef,
} from 'react'
import { X } from 'lucide-react'

export default function TestimonioModal({
  abierto,
  etiqueta = 'Testimonio',
  titulo = 'Experiencia real',
  textoCerrar = 'Cerrar ventana',
  children,
  onCerrar,
}) {
  const tituloId = useId()
  const botonCerrarRef = useRef(null)

  useEffect(() => {
    if (!abierto) {
      return undefined
    }

    function cerrarConEscape(event) {
      if (event.key === 'Escape') {
        onCerrar()
      }
    }

    const overflowAnterior =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    window.addEventListener(
      'keydown',
      cerrarConEscape
    )

    const frame =
      window.requestAnimationFrame(
        () => {
          botonCerrarRef.current?.focus()
        }
      )

    return () => {
      document.body.style.overflow =
        overflowAnterior

      window.removeEventListener(
        'keydown',
        cerrarConEscape
      )

      window.cancelAnimationFrame(
        frame
      )
    }
  }, [
    abierto,
    onCerrar,
  ])

  if (!abierto) {
    return null
  }

  function cerrarDesdeFondo(event) {
    if (
      event.target ===
      event.currentTarget
    ) {
      onCerrar()
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={tituloId}
      onMouseDown={cerrarDesdeFondo}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-cmr-dark/[0.90] backdrop-blur-md sm:p-6"
    >
      <div className="flex h-full w-full flex-col overflow-hidden bg-cmr-dark text-white shadow-[0_30px_120px_rgba(0,0,0,0.60)] sm:max-h-[92vh] sm:max-w-5xl sm:rounded-[2rem] sm:border sm:border-white/[0.16]">
        <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-4 border-b border-white/[0.14] bg-cmr-dark/[0.96] px-4 py-4 backdrop-blur-xl sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#79CFC4]">
              {etiqueta}
            </p>

            <h2
              id={tituloId}
              className="mt-1 truncate font-display text-xl font-black text-white sm:text-2xl"
            >
              {titulo}
            </h2>
          </div>

          <button
            ref={botonCerrarRef}
            type="button"
            onClick={onCerrar}
            aria-label={textoCerrar}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.10] text-white/[0.78] transition duration-200 hover:scale-105 hover:border-white/[0.32] hover:bg-white/[0.16] hover:text-white"
          >
            <X
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain p-4 pb-8 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}