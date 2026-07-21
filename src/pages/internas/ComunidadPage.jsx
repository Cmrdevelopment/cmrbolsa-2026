import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  UsersRound,
  Video,
} from 'lucide-react'
import Placeholder from '../../components/Placeholder'
import { siteConfig } from '../../data/siteConfig'

const includes = [
  'Más de 200 vídeos organizados por niveles',
  'Reuniones semanales conmigo en directo',
  'sala de trading escrita para comentar el mercado',
  'Formación prevista para 16-18 meses',
  'Retos, ejercicios, ejemplos y análisis',
  'Sin permanencia: entras y sales cuando quieras',
]

const steps = [
  {
    title: 'Ves la formación',
    text: 'Vídeos organizados para avanzar paso a paso, sin saltar de un sitio a otro sin orden.',
    icon: Video,
  },
  {
    title: 'Vienes a las reuniones',
    text: 'Cada semana resolvemos dudas, vemos mercado y aterrizamos la metodología PEV.',
    icon: UsersRound,
  },
  {
    title: 'Sigues la sala de trading',
    text: 'Zonas, contexto, escenarios, imágenes y razonamiento. No es copiar señales.',
    icon: MessageSquareText,
  },
  {
    title: 'Vas construyendo criterio',
    text: 'La idea no es que dependas de mí, sino que aprendas a entender qué estás viendo.',
    icon: ShieldCheck,
  },
]

const faqs = [
  {
    question: '¿La Comunidad PEV es una sala de señales?',
    answer:
      'No. La sala de trading escrita sirve para entender contexto, zonas, escenarios y razonamiento. Puede haber operaciones, pero el objetivo no es copiar entradas.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer:
      'Sí. No hay permanencia. Entras, pruebas, aprendes y sigues solo si realmente te aporta.',
  },
  {
    question: '¿Por dónde empieza la formación?',
    answer:
      'La base empieza en el intradía, porque ahí se repiten los movimientos con más frecuencia. Después esa misma lógica se puede trasladar a swing, corto, medio y largo plazo.',
  },
  {
    question: '¿La sala de trading se puede ver en diferido?',
    answer:
      'Sí. Si no puedes estar en directo, puedes revisar comentarios, imágenes, contexto y evolución del mercado después.',
  },
]

