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
import Placeholder from '../../components/Placeholder'
import PageHero from '../../components/PageHero'

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
    text: 'No todo el mundo necesita la Mentoría PEV de cmrbolsa. Antes de entrar hay que ver tu punto actual, tus objetivos y si tiene sentido empezar un proceso más serio.',
    icon: ClipboardCheck,
  },
  {
    title: 'Después trabajamos desde la base',
    text: 'Trabajamos desde cero: El precio, el volumen y la estructura, haciendo enre 500 y 800 GRAFICOS. Sin esa base, todo lo demás se cae.',
    icon: Eye,
  },
  {
    title: 'Luego trabajamos el timing',
    text: 'No basta con entenderel mercado. Hay que aprender a ENTRAR, a saber dónde se invalida, dónde salir y por qué esa operación tiene sentido.',
    icon: Target,
  },
  {
    title: 'Y se trabaja la cabeza',
    text: 'Porque laa prisas, el miedo, la revancha o querer recuperar rápido pueden romper una buena lectura del mercado y TÚ BOLSILLO.',
    icon: ShieldCheck,
  },
]

const paraQuien = [
  'Para quien ya sabe que ver vídeos sueltos no es suficiente.',
  'Para quien quiere ser corrección personalmente y no solo mirar contenido.',
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
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero
        eyebrow="Mentoría PEV"
        title="No necesitas más contenido. Necesitas que te corrijan de verdad."
        text="La Mentoría PEV es un proceso personal para aprender a leer el mercado, trabajar sobre tus propios errores y construir una forma de operar que puedas entender y repetir."
        primaryLabel="Solicitar valoración"
        primaryTo="/solicitud-mentoria"
        secondaryLabel="Ver cómo funciona"
        secondaryTo="#que-incluye"
        contenidoLateral={
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[4rem] bg-cmr-green/[0.24] blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-12 -right-10 h-52 w-52 rounded-full bg-cmr-gold/[0.16] blur-[70px]" />

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/[0.18] bg-white/[0.10] p-5 shadow-[0_35px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2 rounded-full border border-cmr-gold/[0.30] bg-cmr-gold/[0.10] px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-cmr-gold" />

                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-cmr-gold">
                    Proceso personal
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/[0.52]">
                  Plazas limitadas
                </span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[2rem] border border-white/[0.14] bg-cmr-dark3">
                <Placeholder
                  label="MENTORIA_VIDEO_URL"
                  type="video"
                  className="min-h-[300px] border-0 bg-cmr-dark3 sm:min-h-[360px]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cmr-dark via-cmr-dark/[0.58] to-transparent" />
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-white/[0.13] bg-black/[0.18] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/[0.30] bg-cmr-green/[0.16]">
                    <GraduationCap className="h-6 w-6 text-[#79CFC4]" />
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
                  <Eye className="mx-auto h-5 w-5 text-[#79CFC4]" />

                  <p className="mt-3 font-display text-lg font-black text-white">
                    Lectura
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.52]">
                    Precio, estructura y volumen
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 text-center">
                  <Target className="mx-auto h-5 w-5 text-[#79CFC4]" />

                  <p className="mt-3 font-display text-lg font-black text-white">
                    Corrección
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.52]">
                    Trabajo sobre tus errores
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 text-center">
                  <FileText className="mx-auto h-5 w-5 text-[#79CFC4]" />

                  <p className="mt-3 font-display text-lg font-black text-white">
                    Plan
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.52]">
                    Una estructura para operar
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/[0.10] bg-white/[0.05] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white/[0.56]">
                <ClipboardCheck className="h-4 w-4 text-[#79CFC4]" />

                Solicitud previa · Sin compra directa
              </div>
            </div>
          </div>
        }
      />

      <section id="que-incluye" className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Qué incluye</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Una mentoría para ordenar cómo miras, decides y ejecutas.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              La diferencia no está en que haya “más vídeos”. La diferencia está en que hay
              proceso, corrección, seguimiento y trabajo sobre tus errores reales.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                No se trata de operar más.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted">
                Se trata de entender mejor qué haces, por qué lo haces y qué parte de tu
                operativa está fallando: lectura, timing, gestión o cabeza.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {incluye.map((item) => (
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
              No empieza con una compra. Empieza viendo si tiene sentido.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              Por eso hay solicitud de valoración. La Mentoría tiene que encajar con tu momento,
              tus objetivos y tu disposición real a trabajar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {pasos.map((step, index) => {
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
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-start">
          <div>
            <span className="eyebrow-dark">Qué trabajamos</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Las tres patas también se trabajan aquí.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/72">
              Sin conocimiento no entiendes el mercado. Sin timing entras tarde o sales mal.
              Y sin gestión emocional, aunque veas la operación, puedes romper tu propio plan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/solicitud-mentoria" className="btn-primary">
                Solicitar valoración
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/cmrbolsa" className="btn-secondary-dark">
                Conocer a CMRBolsa
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {trabajo.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-display text-3xl font-black text-white">
                  {item.title}
                </p>
                <p className="mt-3 leading-7 text-white/68">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="eyebrow">Para quién es</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Para quien quiere que le miren el trabajo de cerca.
            </h2>

            <div className="mt-8 grid gap-3">
              {paraQuien.map((item) => (
                <div key={item} className="card-light p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                    <p className="font-bold leading-7 text-cmr-ink">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">Para quién no es</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Si solo quieres mirar, mejor empieza por Comunidad.
            </h2>

            <div className="mt-8 grid gap-3">
              {noEsPara.map((item) => (
                <div key={item} className="rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                    <p className="font-bold leading-7 text-cmr-ink">{item}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="mt-10 ml-16 mr-16 rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div>
            <span className="eyebrow">Antes de solicitar valoración</span>

            <h3 className="mt-4 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink sm:text-3xl">
                La Mentoría exige constancia, trabajo en equipo y pausa operativa.
            </h3>

            <p className="mt-4 text-base leading-7 text-cmr-muted">
                Para entrar necesitas estar dispuesto a trabajar con constancia, participar en el proceso
                y dejarte corregir. Durante el aprendizaje puede ser necesario no operar, operar menos
                o esperar hasta que tu lectura del mercado tenga más sentido.
            </p>
            </div>

            <div className="rounded-[1.5rem] border border-cmr-line bg-white p-5 shadow-[0_14px_40px_rgba(20,32,29,0.06)]">
            <p className="font-display text-xl font-black leading-tight text-cmr-ink">
                Si ahora no puedes asumir eso, empieza por Comunidad.
            </p>

            <Link to="/comunidad-pev" className="btn-secondary-light mt-5 w-full justify-center">
                Ver Comunidad PEV
            </Link>
            </div>
        </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Placeholder
              label="MENTORIA_TESTIMONIO_VIDEO_URL"
              type="video"
              className="min-h-[420px] bg-white"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/92 p-5 shadow-soft backdrop-blur">
              <div className="flex items-start gap-3">
                <MessageSquareText className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="text-sm font-semibold leading-6 text-cmr-muted">
                  Aquí podremos poner un vídeo corto explicando el proceso o un testimonio de alumno.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Qué cambia</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              La diferencia está en que dejas de corregirte tú solo.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              Cuando aprendes solo, muchas veces repites errores sin darte cuenta.
              En Mentoría trabajamos sobre tus gráficos, tus decisiones, tus dudas y tu forma
              de enfrentarte al mercado.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  No se corrige una teoría: se corrige cómo estás mirando tú el mercado.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <LineChart className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  No se busca operar más: se busca tomar mejores decisiones.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <UsersRound className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  No es una formación masiva: tiene sentido solo si puedo acompañarte bien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-dark">Solicitud de valoración</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Si quieres entrar en la Mentoría, primero vamos si tiene sentido para 🫵.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Cuéntame en qué punto estás, qué has probado, qué te está bloqueando y qué buscas.
              Si encaja, hablamos del proceso. Si no encaja, te diré por dónde empezar.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/solicitud-mentoria" className="btn-primary">
                Solicitar valoración
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/por-donde-empezar" className="btn-secondary-dark">
                Hacer mini test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}