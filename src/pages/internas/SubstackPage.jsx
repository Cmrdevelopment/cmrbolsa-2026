import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  LineChart,
  Mail,
  Newspaper,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import Placeholder from '../../components/Placeholder'
import { siteConfig } from '../../data/siteConfig'

const SUBSTACK_URL = 'https://cmrbolsa.substack.com/'

const bloques = [
  {
    title: 'Análisis Generales',
    text: 'Lecturas de mercado para entender contexto, zonas, estructura y posibles escenarios.',
    icon: LineChart,
  },
  {
    title: 'Ideas de inversión',
    text: 'Contenido para mirar el mercado más allá del ruido diario y ordenar posibles oportunidades.',
    icon: TrendingUp,
  },
  {
    title: 'Desgranando la esencia del mercado',
    text: 'La parte más didáctica: conceptos, reflexiones y forma de mirar el precio con PEV.',
    icon: BookOpen,
  },
  {
    title: 'Top artículos gratis',
    text: 'Una buena puerta de entrada para leer antes de entrar en Comunidad o Mentoría.',
    icon: FileText,
  },
]

const razones = [
  'Para ver cómo explico mercado antes de entrar en Comunidad.',
  'Para entender por qué no trabajo desde señales mágicas.',
  'Para leer análisis de SP500, Bitcoin y otros mercados con contexto.',
  'Para comprobar si mi forma de mirar el precio encaja contigo.',
  'Para empezar gratis antes de dar un paso más serio.',
  'Para conectar análisis, paciencia, disciplina y estructura.',
]

const temas = [
  'SP500 en zonas críticas',
  'Bitcoin y posibles engaños del profesional',
  'Disciplina y paciencia',
  'Correcciones, trampas y continuidad',
  'Precio, Estructura y Volumen',
  'Intradía, swing, corto, medio y largo plazo',
]

export default function SubstackPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial pt-[142px] pb-20 text-white sm:pb-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">El Informe de CMRBolsa</span>

            <h1 className="hero-text-balance mt-7 font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Lee cómo miro el mercado antes de entrar.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/76">
              Substack es la forma más tranquila de conocer CMRBolsa: análisis,
              ideas de mercado, reflexiones y contenido basado en Precio, Estructura
              y Volumen. Sin prisa, sin señales mágicas y sin tener que pagar antes de entender.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Ir a Substack
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link to="/comunidad-pev" className="btn-secondary-dark">
                Ver Comunidad PEV
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 text-center grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">PEV</p>
                <p className="mt-1 text-sm text-white/62">precio, estructura y volumen</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">Gratis</p>
                <p className="mt-1 text-sm text-white/62">para empezar leyendo</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">Mercado</p>
                <p className="mt-1 text-sm text-white/62">sin ruido ni humo</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-darkGlow backdrop-blur">
              <Placeholder
                label="SUBSTACK_SCREENSHOT_URL"
                type="image"
                className="min-h-[420px] border-cmr-green/25 bg-cmr-dark3"
              />

              <div className="mt-5 rounded-3xl bg-cmr-dark/90 p-5">
                <div className="flex items-start gap-3">
                  <Newspaper className="mt-1 h-6 w-6 shrink-0 text-cmr-green" />
                  <div>
                    <p className="font-display text-xl font-black text-white">
                      El Informe de CMRBolsa
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Análisis, ideas y reflexiones para entender cómo miro el mercado antes de entrar en una formación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-14 -left-5 hidden rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft lg:block">
              <p className="font-display text-xl font-black text-cmr-ink">
                Primero lee.
              </p>
              <p className="mt-1 text-sm text-cmr-muted">
                Luego decides si quieres dar el paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Qué encontrarás</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Una forma de seguir el mercado con más orden.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              No escribo para llenar contenido. Escribo para ordenar ideas,
              marcar zonas, explicar contexto y dejar claro qué estoy viendo en el mercado.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {bloques.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="card-light p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-cmr-muted">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Para quién es</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Si todavía no quieres entrar, empieza por leer.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              No todo el mundo tiene que entrar en Comunidad al primer clic.
              A veces tiene mucho más sentido leer, mirar cómo explico y comprobar
              si mi forma de trabajar el mercado encaja contigo.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                Substack es el paso más suave.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted">
                Lees análisis, entiendes el tono, ves cómo uso PEV y decides después.
                Sin presión y sin que nadie te venda una moto.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {razones.map((item) => (
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

      <section className="bg-cmr-dark py-20 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-start">
          <div>
            <span className="eyebrow-dark">Temas habituales</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Mercado, estructura, paciencia y alguna colleja necesaria.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/72">
              En Substack hay análisis de mercado, pero también reflexiones sobre
              disciplina, paciencia, trampas, correcciones y esas zonas donde el gráfico
              parece fácil justo antes de complicarse.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Leer en Substack
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link to="/desgranando-la-esencia-del-mercado" className="btn-secondary-dark">
                Ver el libro
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {temas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-cmr-green" />
                <p className="mt-4 font-semibold leading-7 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Placeholder
              label="SUBSTACK_ARTICLES_SCREENSHOT_URL"
              type="image"
              className="min-h-[420px] bg-white"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/92 p-5 shadow-soft backdrop-blur">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="text-sm font-semibold leading-6 text-cmr-muted">
                  Aquí podemos poner una captura real del Substack o de tus artículos destacados.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">De leer a entrar</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Leer está bien. Pero llega un momento en el que toca practicar.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              Substack te ayuda a conocer cómo pienso el mercado. La Comunidad PEV
              es el siguiente paso si quieres ver la metodología por dentro, hacer preguntas,
              seguir sala escrita y avanzar con una estructura.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  Substack para leer y entender cómo miro el mercado.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  Comunidad para aprender con vídeos, reuniones y sala escrita.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <LineChart className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  Mentoría si quieres corrección directa y proceso más intenso.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/comunidad-pev" className="btn-primary">
                Ver Comunidad PEV
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/por-donde-empezar" className="btn-secondary-light">
                Hacer mini test
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-dark">Substack</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Empieza leyendo. Sin prisa y sin que nadie te empuje.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Si después de leer ves que esta forma de mirar el mercado conecta contigo,
              entonces tendrá más sentido dar el paso a Comunidad o Mentoría.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Ir a Substack
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link to="/#inicio" className="btn-secondary-dark">
                Volver a la Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}