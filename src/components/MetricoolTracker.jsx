
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const METRICOOL_HASH =
  '4531081c992c5f2200dcbe630bbe918a'

const METRICOOL_SCRIPT_ID =
  'cmrbolsa-metricool-tracker'

const METRICOOL_SCRIPT_URL =
  'https://tracker.metricool.com/resources/be.js'

function cargarScriptMetricool() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.beTracker?.t) {
    return Promise.resolve()
  }

  if (window.__cmrbolsaMetricoolPromise) {
    return window.__cmrbolsaMetricoolPromise
  }

  window.__cmrbolsaMetricoolPromise = new Promise(
    (resolve, reject) => {
      const scriptExistente =
        document.getElementById(METRICOOL_SCRIPT_ID)

      if (scriptExistente) {
        scriptExistente.addEventListener(
          'load',
          resolve,
          { once: true }
        )

        scriptExistente.addEventListener(
          'error',
          reject,
          { once: true }
        )

        return
      }

      const script = document.createElement('script')

      script.id = METRICOOL_SCRIPT_ID
      script.type = 'text/javascript'
      script.src = METRICOOL_SCRIPT_URL
      script.async = true

      script.onload = resolve
      script.onerror = reject

      document.head.appendChild(script)
    }
  )

  return window.__cmrbolsaMetricoolPromise
}

function registrarPaginaMetricool(paginaActual) {
  if (!paginaActual || !window.beTracker?.t) {
    return
  }

  if (
    window.__cmrbolsaUltimaPaginaMetricool ===
    paginaActual
  ) {
    return
  }

  window.__cmrbolsaUltimaPaginaMetricool =
    paginaActual

  window.beTracker.t({
    hash: METRICOOL_HASH,
  })
}

export default function MetricoolTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    let activo = true

    const paginaActual = `${pathname}${search}`

    cargarScriptMetricool()
      .then(() => {
        if (activo) {
          registrarPaginaMetricool(paginaActual)
        }
      })
      .catch((error) => {
        console.error(
          'No se pudo cargar Metricool:',
          error
        )
      })

    return () => {
      activo = false
    }
  }, [pathname, search])

  return null
}
