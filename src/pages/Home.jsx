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

function SectionHeader({ kicker, title, text, dark = false }) {
  return (
    <div className="max-w-3xl">
      {kicker && <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{kicker}</span>}
      <h2
        className={`mt-5 font-display text-3xl font-black leading-[1.05] tracking-[-0.025em] sm:text-5xl ${
          dark ? 'text-white' : 'text-cmr-ink'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-lg leading-8 ${dark ? 'text-white/72' : 'text-cmr-muted'}`}>
          {text}
        </p>
      )}
    </div>
  )
}

function QuoteNote({ children, dark = false }) {
  return (
    <div
      className={`rounded-[1.5rem] border p-6 font-display text-2xl font-black leading-tight tracking-[-0.02em] ${
        dark
          ? 'border-white/10 bg-white/8 text-white'
          : 'border-cmr-line bg-cmr-paper text-cmr-ink shadow-soft'
      }`}
    >
      “{children}”
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <section id="inicio" className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial text-white">
        <div className="section-shell grid min-h-[calc(100vh-82px)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <span className="eyebrow-dark">Trading PEV · Comunidad · Mentoría</span>

            <h1 className="hero-text-balance mt-7 font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              No hagas la operación del siglo.
              <br />
              <span className="text-cmr-gold">Haz una más</span> de las próximas 20.000.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/78">
              El mercado no necesita que adivines. Necesita que dejes de calentarte,
              entiendas contexto y repitas un proceso. Eso es lo que trabajamos en CMRBolsa:
              Precio, Estructura, Volumen y cabeza.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/por-donde-empezar" className="btn-primary">
                Ver por dónde empezar <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#comunidad" className="btn-secondary-dark">
                Conocer la Comunidad PEV <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-sm text-white/70">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
                <b className="block font-display text-2xl font-black text-white">+280</b>
                alumnos formados
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
                <b className="block font-display text-2xl font-black text-white">21+</b>
                años en mercados
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
                <b className="block font-display text-2xl font-black text-white">PEV</b>
                precio, estructura y volumen
              </div>
            </div>
          </div>

          <div className="relative lg:-mt-44">
            <div className="absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/10 p-5 shadow-darkGlow backdrop-blur">
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

                  <div className="rounded-3xl bg-cmr-dark/90 p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <PlayCircle className="h-6 w-6 text-cmr-green" />
                      <div>
                        <p className="font-display text-lg font-black">Vídeo presentación</p>
                        <p className="text-sm text-white/60">Qué es CMRBolsa y por qué no es una web de señales.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm text-white/76">
                      {['Sala de trading', 'Reuniones semanales', 'Comunidad PEV', 'Mentoría ilimitada'].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cmr-green" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-5 hidden rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft lg:block">
              <p className="font-display text-xl font-black text-cmr-ink">Pico y pala.</p>
              <p className="mt-1 text-sm text-cmr-muted">Aquí no hay atajos raros.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="El bloqueo real"
              title="Igual no te falta otra estrategia. Igual te falta dejar de ir a golpes."
              text="La mayoría no llega aquí porque no haya visto nada de trading. Llega porque ha visto demasiado, pero cuando el precio empieza a moverse aparece el miedo, la prisa, la revancha o la necesidad de tener razón."
            />

            <div className="mt-8">
              <QuoteNote>Consumir contenido no es progresar.</QuoteNote>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pains.map((pain) => (
              <div key={pain.title} className="card-paper p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-black tracking-[-0.02em] text-cmr-ink">{pain.title}</h3>
                <p className="mt-3 leading-7 text-cmr-muted">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cmrbolsa" className="bg-cmr-paper py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Placeholder label="CARLOS_IMAGE_URL_01" dark={false} className="min-h-[520px] bg-white" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/92 p-5 shadow-soft backdrop-blur">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">CMRBolsa no nació de una promesa bonita.</p>
              <p className="mt-2 text-sm leading-6 text-cmr-muted">Nació después de señales, gurús, sistemas, errores y muchas horas de mercado.</p>
            </div>
          </div>

          <div>
            <SectionHeader
              kicker="CMRBolsa"
              title="Soy Carlos, aunque en redes casi todos me conocen como CMRBolsa"
              text="Empecé como empieza demasiada gente: buscando atajos. Señales, sistemas, gurús, promesas y alguna hostia bien dada por el camino. Con los años entendí que el trading no iba de adivinar, sino de saber qué está haciendo el precio, dónde lo está haciendo y cuándo tiene sentido meter la mano."
            />

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              De ahí nació PEV: una forma de mirar el precio, la estructura y el volumen para dejar de perseguir velas
              y empezar a trabajar con hipótesis. Y sí, aquí se trabaja. Mucho. Muy mucho.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/cmrbolsa" className="btn-primary">
                Conocer mi historia <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#libro" className="btn-secondary-light">
                Ver el libro
              </a>
            </div>
          </div>
        </div>
      </section>

            <section id="testimonios" className="bg-cmr-light py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              kicker="Experiencias reales"
              title="Lo importante no es que hablen de dinero. Es que cuenten cómo han empezado a entender mejor el mercado."
              text="Alumnos que llegaron con dudas, desorden o demasiada información y que poco a poco han aprendido a trabajar con más criterio, paciencia y cabeza."
            />

            <Link to="/testimonios" className="btn-secondary-light shrink-0">
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

      <section id="comunidad" className="bg-cmr-dark py-20 text-white">
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
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-white/82">
                  <CheckCircle2 className="h-5 w-5 text-cmr-green" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72">
              La base empieza en el intradía, porque ahí se repiten los movimientos cada día y puedes avanzar con más claridad. Después esa misma lógica se puede trasladar a swing, corto, medio y largo plazo: cambia la velocidad, no la estructura.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/comunidad-pev" className="btn-primary">
                Ver qué hay dentro <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="card-dark p-5 lg:-mt-80">
            <BunnyVideo
              libraryId="710893"
              videoId="c8e9a7e1-7409-4df3-9a57-7f062b186a18"
              title="Presentación de la Comunidad PEV"
              className="border border-white/10"
              cargaDiferida
            />

            <div className="mt-5 rounded-3xl bg-cmr-dark/80 p-5">
              <p className="font-display text-xl font-black">No es una sala de señales.</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Entras para entender qué estamos mirando, por qué importa una zona y cuándo lo mejor es no tocar nada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mentoria" className="bg-cmr-light2 py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="card-light p-8">
            <p className="text-sm font-extrabold uppercase tracking-[.22em] text-cmr-green">Inversión importante · plazas limitadas</p>
            <h3 className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink">
              No entra todo el mundo, y está bien que sea así.
            </h3>
            <p className="mt-4 leading-7 text-cmr-muted">
              La Mentoría PEV es para quien quiere corrección personal, proceso completo, plan de trading y acompañamiento
              más directo. Si no vas a mandar gráficos, no tiene sentido.
            </p>
            <Link to="/solicitud-mentoria" className="btn-primary mt-7">
              Solicitar valoración <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <SectionHeader
              kicker="Mentoría PEV"
              title="Para quien quiere que le corrija, le ordene y le apriete cuando haga falta"
              text="La Comunidad te permite entrar en la forma de trabajar. La Mentoría es otra cosa: proceso, ejercicios, correcciones, plan, seguimiento y una relación mucho más directa."
            />

            <div className="mt-8 grid gap-4">
              {['Vídeo → entender → hacer y enviar gráfico', 'Mandas ejercicios y se corrigen', 'Precio → Volumen → Estructura', 'Plan de trading y paso progresivo a operar'].map((step, index) => (
                <div key={step} className="flex gap-4 rounded-3xl border border-cmr-line bg-white p-5 shadow-soft">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-green text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-2 font-semibold text-cmr-ink">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/mentoria-pev" className="btn-secondary-light">
                Ver Mentoría PEV
              </Link>
              <Link to="/por-donde-empezar" className="btn-secondary-light">
                Hacer el test
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="eventos" className="bg-cmr-dark py-14 text-white">
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-darkGlow sm:p-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-green/15 text-cmr-green">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <span className="eyebrow-dark">
                  Eventos
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                También hemos salido del gráfico
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/68">
                Talleres, sesiones online y encuentros con alumnos. Cuando haya
                algo nuevo, podrás verlo aquí y apuntarte si te interesa.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/eventos" className="btn-primary">
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

            <Placeholder
              label="EVENTO_IMAGE_URL_01"
              dark
              className="min-h-[220px]"
            />
          </div>
        </div>
      </section>

      <section id="libro" className="bg-cmr-paper py-14">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow">
                  Libro y Substack
                </span>

                <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink sm:text-4xl">
                  También puedes empezar leyendo
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-cmr-muted">
                  Puedes empezar por el libro o por lo que voy publicando en Substack, ver cómo miro
                  el mercado y después decidir si quieres profundizar.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-cmr-line bg-cmr-light p-5">
                  <BookOpen className="h-7 w-7 text-cmr-green" />

                  <h3 className="mt-4 font-display text-xl font-black leading-tight text-cmr-ink">
                    Desgranando la esencia del mercado
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-cmr-muted">
                    El libro para empezar a entender cómo trabajo el precio,
                    la estructura y el volumen.
                  </p>

                  <Link
                    to="/desgranando-la-esencia-del-mercado"
                    className="btn-primary mt-5"
                  >
                    Ver el libro
                  </Link>
                </div>

                <div className="rounded-3xl border border-cmr-line bg-cmr-light p-5">
                  <Sparkles className="h-7 w-7 text-cmr-gold" />

                  <h3 className="mt-4 font-display text-xl font-black leading-tight text-cmr-ink">
                    CMRBolsa en Substack
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-cmr-muted">
                    Artículos, ideas y reflexiones para conocer mejor mi forma
                    de entender el mercado.
                  </p>

                  <Link
                    to="/substack"
                    className="btn-secondary-light mt-5"
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
            <span className="eyebrow-dark">Mini test</span>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              ¿Comunidad, Mentoría o empezar leyendo?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              No todo el mundo está en el mismo punto. Contesta unas preguntas y te recomiendo una opción principal,
              dejando una alternativa por si quieres mirar más.
            </p>
          </div>

          <div className="card-dark p-8">
            <UsersRound className="mb-5 h-9 w-9 text-cmr-green" />
            <p className="text-white/74">
              Si buscas una señal mágica, esta no es tu casa. Si quieres aprender a mirar el mercado y dejar de hacerte
              trampas delante del gráfico, quizá sí.
            </p>
            <Link to="/por-donde-empezar" className="btn-primary mt-7 w-full">
              Ver por dónde empezar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}