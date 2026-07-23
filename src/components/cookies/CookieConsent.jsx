import {
  useEffect,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import {
  Cookie,
  Settings2,
  ShieldCheck,
} from 'lucide-react'

const STORAGE_KEY =
  'cmrbolsa_cookie_consent'

const CONSENT_VERSION = 1

const necessaryOnlyPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const allPreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
}

function readConsent() {
  try {
    const savedConsent =
      window.localStorage.getItem(
        STORAGE_KEY
      )

    if (!savedConsent) {
      return null
    }

    return JSON.parse(savedConsent)
  } catch {
    return null
  }
}

function removeConsent() {
  try {
    window.localStorage.removeItem(
      STORAGE_KEY
    )
  } catch {
    // La web seguirá funcionando aunque
    // el navegador bloquee localStorage.
  }
}

function saveConsent(preferences) {
  const consent = {
    version: CONSENT_VERSION,
    preferences,
    updatedAt:
      new Date().toISOString(),
  }

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(consent)
    )
  } catch {
    // La elección seguirá funcionando
    // durante la sesión actual.
  }

  window.dispatchEvent(
    new CustomEvent(
      'cmrbolsa:cookie-consent-updated',
      {
        detail: consent,
      }
    )
  )
}

function PreferenceSwitch({
  checked,
  onChange,
  label,
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-7 w-12 shrink-0 rounded-full border transition duration-200 ${
        checked
          ? 'border-cmr-green bg-cmr-green'
          : 'border-cmr-borderStrong bg-cmr-surfaceStrong'
      }`}
    >
      <span
        className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow transition duration-200 ${
          checked
            ? 'left-[25px]'
            : 'left-[3px]'
        }`}
      />
    </button>
  )
}

