import {
  AlertTriangle,
  ExternalLink,
  FileWarning,
  Quote,
  ShieldAlert,
} from 'lucide-react'

const NINJATRADER_RIESGOS_URL =
  'https://ninjatrader.com/es-es/risk-disclosure-clearing/'

const apartados = [
  {
    title: 'Declaración de riesgo',
    icon: ShieldAlert,
    paragraphs: [
      'La operación de futuros y forex conlleva riesgos sustanciales y no es adecuada para todos los inversores. Un inversor podría perder potencialmente toda o más de la inversión inicial.',
      'Capital de riesgo es aquel dinero que puede perderse sin poner en peligro la seguridad financiera o el estilo de vida de la persona. Solo debe utilizarse capital de riesgo para hacer trading, y únicamente las personas que dispongan de suficiente capital de riesgo deberían considerar esta actividad.',
      'Los resultados pasados no son necesariamente indicativos de resultados futuros.',
    ],
  },
  {
    title:
      'Declaración de resultados hipotéticos',
    icon: FileWarning,
    paragraphs: [
      'Los resultados hipotéticos de rendimiento tienen numerosas limitaciones inherentes. No debe interpretarse que ninguna cuenta vaya a obtener, o tenga probabilidades de obtener, resultados similares a los mostrados. De hecho, existen con frecuencia diferencias importantes entre los resultados hipotéticos y los resultados reales obtenidos por cualquier programa de trading.',
      'Una de las limitaciones de los resultados hipotéticos es que se preparan con el beneficio de la retrospectiva. Además, el trading hipotético no implica riesgo financiero y ningún registro hipotético puede reflejar completamente el impacto del riesgo financiero en operaciones reales.',
      'Por ejemplo, la capacidad de soportar pérdidas o de seguir un programa de trading concreto a pesar de ellas son factores materiales que pueden afectar sustancialmente a los resultados reales.',
      'Existen numerosos factores relacionados con los mercados en general o con la aplicación de cualquier programa de trading específico que no pueden considerarse por completo al preparar resultados hipotéticos y que pueden afectar negativamente a los resultados reales.',
    ],
  },
  {
    title: 'Testimonios',
    icon: Quote,
    paragraphs: [
      'Los testimonios que aparecen en este sitio web pueden no ser representativos de la experiencia de todos los clientes y no constituyen una garantía de rendimiento o éxito futuro.',
    ],
  },
]

export default function DeclaracionRiesgosNinjaPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-400/[0.12] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cmr-green/[0.16] blur-3xl" />

        <div className="section-shell relative">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-300/25 bg-red-300/[0.10] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
              <AlertTriangle
                className="h-4 w-4"
                aria-hidden="true"
              />

              Información importante
            </span>

            <h1 className="mt-7 font-display text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              Declaración de riesgos de futuros
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.74]">
              Antes de operar con futuros, forex u otros productos apalancados,
              es importante comprender que las pérdidas pueden ser
              sustanciales.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-gold/30 bg-cmr-gold/[0.10] p-6">
              <p className="font-display text-2xl font-black text-white">
                Operar puede implicar la pérdida de todo o más del capital
                inicialmente invertido.
              </p>

              <p className="mt-3 leading-7 text-white/[0.70]">
                Debes valorar cuidadosamente si este tipo de operativa es
                adecuada para ti según tus circunstancias, experiencia y
                recursos financieros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
              <p className="text-lg leading-8 text-cmr-muted dark:text-white/[0.70]">
                El riesgo de pérdida en la negociación de contratos de futuros
                sobre materias primas puede ser sustancial. Por tanto, debes
                considerar cuidadosamente si dicha negociación es adecuada para
                ti teniendo en cuenta tus circunstancias y recursos
                financieros.
              </p>
            </div>

            <div className="mt-8 grid gap-6">
              {apartados.map(
                (apartado) => {
                  const Icon =
                    apartado.icon

                  return (
                    <article
                      key={
                        apartado.title
                      }
                      className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                          <Icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white sm:text-3xl">
                            {apartado.title}
                          </h2>

                          <div className="mt-5 space-y-5">
                            {apartado.paragraphs.map(
                              (
                                paragraph,
                                index
                              ) => (
                                <p
                                  key={`${apartado.title}-${index}`}
                                  className="leading-8 text-cmr-muted dark:text-white/[0.68]"
                                >
                                  {paragraph}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                }
              )}
            </div>

            <div className="mt-10 rounded-[2rem] border border-cmr-green/30 bg-cmr-greenSoft p-7 transition-colors duration-300 dark:bg-cmr-green/[0.10] sm:p-8">
              <h2 className="font-display text-2xl font-black text-cmr-ink dark:text-white sm:text-3xl">
                Consulta la declaración oficial de NinjaTrader
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-cmr-muted dark:text-white/[0.68]">
                Puedes ampliar esta información consultando directamente la
                declaración de riesgos y documentación oficial publicada por
                NinjaTrader.
              </p>

              <a
                href={
                  NINJATRADER_RIESGOS_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Ver declaración de NinjaTrader

                <ExternalLink
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>
            </div>

            <p className="mt-8 text-center text-sm leading-6 text-cmr-muted dark:text-white/[0.52]">
              Esta información tiene carácter general y no constituye
              asesoramiento financiero, de inversión, fiscal o legal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}