export default function ComunidadPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial pt-[142px] pb-20 text-white sm:pb-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">Comunidad PEV</span>

            <h1 className="hero-text-balance mt-7 font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Comunidad Trading PEV de CMRBolsa
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/76">
              La puerta de entrada para aprender cómo trabajamos el mercado por dentro:
              vídeos, reuniones semanales, sala de trading escrita, contexto, imágenes, dudas,
              ejercicios y participación.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.urls.comunidadCheckout} className="btn-primary">
                Entrar en Comunidad
                <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#que-incluye" className="btn-secondary-dark">
                Ver qué incluye
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 text-center grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-2xl font-black text-white">
                  Varios planes
                </p>
                <p className="mt-1 text-sm text-white/62">
                  según el apoyo que necesites
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">0</p>
                <p className="mt-1 text-sm text-white/62">
                  permanencia
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">PEV</p>
                <p className="mt-1 text-sm text-white/62">
                  precio, estructura y volumen
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-darkGlow backdrop-blur">
              <Placeholder
                label="COMUNIDAD_VIDEO_URL"
                type="video"
                className="min-h-[360px] border-cmr-green/25 bg-cmr-dark3"
              />

              <div className="mt-5 rounded-3xl bg-cmr-dark/90 p-5">
                <div className="flex items-start gap-3">
                  <PlayCircle className="mt-1 h-6 w-6 shrink-0 text-cmr-green" />
                  <div>
                    <p className="font-display text-xl font-black text-white">
                      Mira primero cómo funciona
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Aquí irá el vídeo principal de la Comunidad PEV. Después añadiremos
                      capturas reales de sala, reuniones y ejemplos de mercado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="que-incluye" className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Qué incluye</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              No entras a mirar señales. Entras a entender el mercado.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              La Comunidad PEV combina formación, reuniones, sala de trading escrita y seguimiento
              de mercado para que no aprendas de forma desordenada ni dependas de una
              operación puntual.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                La base empieza en el intradía.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted">
                Ahí se repiten los movimientos cada día y puedes avanzar con más claridad.
                Después esa misma lógica se puede trasladar a swing, corto, medio y largo plazo:
                cambia la velocidad, no la estructura.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-cmr-line bg-white p-5 shadow-[0_12px_40px_rgba(20,32,29,0.06)]"
              >
                <CheckCircle2 className="h-5 w-5 text-cmr-green" />
                <p className="mt-4 font-bold leading-7 text-cmr-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Cómo funciona</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Una forma de avanzar sin ir dando bandazos
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              La idea es que tengas una estructura clara: formación, reuniones,
              sala de trading escrita y práctica. No una montaña de contenido sin saber por dónde empezar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div key={step.title} className="card-light p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-display text-4xl font-black text-cmr-green/18">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-cmr-muted">
                    {step.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cmr-dark py-20 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">sala de trading escrita</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Mercado en directo, pero con contexto
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/72">
              La sala de trading escrita no está pensada para que copies una entrada. Está pensada
              para que veas qué zona importa, qué escenario se está formando y cuándo lo
              mejor es no tocar nada.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Zonas y contexto',
                'Imágenes de mercado',
                'Comentarios escritos',
                'Participación de alumnos',
                'Revisión en diferido',
                'Errores y stops también',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-cmr-green" />
                  <span className="font-semibold text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-darkGlow">
            <div className="rounded-[1.5rem] bg-cmr-dark p-6">
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <MessageSquareText className="h-6 w-6 text-cmr-green" />
                <div>
                  <p className="font-display text-xl font-black">Ejemplo de sala de trading</p>
                  <p className="text-sm text-white/55">
                    Luego sustituimos esto por capturas reales.
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-sm leading-7 text-white/76">
                <p>Ojo aquí, todavía no es entrada. Primero estructura.</p>
                <p>Si rompe sin volumen, no me interesa perseguirla.</p>
                <p>Stop asumido. Una operación más de las próximas 20.000.</p>
                <p>Esto es lo que quiero que veáis: contexto antes que impulso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <span className="eyebrow">Planes de Comunidad</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Elige el apoyo que necesitas
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-cmr-muted">
              No todo el mundo necesita lo mismo. Por eso tienes distintos planes
              para entrar en la Comunidad, según la formación, el seguimiento y el
              apoyo que quieras tener.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-cmr-muted">
              En Comudia puedes ver qué incluye cada uno, compararlos tranquilamente
              y elegir el que mejor encaje contigo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="card-light p-5">
                <Clock3 className="h-6 w-6 text-cmr-green" />

                <p className="mt-4 font-bold text-cmr-ink">
                  Sin permanencia
                </p>

                <p className="mt-2 text-sm leading-6 text-cmr-muted">
                  Puedes cancelar cuando quieras.
                </p>
              </div>

              <div className="card-light p-5">
                <UsersRound className="h-6 w-6 text-cmr-green" />

                <p className="mt-4 font-bold text-cmr-ink">
                  Distintos planes
                </p>

                <p className="mt-2 text-sm leading-6 text-cmr-muted">
                  Elige según el apoyo que quieras tener.
                </p>
              </div>

              <div className="card-light p-5">
                <ShieldCheck className="h-6 w-6 text-cmr-green" />

                <p className="mt-4 font-bold text-cmr-ink">
                  Todo claro antes de entrar
                </p>

                <p className="mt-2 text-sm leading-6 text-cmr-muted">
                  Puedes comparar qué incluye cada plan.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cmr-line bg-white p-7 shadow-soft">
            <span className="inline-flex items-center rounded-full border border-cmr-green/25 bg-cmr-green/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-cmr-green">
              Planes disponibles
            </span>

            <h3 className="mt-6 font-display text-3xl font-black leading-tight text-cmr-ink">
              Entra en la Comunidad a tu manera
            </h3>

            <p className="mt-5 leading-7 text-cmr-muted">
              Puedes empezar con una opción más sencilla o elegir un plan con más
              formación, seguimiento y acceso, dependiendo de lo que estés buscando.
            </p>

            <p className="mt-4 leading-7 text-cmr-muted">
              Los precios y las condiciones actualizadas los encontrarás siempre
              en Comudia.
            </p>

            <a
              href={siteConfig.urls.comunidadCheckout}
              className="btn-primary mt-7 w-full justify-center"
              target="_blank"
              rel="noreferrer"
            >
              Ver planes de Comunidad
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-cmr-muted">
              Compara los planes y elige el que mejor encaje contigo
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Preguntas frecuentes</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] text-cmr-ink sm:text-5xl">
              Antes de entrar, conviene tener esto claro
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-light p-6">
                <h3 className="font-display text-xl font-black tracking-[-0.02em] text-cmr-ink">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-cmr-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-dark">Comunidad PEV</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Si quieres mirar el mercado con más orden, empieza por aquí.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Entras, ves cómo trabajamos, preguntas, revisas en diferido y decides
              si esta forma de aprender trading encaja contigo.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={siteConfig.urls.comunidadCheckout} className="btn-primary">
                Entrar en Comunidad
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link to="/#comunidad" className="btn-secondary-dark">
                Volver a la Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}