export default function CookieConsent() {
  const [visible, setVisible] =
    useState(false)

  const [
    configuring,
    setConfiguring,
  ] = useState(false)

  const [
    preferences,
    setPreferences,
  ] = useState(
    necessaryOnlyPreferences
  )

  useEffect(() => {
    const savedConsent =
      readConsent()

    if (!savedConsent) {
      setVisible(true)
      return
    }

    if (
      savedConsent.version !==
      CONSENT_VERSION
    ) {
      setVisible(true)
      return
    }

    setPreferences({
      ...necessaryOnlyPreferences,
      ...savedConsent.preferences,
      necessary: true,
    })
  }, [])

  useEffect(() => {
    const openSettings = () => {
      const savedConsent =
        readConsent()

      if (savedConsent) {
        setPreferences({
          ...necessaryOnlyPreferences,
          ...savedConsent.preferences,
          necessary: true,
        })
      } else {
        setPreferences(
          necessaryOnlyPreferences
        )
      }

      setConfiguring(true)
      setVisible(true)
    }

    window.addEventListener(
      'cmrbolsa:open-cookie-settings',
      openSettings
    )

    return () => {
      window.removeEventListener(
        'cmrbolsa:open-cookie-settings',
        openSettings
      )
    }
  }, [])

  const acceptAll = () => {
    saveConsent(allPreferences)

    setPreferences(
      allPreferences
    )

    setVisible(false)
    setConfiguring(false)
  }

  const rejectAll = () => {
    saveConsent(
      necessaryOnlyPreferences
    )

    setPreferences(
      necessaryOnlyPreferences
    )

    setVisible(false)
    setConfiguring(false)
  }

  const savePreferences = () => {
    const updatedPreferences = {
      ...preferences,
      necessary: true,
    }

    saveConsent(
      updatedPreferences
    )

    setPreferences(
      updatedPreferences
    )

    setVisible(false)
    setConfiguring(false)
  }

  const updatePreference = (
    name
  ) => {
    setPreferences(
      (currentPreferences) => ({
        ...currentPreferences,
        [name]:
          !currentPreferences[name],
      })
    )
  }

  useEffect(() => {
    if (!visible) {
      return undefined
    }

    const handleEscape = (
      event
    ) => {
      if (
        event.key === 'Escape' &&
        configuring
      ) {
        setConfiguring(false)
      }
    }

    window.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [visible, configuring])

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end bg-cmr-dark/55 p-4 backdrop-blur-[3px] sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className="mx-auto max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-cmr-borderStrong bg-cmr-surface text-cmr-text shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:max-h-[calc(100vh-3rem)]"
      >
        {!configuring ? (
          <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/25 bg-cmr-green/12 text-cmr-green">
                <Cookie
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cmr-green">
                  Tus preferencias
                </p>

                <h2
                  id="cookie-consent-title"
                  className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-cmr-text"
                >
                  Utilizamos cookies
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-cmr-textMuted">
                  Utilizamos las cookies
                  necesarias para que la web
                  funcione. También puedes
                  permitir cookies de medición
                  y publicidad, que solo se
                  activarán si las aceptas.
                </p>

                <p className="mt-3 text-sm leading-6 text-cmr-textMuted">
                  Puedes consultar todos los
                  detalles en nuestra{' '}
                  <Link
                    to="/politica_de_cookies"
                    className="font-bold text-cmr-green underline decoration-cmr-green/35 underline-offset-4 transition hover:text-cmr-greenDark"
                  >
                    Política de cookies
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[470px]">
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cmr-borderStrong bg-cmr-surface px-5 py-3 text-sm font-extrabold text-cmr-text transition hover:-translate-y-0.5 hover:border-cmr-green/50 hover:bg-cmr-surfaceAlt"
              >
                Rechazar todas
              </button>

              <button
                type="button"
                onClick={() =>
                  setConfiguring(true)
                }
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cmr-borderStrong bg-cmr-surfaceAlt px-5 py-3 text-sm font-extrabold text-cmr-text transition hover:-translate-y-0.5 hover:border-cmr-green/50 hover:bg-cmr-surfaceStrong"
              >
                <Settings2
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Configurar
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cmr-green px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(50,128,119,0.25)] transition hover:-translate-y-0.5 hover:bg-cmr-greenDark"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/25 bg-cmr-green/12 text-cmr-green">
                <ShieldCheck
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cmr-green">
                  Configuración
                </p>

                <h2
                  id="cookie-consent-title"
                  className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-cmr-text"
                >
                  Elige qué cookies permites
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-cmr-textMuted">
                  Las cookies necesarias
                  siempre estarán activas. Las
                  de analítica y publicidad
                  solo se utilizarán cuando las
                  autorices.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              <div className="flex items-center justify-between gap-5 rounded-3xl border border-cmr-border bg-cmr-surfaceAlt p-5">
                <div>
                  <p className="font-bold text-cmr-text">
                    Cookies necesarias
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cmr-textMuted">
                    Permiten el funcionamiento,
                    la navegación y la seguridad
                    básica de la web.
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-cmr-green/20 bg-cmr-green/12 px-3 py-1 text-xs font-extrabold text-cmr-green">
                  Siempre activas
                </span>
              </div>

              <div className="flex items-center justify-between gap-5 rounded-3xl border border-cmr-border bg-cmr-surface p-5 transition hover:border-cmr-green/35">
                <div>
                  <p className="font-bold text-cmr-text">
                    Cookies de analítica
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cmr-textMuted">
                    Nos ayudarán a conocer qué
                    páginas se visitan y cómo
                    funciona la web.
                  </p>
                </div>

                <PreferenceSwitch
                  checked={
                    preferences.analytics
                  }
                  onChange={() =>
                    updatePreference(
                      'analytics'
                    )
                  }
                  label="Permitir cookies de analítica"
                />
              </div>

              <div className="flex items-center justify-between gap-5 rounded-3xl border border-cmr-border bg-cmr-surface p-5 transition hover:border-cmr-green/35">
                <div>
                  <p className="font-bold text-cmr-text">
                    Cookies publicitarias
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cmr-textMuted">
                    Podrán utilizarse para
                    medir campañas y publicidad
                    cuando incorporemos estas
                    herramientas.
                  </p>
                </div>

                <PreferenceSwitch
                  checked={
                    preferences.marketing
                  }
                  onChange={() =>
                    updatePreference(
                      'marketing'
                    )
                  }
                  label="Permitir cookies publicitarias"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/politica_de_cookies"
                className="text-center text-sm font-bold text-cmr-textMuted underline decoration-cmr-borderStrong underline-offset-4 transition hover:text-cmr-green"
              >
                Consultar la política de cookies
              </Link>

              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-cmr-borderStrong bg-cmr-surface px-6 py-3 text-sm font-extrabold text-cmr-text transition hover:-translate-y-0.5 hover:border-cmr-green/50 hover:bg-cmr-surfaceAlt"
                >
                  Rechazar todas
                </button>

                <button
                  type="button"
                  onClick={savePreferences}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-cmr-green px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(50,128,119,0.25)] transition hover:-translate-y-0.5 hover:bg-cmr-greenDark"
                >
                  Guardar preferencias
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}