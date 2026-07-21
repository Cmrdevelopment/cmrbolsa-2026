import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, Settings2, ShieldCheck } from 'lucide-react'

const STORAGE_KEY = 'cmrbolsa_cookie_consent'
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

function saveConsent(preferences) {
  const consent = {
    version: CONSENT_VERSION,
    preferences,
    updatedAt: new Date().toISOString(),
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))

  window.dispatchEvent(
    new CustomEvent('cmrbolsa:cookie-consent-updated', {
      detail: consent,
    })
  )
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [configuring, setConfiguring] = useState(false)
  const [preferences, setPreferences] = useState(
    necessaryOnlyPreferences
  )

  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY)

    if (!savedConsent) {
      setVisible(true)
      return
    }

    try {
      const parsedConsent = JSON.parse(savedConsent)

      if (parsedConsent.version !== CONSENT_VERSION) {
        setVisible(true)
        return
      }

      setPreferences({
        ...necessaryOnlyPreferences,
        ...parsedConsent.preferences,
        necessary: true,
      })
    } catch {
      localStorage.removeItem(STORAGE_KEY)
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    const openSettings = () => {
      const savedConsent = localStorage.getItem(STORAGE_KEY)

      if (savedConsent) {
        try {
          const parsedConsent = JSON.parse(savedConsent)

          setPreferences({
            ...necessaryOnlyPreferences,
            ...parsedConsent.preferences,
            necessary: true,
          })
        } catch {
          setPreferences(necessaryOnlyPreferences)
        }
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
    setPreferences(allPreferences)
    setVisible(false)
    setConfiguring(false)
  }

  const rejectAll = () => {
    saveConsent(necessaryOnlyPreferences)
    setPreferences(necessaryOnlyPreferences)
    setVisible(false)
    setConfiguring(false)
  }

  const savePreferences = () => {
    const updatedPreferences = {
      ...preferences,
      necessary: true,
    }

    saveConsent(updatedPreferences)
    setPreferences(updatedPreferences)
    setVisible(false)
    setConfiguring(false)
  }

  const updatePreference = (name) => {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      [name]: !currentPreferences[name],
    }))
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end bg-cmr-dark/35 p-4 backdrop-blur-[2px] sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-cmr-line bg-white shadow-[0_30px_100px_rgba(20,32,29,0.30)]"
      >
        {!configuring ? (
          <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                <Cookie className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cmr-green">
                  Tus preferencias
                </p>

                <h2
                  id="cookie-consent-title"
                  className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink"
                >
                  Utilizamos cookies
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-cmr-muted">
                  Utilizamos las cookies necesarias para que la web funcione.
                  También puedes permitir cookies de medición y publicidad,
                  que solo se activarán si las aceptas.
                </p>

                <p className="mt-3 text-sm leading-6 text-cmr-muted">
                  Puedes consultar todos los detalles en nuestra{' '}
                  <Link
                    to="/politica_de_cookies"
                    className="font-bold text-cmr-green underline decoration-cmr-green/30 underline-offset-4"
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
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cmr-line bg-white px-5 py-3 text-sm font-extrabold text-cmr-ink transition hover:border-cmr-green/35 hover:bg-cmr-light"
              >
                Rechazar todas
              </button>

              <button
                type="button"
                onClick={() => setConfiguring(true)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cmr-line bg-cmr-light px-5 py-3 text-sm font-extrabold text-cmr-ink transition hover:border-cmr-green/35"
              >
                <Settings2 className="h-4 w-4" />
                Configurar
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cmr-green px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(50,128,119,0.22)] transition hover:bg-cmr-greenDark"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cmr-green">
                  Configuración
                </p>

                <h2
                  id="cookie-consent-title"
                  className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink"
                >
                  Elige qué cookies permites
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-cmr-muted">
                  Las cookies necesarias siempre estarán activas. Las de
                  analítica y publicidad solo se utilizarán cuando las
                  autorices.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              <div className="flex items-center justify-between gap-5 rounded-3xl border border-cmr-line bg-cmr-light p-5">
                <div>
                  <p className="font-bold text-cmr-ink">
                    Cookies necesarias
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cmr-muted">
                    Permiten el funcionamiento, la navegación y la seguridad
                    básica de la web.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-cmr-greenSoft px-3 py-1 text-xs font-extrabold text-cmr-green">
                  Siempre activas
                </span>
              </div>

              <label className="flex cursor-pointer items-center justify-between gap-5 rounded-3xl border border-cmr-line bg-white p-5 transition hover:border-cmr-green/30">
                <div>
                  <p className="font-bold text-cmr-ink">
                    Cookies de analítica
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cmr-muted">
                    Nos ayudarán a conocer qué páginas se visitan y cómo
                    funciona la web.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => updatePreference('analytics')}
                  className="h-5 w-5 shrink-0 accent-cmr-green"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between gap-5 rounded-3xl border border-cmr-line bg-white p-5 transition hover:border-cmr-green/30">
                <div>
                  <p className="font-bold text-cmr-ink">
                    Cookies publicitarias
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cmr-muted">
                    Podrán utilizarse para medir campañas y publicidad cuando
                    incorporemos estas herramientas.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => updatePreference('marketing')}
                  className="h-5 w-5 shrink-0 accent-cmr-green"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cmr-line bg-white px-6 py-3 text-sm font-extrabold text-cmr-ink transition hover:border-cmr-green/35 hover:bg-cmr-light"
              >
                Rechazar todas
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cmr-green px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(50,128,119,0.22)] transition hover:bg-cmr-greenDark"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}