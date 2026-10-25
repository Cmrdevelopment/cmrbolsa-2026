
import { Link } from 'react-router-dom'

import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  Images,
  MessageSquareText,
} from 'lucide-react'

import PageHero from '../../components/PageHero'
import BunnyVideo from '../../components/media/BunnyVideo'

const ventajasSala = [
  {
    titulo: 'Mercado explicado por escrito',
    texto:
      'Durante los días de mercado compartimos zonas, escenarios, imágenes y comentarios para entender qué estamos mirando y por qué puede ser importante.',
    icono: MessageSquareText,
  },
  {
    titulo: 'Imágenes y gráficos reales',
    texto:
      'No se trata solo de decir qué ocurre. Se muestran gráficos para que puedas seguir el razonamiento y aprender a plantear tus propias hipótesis.',
    icono: Images,
  },
  {
    titulo: 'Puedes revisarlo después',
    texto:
      'Si no puedes seguir el mercado en ese momento, puedes volver más tarde y revisar cómo se desarrollaron los escenarios que habíamos planteado.',
    icono: Clock,
  },
]

const puntosSala = [
  'Análisis escritos durante los días de mercado',
  'Imágenes y gráficos con contexto',
  'Hipótesis antes de que ocurra el movimiento',
  'Operaciones comentadas con su razonamiento, no señales',
  'Stops, errores y operaciones que no funcionan',
  'Participación y preguntas de los alumnos',
]

export default function SalaEscritaPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Sala escrita"
        title="Mercado en directo, pero por escrito y con contexto"
        text="Durante los días de mercado compartimos análisis, gráficos, zonas y escenarios. No es una sala para copiar señales. Es un espacio para aprender a interpretar el mercado, entender las decisiones y saber cuándo es mejor no operar."
        primaryLabel="Ver Comunidad PEV"
        primaryTo="/comunidad-pev"
        secondaryLabel="Volver al inicio"
        secondaryTo="/"
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-20 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-cmr-green/[0.12] blur-3xl dark:bg-cmr-green/[0.18]" />

            <BunnyVideo
              libraryId="710893"
              videoId="145644e2-ffd1-446d-bfaf-b268702e0525"
              title="Presentación de la sala de trading escrita"
              posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1785171841/cmrbolsa/sala_de_trading_Escrita_reduced_hb3kbu.png"
              className="relative border border-cmr-green/25"
              cargaAlPulsar
            />

            <div className="relative mt-5 rounded-3xl border border-cmr-line bg-white p-5 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="flex items-start gap-3">
                <Eye className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="text-sm font-semibold leading-6 text-cmr-muted dark:text-white/[0.68]">
                  No vengas a copiar entradas. Ven a entender por qué
                  hacemos algo y, especialmente, por qué otras veces
                  decidimos no hacer absolutamente nada.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Cómo funciona
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Lo importante no es saber dónde entro yo, sino entender
              qué estoy viendo
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Durante los días de mercado comparto zonas, imágenes,
              posibilidades y razonamientos basados en el precio,
              la estructura y el volumen.
            </p>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Planteamos hipótesis sobre lo que puede ocurrir y
              observamos cómo responde el mercado. Algunas veces
              habrá una operación y otras veces lo correcto será
              quedarnos fuera.
            </p>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              También se muestran errores, stops y operaciones que
              no salen bien. Porque aprender trading no consiste
              en enseñar únicamente lo bonito, sino en comprender
              todo lo que sucede.
            </p>

            <div className="mt-8 grid gap-3">
              {puntosSala.map((punto) => (
                <div
                  key={punto}
                  className="flex items-center gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                  <span className="font-semibold leading-6 text-cmr-ink dark:text-white/[0.86]">
                    {punto}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.07] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Una sala diferente
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Menos ruido, más contexto
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              La sala escrita complementa la clase online semanal
              de la Comunidad PEV. En clase profundizamos en la
              metodología, resolvemos dudas y corregimos gráficos
              y ejercicios. Durante los días de mercado, seguimos
              aplicando esos conocimientos en la sala escrita.
            </p>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              La sala no sustituye el estudio ni la práctica personal.
              Te ayuda a comprobar cómo se comporta el mercado y a
              desarrollar tu propia capacidad de análisis.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ventajasSala.map((ventaja) => {
              const Icono = ventaja.icono

              return (
                <article
                  key={ventaja.titulo}
                  className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cmr-green/35 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)] dark:hover:border-cmr-green/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                    <Icono
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                    {ventaja.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.66]">
                    {ventaja.texto}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cmr-dark py-20 text-white dark:bg-[#061613]">
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] border border-white/[0.14] bg-white/[0.07] p-7 shadow-darkGlow backdrop-blur sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow-dark">
                Comunidad PEV
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                Una clase semanal en directo y una sala escrita
                para seguir el mercado cada día
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.70]">
                Dentro de la Comunidad PEV tienes una clase online
                semanal en directo conmigo para profundizar en la
                metodología, resolver dudas y corregir gráficos y
                ejercicios. Durante los días de mercado analizamos
                lo que sucede en esta sala escrita.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/[0.70]">
                Además, dispones de más de 200 vídeos organizados
                para preparar las clases y repasar lo aprendido.
                Son un recurso de apoyo: lo importante es aprender
                a interpretar el mercado y desarrollar tu criterio.
              </p>
            </div>

            <Link
              to="/comunidad-pev"
              className="btn-primary"
            >
              Ver Comunidad PEV

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
