import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const TemaContext = createContext(null)

const CLAVE_TEMA = 'cmrbolsa-tema'

const TEMA_CLARO = 'light'
const TEMA_OSCURO = 'dark'

function esTemaValido(tema) {
  return tema === TEMA_CLARO || tema === TEMA_OSCURO
}

function obtenerTemaGuardado() {
  if (typeof window === 'undefined') {
    return TEMA_CLARO
  }

  try {
    const temaGuardado =
      window.localStorage.getItem(CLAVE_TEMA)

    return esTemaValido(temaGuardado)
      ? temaGuardado
      : TEMA_CLARO
  } catch {
    return TEMA_CLARO
  }
}

export function aplicarTemaAlDocumento(tema) {
  if (typeof document === 'undefined') {
    return
  }

  const temaActivo = esTemaValido(tema)
    ? tema
    : TEMA_CLARO

  const html = document.documentElement

  html.classList.toggle(
    'dark',
    temaActivo === TEMA_OSCURO
  )

  html.dataset.theme = temaActivo
  html.style.colorScheme = temaActivo
}

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(
    obtenerTemaGuardado
  )

  useEffect(() => {
    aplicarTemaAlDocumento(tema)

    try {
      window.localStorage.setItem(
        CLAVE_TEMA,
        tema
      )
    } catch {
      // La web seguirá funcionando aunque
      // el navegador bloquee localStorage.
    }
  }, [tema])

  function cambiarTema(nuevoTema) {
    if (!esTemaValido(nuevoTema)) {
      return
    }

    setTema(nuevoTema)
  }

  function alternarTema() {
    setTema((temaActual) =>
      temaActual === TEMA_OSCURO
        ? TEMA_CLARO
        : TEMA_OSCURO
    )
  }

  const valor = useMemo(
    () => ({
      tema,
      esTemaClaro:
        tema === TEMA_CLARO,
      esTemaOscuro:
        tema === TEMA_OSCURO,
      cambiarTema,
      alternarTema,
    }),
    [tema]
  )

  return (
    <TemaContext.Provider value={valor}>
      {children}
    </TemaContext.Provider>
  )
}

export function useTema() {
  const contexto = useContext(TemaContext)

  if (!contexto) {
    throw new Error(
      'useTema debe utilizarse dentro de TemaProvider'
    )
  }

  return contexto
}