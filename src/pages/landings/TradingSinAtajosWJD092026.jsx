
import {
  useEffect,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUp,
  Check,
} from 'lucide-react'

import BunnyVideo from '../../components/media/BunnyVideo'
import { obtenerTestimonios } from '../../data/testimonios'

const PLANES_URL =
  'https://www.comudia.com/c/mentoria-pev-de-cmrbolsa'

const RESERVA_URL =
  'https://www.comudia.com/reservar/sesion-estrategica-mentoria-pev-92df06'

const proceso = [
  {
    numero: '01',
    titulo: 'Primero, aprender a leer',
    texto:
      'Precio, estructura y volumen. Tanto si empiezas desde cero como si ya operas, tienes que entender qué está haciendo el mercado antes de pensar en entrar.',
  },
  {
    numero: '02',
    titulo: 'Dos clases en directo cada semana',
    texto:
      'Una de teoría para profundizar en la metodología PEV y resolver dudas. Otra de práctica para trabajar ejercicios y analizar gráficos conmigo.',
  },
  {
    numero: '03',
    titulo: 'Gráficos, práctica y correcciones',
    texto:
      'Aquí aprendes trabajando. Corregimos gráficos y ejercicios en las clases prácticas grupales. En Premium, además, tienes correcciones individuales continuas.',
  },
  {
    numero: '04',
    titulo: 'Aprender a decidir por ti mismo',
    texto:
      'Trabajamos entradas, salidas, gestión del riesgo y emociones. Y en la sala de trading analizamos el mercado real para entender qué hacer y cuándo no operar.',
  },
]

const resultadosMentoria = [
  {
    numero: '01',
    titulo: 'Conseguir un extra',
    texto:
      'Podrías plantearte obtener ingresos complementarios si con el tiempo desarrollas conocimientos, experiencia y consistencia. No hay garantías de conseguirlo.',
  },
  {
    numero: '02',
    titulo: 'Intentar rentabilizar tu capital',
    texto:
      'Puedes aprender a analizar y gestionar tu propio capital, comprendiendo que cualquier operación puede generar pérdidas.',
  },
  {
    numero: '03',
    titulo: 'Llevarlo mucho más lejos',
    texto:
      'Si desarrollas experiencia y resultados sostenibles, podrías plantearte dedicarte profesionalmente al trading. Es una posibilidad exigente, no un resultado prometido.',
  },
]

const incluye = [
  'Una clase semanal de teoría online en directo conmigo',
  'Otra clase semanal de práctica con correcciones grupales',
  'Seis meses de contenidos que se abren progresivamente',
  'Clases grabadas y videolecciones para preparar y repasar',
  'Sala de trading en directo de lunes a jueves: aprendemos del mercado real',
  'Ejercicios de gráficos y elaboración de tu plan de trading',
  'Comunidad privada y reuniones grupales durante tu acceso',
  'Anual: 12 meses de acceso y sala de trading',
  'Flexible: hasta seis pagos; 12 meses de formación si completas todos',
  'Premium: 14 meses de seguimiento individual y 12 meses de sala',
]

const siEs = [
  'Empezar desde cero o profundizar si ya tienes experiencia',
  'Aprender con dos clases online semanales en directo',
  'Hacer gráficos y recibir correcciones grupales en clase',
  'Analizar el mercado real en la sala de trading',
  'Desarrollar tu criterio y aprender a decidir por ti mismo',
]

const noEs = [
  'Buscar dinero fácil o resultados rápidos',
  'Pensar que mirar unos vídeos basta para saber operar',
  'Copiar operaciones sin entender lo que estás haciendo',
  'Evitar la práctica, los errores o las correcciones',
  'Creer que existe una metodología que garantiza beneficios',
]

const operativaReal = [
  {
    id: 'operativa-01',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815453/cmrbolsa/Operativa/46f11128-8f17-41fd-971d-65a9299f8491.png',
    puntos: '10,00',
    beneficio: '500 $',
  },
  {
    id: 'operativa-02',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789822266/cmrbolsa/Operativa/6366efc8-05e3-4110-9545-4a42a1678381.png',
    puntos: '4,25',
    beneficio: '212,50 $',
  },
  {
    id: 'operativa-03',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815445/cmrbolsa/Operativa/428b520d-d140-4982-a6a3-701d61176348.png',
    puntos: '9,25',
    beneficio: '462,50 $',
  },
  {
    id: 'operativa-04',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815438/cmrbolsa/Operativa/8cc2398c-6c49-4ee7-b86b-228fd2da88b3.png',
    puntos: '28,25',
    beneficio: '1.412,50 $',
  },
  {
    id: 'operativa-05',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789822251/cmrbolsa/Operativa/37f3560b-419a-4ce8-ad66-2287110503dd.png',
    puntos: '5,75',
    beneficio: '287,50 $',
  },
  {
    id: 'operativa-06',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815425/cmrbolsa/Operativa/fd971d62-ab33-43c4-9def-830e8270a811.png',
    puntos: '12,75',
    beneficio: '637,50 $',
  },
  {
    id: 'operativa-07',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815414/cmrbolsa/Operativa/b4a65e01-a70c-4af1-a16c-17e756ad4c93.png',
    puntos: '8,00',
    beneficio: '400 $',
  },
  {
    id: 'operativa-08',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815406/cmrbolsa/Operativa/b9a474a3-d721-41b4-bf8f-13d5fe78d304.png',
    puntos: '19,50',
    beneficio: '975 $',
  },
  {
    id: 'operativa-09',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789822237/cmrbolsa/Operativa/a7cbe61b-4729-45d2-80e5-4a7d2c5d8311.png',
    puntos: '5,75',
    beneficio: '287,50 $',
  },
  {
    id: 'operativa-10',
    imagen:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto,q_auto,c_limit,w_1600/v1789815386/cmrbolsa/Operativa/3798b726-1469-413e-b1dd-09408df5f8e2.png',
    puntos: '17,25',
    beneficio: '862,50 $',
  },
]

