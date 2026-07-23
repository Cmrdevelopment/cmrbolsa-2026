import {
  Moon,
  Sun,
} from 'lucide-react'

import { useTema } from '../context/TemaContext.jsx'

export default function SelectorTema({
  sobreOscuro = false,
  mostrarTexto = false,
  className = '',
}) {
  const {
    esTemaOscuro,
    alternarTema,
  } = useTema()

  const textoAccion = esTemaOscuro
    ? 'Activar modo claro'
    : 'Activar modo oscuro'

  return (
    <button
      type="button"
      onClick={alternarTema}
      aria-label={textoAccion}
      aria-pressed={esTemaOscuro}
      title={textoAccion}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border px-3 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${
        sobreOscuro
          ? 'border-white/25 bg-white/12 text-white hover:border-white/45 hover:bg-white/20'
          : 'border-cmr-border bg-cmr-surface text-cmr-text shadow-[0_8px_24px_rgba(20,32,29,0.07)] hover:border-cmr-green/55 hover:bg-cmr-surfaceAlt'
      } ${mostrarTexto ? 'min-w-[150px]' : 'w-11'} ${className}`}
    >
      {esTemaOscuro ? (
        <Sun
          className="h-5 w-5"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="h-5 w-5"
          aria-hidden="true"
        />
      )}

      {mostrarTexto && (
        <span>
          {esTemaOscuro
            ? 'Modo claro'
            : 'Modo oscuro'}
        </span>
      )}
    </button>
  )
}