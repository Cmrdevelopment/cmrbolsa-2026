
import { Link } from 'react-router-dom'

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  GraduationCap,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react'

import PageHero from '../../components/PageHero'
import BunnyVideo from '../../components/media/BunnyVideo'

const urlPlanesMentoria = 'https://www.comudia.com/c/mentoria-pev-de-cmrbolsa'
const urlReservaPremium = 'https://www.comudia.com/reservar/sesion-estrategica-mentoria-pev-92df06'

const incluye = [
  'Una clase semanal de teoría online en directo conmigo',
  'Otra clase semanal de práctica, con correcciones grupales de gráficos y ejercicios',
  'Sala de trading en directo para analizar el mercado; duración según modalidad',
  'Seis meses de contenidos que se desbloquean progresivamente',
  'Vídeos de apoyo y grabaciones de las clases para preparar y repasar',
  'Ejercicios y sesiones grupales para trabajar tu plan de trading',
  'Comunidad privada para compartir dudas, análisis y experiencias',
  'Duración y acompañamiento según la modalidad contratada',
]

const pasos = [
  {
    title: 'Aprendes desde tu nivel',
    text: 'Tanto si comienzas desde cero como si ya operas, trabajamos la metodología PEV desde los fundamentos hasta conceptos avanzados. Los contenidos se abren progresivamente durante seis meses.',
    icon: ClipboardCheck,
  },
  {
    title: 'Una clase semanal de teoría en directo',
    text: 'Profundizamos en precio, volumen y estructura, aprendemos distintas entradas y salidas y resolvemos dudas contigo en clase.',
    icon: Eye,
  },
  {
    title: 'Otra clase semanal de práctica',
    text: 'Revisamos y corregimos ejercicios y gráficos en grupo para entender los errores y aprender a mejorar las decisiones.',
    icon: Target,
  },
  {
    title: 'Sala de trading y apoyo para repasar',
    text: 'Observas análisis e hipótesis en directo sobre el mercado. Además, tienes grabaciones y vídeos de apoyo para preparar las clases, según tu acceso contratado.',
    icon: ShieldCheck,
  },
]

const paraQuien = [
  'Para quien empieza desde cero y quiere aprender a interpretar el precio, el volumen y la estructura.',
  'Para quien ya tiene experiencia y quiere mejorar sus entradas, salidas, decisiones y gestión emocional.',
  'Para quien quiere dejar de depender de indicadores o señales y desarrollar criterio propio.',
  'Para quien desea aplicar PEV a futuros, acciones o criptomonedas y está dispuesto a dedicarle tiempo.',
]

const noEsPara = [
  'No es para quien busca señales ni operaciones para copiar.',
  'No es para quien espera ganar dinero rápido o sin esfuerzo.',
  'No es para quien no quiere practicar, equivocarse ni aceptar correcciones.',
  'No es para quien busca una estrategia infalible o rentabilidad garantizada.',
]

const trabajo = [
  {
    title: 'Conocimiento',
    text: 'Aprender a interpretar el precio, el volumen y la estructura del mercado, desde lo básico hasta lo avanzado.',
  },
  {
    title: 'Entradas y salidas',
    text: 'Conocer diferentes formas de entrar y salir con PEV, gestionar el riesgo y adaptar las decisiones a tu situación.',
  },
  {
    title: 'Emociones',
    text: 'Reconocer el miedo, la impaciencia, la revancha y otros sesgos para aprender a gestionarlos.',
  },
]