const testimoniosVideoMentoria = obtenerTestimonios({
  tipo: 'video',
})
  .filter(
    (testimonio) =>
      testimonio.videoUrl
  )

function obtenerYoutubeId(url) {
  if (!url) {
    return ''
  }

  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes('youtu.be')) {
      return (
        parsedUrl.pathname
          .split('/')
          .filter(Boolean)[0] || ''
      )
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      return (
        parsedUrl.searchParams.get('v') ||
        parsedUrl.pathname
          .split('/')
          .filter(Boolean)
          .at(-1) ||
        ''
      )
    }

    return ''
  } catch {
    return ''
  }
}

function obtenerYoutubeEmbedAutoplay(url) {
  const videoId = obtenerYoutubeId(url)

  return videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : ''
}

function obtenerYoutubeMiniatura(url) {
  const videoId = obtenerYoutubeId(url)

  return videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : ''
}

const preguntas = [
  {
    pregunta: '¿Cuánto dura la Mentoría PEV?',
    respuesta:
      'Los contenidos se desbloquean progresivamente durante seis meses. PEV Anual incluye 12 meses de formación, clases y sala. PEV Flexible permite hasta seis pagos mensuales sin permanencia: si completas los seis, tienes 12 meses de formación y clases, con sala incluida durante los meses de pago activo. PEV Premium incluye 14 meses de acompañamiento personalizado, 12 meses de sala y acceso permanente a los contenidos formativos.',
  },
  {
    pregunta: '¿Cuánto tiempo tengo que dedicar?',
    respuesta:
      'Como orientación, unas 4 a 6 horas semanales. Tendrás una clase de teoría y otra de práctica en directo cada semana. Además, necesitarás tiempo para estudiar, analizar gráficos y hacer ejercicios. Cada persona avanza a su ritmo.',
  },
  {
    pregunta: '¿Tengo que tener experiencia?',
    respuesta:
      'No. La Mentoría PEV está dirigida tanto a quienes empiezan desde cero como a traders con experiencia. Comenzamos por los fundamentos y avanzamos progresivamente con la metodología PEV.',
  },
  {
    pregunta: '¿Voy a poder ver tus operaciones?',
    respuesta:
      'Sí. En la sala de trading analizamos el mercado en directo. Verás operaciones reales mías y de alumnos avanzados con sus razonamientos, entradas y salidas. Es un entorno de aprendizaje, no un servicio de señales. Durante la formación te recomiendo no copiar operaciones ni precipitarte a operar en real o en demo.',
  },
  {
    pregunta: '¿Cómo se corrigen los gráficos? ¿Hay reuniones individuales?',
    respuesta:
      'En PEV Anual y PEV Flexible corregimos gráficos y ejercicios en las clases grupales de práctica. PEV Premium incorpora, además, correcciones individuales continuas, reuniones 1 a 1 cuando sean necesarias y seguimiento de tu plan de trading durante 14 meses. Las reuniones individuales no forman parte de Anual ni de Flexible.',
  },
  {
    pregunta: '¿Qué pasa cuando termine mi período de acceso?',
    respuesta:
      'Puedes continuar en la sala de trading mediante su cuota mensual. Mientras mantengas activa esa suscripción, también conservas el acceso a los contenidos y a las clases y reuniones grupales. Premium mantiene además el acceso permanente a los contenidos formativos, aunque termine el seguimiento personalizado.',
  },
  {
    pregunta: '¿Necesito reservar una reunión antes de entrar?',
    respuesta:
      'Solo para PEV Premium. PEV Anual y PEV Flexible se pueden consultar y contratar directamente en Comudia. Para Premium primero tenemos una sesión estratégica conmigo y valoramos si necesitas ese acompañamiento individual.',
  },
]

