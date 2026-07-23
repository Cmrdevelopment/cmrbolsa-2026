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
import PageHero from '../../components/PageHero'

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
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="El Informe de CMRBolsa"
        title="Lee cómo miro el mercado antes de entrar."
        text="Substack es una buena forma de conocer CMRBolsa: análisis, ideas de mercado, reflexiones y contenido basado en Precio, Estructura y Volumen. Sin prisas y sin señales mágicas."
        primaryLabel="Ir a Substack"
        primaryTo={SUBSTACK_URL}
        secondaryLabel="Ver Comunidad PEV"
        secondaryTo="/comunidad-pev"
        contenidoLateral={
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-cmr-green/[0.20] blur-3xl" />

            <div className="pointer-events-none absolute -bottom-12 -right-10 h-56 w-56 rounded-full bg-cmr-gold/[0.14] blur-[70px]" />

            <div className="relative rounded-[2.5rem] border border-white/[0.16] bg-white/[0.10] p-5 shadow-darkGlow backdrop-blur-xl">
              <Placeholder
                label="SUBSTACK_SCREENSHOT_URL"
                type="image"
                className="min-h-[320px] border-cmr-green/25 bg-cmr-dark3 sm:min-h-[360px]"
              />

              <div className="mt-5 rounded-[1.75rem] border border-white/[0.12] bg-black/[0.18] p-5">
                <div className="flex items-start gap-3">
                  <Newspaper className="mt-1 h-6 w-6 shrink-0 text-[#79CFC4]" />

                  <div>
                    <p className="font-display text-xl font-black text-white">
                      El Informe de CMRBolsa
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                      Análisis, ideas y reflexiones para entender cómo miro el
                      mercado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-cmr-green/[0.35] bg-cmr-green/[0.14] p-4">
                  <p className="font-display text-xl font-black text-[#91DDD3]">
                    PEV
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.60]">
                    Precio, estructura y volumen
                  </p>
                </div>

                <div className="rounded-2xl border border-cmr-gold/[0.38] bg-cmr-gold/[0.13] p-4">
                  <p className="font-display text-xl font-black text-cmr-gold">
                    Gratis
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.60]">
                    Para empezar leyendo
                  </p>
                </div>

                <div className="rounded-2xl border border-[#6EB6C7]/35 bg-[#6EB6C7]/[0.12] p-4">
                  <p className="font-display text-xl font-black text-[#9AD7E3]">
                    Mercado
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.60]">
                    Sin ruido ni humo
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-12 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              Qué encontrarás
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Una forma de seguir el mercado con más orden.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              No escribo para llenar contenido. Escribo para ordenar ideas,
              marcar zonas, explicar contexto y dejar claro qué estoy viendo en
              el mercado.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {bloques.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-cmr-muted dark:text-white/[0.66]">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.06] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">
              Para quién es
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Si todavía no quieres entrar, empieza por leer.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              No todo el mundo tiene que entrar en Comunidad al primer clic. A
              veces tiene mucho más sentido leer, mirar cómo explico y comprobar
              si mi forma de trabajar el mercado encaja contigo.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-white/[0.06] dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                Substack es el paso más suave.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.66]">
                Lees análisis, entiendes el tono, ves cómo uso PEV y decides
                después. Sin presión y sin que nadie te venda una moto.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {razones.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-cmr-line bg-white p-5 shadow-[0_12px_40px_rgba(20,32,29,0.06)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
              >
                <CheckCircle2 className="h-5 w-5 text-cmr-green dark:text-[#79CFC4]" />

                <p className="mt-4 font-bold leading-7 text-cmr-ink dark:text-white/[0.88]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cmr-dark py-20 text-white dark:bg-[#061613]">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-start">
          <div>
            <span className="eyebrow-dark">
              Temas habituales
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Mercado, estructura, paciencia y alguna colleja necesaria.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/[0.72]">
              En Substack hay análisis de mercado, pero también reflexiones
              sobre disciplina, paciencia, trampas, correcciones y esas zonas
              donde el gráfico parece fácil justo antes de complicarse.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Leer en Substack

                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/desgranando-la-esencia-del-mercado"
                className="btn-secondary-dark"
              >
                Ver el libro
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {temas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-4 font-semibold leading-7 text-white/[0.82]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-20 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Placeholder
              label="SUBSTACK_ARTICLES_SCREENSHOT_URL"
              type="image"
              className="min-h-[420px] bg-white dark:border-white/[0.14] dark:bg-cmr-dark3"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/[0.94] p-5 shadow-soft backdrop-blur transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3/[0.94] dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="text-sm font-semibold leading-6 text-cmr-muted dark:text-white/[0.66]">
                  Aquí podemos poner una captura real del Substack o de tus
                  artículos destacados.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              De leer a entrar
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Leer está bien. Pero llega un momento en el que toca practicar.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Substack te ayuda a conocer cómo pienso el mercado. La Comunidad
              PEV es el siguiente paso si quieres ver la metodología por dentro,
              hacer preguntas, seguir la sala escrita y avanzar con una
              estructura.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  Substack para leer y entender cómo miro el mercado.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  Comunidad para aprender con vídeos, reuniones y sala escrita.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                <LineChart className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  Mentoría si quieres corrección directa y un proceso más
                  intenso.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/comunidad-pev"
                className="btn-primary"
              >
                Ver Comunidad PEV

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/por-donde-empezar"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cmr-line bg-white px-6 py-3 text-sm font-extrabold text-cmr-ink shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/40 hover:text-cmr-green dark:border-white/[0.16] dark:bg-white/[0.08] dark:text-white dark:hover:border-cmr-green/45 dark:hover:bg-white/[0.12] dark:hover:text-[#79CFC4]"
              >
                Hacer mini test
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white dark:bg-[#061613]">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-dark">
              Substack
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Empieza leyendo. Sin prisa y sin que nadie te empuje.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.72]">
              Si después de leer ves que esta forma de mirar el mercado conecta
              contigo, entonces tendrá más sentido dar el paso a Comunidad o
              Mentoría.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Ir a Substack

                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/#inicio"
                className="btn-secondary-dark"
              >
                Volver a la Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}