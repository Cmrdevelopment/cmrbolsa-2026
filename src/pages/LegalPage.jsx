import { Link } from 'react-router-dom'
import AvisoLegalContent from '../components/legal/AvisoLegalContent'
import PrivacidadContent from '../components/legal/PrivacidadContent'
import CookiesContent from '../components/legal/CookiesContent'
import TerminosContent from '../components/legal/TerminosContent'

const legalPages = {
  aviso: {
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    intro:
      'En esta página encontrarás la información general del titular de CMRBolsa y las condiciones básicas de uso de la web.',
  },

  privacidad: {
    eyebrow: 'Protección de datos',
    title: 'Política de privacidad',
    intro:
      'Aquí explicamos qué datos podemos recoger, para qué los utilizamos y qué derechos tienes sobre tu información.',
  },

  cookies: {
    eyebrow: 'Preferencias de navegación',
    title: 'Política de cookies',
    intro:
      'En esta página explicamos qué cookies utiliza CMRBolsa y cómo puedes aceptarlas, rechazarlas o cambiar tus preferencias.',
  },

  terminos: {
    eyebrow: 'Condiciones de contratación',
    title: 'Términos y condiciones',
    intro:
      'Aquí explicamos las condiciones aplicables a la contratación y utilización de la Comunidad Trading PEV, la Mentoría PEV y los demás servicios de CMRBolsa.',
  },
}

export default function LegalPage({ type }) {
  const page = legalPages[type]

  if (!page) {
    return null
  }

  return (
    <div className="min-h-screen bg-cmr-light text-cmr-ink">
      <section className="noise bg-cmr-dark bg-cmr-radial pt-[142px] pb-16 text-white sm:pb-20">
        <div className="section-shell">
          <div className="max-w-4xl">
            <span className="eyebrow-dark">
              {page.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              {page.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-cmr-line bg-white p-7 shadow-soft sm:p-10">
            {type === 'aviso' && (
              <AvisoLegalContent />
            )}

            {type === 'privacidad' && (
              <PrivacidadContent />
            )}

            {type === 'cookies' && (
              <CookiesContent />
            )}

            {type === 'terminos' && (
              <TerminosContent />
            )}

            <div className="mt-10 border-t border-cmr-line pt-8">
              <Link
                to="/"
                className="btn-primary inline-flex"
              >
                Volver a CMRBolsa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}