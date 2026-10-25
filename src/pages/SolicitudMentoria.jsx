
import { Link, useSearchParams } from 'react-router-dom'

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  UsersRound,
} from 'lucide-react'

import PageHero from '../components/PageHero'

const COMUDIA_MENTORIA_URL =
  'https://www.comudia.com/c/mentoria-pev-de-cmrbolsa'

const COMUDIA_CITA_PREMIUM_URL =
  'https://www.comudia.com/reservar/sesion-estrategica-mentoria-pev-92df06'

function MensajeConfirmacion() {
  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-cmr-green/25 bg-white p-8 text-center shadow-soft transition-colors duration-300 dark:border-cmr-green/35 dark:bg-cmr-dark3 sm:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cmr-green/10 text-3xl text-cmr-green dark:bg-cmr-green/20 dark:text-[#79CFC4]">
        ✓
      </div>

      <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-cmr-green dark:text-[#79CFC4]">
        Confirmación completada
      </p>

      <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-4xl">
        Tu interés en la Mentoría PEV ha quedado confirmado
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-cmr-muted dark:text-white/[0.68]">
        Gracias por confirmar tu interés. Ya puedes consultar
        las modalidades disponibles de la Mentoría PEV y
        elegir la que mejor encaje contigo.
      </p>

      <a
        href={COMUDIA_MENTORIA_URL}
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-8 inline-flex"
      >
        Ver modalidades de Mentoría

        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}

export default function SolicitudMentoria() {
  const [parametrosBusqueda] = useSearchParams()

  const confirmacionCompletada =
    parametrosBusqueda.get('confirmado') === '1'

  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Mentoría PEV"
        title={
          confirmacionCompletada
            ? 'Tu interés ha quedado confirmado'
            : 'Elige cómo quieres aprender con la Mentoría PEV'
        }
        text={
          confirmacionCompletada
            ? 'Gracias por tu interés. Consulta las modalidades disponibles y descubre cómo puedes participar.'
            : 'Tanto si empiezas desde cero como si ya tienes experiencia, puedes aprender la metodología PEV con dos clases semanales en directo, ejercicios, correcciones y sala de trading. Elige la modalidad de formación y acompañamiento que mejor encaje contigo.'
        }
        primaryLabel="Ver modalidades de Mentoría"
        primaryTo={COMUDIA_MENTORIA_URL}
        secondaryLabel="Conocer la Mentoría PEV"
        secondaryTo="/mentoria-pev"
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-20 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-80 w-80 rounded-full bg-cmr-gold/[0.05] blur-3xl dark:block" />

        <div className="section-shell relative">
          {confirmacionCompletada ? (
            <MensajeConfirmacion />
          ) : (
            <>
              <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow">
                  Modalidades de Mentoría PEV
                </span>

                <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
                  La misma metodología, distintas formas de acompañarte
                </h2>

                <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
                  Todas las modalidades incluyen clases online de
                  teoría y práctica en directo, ejercicios,
                  correcciones grupales y formación PEV.
                  La diferencia está en la duración del acceso
                  y en el nivel de acompañamiento.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
                <div className="flex flex-col rounded-[2rem] border border-cmr-line bg-white p-7 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 sm:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                    <UsersRound className="h-7 w-7" />
                  </div>

                  <span className="mt-6 text-sm font-extrabold uppercase tracking-[0.16em] text-cmr-green dark:text-[#79CFC4]">
                    Formación y clases grupales
                  </span>

                  <h3 className="mt-3 font-display text-3xl font-black text-cmr-ink dark:text-white">
                    PEV Anual y PEV Flexible
                  </h3>

                  <p className="mt-5 leading-8 text-cmr-muted dark:text-white/[0.68]">
                    Aprende la metodología PEV con dos clases online
                    semanales en directo: una de teoría y otra de
                    práctica, donde corregimos ejercicios y gráficos.
                    También tendrás sala de trading, grabaciones y
                    contenidos de apoyo según la modalidad contratada.
                  </p>

                  <div className="mt-7 flex-1 space-y-4">
                    {[
                      'Una clase semanal de teoría en directo',
                      'Una clase semanal de práctica con correcciones',
                      'Sala de trading en directo de lunes a jueves, según modalidad',
                      'Formación estructurada y clases grabadas',
                      'Pago único o modalidad mensual sin permanencia',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                        <p className="leading-7 text-cmr-muted dark:text-white/[0.72]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={COMUDIA_MENTORIA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-9 w-full justify-center"
                  >
                    Ver planes en Comudia

                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <p className="mt-4 text-center text-sm leading-6 text-cmr-muted dark:text-white/[0.55]">
                    Consulta los planes y sus condiciones antes de contratar.
                  </p>
                </div>

                <div className="flex flex-col rounded-[2rem] border border-cmr-green/30 bg-white p-7 shadow-soft transition-colors duration-300 dark:border-cmr-green/35 dark:bg-cmr-dark3 sm:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                    <GraduationCap className="h-7 w-7" />
                  </div>

                  <span className="mt-6 text-sm font-extrabold uppercase tracking-[0.16em] text-cmr-green dark:text-[#79CFC4]">
                    Acompañamiento personalizado
                  </span>

                  <h3 className="mt-3 font-display text-3xl font-black text-cmr-ink dark:text-white">
                    Mentoría PEV Premium
                  </h3>

                  <p className="mt-5 leading-8 text-cmr-muted dark:text-white/[0.68]">
                    Si buscas un acompañamiento más personalizado,
                    Premium añade seguimiento individual, correcciones
                    continuas de gráficos, reuniones conmigo cuando
                    sean necesarias y elaboración y seguimiento de
                    tu propio plan de trading.
                  </p>

                  <div className="mt-7 flex-1 space-y-4">
                    {[
                      '14 meses de acompañamiento personalizado',
                      'Correcciones individuales continuas de gráficos',
                      'Reuniones individuales cuando sean necesarias',
                      'Elaboración y seguimiento de tu plan de trading',
                      '12 meses de sala de trading incluida',
                      'Acceso permanente a los contenidos formativos',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                        <p className="leading-7 text-cmr-muted dark:text-white/[0.72]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-cmr-green/20 bg-cmr-greenSoft/40 p-5 dark:border-cmr-green/25 dark:bg-cmr-green/[0.10]">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-1 h-6 w-6 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                      <div>
                        <p className="font-display text-lg font-black text-cmr-ink dark:text-white">
                          Primero hablamos personalmente
                        </p>

                        <p className="mt-2 text-sm leading-7 text-cmr-muted dark:text-white/[0.68]">
                          Antes de acceder a Premium, tendremos
                          una reunión para conocer tu situación,
                          tus objetivos y valorar si necesitas
                          este tipo de acompañamiento.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={COMUDIA_CITA_PREMIUM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-6 w-full justify-center"
                  >
                    Reservar sesión estratégica

                    <CalendarDays className="h-4 w-4" />
                  </a>

                  <p className="mt-4 text-center text-sm leading-6 text-cmr-muted dark:text-white/[0.55]">
                    Reserva tu cita directamente en Comudia.
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-3xl text-center">
                <p className="text-sm leading-7 text-cmr-muted dark:text-white/[0.60]">
                  La Mentoría PEV es una formación para aprender
                  a interpretar los mercados y tomar tus propias
                  decisiones. No es un servicio de señales ni
                  garantiza resultados económicos.
                </p>

                <Link
                  to="/mentoria-pev"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-cmr-green transition hover:underline dark:text-[#79CFC4]"
                >
                  Conocer todos los detalles de la Mentoría

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
