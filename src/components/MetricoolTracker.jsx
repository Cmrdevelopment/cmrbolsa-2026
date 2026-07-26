import {
  useEffect,
  useState,
} from 'react'

import {
  useLocation,
} from 'react-router-dom'

const STORAGE_KEY =
  'cmrbolsa_cookie_consent'

const CONSENT_VERSION = 1

const METRICOOL_HASH =
  '4531081c992c5f2200dcbe630bbe918a'

const METRICOOL_SCRIPT_ID =
  'cmrbolsa-metricool-tracker'

const METRICOOL_SCRIPT_URL =
  'https://tracker.metricool.com/resources/be.js'

function tieneConsentimientoAnalitico() {
  try {
    const consentimientoGuardado =
      window.localStorage.getItem(
        STORAGE_KEY
      )

    if (!consentimientoGuardado) {
      return false
    }

    const consentimiento =
      JSON.parse(
        consentimientoGuardado
      )

    return (
      consentimiento.version ===
        CONSENT_VERSION &&
      consentimiento.preferences
        ?.analytics === true
    )
  } catch {
    return false
  }
}

function cargarScriptMetricool() {
  if (
    typeof window ===
    'undefined'
  ) {
    return Promise.resolve()
  }

  if (
    window.beTracker?.t
  ) {
    return Promise.resolve()
  }

  if (
    window
      .__cmrbolsaMetricoolPromise
  ) {
    return window
      .__cmrbolsaMetricoolPromise
  }

  window
    .__cmrbolsaMetricoolPromise =
    new Promise(
      (
        resolve,
        reject
      ) => {
        const scriptExistente =
          document.getElementById(
            METRICOOL_SCRIPT_ID
          )

        if (scriptExistente) {
          scriptExistente.addEventListener(
            'load',
            resolve,
            {
              once: true,
            }
          )

          scriptExistente.addEventListener(
            'error',
            reject,
            {
              once: true,
            }
          )

          return
        }

        const script =
          document.createElement(
            'script'
          )

        script.id =
          METRICOOL_SCRIPT_ID

        script.type =
          'text/javascript'

        script.src =
          METRICOOL_SCRIPT_URL

        script.async = true

        script.onload =
          resolve

        script.onerror =
          reject

        document.head.appendChild(
          script
        )
      }
    )

  return window
    .__cmrbolsaMetricoolPromise
}

function registrarPaginaMetricool(
  paginaActual
) {
  if (
    !paginaActual ||
    !window.beTracker?.t
  ) {
    return
  }

  if (
    window
      .__cmrbolsaUltimaPaginaMetricool ===
    paginaActual
  ) {
    return
  }

  window
    .__cmrbolsaUltimaPaginaMetricool =
    paginaActual

  window.beTracker.t({
    hash: METRICOOL_HASH,
  })
}

export default function MetricoolTracker() {
  const {
    pathname,
    search,
  } = useLocation()

  const [
    analiticaPermitida,
    setAnaliticaPermitida,
  ] = useState(false)

  useEffect(() => {
    const actualizarConsentimiento =
      (
        event
      ) => {
        const consentimientoEvento =
          event?.detail

        if (
          consentimientoEvento
            ?.version ===
            CONSENT_VERSION
        ) {
          setAnaliticaPermitida(
            consentimientoEvento
              .preferences
              ?.analytics === true
          )

          return
        }

        setAnaliticaPermitida(
          tieneConsentimientoAnalitico()
        )
      }

    actualizarConsentimiento()

    window.addEventListener(
      'cmrbolsa:cookie-consent-updated',
      actualizarConsentimiento
    )

    return () => {
      window.removeEventListener(
        'cmrbolsa:cookie-consent-updated',
        actualizarConsentimiento
      )
    }
  }, [])

  useEffect(() => {
    if (
      !analiticaPermitida
    ) {
      window
        .__cmrbolsaUltimaPaginaMetricool =
        null

      return undefined
    }

    let activo = true

    const paginaActual =
      `${pathname}${search}`

    cargarScriptMetricool()
      .then(() => {
        if (activo) {
          registrarPaginaMetricool(
            paginaActual
          )
        }
      })
      .catch(
        (
          error
        ) => {
          console.error(
            'No se pudo cargar Metricool:',
            error
          )
        }
      )

    return () => {
      activo = false
    }
  }, [
    analiticaPermitida,
    pathname,
    search,
  ])

  return null
}