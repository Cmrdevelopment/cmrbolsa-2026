import PageHero from '../components/PageHero'

export default function SolicitudMentoria() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero eyebrow="Solicitud" title="Solicitud para Mentoría PEV" text="No es compra directa. La idea es entender dónde estás, si tiene sentido y si encaja por ambas partes." primaryLabel="Volver a inicio" primaryTo="/" />
      <section className="py-20">
        <div className="section-shell max-w-3xl">
          <form className="card-light grid gap-5 p-8">
            {['Nombre', 'Email', 'Teléfono', 'Experiencia en trading', 'Qué has probado antes', 'Qué problema quieres resolver', 'Tiempo real disponible', 'Por qué quieres entrar'].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-bold text-cmr-ink">{label}<textarea rows={label.length > 12 ? 3 : 1} className="rounded-2xl border border-cmr-line bg-white p-4 font-normal outline-none focus:border-cmr-green" /></label>
            ))}
            <button type="button" className="btn-primary">Enviar solicitud</button>
            <p className="text-xs leading-6 text-cmr-muted">Formulario visual de maqueta. Después conectamos con backend, Comudia, email o la herramienta que decidas.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
