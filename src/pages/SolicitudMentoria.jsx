import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function SolicitudMentoria() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero
        eyebrow="Solicitud"
        title="Solicitud para Mentoría PEV"
        text="No es compra directa. La idea es entender dónde estás, si tiene sentido y si encaja por ambas partes."
        primaryLabel="Volver a inicio"
        primaryTo="/"
      />

      <section className="py-20">
        <div className="section-shell max-w-3xl">
          <form
            className="card-light grid gap-5 p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            {[
              'Nombre',
              'Email',
              'Teléfono',
              'Experiencia en trading',
              'Qué has probado antes',
              'Qué problema quieres resolver',
              'Tiempo real disponible',
              'Por qué quieres entrar',
            ].map((label) => (
              <label
                key={label}
                className="grid gap-2 text-sm font-bold text-cmr-ink"
              >
                {label}

                <textarea
                  rows={label.length > 12 ? 3 : 1}
                  className="rounded-2xl border border-cmr-line bg-white p-4 font-normal outline-none focus:border-cmr-green"
                />
              </label>
            ))}

            <div className="rounded-3xl border border-cmr-line bg-cmr-light p-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="aceptaPrivacidad"
                  required
                  className="mt-1 h-5 w-5 shrink-0 accent-cmr-green"
                />

                <span className="text-sm font-normal leading-7 text-cmr-muted">
                  He leído y acepto la{' '}
                  <Link
                    to="/politica-privacidad"
                    target="_blank"
                    className="font-bold text-cmr-green underline decoration-cmr-green/30 underline-offset-4"
                  >
                    Política de privacidad
                  </Link>
                  . Mis datos se utilizarán para revisar la solicitud y contactar
                  conmigo en relación con la Mentoría PEV.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary"
            >
              Enviar solicitud
            </button>

            <p className="text-xs leading-6 text-cmr-muted">
              Este formulario todavía es una maqueta. Más adelante lo conectaremos
              con Comudia y con el sistema de envío correspondiente.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}