import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function TestimonioModal({
  abierto,
  titulo = 'Experiencia real',
  children,
  onCerrar,
}) {
  useEffect(() => {
    if (!abierto) return undefined

    function cerrarConEscape(event) {
      if (event.key === 'Escape') {
        onCerrar()
      }
    }

    const overflowAnterior =
      document.body.style.overflow

    document.body.style.overflow = 'hidden'

    window.addEventListener(
      'keydown',
      cerrarConEscape
    )

    return () => {
      document.body.style.overflow =
        overflowAnterior

      window.removeEventListener(
        'keydown',
        cerrarConEscape
      )
    }
  }, [abierto, onCerrar])

  if (!abierto) return null

  function cerrarDesdeFondo(event) {
    if (event.target === event.currentTarget) {
      onCerrar()
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
      onMouseDown={cerrarDesdeFondo}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-cmr-dark/88 backdrop-blur-md sm:p-6"
    >
      <div className="flex h-full w-full flex-col overflow-hidden bg-cmr-dark shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:max-h-[92vh] sm:max-w-5xl sm:rounded-[2rem] sm:border sm:border-white/12">
        <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-cmr-dark/96 px-4 py-4 backdrop-blur sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cmr-green">
              Testimonio
            </p>

            <h2 className="mt-1 truncate font-display text-xl font-black text-white sm:text-2xl">
              {titulo}
            </h2>
          </div>

          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar testimonio"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/72 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain p-4 pb-8 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}