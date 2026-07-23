import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import BunnyVideo from '../components/media/BunnyVideo'
import TestimoniosCarousel from '../components/testimonios/TestimoniosCarousel'
import { testimoniosDestacados } from '../data/testimonios'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'

const pains = [
  {
    title: 'Sabes cosas, pero no las ordenas',
    text: 'Has visto vídeos, cursos, sistemas y cuentas de fondeo, pero delante del gráfico vuelves a dudar.',
  },
  {
    title: 'Cuando pierdes, te calientas',
    text: 'La revancha no es una operación. Es una emoción. Y en intradía se paga muy rápido.',
  },
  {
    title: 'Cambias de estrategia',
    text: 'Una semana una cosa, al mes otra. Así nunca sabes si falló el método o fallaste tú.',
  },
  {
    title: 'Confundes actividad con avance',
    text: 'Consumir contenido no es progresar. El mercado no premia estar ocupado. Premia ejecutar bien.',
  },
]

const communityItems = [
  'Más de 200 vídeos organizados por niveles',
  'Reuniones semanales conmigo en directo',
  'Sala escrita para comentar el mercado',
  'Formación prevista para 16-18 meses',
  'Retos, ejercicios, ejemplos y análisis',
  'Sin permanencia: entras y sales cuando quieras',
]

function SectionHeader({
  kicker,
  title,
  text,
  dark = false,
}) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <span
          className={
            dark
              ? 'eyebrow-dark'
              : 'eyebrow'
          }
        >
          {kicker}
        </span>
      )}

      <h2
        className={`mt-5 font-display text-3xl font-black leading-[1.05] tracking-[-0.025em] sm:text-5xl ${
          dark
            ? 'text-white'
            : 'text-cmr-ink dark:text-white'
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 text-lg leading-8 ${
            dark
              ? 'text-white/[0.76]'
              : 'text-cmr-muted dark:text-white/[0.72]'
          }`}
        >
          {text}
        </p>
      )}
    </div>
  )
}