export default function MentoriaPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Mentoría PEV"
        title="Aprende a interpretar el mercado con dos clases en directo cada semana."
        text="Tanto si empiezas desde cero como si ya tienes experiencia, cada semana tendrás una clase de teoría y otra de práctica en directo conmigo. Corregimos gráficos y ejercicios, analizamos el mercado en la sala de trading y trabajamos para que aprendas a aplicar PEV con criterio propio. Los contenidos grabados te ayudan a preparar y repasar las clases."
        primaryLabel="Ver modalidades de Mentoría"
        primaryTo={urlPlanesMentoria}
        secondaryLabel="Ver cómo funciona"
        secondaryTo="/mentoria-pev#que-incluye"
        contenidoLateral={
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[4rem] bg-cmr-green/[0.24] blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-12 -right-10 h-52 w-52 rounded-full bg-cmr-gold/[0.16] blur-[70px]" />

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/[0.18] bg-white/[0.10] p-5 shadow-[0_35px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2 rounded-full border border-cmr-gold/[0.30] bg-cmr-gold/[0.10] px-4 py-2">
                  <ShieldCheck
                    className="h-4 w-4 text-cmr-gold"
                    aria-hidden="true"
                  />

                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-cmr-gold">
                    Clases online en directo
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/[0.52]">
                  Plazas limitadas
                </span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[2rem] border border-white/[0.14] bg-cmr-dark3">
                <img
                  src="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1784917287/cmrbolsa/cmrbolsa-carlos-retrato-horizontal_reduced_uzzaky.png"
                  alt="Carlos Martín Rodríguez, responsable de la Mentoría PEV"
                  className="h-[300px] w-full object-cover object-center sm:h-[360px]"
                  loading="eager"
                  fetchPriority="high"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cmr-dark via-cmr-dark/[0.58] to-transparent" />
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-white/[0.13] bg-black/[0.18] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/[0.30] bg-cmr-green/[0.16]">
                    <GraduationCap
                      className="h-6 w-6 text-[#79CFC4]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="font-display text-xl font-black text-white">
                      Aquí vienes a trabajar
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                      Dos clases semanales: teoría para aprender y práctica
                      para revisar y corregir gráficos y ejercicios en grupo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 text-center">
                  <Eye
                    className="mx-auto h-5 w-5 text-[#79CFC4]"
                    aria-hidden="true"
                  />

                  <p className="mt-3 font-display text-lg font-black text-white">
                    Lectura
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.52]">
                    Precio, estructura y volumen
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 text-center">
                  <Target
                    className="mx-auto h-5 w-5 text-[#79CFC4]"
                    aria-hidden="true"
                  />

                  <p className="mt-3 font-display text-lg font-black text-white">
                    Corrección
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.52]">
                    Trabajo sobre tus errores
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 text-center">
                  <FileText
                    className="mx-auto h-5 w-5 text-[#79CFC4]"
                    aria-hidden="true"
                  />

                  <p className="mt-3 font-display text-lg font-black text-white">
                    Plan
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.52]">
                    Aprender a operar con criterio
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/[0.10] bg-white/[0.05] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white/[0.56]">
                <ClipboardCheck
                  className="h-4 w-4 text-[#79CFC4]"
                  aria-hidden="true"
                />

                Modalidad Premium: reunión previa conmigo
              </div>
            </div>
          </div>
        }
      />

      <section
        id="que-incluye"
        className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2"
      >
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">
              Qué incluye
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Clases en directo, práctica y mercado real para aprender PEV.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Cada semana tenemos una clase online de teoría para profundizar
              en la metodología y resolver dudas, y otra de práctica en la que
              corregimos ejercicios y gráficos de los alumnos. También está la
              sala de trading, donde analizamos el mercado en directo. Los
              contenidos se abren durante seis meses y las grabaciones y
              videolecciones sirven para preparar y repasar las clases.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-white/[0.06] dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                No se trata de copiar operaciones.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.66]">
                En la sala de trading planteamos hipótesis, seguimos precio,
                volumen y estructura, y vemos operaciones reales explicadas
                con fines formativos. No damos señales: quiero que aprendas
                por qué actuamos y cuándo es mejor quedarnos fuera.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {incluye.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-cmr-line bg-white p-5 shadow-[0_12px_40px_rgba(20,32,29,0.06)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
              >
                <CheckCircle2 className="h-5 w-5 text-cmr-green dark:text-[#79CFC4]" />

                <p className="mt-4 font-bold leading-7 text-cmr-ink dark:text-white/[0.88]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-shell relative mt-12">
          <div className="mb-7 max-w-3xl">
            <span className="eyebrow">
              Modalidades de Mentoría PEV
            </span>

            <h3 className="mt-4 font-display text-3xl font-black leading-tight text-cmr-ink dark:text-white sm:text-4xl">
              La misma formación, distintas formas de acompañarte.
            </h3>

            <p className="mt-4 leading-7 text-cmr-muted dark:text-white/[0.68]">
              Las tres modalidades comparten la metodología PEV y las clases
              grupales. Lo que cambia es la duración del acceso y el tipo de
              seguimiento que necesitas.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="card-paper flex flex-col p-6 dark:border-white/[0.15]">
              <h4 className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                PEV Anual
              </h4>

              <p className="mt-3 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
                Un pago único y 12 meses de acceso a la formación, las clases
                grupales y la sala de trading en directo.
              </p>

              <a
                href={urlPlanesMentoria}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 justify-center"
              >
                Ver plan Anual
              </a>
            </div>

            <div className="card-paper flex flex-col p-6 dark:border-white/[0.15]">
              <h4 className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                PEV Flexible
              </h4>

              <p className="mt-3 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
                Hasta seis pagos mensuales, sin permanencia. Si completas los
                seis, tienes 12 meses de formación y clases. La sala está
                incluida durante los seis meses de pago activo. Si cancelas
                antes, el acceso depende de las cuotas abonadas.
              </p>

              <a
                href={urlPlanesMentoria}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 justify-center"
              >
                Ver plan Flexible
              </a>
            </div>

            <div className="card-paper flex flex-col p-6 dark:border-white/[0.15]">
              <h4 className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                PEV Premium
              </h4>

              <p className="mt-3 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
                14 meses de acompañamiento personalizado, correcciones
                individuales continuas, reuniones 1:1 cuando sean necesarias
                y plan de trading individual. Sala durante 12 meses y acceso
                permanente a los contenidos. Requiere una reunión previa.
              </p>

              <a
                href={urlReservaPremium}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 justify-center"
              >
                Reservar reunión Premium
              </a>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-cmr-muted dark:text-white/[0.62]">
            Cuando termine el período incluido, podrás continuar en la sala
            mediante su cuota mensual. Mientras mantengas activa esa
            suscripción, también conservarás el acceso a la formación y a las
            clases y reuniones grupales de la Mentoría PEV.
          </p>
        </div>

        <div className="section-shell relative mt-8 text-center">
          <Link
            to="/terminos_y_condiciones#mentoria-pev"
            className="text-sm font-semibold text-cmr-muted underline decoration-cmr-green/30 underline-offset-4 transition hover:text-cmr-green dark:text-white/[0.62] dark:hover:text-[#79CFC4]"
          >
            Consulta las condiciones de la Mentoría PEV
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.06] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              Cómo funciona
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Una clase de teoría, otra de práctica y mercado para aprender.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Puedes empezar desde cero o profundizar si ya tienes experiencia.
              Trabajamos en directo cada semana, con ejercicios y correcciones
              grupales. Las clases quedan grabadas para volver a verlas.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {pasos.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.title}
                  className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-display text-4xl font-black text-cmr-green/[0.18] dark:text-white/[0.22]">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-cmr-muted dark:text-white/[0.66]">
                    {step.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cmr-dark py-20 text-white dark:bg-[#061613]">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-start">
          <div>
            <span className="eyebrow-dark">
              Qué trabajamos
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Conocimiento, entradas y salidas, y emociones.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/[0.72]">
              Quiero que entiendas el precio, el volumen y la estructura; que
              conozcas distintas entradas y salidas y cómo gestionar el riesgo;
              y que aprendas a reconocer los sesgos emocionales que te afectan.
              No para operar como yo, sino para aprender a decidir por ti mismo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={urlPlanesMentoria}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Ver modalidades

                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/cmrbolsa"
                className="btn-secondary-dark"
              >
                Conocer a CMRBolsa
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {trabajo.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/[0.12] bg-white/[0.07] p-6"
              >
                <p className="font-display text-3xl font-black text-white">
                  {item.title}
                </p>

                <p className="mt-3 leading-7 text-white/[0.68]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-16 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="eyebrow">
              Para quién es
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Tanto si empiezas de cero como si ya operas.
            </h2>

            <div className="mt-8 grid gap-3">
              {paraQuien.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-cmr-line bg-white p-5 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                    <p className="font-bold leading-7 text-cmr-ink dark:text-white/[0.88]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Para quién no es
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Si buscas señales o atajos, esta mentoría no es para ti.
            </h2>

            <div className="mt-8 grid gap-3">
              {noEsPara.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                    <p className="font-bold leading-7 text-cmr-ink dark:text-white/[0.88]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-shell relative mt-12">
          <div className="rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_24px_75px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
              <div>
                <span className="eyebrow">
                  Antes de solicitar valoración
                </span>

                <h3 className="mt-4 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white sm:text-3xl">
                  Primero aprende a interpretar el mercado. Después, a operar.
                </h3>

                <p className="mt-4 text-base leading-7 text-cmr-muted dark:text-white/[0.66]">
                  Durante la formación te recomiendo no operar ni en real ni
                  en demo hasta que tengas la preparación necesaria. Es mejor
                  dedicar este tiempo a estudiar, analizar gráficos, hacer
                  ejercicios y aprender de las correcciones y de la sala.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-cmr-line bg-white p-5 shadow-[0_14px_40px_rgba(20,32,29,0.06)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_55px_rgba(0,0,0,0.25)]">
                <p className="font-display text-xl font-black leading-tight text-cmr-ink dark:text-white">
                  No importa tu nivel de partida. Importa que quieras aprender.
                </p>

                <a
                  href={urlPlanesMentoria}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cmr-line bg-white px-6 py-3 text-sm font-extrabold text-cmr-ink shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/40 hover:text-cmr-green dark:border-white/[0.16] dark:bg-white/[0.08] dark:text-white dark:hover:border-cmr-green/45 dark:hover:bg-white/[0.12] dark:hover:text-[#79CFC4]"
                >
                  Ver modalidades de Mentoría
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.06] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <BunnyVideo
              libraryId="710893"
              videoId="a3d266db-42dc-4417-948e-b5a0a064367c"
              title="Presentación de la Mentoría PEV"
              posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1785171609/cmrbolsa/Mentoria_PEV_reduced_whqywz.png"
              className="border border-cmr-green/25"
              cargaAlPulsar
            />

            <div className="relative mt-5 rounded-3xl border border-cmr-line bg-white p-5 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="flex items-start gap-3">
                <MessageSquareText className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="text-sm font-semibold leading-6 text-cmr-muted dark:text-white/[0.66]">
                  Conoce las clases semanales de teoría y práctica, las
                  correcciones y el análisis en directo en la sala de trading.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Qué cambia
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Aprende a tomar tus propias decisiones con PEV.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Analizamos gráficos y ejercicios en clase para que entiendas
              por qué una lectura tiene o no sentido. Aprenderás a plantear
              hipótesis, reconocer entradas y salidas y gestionar tus emociones
              sin depender de señales ni de las operaciones de otros.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  En las clases prácticas corregimos gráficos y ejercicios
                  de forma grupal. Premium añade correcciones individuales
                  continuas durante su período de acompañamiento.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <LineChart className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  Aplicamos la metodología PEV a futuros, acciones y
                  criptomonedas; no se trata de operar más, sino de entender
                  cuándo entrar, salir o permanecer fuera.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <UsersRound className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  La misma metodología y clases para las tres modalidades;
                  la diferencia está en la duración del acceso y el nivel
                  de acompañamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white dark:bg-[#061613]">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-dark">
              Mentoría PEV
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Aprende a leer el mercado y elige cómo quieres formarte.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.72]">
              Empieza desde cero o profundiza si ya tienes experiencia.
              Tienes dos clases en directo cada semana, práctica, correcciones
              y sala de trading según tu modalidad. Anual y Flexible se pueden
              consultar en Comudia; Premium requiere una reunión previa conmigo.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={urlPlanesMentoria}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Ver planes de Mentoría

                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={urlReservaPremium}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-dark"
              >
                Reservar reunión Premium
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
