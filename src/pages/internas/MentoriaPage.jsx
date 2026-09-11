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

const incluye = [
  'Proceso de aprendizaje organizado y guiado',
  'Corrección personal de ejercicios y gráficos',
  'Trabajo sobre Precio, Estructura y Volumen',
  'Plan de trading adaptado a tu evolución',
  'Reuniones y seguimiento directo',
  'Comunidad PEV incluida',
  'Sala de trading incluida durante el primer año',
  'Acompañamiento y ayuda constante',
]

const pasos = [
  {
    title: 'Primero vemos si te encaja',
    text: 'No todo el mundo necesita la Mentoría PEV de CMRBolsa. Antes de entrar hay que ver tu punto actual, tus objetivos y si tiene sentido empezar un proceso más serio.',
    icon: ClipboardCheck,
  },
  {
    title: 'Después trabajamos desde la base',
    text: 'Trabajamos desde cero: precio, volumen y estructura, haciendo entre 500 y 800 gráficos. Sin esa base, todo lo demás se cae.',
    icon: Eye,
  },
  {
    title: 'Luego trabajamos el timing',
    text: 'No basta con entender el mercado. Hay que aprender a entrar, saber dónde se invalida, dónde salir y por qué esa operación tiene sentido.',
    icon: Target,
  },
  {
    title: 'Y se trabaja la cabeza',
    text: 'Porque las prisas, el miedo, la revancha o querer recuperar rápido pueden romper una buena lectura del mercado y también tu bolsillo.',
    icon: ShieldCheck,
  },
]

const paraQuien = [
  'Para quien ya sabe que ver vídeos sueltos no es suficiente.',
  'Para quien quiere recibir correcciones personales y no limitarse a mirar contenido.',
  'Para quien está dispuesto a mandar gráficos, hacer ejercicios y dejarse corregir.',
  'Para quien quiere construir una forma de trabajar, no copiar entradas.',
]

const noEsPara = [
  'No es para quien busca señales.',
  'No es para quien quiere resultados rápidos sin trabajar.',
  'No es para quien no va a mandar ejercicios ni gráficos.',
  'No es para quien solo quiere mirar sin implicarse.',
]

const trabajo = [
  {
    title: 'Conocimiento',
    text: 'Leer el mercado con Precio, Estructura y Volumen.',
  },
  {
    title: 'Timing',
    text: 'Entender dónde entrar, dónde salir y cuándo no tocar nada.',
  },
  {
    title: 'Emociones',
    text: 'Detectar lo que te dispara para que no rompa tu plan.',
  },
]

export default function MentoriaPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Mentoría PEV"
        title="No necesitas más contenido. Necesitas que te corrijan de verdad."
        text="La Mentoría PEV es un proceso personal para aprender a leer el mercado, trabajar sobre tus propios errores y construir una forma de operar que puedas entender y repetir."
        primaryLabel="Solicitar valoración"
        primaryTo="/solicitud-mentoria"
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
                    Proceso personal
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
                      Mandas gráficos, recibes correcciones y trabajamos sobre
                      lo que realmente estás haciendo delante del mercado.
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
                    Una estructura para operar
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/[0.10] bg-white/[0.05] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white/[0.56]">
                <ClipboardCheck
                  className="h-4 w-4 text-[#79CFC4]"
                  aria-hidden="true"
                />

                Solicitud previa · Sin compra directa
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
              Una mentoría para ordenar cómo miras, decides y ejecutas.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              La diferencia no está en que haya más vídeos. La diferencia está
              en que hay proceso, corrección, seguimiento y trabajo sobre tus
              errores reales.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-white/[0.06] dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                No se trata de operar más.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.66]">
                Se trata de entender mejor qué haces, por qué lo haces y qué
                parte de tu operativa está fallando: lectura, timing, gestión o
                cabeza.
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
              No empieza con una compra. Empieza viendo si tiene sentido.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Por eso hay solicitud de valoración. La Mentoría tiene que encajar
              con tu momento, tus objetivos y tu disposición real a trabajar.
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
              Las tres patas también se trabajan aquí.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/[0.72]">
              Sin conocimiento no entiendes el mercado. Sin timing entras tarde
              o sales mal. Y sin gestión emocional, aunque veas la operación,
              puedes romper tu propio plan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solicitud-mentoria"
                className="btn-primary"
              >
                Solicitar valoración

                <ArrowRight className="h-4 w-4" />
              </Link>

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
              Para quien quiere que le miren el trabajo de cerca.
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
              Si solo quieres mirar, mejor empieza por Comunidad.
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
                  La Mentoría exige constancia, trabajo en equipo y pausa
                  operativa.
                </h3>

                <p className="mt-4 text-base leading-7 text-cmr-muted dark:text-white/[0.66]">
                  Para entrar necesitas estar dispuesto a trabajar con
                  constancia, participar en el proceso y dejarte corregir.
                  Durante el aprendizaje puede ser necesario no operar, operar
                  menos o esperar hasta que tu lectura del mercado tenga más
                  sentido.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-cmr-line bg-white p-5 shadow-[0_14px_40px_rgba(20,32,29,0.06)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_55px_rgba(0,0,0,0.25)]">
                <p className="font-display text-xl font-black leading-tight text-cmr-ink dark:text-white">
                  Si ahora no puedes asumir eso, empieza por Comunidad.
                </p>

                <Link
                  to="/comunidad-pev"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cmr-line bg-white px-6 py-3 text-sm font-extrabold text-cmr-ink shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/40 hover:text-cmr-green dark:border-white/[0.16] dark:bg-white/[0.08] dark:text-white dark:hover:border-cmr-green/45 dark:hover:bg-white/[0.12] dark:hover:text-[#79CFC4]"
                >
                  Ver Comunidad PEV
                </Link>
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
                  Conoce cómo funciona la Mentoría PEV, el trabajo personal,
                  las correcciones y el proceso de aprendizaje.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Qué cambia
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              La diferencia está en que dejas de corregirte tú solo.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Cuando aprendes solo, muchas veces repites errores sin darte
              cuenta. En Mentoría trabajamos sobre tus gráficos, tus decisiones,
              tus dudas y tu forma de enfrentarte al mercado.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  No se corrige una teoría: se corrige cómo estás mirando tú el
                  mercado.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <LineChart className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  No se busca operar más: se busca tomar mejores decisiones.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)] transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <UsersRound className="mt-1 h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                <p className="font-semibold leading-7 text-cmr-ink dark:text-white/[0.86]">
                  No es una formación masiva: tiene sentido solo si puedo
                  acompañarte bien.
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
              Solicitud de valoración
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Si quieres entrar en la Mentoría, primero vemos si tiene sentido
              para 🫵
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.72]">
              Cuéntame en qué punto estás, qué has probado, qué te está
              bloqueando y qué buscas. Si encaja, hablamos del proceso. Si no
              encaja, te diré por dónde empezar.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/solicitud-mentoria"
                className="btn-primary"
              >
                Solicitar valoración

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/por-donde-empezar"
                className="btn-secondary-dark"
              >
                Hacer mini test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}