function QuoteNote({
  children,
  dark = false,
}) {
  return (
    <div
      className={`rounded-[1.5rem] border p-6 font-display text-2xl font-black leading-tight tracking-[-0.02em] ${
        dark
          ? 'border-white/20 bg-white/[0.10] text-white'
          : 'border-cmr-line bg-cmr-paper text-cmr-ink shadow-soft dark:border-white/[0.16] dark:bg-white/[0.08] dark:text-white dark:shadow-[0_22px_60px_rgba(0,0,0,0.22)]'
      }`}
    >
      “{children}”
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <section
        id="inicio"
        className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial text-white"
      >
        <div className="section-shell grid min-h-[calc(100vh-82px)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <span className="eyebrow-dark">
              Trading PEV · Comunidad · Mentoría
            </span>

            <h1 className="hero-text-balance mt-7 font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              No hagas la operación del siglo.
              <br />

              <span className="text-cmr-gold">
                Haz una más
              </span>{' '}
              de las próximas 20.000.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/[0.78]">
              El mercado no necesita que adivines. Necesita que dejes de calentarte,
              entiendas contexto y repitas un proceso. Eso es lo que trabajamos en CMRBolsa:
              Precio, Estructura, Volumen y cabeza.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/por-donde-empezar"
                className="btn-primary"
              >
                Ver por dónde empezar

                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#comunidad"
                className="btn-secondary-dark"
              >
                Conocer la Comunidad PEV

                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-sm text-white/[0.72]">
              <div className="rounded-3xl border border-white/[0.16] bg-white/[0.09] p-5 backdrop-blur-sm">
                <b className="block font-display text-2xl font-black text-white">
                  +280
                </b>

                alumnos formados
              </div>

              <div className="rounded-3xl border border-white/[0.16] bg-white/[0.09] p-5 backdrop-blur-sm">
                <b className="block font-display text-2xl font-black text-white">
                  21+
                </b>

                años en mercados
              </div>

              <div className="rounded-3xl border border-white/[0.16] bg-white/[0.09] p-5 backdrop-blur-sm">
                <b className="block font-display text-2xl font-black text-white">
                  PEV
                </b>

                precio, estructura y volumen
              </div>
            </div>
          </div>

          <div className="relative lg:-mt-44">
            <div className="absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.16] bg-white/[0.10] p-5 shadow-darkGlow backdrop-blur">
              <div className="rounded-[2rem] border border-cmr-green/30 bg-cmr-dark2/80 p-5">
                <div className="grid gap-4">
                  <BunnyVideo
                    libraryId="710893"
                    videoId="10d12fe9-5956-4736-9ef1-22e4a81ecc28"
                    title="Presentación de CMRBolsa"
                    posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1784795691/cmrbolsa/cmrbolsa-home-carlos-principal-reduced_nqre5p.png"
                    className="border border-cmr-green/25"
                    cargaAlPulsar
                  />

                  <div className="rounded-3xl border border-white/10 bg-cmr-dark/90 p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <PlayCircle className="h-6 w-6 text-cmr-green" />

                      <div>
                        <p className="font-display text-lg font-black text-white">
                          Vídeo presentación
                        </p>

                        <p className="text-sm text-white/[0.64]">
                          Qué es CMRBolsa y por qué no es una web de señales.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm text-white/[0.78]">
                      {[
                        'Sala de trading',
                        'Reuniones semanales',
                        'Comunidad PEV',
                        'Mentoría ilimitada',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cmr-green" />

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-5 hidden rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft lg:block">
              <p className="font-display text-xl font-black text-cmr-ink">
                Pico y pala.
              </p>

              <p className="mt-1 text-sm text-cmr-muted">
                Aquí no hay atajos raros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-96 w-96 rounded-full bg-cmr-green/[0.12] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="El bloqueo real"
              title="Igual no te falta otra estrategia. Igual te falta dejar de ir a golpes."
              text="La mayoría no llega aquí porque no haya visto nada de trading. Llega porque ha visto demasiado, pero cuando el precio empieza a moverse aparece el miedo, la prisa, la revancha o la necesidad de tener razón."
            />

            <div className="mt-8">
              <QuoteNote>
                Consumir contenido no es progresar.
              </QuoteNote>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pains.map((pain) => (
              <div
                key={pain.title}
                className="card-paper p-6 dark:border-white/[0.15]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:border dark:border-cmr-green/25 dark:bg-cmr-green/[0.14] dark:text-[#79CFC4]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <h3 className="font-display text-xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                  {pain.title}
                </h3>

                <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.68]">
                  {pain.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cmrbolsa"
        className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3"
      >
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-[420px] w-[420px] rounded-full bg-cmr-green/[0.10] blur-3xl dark:block" />

        <div className="pointer-events-none absolute -right-32 top-12 hidden h-80 w-80 rounded-full bg-cmr-gold/[0.07] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[410px]">
            <div className="pointer-events-none absolute -inset-10 rounded-[3.5rem] bg-[#3FA99C]/25 blur-[55px] dark:bg-[#3FA99C]/30" />

            <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#63D3C5]/30 blur-[85px] dark:bg-[#63D3C5]/35" />

            <div className="pointer-events-none absolute -bottom-20 -right-14 h-64 w-64 rounded-full bg-cmr-gold/25 blur-[90px] dark:bg-cmr-gold/20" />

            <div className="relative overflow-hidden rounded-[2rem] border border-cmr-line bg-white shadow-soft dark:border-white/[0.16] dark:bg-cmr-dark2 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_900/v1784797904/cmrbolsa/cmrbolsa-sobre-mi-principal_reduced_mwvept.png"
                alt="Carlos Martín Rodríguez, CMRBolsa"
                className="aspect-[1102/1408] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/[0.92] p-5 shadow-soft backdrop-blur dark:border-white/[0.16] dark:bg-cmr-dark2/[0.94] dark:shadow-[0_22px_65px_rgba(0,0,0,0.28)]">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                CMRBolsa no nació de una promesa bonita.
              </p>

              <p className="mt-2 text-sm leading-6 text-cmr-muted dark:text-white/[0.68]">
                Nació después de señales, gurús, sistemas, errores y muchas horas de mercado.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader
              kicker="CMRBolsa"
              title="Soy Carlos, aunque en redes casi todos me conocen como CMRBolsa"
              text="Empecé como empieza demasiada gente: buscando atajos. Señales, sistemas, gurús, promesas y alguna hostia bien dada por el camino. Con los años entendí que el trading no iba de adivinar, sino de saber qué está haciendo el precio, dónde lo está haciendo y cuándo tiene sentido meter la mano."
            />

            <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.72]">
              De ahí nació PEV: una forma de mirar el precio, la estructura y el volumen para dejar de perseguir velas
              y empezar a trabajar con hipótesis. Y sí, aquí se trabaja. Mucho. Muy mucho.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/cmrbolsa"
                className="btn-primary"
              >
                Conocer mi historia

                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#libro"
                className="btn-secondary-light"
              >
                Ver el libro
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonios"
        className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2"
      >
        <div className="pointer-events-none absolute -right-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-green/[0.10] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              kicker="Experiencias reales"
              title="Lo importante no es que hablen de dinero. Es que cuenten cómo han empezado a entender mejor el mercado."
              text="Alumnos que llegaron con dudas, desorden o demasiada información y que poco a poco han aprendido a trabajar con más criterio, paciencia y cabeza."
            />

            <Link
              to="/testimonios"
              className="btn-secondary-light shrink-0"
            >
              Ver experiencias de alumnos
            </Link>
          </div>

          <div className="mt-10">
            <TestimoniosCarousel
              testimonios={testimoniosDestacados}
              intervalo={8000}
              cargaDiferida
            />
          </div>
        </div>
      </section>

      <section
        id="comunidad"
        className="bg-cmr-dark py-20 text-white"
      >
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div>
            <SectionHeader
              dark
              kicker="Comunidad PEV"
              title="Aprende a leer el mercado antes de meterle mano"
              text="Dentro tienes vídeos, reuniones semanales conmigo, sala escrita, dudas, ejemplos, ejercicios y actualizaciones para entender el mercado paso a paso. No vengas a copiar entradas: ven a aprender qué mirar, por qué importa y cuándo una operación puede tener sentido."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {communityItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.16] bg-white/[0.08] p-4 text-white/[0.82]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green" />

                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/comunidad-pev"
                className="btn-primary"
              >
                Ver qué hay dentro

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative lg:-mt-16">
            <div className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.16] bg-white/[0.10] p-5 shadow-darkGlow backdrop-blur">
              <div className="rounded-[2rem] border border-cmr-green/30 bg-cmr-dark2/80 p-5">
                <BunnyVideo
                  libraryId="710893"
                  videoId="c8e9a7e1-7409-4df3-9a57-7f062b186a18"
                  title="Presentación de la Comunidad PEV"
                  posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1784811599/cmrbolsa/cmrbolsa-comunidad-pev-reduced_zi5hx8.png"
                  className="border border-cmr-green/25"
                  cargaAlPulsar
                />

                <div className="mt-5 rounded-3xl border border-white/10 bg-cmr-dark/90 p-5">
                  <p className="font-display text-xl font-black text-white">
                    No es una sala de señales.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                    Entras para entender qué estamos mirando, por qué importa una zona y cuándo lo mejor es no tocar nada.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.75rem] border border-cmr-green/25 bg-white/[0.08] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-cmr-green" />

              <p className="pl-3 text-base leading-7 text-white/[0.78]">
                La base empieza en el intradía, porque ahí se repiten los movimientos cada día y puedes avanzar con más claridad. Después esa misma lógica se puede trasladar a swing, corto, medio y largo plazo: cambia la velocidad, no la estructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mentoria"
        className="relative overflow-hidden bg-cmr-light2 py-20 transition-colors duration-300 dark:bg-cmr-dark3"
      >
        <div className="pointer-events-none absolute -left-40 top-12 hidden h-96 w-96 rounded-full bg-cmr-green/[0.10] blur-3xl dark:block" />

        <div className="pointer-events-none absolute -right-40 bottom-0 hidden h-80 w-80 rounded-full bg-cmr-gold/[0.06] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="card-light p-8 dark:border-white/[0.16]">
            <p className="text-sm font-extrabold uppercase tracking-[.22em] text-cmr-green dark:text-[#79CFC4]">
              Inversión importante · plazas limitadas
            </p>

            <h3 className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white">
              No entra todo el mundo, y está bien que sea así.
            </h3>

            <p className="mt-4 leading-7 text-cmr-muted dark:text-white/[0.70]">
              La Mentoría PEV es para quien quiere corrección personal, proceso completo, plan de trading y acompañamiento
              más directo. Si no vas a mandar gráficos, no tiene sentido.
            </p>

            <Link
              to="/solicitud-mentoria"
              className="btn-primary mt-7"
            >
              Solicitar valoración

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <SectionHeader
              kicker="Mentoría PEV"
              title="Para quien quiere que le corrija, le ordene y le apriete cuando haga falta"
              text="La Comunidad te permite entrar en la forma de trabajar. La Mentoría es otra cosa: proceso, ejercicios, correcciones, plan, seguimiento y una relación mucho más directa."
            />

            <div className="mt-8 grid gap-4">
              {[
                'Vídeo → entender → hacer y enviar gráfico',
                'Mandas ejercicios y se corrigen',
                'Precio → Volumen → Estructura',
                'Plan de trading y paso progresivo a operar',
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-3xl border border-cmr-line bg-white p-5 shadow-soft transition dark:border-white/[0.15] dark:bg-white/[0.08] dark:shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-green text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <p className="pt-2 font-semibold text-cmr-ink dark:text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/mentoria-pev"
                className="btn-secondary-light"
              >
                Ver Mentoría PEV
              </Link>

              <Link
                to="/por-donde-empezar"
                className="btn-secondary-light"
              >
                Hacer el test
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="eventos"
        className="bg-cmr-dark py-14 text-white"
      >
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] border border-white/[0.16] bg-white/[0.06] p-6 shadow-darkGlow sm:p-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-green/[0.15] text-cmr-green">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <span className="eyebrow-dark">
                  Eventos
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                También hemos salido del gráfico
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/[0.70]">
                Talleres, sesiones online y encuentros con alumnos. Cuando haya
                algo nuevo, podrás verlo aquí y apuntarte si te interesa.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/eventos"
                  className="btn-primary"
                >
                  Ver eventos
                </Link>

                <Link
                  to="/eventos#avisarme"
                  className="btn-secondary-dark"
                >
                  Avisarme del próximo
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.18] bg-cmr-dark2 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <div className="pointer-events-none absolute -inset-8 bg-cmr-green/15 blur-3xl" />

              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1100/v1784812304/cmrbolsa/Seminario_Alicante_2025_cmrbolsa_reduced_u6inl5.png"
                alt="Seminario presencial de CMRBolsa en Alicante"
                className="relative aspect-[16/10] w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="libro"
        className="relative overflow-hidden bg-cmr-paper py-14 transition-colors duration-300 dark:bg-cmr-dark2"
      >
        <div className="pointer-events-none absolute -right-32 top-0 hidden h-80 w-80 rounded-full bg-cmr-gold/[0.07] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition dark:border-white/[0.16] dark:bg-cmr-dark3 dark:shadow-[0_24px_75px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow">
                  Libro y Substack
                </span>

                <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white sm:text-4xl">
                  También puedes empezar leyendo
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-cmr-muted dark:text-white/[0.70]">
                  Puedes empezar por el libro o por lo que voy publicando en Substack, ver cómo miro
                  el mercado y después decidir si quieres profundizar.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex h-full flex-col rounded-3xl border border-cmr-green/25 bg-cmr-light p-5 shadow-[0_12px_35px_rgba(20,32,29,0.06)] transition dark:border-cmr-green/35 dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                  <BookOpen className="h-7 w-7 text-cmr-green dark:text-[#79CFC4]" />

                  <h3 className="mt-4 font-display text-xl font-black leading-tight text-cmr-ink dark:text-white">
                    Desgranando la esencia del mercado
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-cmr-muted dark:text-white/[0.68]">
                    El libro para empezar a entender cómo trabajo el precio,
                    la estructura y el volumen.
                  </p>

                  <Link
                    to="/desgranando-la-esencia-del-mercado"
                    className="btn-primary mt-5 w-fit"
                  >
                    Ver el libro
                  </Link>
                </div>

                <div className="flex h-full flex-col rounded-3xl border border-cmr-gold/35 bg-cmr-light p-5 shadow-[0_12px_35px_rgba(20,32,29,0.06)] transition dark:border-cmr-gold/40 dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                  <Sparkles className="h-7 w-7 text-cmr-gold" />

                  <h3 className="mt-4 font-display text-xl font-black leading-tight text-cmr-ink dark:text-white">
                    CMRBolsa en Substack
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-cmr-muted dark:text-white/[0.68]">
                    Artículos, ideas y reflexiones para conocer mejor mi forma
                    de entender el mercado.
                  </p>

                  <Link
                    to="/substack"
                    className="mt-5 inline-flex w-fit items-center justify-center rounded-full border-2 border-cmr-green/35 bg-white px-6 py-3.5 text-sm font-extrabold text-cmr-green transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green hover:bg-cmr-greenSoft dark:border-cmr-green/45 dark:bg-white/[0.08] dark:text-[#8AD4CB] dark:hover:bg-cmr-green/[0.16]"
                  >
                    Leer en Substack
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">
              Mini test
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              ¿Comunidad, Mentoría o empezar leyendo?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.74]">
              No todo el mundo está en el mismo punto. Contesta unas preguntas y te recomiendo una opción principal,
              dejando una alternativa por si quieres mirar más.
            </p>
          </div>

          <div className="card-dark p-8">
            <UsersRound className="mb-5 h-9 w-9 text-cmr-green" />

            <p className="text-white/[0.78]">
              Si buscas una señal mágica, esta no es tu casa. Si quieres aprender a mirar el mercado y dejar de hacerte
              trampas delante del gráfico, quizá sí.
            </p>

            <Link
              to="/por-donde-empezar"
              className="btn-primary mt-7 w-full"
            >
              Ver por dónde empezar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}