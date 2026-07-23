import { Link } from 'react-router-dom'

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Monitor,
  UsersRound,
} from 'lucide-react'

import PageHero from '../../components/PageHero'

const EVENTO_IMAGE_URL =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1784812304/cmrbolsa/Seminario_Alicante_2025_cmrbolsa_reduced_u6inl5.png'

const tiposEvento = [
  {
    titulo: 'Encuentros presenciales',
    texto:
      'Jornadas y encuentros para trabajar mercado, resolver dudas y conocer a otros alumnos fuera de la pantalla.',
    icono: MapPin,
  },
  {
    titulo: 'Sesiones online',
    texto:
      'Talleres y sesiones especiales para profundizar en partes concretas del método PEV.',
    icono: Monitor,
  },
  {
    titulo: 'Eventos con alumnos',
    texto:
      'Espacios para compartir experiencias, operativa, errores y aprendizaje con personas que recorren un camino parecido.',
    icono: UsersRound,
  },
]

export default function EventosPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Eventos CMRBolsa"
        title="También hemos salido del gráfico"
        text="Talleres, encuentros y sesiones online para trabajar el mercado, resolver dudas y compartir experiencias con otros alumnos."
        primaryLabel="Ver eventos realizados"
        primaryTo="#eventos-realizados"
        secondaryLabel="Volver al inicio"
        secondaryTo="/"
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Mucho más que una pantalla
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              El trading también se aprende hablando, preguntando y compartiendo
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              No todos los eventos serán iguales. Algunos serán presenciales,
              otros online y otros estarán pensados específicamente para los
              alumnos de la Comunidad y la Mentoría PEV.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiposEvento.map((evento) => {
              const Icono = evento.icono

              return (
                <article
                  key={evento.titulo}
                  className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cmr-green/35 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)] dark:hover:border-cmr-green/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                    <Icono
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                    {evento.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.66]">
                    {evento.texto}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="eventos-realizados"
        className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3"
      >
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.07] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-cmr-green/[0.14] blur-3xl dark:bg-cmr-green/[0.18]" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-cmr-line bg-white p-3 shadow-[0_24px_75px_rgba(20,32,29,0.14)] transition-colors duration-300 dark:border-white/[0.16] dark:bg-white/[0.08] dark:shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <img
                src={EVENTO_IMAGE_URL}
                alt="Seminario presencial de CMRBolsa en Alicante"
                loading="lazy"
                className="aspect-[16/10] w-full rounded-[1.75rem] object-cover object-center"
              />

              <div className="absolute bottom-6 left-6 rounded-full border border-white/[0.22] bg-cmr-dark/[0.78] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur">
                Alicante 2025
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Eventos realizados
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Mercado, aprendizaje y comunidad en el mismo sitio
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Aquí iremos reuniendo fotografías, vídeos y recuerdos de los
              encuentros realizados por CMRBolsa.
            </p>

            <p className="mt-5 leading-7 text-cmr-muted dark:text-white/[0.64]">
              No se trata únicamente de escuchar una explicación. La idea es
              trabajar situaciones reales, plantear dudas y compartir el proceso
              con otras personas.
            </p>
          </div>
        </div>
      </section>

      <section
        id="avisarme"
        className="bg-cmr-dark py-20 text-white dark:bg-[#061613]"
      >
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] border border-white/[0.14] bg-white/[0.07] p-7 shadow-darkGlow backdrop-blur sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <CalendarDays className="h-7 w-7 text-[#79CFC4]" />

                <span className="eyebrow-dark">
                  Próximos eventos
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                Cuando haya una nueva fecha, aparecerá aquí
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.70]">
                También compartiré las novedades en Substack y dentro de la
                Comunidad PEV.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/substack"
                className="btn-primary"
              >
                Ver Substack

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/comunidad-pev"
                className="btn-secondary-dark"
              >
                Ver Comunidad PEV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}