function Cta({
  children = 'Ver modalidades de Mentoría',
  className = '',
}) {
  const irAReserva = () => {
    document
      .getElementById('reserva')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <button
      type="button"
      onClick={irAReserva}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cmr-green px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(50,128,119,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-cmr-greenDark ${className}`}
    >
      {children}
      <ArrowRight
        className="h-4 w-4"
        aria-hidden="true"
      />
    </button>
  )
}

export default function TradingSinAtajosWJD092026() {
  const [mostrarSubir, setMostrarSubir] =
    useState(false)

  const [
    videoTestimonioActivoId,
    setVideoTestimonioActivoId,
  ] = useState(
    testimoniosVideoMentoria[0]?.id ?? null
  )

  const [
    reproduciendoTestimonio,
    setReproduciendoTestimonio,
  ] = useState(false)

  const operativaScrollRef = useRef(null)

  const moverOperativa = (direccion) => {
    const contenedor =
      operativaScrollRef.current

    if (!contenedor) {
      return
    }

    const primeraTarjeta =
      contenedor.firstElementChild

    const anchoTarjeta =
      primeraTarjeta?.getBoundingClientRect().width ??
      700

    contenedor.scrollBy({
      left: direccion * (anchoTarjeta + 24),
      behavior: 'smooth',
    })
  }

  const testimoniosScrollRef = useRef(null)

  const moverTestimonios = (direccion) => {
    const contenedor =
      testimoniosScrollRef.current

    if (!contenedor) {
      return
    }

    const primeraTarjeta =
      contenedor.firstElementChild

    const anchoTarjeta =
      primeraTarjeta?.getBoundingClientRect().width ??
      340

    contenedor.scrollBy({
      left: direccion * (anchoTarjeta + 20),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`
      )
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    })
  }, [])

  useEffect(() => {
    const controlarScroll = () => {
      setMostrarSubir(window.scrollY > 500)
    }

    controlarScroll()

    window.addEventListener(
      'scroll',
      controlarScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        controlarScroll
      )
    }
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-cmr-dark text-white selection:bg-cmr-green/40">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-cmr-dark">

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-0 top-[150px] h-px w-[28%] bg-white/[0.07]" />
          <div className="absolute right-0 top-[150px] h-px w-[42%] bg-white/[0.07]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.09]" />
          <div className="absolute bottom-0 left-[14%] h-px w-[30%] bg-cmr-gold/45" />
        </div>

        <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-12 lg:px-12 lg:pb-28 lg:pt-14">
          <div className="mx-auto max-w-[980px] text-center">

            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-[#91D3CB]">
              Mentoría PEV · CMRBolsa
            </p>

            <h1 className="mx-auto mt-5 max-w-[900px] font-display text-[clamp(2.65rem,4.8vw,4.9rem)] font-black leading-[0.98] tracking-[-0.045em] text-white">
              Aprende a operar
              <span className="block">
                los mercados
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[760px] font-display text-[clamp(1.45rem,2.2vw,2.25rem)] font-black leading-[1.15] tracking-[-0.02em] text-[#8FD1C9]">
              Y decide tú hasta dónde quieres llevarlo
            </p>

            <p className="mx-auto mt-4 max-w-[760px] text-lg leading-8 text-white/[0.68] sm:text-xl sm:leading-8">
              Tanto si empiezas desde cero como si ya tienes experiencia:
              una clase online de teoría y otra de práctica cada semana,
              correcciones y sala de trading para aprender con el mercado real.
            </p>

            <p className="mx-auto mt-4 max-w-[760px] text-sm font-bold leading-6 text-white/[0.58] sm:text-base sm:leading-7">
              Pero que quede claro: llegar hasta ahí es difícil.
              Muy difícil. Si quieres conseguir más que la media,
              tendrás que trabajar más que la media.
            </p>

            <div className="mx-auto mt-9 w-full max-w-[960px] overflow-hidden rounded-[24px] border border-white/[0.14] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:mt-10 sm:rounded-[28px]">
              <BunnyVideo
                libraryId="710893"
                videoId="a3d266db-42dc-4417-948e-b5a0a064367c"
                title="Vídeo principal de la Mentoría PEV"
                posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1785171609/cmrbolsa/Mentoria_PEV_reduced_whqywz.png"
                className="aspect-video overflow-hidden"
                cargaAlPulsar
              />
            </div>

            <div className="mt-7 flex justify-center">
              <Cta className="w-full sm:w-auto">
                Ver modalidades de Mentoría PEV
              </Cta>
            </div>

          </div>
        </div>
      </section>

      {/* TRABAJO + PROCESO */}
      <section className="border-y border-white/10 bg-[#0B1C18] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">

            <div>
              <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-cmr-gold">
                Cómo trabajamos
              </p>

              <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Aquí se viene a trabajar.
              </h2>
            </div>

            <div className="max-w-3xl border-l border-white/[0.14] pl-6 sm:pl-9">
              <p className="text-lg leading-8 text-white/[0.74] sm:text-xl sm:leading-9">
                Cada semana tenemos dos clases online en directo:
                una de teoría para profundizar en la metodología PEV
                y otra de práctica para trabajar los gráficos y corregir
                los ejercicios de los alumnos.
              </p>

              <p className="mt-5 text-base leading-7 text-white/[0.52] sm:text-lg sm:leading-8">
                Aprendes haciendo gráficos. Muchos. En las clases
                prácticas revisamos errores y repetimos el trabajo
                hasta que empieces a ver lo que antes no veías.
                Si eliges Premium, además, trabajamos con correcciones
                individuales continuas.
              </p>
            </div>

          </div>

          <div className="mt-12 border-t border-white/[0.13] lg:mt-14">
            {proceso.map((item) => (
              <div
                key={item.numero}
                className="grid gap-4 border-b border-white/[0.13] py-7 sm:grid-cols-[90px_.75fr_1.25fr] sm:items-start sm:gap-8 sm:py-9"
              >
                <p className="font-display text-2xl font-black text-cmr-gold/75">
                  {item.numero}
                </p>

                <h3 className="font-display text-2xl font-black leading-[1.12] text-white sm:text-3xl">
                  {item.titulo}
                </h3>

                <p className="max-w-2xl text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-0 border-y border-white/[0.13] sm:grid-cols-2">
            <div className="py-7 text-center sm:border-r sm:border-white/[0.13] sm:px-8">
              <p className="font-display text-3xl font-black text-white sm:text-4xl">
                4–6 h
              </p>

              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8FD1C9]">
                por semana como referencia
              </p>
            </div>

            <div className="border-t border-white/[0.13] py-7 text-center sm:border-t-0 sm:px-8">
              <p className="font-display text-3xl font-black text-white sm:text-4xl">
                6 meses
              </p>

              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-cmr-gold">
                de contenidos progresivos; acceso según tu plan
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* RESULTADOS + QUÉ PONGO DE MI PARTE */}
      <section className="bg-[#F1EEE5] py-20 text-cmr-ink sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-cmr-greenDark">
              Hasta dónde puedes llevarlo
            </p>

            <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Puedes llegar muy lejos.
              <span className="mt-2 block text-cmr-greenDark">
                Pero el resultado depende de ti 🫵
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-base leading-7 text-cmr-muted sm:text-lg sm:leading-8">
              Puedes plantearte objetivos como gestionar mejor tu capital,
              buscar ingresos complementarios o incluso dedicarte al trading.
              Ninguno de ellos está garantizado.
            </p>

            <p className="mx-auto mt-4 max-w-[760px] text-base leading-7 text-cmr-muted sm:text-lg sm:leading-8">
              Hasta dónde llegues dependerá de lo que seas capaz de hacer
              con todo lo que vas a aprender. Porque quien va a entrar
              al mercado, tomar las decisiones y gestionar su dinero eres tú.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-[1080px] border-y border-cmr-ink/12 lg:grid lg:grid-cols-3">
            {resultadosMentoria.map((resultado, index) => (
              <div
                key={resultado.numero}
                className={`flex flex-col items-center px-4 py-9 text-center sm:px-8 lg:py-11 ${
                  index > 0
                    ? 'border-t border-cmr-ink/12 lg:border-l lg:border-t-0'
                    : ''
                }`}
              >
                <p className="font-display text-lg font-black tracking-[0.06em] text-cmr-green/55">
                  {resultado.numero}
                </p>

                <div className="mt-4 h-px w-10 bg-cmr-gold" />

                <h3 className="mt-5 font-display text-2xl font-black leading-[1.12] text-cmr-ink sm:text-3xl">
                  {resultado.titulo}
                </h3>

                <p className="mt-4 max-w-[310px] text-base leading-7 text-cmr-muted">
                  {resultado.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-[1120px] overflow-hidden rounded-[32px] bg-[#10231F] px-6 py-10 text-white shadow-[0_28px_80px_rgba(7,21,18,0.18)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="mx-auto max-w-[850px] text-center">

              <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-cmr-gold">
                Mi parte
              </p>

              <h3 className="mt-4 font-display text-3xl font-black leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                Yo me voy a implicar al 100 % para que lo consigas.
              </h3>

              <p className="mx-auto mt-6 max-w-[760px] text-base leading-7 text-white/[0.64] sm:text-lg sm:leading-8">
                Cada semana tendrás conmigo una clase online de teoría y
                otra de práctica, con ejercicios y correcciones grupales.
                Verás análisis y operaciones reales en la sala de trading,
                y tendrás clases grabadas como apoyo. En Premium, además,
                tendrás seguimiento personalizado y correcciones individuales.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-[980px] gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {incluye.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-t border-white/[0.13] py-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8FD1C9]/12">
                    <Check
                      className="h-3.5 w-3.5 text-[#8FD1C9]"
                      strokeWidth={3}
                    />
                  </span>

                  <p className="text-sm font-bold leading-6 text-white/[0.76] sm:text-base sm:leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-[850px] border-t border-white/[0.14] pt-10 text-center">
              <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.24em] text-[#8FD1C9]">
                Ahora viene tu parte
              </p>

              <h4 className="mx-auto mt-4 max-w-[760px] font-display text-2xl font-black leading-[1.15] text-white sm:text-3xl lg:text-[2.4rem]">
                Pero necesito que tú hagas lo mismo.
              </h4>

              <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-white/[0.62] sm:text-lg sm:leading-8">
                Esto es duro. Necesito tiempo, trabajo, constancia y esfuerzo
                por tu parte. Si tú no haces ese trabajo, da igual cuánto
                me implique yo: esto no funciona.
              </p>

              <div className="mx-auto mt-8 max-w-[760px] border-y border-white/[0.14] py-8">
                <p className="font-display text-2xl font-black leading-[1.15] text-white sm:text-3xl">
                  Yo voy a poner todo de mi parte.
                  <span className="mt-1 block text-[#8FD1C9]">
                    Ahora necesito que tú pongas todo de la tuya.
                  </span>
                </p>
              </div>

              <p className="mx-auto mt-7 max-w-[700px] text-base leading-7 text-white/[0.54] sm:text-lg sm:leading-8">
                Esto no es fácil. Tampoco quiero venderte que lo sea.
                Pero si tú trabajas de verdad, yo voy a estar ahí para
                ayudarte a llegar tan lejos como seas capaz.
              </p>

              <div className="mt-8 flex justify-center">
                <Cta className="w-full sm:w-auto">
                  Ver modalidades de Mentoría PEV
                </Cta>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ENCAJE */}
      <section className="bg-[#0B1C18] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[880px] text-center">
            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-cmr-gold">
              Antes de seguir
            </p>

            <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              ¿Es esto lo que estás buscando?
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
              Prefiero que tengas claro lo que vas a encontrar dentro
              de la Mentoría y también lo que no.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1080px] gap-10 lg:grid-cols-2 lg:gap-0">

            <div className="lg:pr-12">
              <div className="text-center lg:text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#8FD1C9]">
                  Esto sí vas a encontrar
                </p>

                <h3 className="mt-3 font-display text-2xl font-black leading-[1.12] text-white sm:text-3xl">
                  Aprender, trabajar y entender lo que haces.
                </h3>
              </div>

              <div className="mt-7">
                {siEs.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/[0.12] py-5"
                  >
                    <p className="font-display text-lg font-black text-[#8FD1C9]/70">
                      0{index + 1}
                    </p>

                    <p className="text-base font-bold leading-7 text-white/[0.82] sm:text-lg sm:leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.13] pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="text-center lg:text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cmr-gold">
                  Esto no
                </p>

                <h3 className="mt-3 font-display text-2xl font-black leading-[1.12] text-white sm:text-3xl">
                  Atajos, dinero fácil ni hacer el trabajo por ti.
                </h3>
              </div>

              <div className="mt-7">
                {noEs.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/[0.12] py-5"
                  >
                    <p className="font-display text-lg font-black text-cmr-gold/60">
                      0{index + 1}
                    </p>

                    <p className="text-base font-bold leading-7 text-white/[0.62] sm:text-lg sm:leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mx-auto mt-14 max-w-[880px] border-t border-white/[0.13] pt-9 text-center">
            <p className="mx-auto max-w-[680px] text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
              Si buscas aprender de verdad, trabajar y llegar a entender
              por qué haces cada cosa, entonces sí estamos hablando
              de lo mismo.
            </p>

            <div className="mt-7 flex justify-center">
              <Cta className="w-full sm:w-auto">
                Ver modalidades de Mentoría PEV
              </Cta>
            </div>
          </div>

        </div>
      </section>

      {/* CARLOS */}
      <section className="bg-[#F1EEE5] py-20 text-cmr-ink sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1220px] gap-12 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-12">

          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-cmr-green/[0.08] blur-[42px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-cmr-ink/[0.08] bg-white shadow-[0_24px_70px_rgba(7,21,18,0.14)]">
              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1000/v1784914913/cmrbolsa/CARLOS_IMAGE_URL_02_reduced_fk9h9f.png"
                alt="Carlos Martín Rodríguez"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-[700px]">
            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-cmr-greenDark">
              Quién está al otro lado
            </p>

            <h2 className="mt-4 font-display text-4xl font-black leading-[1.04] tracking-[-0.035em] text-cmr-ink sm:text-5xl">
              Soy Carlos Martín Rodríguez.
            </h2>

            <p className="mt-4 max-w-[640px] font-display text-2xl font-black leading-[1.15] tracking-[-0.02em] text-cmr-greenDark sm:text-3xl">
              Trader, formador y creador del método PEV.
            </p>

            <div className="mt-7 max-w-[650px] space-y-5">
              <p className="text-base leading-7 text-cmr-muted sm:text-lg sm:leading-8">
                Opero en los mercados y trabajo contigo para enseñarte
                a entender qué está pasando delante de un gráfico y por qué.
              </p>

              <p className="text-base leading-7 text-cmr-muted sm:text-lg sm:leading-8">
                Dentro de la Sala de Trading vas a ver mis operaciones en
                tiempo real, cómo las planteo, cómo las analizo y por qué
                tomo cada decisión. Y no solo las mías: los alumnos más
                avanzados también comparten su operativa para que todos
                podamos aprender de todos.
              </p>

              <p className="text-base leading-7 text-cmr-muted sm:text-lg sm:leading-8">
                El objetivo es que no dependas de que las operaciones las
                haga yo, sino que llegue un momento en el que seas tú quien
                las plantee, las ejecute y tome sus propias decisiones.
              </p>

              <p className="text-base font-bold leading-7 text-cmr-ink/[0.82] sm:text-lg sm:leading-8">
                Quiero que llegue un momento en el que mires el mercado,
                entiendas lo que tienes delante y seas capaz de tomar
                tus propias decisiones.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* OPERATIVA REAL */}
      <section className="overflow-hidden bg-[#071512] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-cmr-gold">
              Operativa real
            </p>

            <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Así trabajamos el mercado.
              <span className="block text-[#8FD1C9]">
                Operaciones reales, con contexto.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[780px] text-base leading-7 text-white/[0.62] sm:text-lg sm:leading-8">
              Estos son ejemplos de operaciones concretas, no resultados
              habituales ni una promesa de rentabilidad. En trading también
              hay pérdidas. Trabajamos tres patas: conocimiento, entradas y
              salidas, y emociones.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1120px] gap-5 lg:grid-cols-3">

            <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.035] p-6 sm:p-7">
              <p className="font-display text-sm font-black tracking-[0.12em] text-cmr-gold">
                01
              </p>

              <h3 className="mt-4 font-display text-2xl font-black text-white">
                Conocimiento
              </h3>

              <p className="mt-4 text-base leading-7 text-white/[0.58]">
                Se consigue trabajando, haciendo gráficos, siendo constante
                y entendiendo qué está haciendo el precio y qué hay detrás
                de cada movimiento.
              </p>

              <p className="mt-4 text-sm font-bold leading-6 text-[#8FD1C9]">
                Aquí puedo ayudarte muchísimo.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.035] p-6 sm:p-7">
              <p className="font-display text-sm font-black tracking-[0.12em] text-cmr-gold">
                02
              </p>

              <h3 className="mt-4 font-display text-2xl font-black text-white">
                Entradas y salidas
              </h3>

              <p className="mt-4 text-base leading-7 text-white/[0.58]">
                Llegan después del conocimiento. Cuando entiendes bien
                el movimiento del precio, empiezas a saber por qué entras,
                por qué sales y cómo gestionar cada operación.
              </p>

              <p className="mt-4 text-sm font-bold leading-6 text-[#8FD1C9]">
                Yo te ayudo a construir esa parte paso a paso.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.035] p-6 sm:p-7">
              <p className="font-display text-sm font-black tracking-[0.12em] text-cmr-gold">
                03
              </p>

              <h3 className="mt-4 font-display text-2xl font-black text-white">
                Emociones
              </h3>

              <p className="mt-4 text-base leading-7 text-white/[0.58]">
                Puedo ayudarte a que seas consciente de ellas, pero esta parte
                tienes que vivirla tú. Tienes que conocerte, saber qué te afecta
                y aprender cómo reaccionas cuando estás dentro del mercado.
              </p>

              <p className="mt-4 text-sm font-bold leading-6 text-[#8FD1C9]">
                Aquí puedo acompañarte, pero no hacerlo por ti.
              </p>
            </div>

          </div>

          <div className="mx-auto mt-10 max-w-[820px] text-center">
            <p className="font-display text-xl font-black leading-[1.3] text-white sm:text-2xl">
              No se trata de copiar estos resultados.
              <span className="mt-1 block text-[#8FD1C9]">
                Se trata de entender cada decisión y gestionar el riesgo.
              </span>
            </p>
          </div>

          <div className="relative mt-12 sm:mt-14">

            <div
              ref={operativaScrollRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {operativaReal.map((operativa, index) => (
                <article
                  key={operativa.id}
                  className="w-[92%] shrink-0 snap-center sm:w-[76%] lg:w-[68%]"
                >
                  <div className="overflow-hidden rounded-[28px] border border-white/[0.13] bg-[#0B1C18] shadow-[0_30px_90px_rgba(0,0,0,0.34)]">

                    <div className="flex flex-col gap-4 border-b border-white/[0.10] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#8FD1C9]" />

                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/[0.72]">
                          Operativa real · ES
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="rounded-full border border-[#8FD1C9]/25 bg-[#8FD1C9]/10 px-4 py-2">
                          <p className="font-display text-base font-black text-[#8FD1C9] sm:text-lg">
                            +{operativa.puntos} pts
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/[0.38]">
                            1 contrato ES
                          </p>

                          <p className="mt-0.5 font-display text-lg font-black text-cmr-gold">
                            ≈ {operativa.beneficio}
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#071512]">
                      <img
                        src={operativa.imagen}
                        alt={`Ejemplo de operativa real ${index + 1}`}
                        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
                        loading="lazy"
                        aria-hidden="true"
                      />

                      <div className="absolute inset-0 bg-[#071512]/20" />

                      <img
                        src={operativa.imagen}
                        alt={`Operativa real compartida en la Sala de Trading ${index + 1}`}
                        className="relative z-10 h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                  </div>
                </article>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-1 sm:px-3">
              <button
                type="button"
                onClick={() => moverOperativa(-1)}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-cmr-green bg-cmr-green text-white shadow-[0_12px_30px_rgba(0,0,0,0.32)] transition duration-200 hover:-translate-x-1 hover:border-cmr-greenDark hover:bg-cmr-greenDark sm:h-12 sm:w-12"
                aria-label="Operación anterior"
              >
                <ArrowRight
                  className="h-5 w-5 rotate-180"
                  strokeWidth={2.4}
                />
              </button>

              <button
                type="button"
                onClick={() => moverOperativa(1)}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-cmr-green bg-cmr-green text-white shadow-[0_12px_30px_rgba(0,0,0,0.32)] transition duration-200 hover:translate-x-1 hover:border-cmr-greenDark hover:bg-cmr-greenDark sm:h-12 sm:w-12"
                aria-label="Siguiente operación"
              >
                <ArrowRight
                  className="h-5 w-5"
                  strokeWidth={2.4}
                />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => moverOperativa(-1)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.16] text-white/[0.72] transition duration-200 hover:border-[#8FD1C9]/60 hover:bg-white/[0.06] hover:text-white"
                aria-label="Operación anterior"
              >
                <ArrowRight
                  className="h-4 w-4 rotate-180"
                  strokeWidth={2.4}
                />
              </button>

              <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-white/[0.38]">
                Más ejemplos de operativa real
              </p>

              <button
                type="button"
                onClick={() => moverOperativa(1)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.16] text-white/[0.72] transition duration-200 hover:border-[#8FD1C9]/60 hover:bg-white/[0.06] hover:text-white"
                aria-label="Siguiente operación"
              >
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2.4}
                />
              </button>
            </div>

            <p className="mx-auto mt-6 max-w-[720px] text-center text-xs leading-5 text-white/[0.38] sm:text-sm sm:leading-6">
              Equivalencia orientativa calculada con 1 contrato del futuro ES
              a 50 $ por punto. El resultado económico cambia según el instrumento,
              el número de contratos y la gestión de cada operación.
              No incluyen comisiones y no representan resultados futuros.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[860px] border-t border-white/[0.12] pt-9 text-center">

            <p className="font-display text-2xl font-black leading-[1.2] text-white sm:text-3xl">
              Una operación aislada no define a un trader.
              <span className="block text-[#8FD1C9]">
                Importa el proceso y cómo gestionas cada decisión.
              </span>
            </p>

            <p className="mx-auto mt-6 max-w-[760px] text-base leading-7 text-white/[0.62] sm:text-lg sm:leading-8">
              Aquí estás viendo algunos ejemplos de operaciones que han salido
              bien. Pero no todos los días son así. También hay stops,
              operaciones perdedoras y días en los que toca asumir la pérdida
              y seguir trabajando.
            </p>

            <p className="mx-auto mt-4 max-w-[760px] text-base font-bold leading-7 text-white/[0.82] sm:text-lg sm:leading-8">
              El objetivo no es acertar una operación. Es aprender a tomar
              buenas decisiones una y otra vez y saber gestionar también
              cuando el mercado te dice que no.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-[#10231F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-[#8FD1C9]">
              Alumnos
            </p>

            <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Mejor que te lo cuenten ellos.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
              Sin guion y con sus palabras. Personas que han pasado
              por la Mentoría y te cuentan cómo ha sido el proceso.
            </p>
          </div>

          <div className="relative mt-12">
            <div
              ref={testimoniosScrollRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimoniosVideoMentoria.map((testimonio) => {
                const estaActivo =
                  videoTestimonioActivoId === testimonio.id &&
                  reproduciendoTestimonio

                const embedUrl =
                  obtenerYoutubeEmbedAutoplay(
                    testimonio.videoUrl
                  )

                return (
                  <article
                    key={testimonio.id}
                    className="w-[86%] shrink-0 snap-center sm:w-[48%] lg:w-[31.5%]"
                  >
                    <div className="overflow-hidden rounded-[24px] border border-white/[0.13] bg-[#0B1C18] shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
                      {estaActivo && embedUrl ? (
                        <div className="aspect-video bg-black">
                          <iframe
                            src={embedUrl}
                            title={`Testimonio de ${testimonio.nombre}`}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setVideoTestimonioActivoId(
                              testimonio.id
                            )
                            setReproduciendoTestimonio(true)
                          }}
                          className="group relative block aspect-video w-full overflow-hidden bg-black text-left"
                          aria-label={`Ver testimonio de ${testimonio.nombre}`}
                        >
                          <img
                            src={obtenerYoutubeMiniatura(
                              testimonio.videoUrl
                            )}
                            alt={`Testimonio de ${testimonio.nombre}`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                          />

                          <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/25" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-[#071512]/85 shadow-lg backdrop-blur-sm transition duration-200 group-hover:scale-105">
                              <span className="ml-1 block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
                            </span>
                          </div>
                        </button>
                      )}

                      <div className="px-6 py-5 text-center">
                        <p className="font-display text-xl font-black text-white">
                          {testimonio.nombre}
                        </p>

                        <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#8FD1C9]">
                          Alumno Mentoría PEV
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-1 sm:px-3">
              <button
                type="button"
                onClick={() => moverTestimonios(-1)}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-cmr-green bg-cmr-green text-white shadow-[0_12px_30px_rgba(0,0,0,0.32)] transition duration-200 hover:-translate-x-1 hover:border-cmr-greenDark hover:bg-cmr-greenDark sm:h-12 sm:w-12"
                aria-label="Testimonio anterior"
              >
                <ArrowRight
                  className="h-5 w-5 rotate-180"
                  strokeWidth={2.4}
                />
              </button>

              <button
                type="button"
                onClick={() => moverTestimonios(1)}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-cmr-green bg-cmr-green text-white shadow-[0_12px_30px_rgba(0,0,0,0.32)] transition duration-200 hover:translate-x-1 hover:border-cmr-greenDark hover:bg-cmr-greenDark"
                aria-label="Siguiente testimonio"
              >
                <ArrowRight
                  className="h-5 w-5"
                  strokeWidth={2.4}
                />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => moverTestimonios(-1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.16] text-white/[0.72] transition duration-200 hover:border-[#8FD1C9]/60 hover:bg-white/[0.06] hover:text-white"
                aria-label="Testimonio anterior"
              >
                <ArrowRight
                  className="h-4 w-4 rotate-180"
                  strokeWidth={2.4}
                />
              </button>

              <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-white/[0.38]">
                Desliza para ver más testimonios
              </p>

              <button
                type="button"
                onClick={() => moverTestimonios(1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.16] text-white/[0.72] transition duration-200 hover:border-[#8FD1C9]/60 hover:bg-white/[0.06] hover:text-white"
                aria-label="Siguiente testimonio"
              >
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2.4}
                />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* PREGUNTAS + MODALIDADES */}
      <section
        id="reserva"
        className="scroll-mt-8 border-t border-white/10 bg-cmr-dark py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[850px] text-center">
            <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.28em] text-[#8FD1C9]">
              Antes de elegir tu modalidad
            </p>

            <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Mejor dejar algunas cosas claras.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-white/[0.56] sm:text-lg sm:leading-8">
              Las tres modalidades comparten la metodología PEV y las clases.
              Lo que cambia es el tiempo de acceso y el acompañamiento.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:gap-16">

            <div>
              <div className="border-t border-white/[0.13]">
                {preguntas.map((item, index) => (
                  <details
                    key={item.pregunta}
                    className="group border-b border-white/[0.13]"
                  >
                    <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_44px] items-center gap-4 py-6 text-left [&::-webkit-details-marker]:hidden sm:grid-cols-[54px_1fr_48px] sm:gap-5 sm:py-7">
                      <span className="font-display text-sm font-black tracking-[0.08em] text-cmr-gold/65 sm:text-base">
                        0{index + 1}
                      </span>

                      <span className="font-display text-xl font-black leading-[1.15] text-white sm:text-2xl">
                        {item.pregunta}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] text-xl font-light text-[#8FD1C9] transition duration-200 group-hover:border-[#8FD1C9]/45 group-open:rotate-45 group-open:border-[#8FD1C9]/55 group-open:bg-[#8FD1C9]/10 sm:h-11 sm:w-11">
                        +
                      </span>
                    </summary>

                    <div className="grid grid-cols-[42px_1fr_44px] gap-4 pb-8 sm:grid-cols-[54px_1fr_48px] sm:gap-5">
                      <span />

                      <p className="max-w-3xl text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
                        {item.respuesta}
                      </p>

                      <span />
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#10231F] p-6 shadow-[0_28px_85px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cmr-green via-[#8FD1C9] to-cmr-gold" />

                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cmr-gold">
                  Elige tu modalidad
                </p>

                <h3 className="mt-4 font-display text-3xl font-black leading-[1.1] text-white sm:text-4xl">
                  La misma formación PEV. Distinto acompañamiento.
                </h3>

                <p className="mt-5 text-base leading-7 text-white/[0.62] sm:text-lg sm:leading-8">
                  Puedes aprender desde cero o mejorar tu operativa si ya
                  tienes experiencia. Siempre con una clase semanal de
                  teoría y otra de práctica en directo.
                </p>

                <div className="mt-7 border-t border-white/[0.12] pt-6">
                  <h4 className="font-display text-xl font-black text-white">
                    PEV Anual y PEV Flexible
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/[0.64]">
                    Anual: 12 meses de formación, clases y sala de trading
                    con pago único. Flexible: hasta seis cuotas mensuales,
                    sin permanencia; 12 meses de formación y clases si
                    completas los pagos y sala incluida durante los seis
                    meses de pago activo.
                  </p>

                  <a
                    href={PLANES_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cmr-green px-6 py-3 text-center text-sm font-extrabold text-white transition duration-200 hover:bg-cmr-greenDark"
                  >
                    Ver planes en Comudia

                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-7 border-t border-white/[0.12] pt-6">
                  <h4 className="font-display text-xl font-black text-white">
                    PEV Premium
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/[0.64]">
                    14 meses de acompañamiento personalizado, con
                    correcciones individuales y reuniones 1 a 1 cuando
                    sean necesarias. Incluye 12 meses de sala de trading
                    y acceso permanente a los contenidos formativos.
                    Primero tenemos que hablar.
                  </p>

                  <a
                    href={RESERVA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#8FD1C9]/60 bg-transparent px-6 py-3 text-center text-sm font-extrabold text-white transition duration-200 hover:bg-white/[0.08]"
                  >
                    Reservar cita para Premium

                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

              </div>

              <p className="mt-5 text-center text-sm leading-6 text-white/[0.38]">
                La reunión previa es necesaria únicamente para Premium.
                En Anual y Flexible puedes consultar y contratar directamente.
              </p>
            </div>

          </div>
        </div>
      </section>

      {mostrarSubir && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
          className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] bg-[#10231F]/95 text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8FD1C9]/60 hover:bg-cmr-green sm:bottom-7 sm:right-7 sm:h-12 sm:w-12"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp
            className="h-5 w-5"
            strokeWidth={2.4}
          />
        </button>
      )}

      <footer className="border-t border-white/10 bg-[#061310] py-8">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-5 px-5 text-sm text-white/[0.38] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © CMRBolsa · Carlos Martín Rodríguez
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/aviso-legal"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/70"
            >
              Aviso legal
            </Link>

            <Link
              to="/politica-privacidad"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/70"
            >
              Privacidad
            </Link>

            <Link
              to="/politica_de_cookies"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/70"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
