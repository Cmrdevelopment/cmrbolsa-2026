import {
  useEffect,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUp,
  CalendarDays,
  Check,
  X,
} from 'lucide-react'

import BunnyVideo from '../../components/media/BunnyVideo'
import { siteConfig } from '../../data/siteConfig'
import { obtenerTestimonios } from '../../data/testimonios'

const CALENDLY_URL =
  'https://calendly.com/cmrbolsa/sesion-estrategica'

const proceso = [
  {
    numero: '01',
    titulo: 'Primero, aprender a leer',
    texto:
      'Precio, estructura y volumen. Antes de pensar en entrar tienes que saber qué está haciendo el mercado y dónde estás metido.',
  },
  {
    numero: '02',
    titulo: 'Después, gráficos. Muchos.',
    texto:
      'Aquí no aprendes mirándome a mí. Aprendes trabajando. Vas a hacer entre 500 y 700 gráficos y ejercicios durante el proceso.',
  },
  {
    numero: '03',
    titulo: 'Te los corrijo',
    texto:
      'Me mandas el trabajo y lo revisamos. Te digo qué estás viendo bien, dónde te estás equivocando y qué necesitas volver a trabajar.',
  },
  {
    numero: '04',
    titulo: 'Y después, a operar',
    texto:
      'Cuando la lectura empieza a estar asentada entramos en timing, gestión, plan de trading y operativa, poco a poco y sin correr.',
  },
]

const incluye = [
  'Formación completa del método PEV',
  'Entre 500 y 700 gráficos y ejercicios',
  'Te corrijo personalmente el trabajo que me mandas',
  'Reuniones grupales semanales para revisar cómo vas',
  'Si te atascas de verdad, nos sentamos uno a uno',
  'Acceso a la Comunidad PEV',
  'Sala de trading incluida durante el primer año',
  'Timing, gestión y parte emocional cuando toque',
]

const noEs = [
  'Que te diga cuándo comprar y cuándo vender',
  'Copiar una estrategia sin entender lo que haces',
  'Ver vídeos y pensar que con eso ya está',
  'Buscar ganar dinero rápido sin pasar por el trabajo',
]

const siEs = [
  'Aprender a leer lo que tienes delante',
  'Hacer gráficos, equivocarte y corregir',
  'Tener seguimiento mientras estás trabajando',
  'Llegar a tomar tus propias decisiones',
]

const testimoniosMentoria = obtenerTestimonios({
  categoria: 'mentoria',
  tipo: 'texto',
})

const testimoniosVideoMentoria = obtenerTestimonios({
  categoria: 'mentoria',
  tipo: 'video',
})
  .filter(
    (testimonio) =>
      testimonio.videoUrl &&
      !testimonio.videoUrl.includes('/shorts/')
  )
  .slice(0, 6)

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

function resumirTestimonio(texto, maximo = 320) {
  if (!texto) {
    return ''
  }

  if (texto.length <= maximo) {
    return texto
  }

  return `${texto.slice(0, maximo).trim()}...`
}

const preguntas = [
  {
    pregunta: '¿Cuánto dura la Mentoría PEV?',
    respuesta:
      'No hay una fecha cerrada. Mientras estés trabajando, mandando ejercicios y siendo constante, seguimos. Cada persona necesita su tiempo y no tendría sentido ponerte una fecha porque sí.',
  },
  {
    pregunta: '¿Cuánto tiempo tengo que dedicar?',
    respuesta:
      'Como referencia, entre 4 y 6 horas a la semana. No tienes que estar todo el día delante del gráfico, pero sí sacar tiempo para trabajar, hacer ejercicios y mandármelos para poder corregirlos.',
  },
  {
    pregunta: '¿Tengo que tener experiencia?',
    respuesta:
      'No. Puedes empezar desde bastante abajo. Lo importante es que estés dispuesto a aprender desde la base, trabajar y seguir los pasos sin querer correr más de la cuenta.',
  },
  {
    pregunta: '¿Me vais a decir cuándo comprar o vender?',
    respuesta:
      'No. Si buscas señales, esta Mentoría no es para eso. Quiero que aprendas a leer el mercado y que llegue un momento en el que puedas tomar tus propias decisiones sin esperar a que yo te diga qué hacer.',
  },
  {
    pregunta: '¿Qué ocurre si me bloqueo?',
    respuesta:
      'Lo vemos. Si con las correcciones y las reuniones no conseguimos salir del atasco, nos sentamos uno a uno, vemos dónde está el problema y trabajamos desde ahí.',
  },
]

function CalendlyEmbebido() {
  return (
    <iframe
      src={CALENDLY_URL}
      title="Reserva una sesión de valoración para la Mentoría PEV"
      className="h-[calc(94vh-82px)] w-full border-0 bg-white"
      style={{ minWidth: '320px' }}
      loading="eager"
    />
  )
}

function Cta({
  children = 'Reservar cita',
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
  const [respuestaFiltro, setRespuestaFiltro] =
    useState(null)
  const [
    mostrarCalendarioPopup,
    setMostrarCalendarioPopup,
  ] = useState(false)
  const [
    testimonioAbiertoId,
    setTestimonioAbiertoId,
  ] = useState(null)
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

  const videoTestimonioRef = useRef(null)

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

  useEffect(() => {
    if (
      !mostrarCalendarioPopup &&
      !testimonioAbiertoId
    ) {
      return
    }

    const overflowAnterior =
      document.body.style.overflow

    const cerrarConEscape = (event) => {
      if (event.key === 'Escape') {
        setMostrarCalendarioPopup(false)
        setTestimonioAbiertoId(null)
      }
    }

    document.body.style.overflow = 'hidden'

    window.addEventListener(
      'keydown',
      cerrarConEscape
    )

    return () => {
      document.body.style.overflow =
        overflowAnterior

      window.removeEventListener(
        'keydown',
        cerrarConEscape
      )
    }
  }, [
    mostrarCalendarioPopup,
    testimonioAbiertoId,
  ])

  const testimonioPopup =
    testimoniosMentoria.find(
      (testimonio) =>
        testimonio.id === testimonioAbiertoId
    ) ?? null

  const videoTestimonioActivo =
    testimoniosVideoMentoria.find(
      (testimonio) =>
        testimonio.id ===
        videoTestimonioActivoId
    ) ?? testimoniosVideoMentoria[0]

  const videoTestimonioEmbed =
    obtenerYoutubeEmbedAutoplay(
      videoTestimonioActivo?.videoUrl
    )

  return (
    <div className="min-h-screen overflow-hidden bg-cmr-dark text-white selection:bg-cmr-green/40">

      {/* HERO */}
      <section className="relative min-h-[92vh] border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-[4vw] top-[6vh] select-none font-display text-[28vw] font-black leading-none tracking-[-0.08em] text-white/[0.018]">
            PEV
          </div>

          <div className="absolute left-0 top-[150px] h-px w-[34%] bg-white/[0.08]" />

          <div className="absolute right-0 top-[150px] h-px w-[54%] bg-white/[0.08]" />

          <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.10]" />

          <div className="absolute bottom-0 left-[12%] h-px w-[34%] bg-cmr-gold/50" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-[1440px] flex-col px-5 pb-14 pt-7 sm:px-8 lg:px-12 lg:pb-20 lg:pt-9">

          <div className="flex items-center justify-between gap-6">
            <img
              src={siteConfig.logoUrl}
              alt="CMRBolsa"
              className="h-auto w-[150px] brightness-0 invert sm:w-[175px]"
            />

            <Cta className="hidden sm:inline-flex">
              Reservar cita
            </Cta>
          </div>

          <div className="grid flex-1 gap-12 pb-4 pt-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-14 lg:pt-8">

            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#91D3CB]">
                Mentoría PEV · CMRBolsa
              </p>

              <h1 className="mt-6 font-display text-[clamp(3.2rem,6.2vw,6.6rem)] font-black leading-[0.9] tracking-[-0.055em] text-white">
                Trading
                <span className="block text-[#8FD1C9]">
                  sin atajos.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/[0.74] sm:text-xl sm:leading-9">
                Si quieres aprender a leer el mercado de verdad,
                aquí vas a tener que trabajar. Vas a hacer
                gráficos, enviarlos, corregirlos y repetir hasta
                que empieces a entender qué tienes delante.
              </p>

              <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Cta className="w-full sm:w-auto">
                  Quiero saber si encaja conmigo
                </Cta>

                <p className="max-w-sm text-sm leading-6 text-white/[0.52]">
                  Aquí no hay señales ni atajos. Primero ves
                  cómo trabajamos y, si te encaja, hablamos.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.16] bg-[#10231F] p-2 shadow-[0_35px_110px_rgba(0,0,0,0.42)] sm:p-3">

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cmr-green/10 blur-3xl" />

                <BunnyVideo
                  libraryId="710893"
                  videoId="a3d266db-42dc-4417-948e-b5a0a064367c"
                  title="Vídeo principal de la Mentoría PEV"
                  posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1785171609/cmrbolsa/Mentoria_PEV_reduced_whqywz.png"
                  className="relative aspect-video overflow-hidden rounded-[22px]"
                  cargaAlPulsar
                />

                <div className="flex flex-col gap-3 px-3 pb-2 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8FD1C9]">
                      Mentoría PEV
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/[0.58]">
                      Si estás pensando en entrar en la Mentoría,
                      empieza por aquí.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-white/[0.14] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/[0.62]">
                    Empieza aquí
                  </span>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-10 grid border-y border-white/[0.14] sm:grid-cols-3 lg:mt-14">

            <div className="py-7 sm:py-8 sm:pr-8">
              <p className="font-display text-5xl font-black leading-none tracking-[-0.04em] text-white sm:text-6xl">
                500–700
              </p>

              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8FD1C9]">
                gráficos y ejercicios
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/[0.46]">
                No los haces por hacer. Los haces, me los mandas
                y los vamos corrigiendo.
              </p>
            </div>

            <div className="border-t border-white/[0.14] py-7 sm:border-l sm:border-t-0 sm:px-8 sm:py-8">
              <p className="font-display text-5xl font-black leading-none tracking-[-0.04em] text-white sm:text-6xl">
                4–6 h
              </p>

              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8FD1C9]">
                por semana
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/[0.46]">
                No es una regla exacta, pero sí una referencia
                realista para poder mantener continuidad.
              </p>
            </div>

            <div className="border-t border-white/[0.14] py-7 sm:border-l sm:border-t-0 sm:pl-8 sm:py-8">
              <p className="font-display text-5xl font-black leading-none tracking-[-0.04em] text-white sm:text-6xl">
                10
              </p>

              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cmr-gold">
                personas máximo
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/[0.46]">
                No quiero meter a 50 personas. Si te corrijo el
                trabajo, necesito tiempo para hacerlo bien.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRABAJO + PROCESO */}
      <section className="border-y border-white/10 bg-[#0B1C18] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-gold">
                Cómo trabajamos
              </p>

              <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Aquí se viene a trabajar.
              </h2>
            </div>

            <div className="max-w-3xl border-l border-white/[0.14] pl-6 sm:pl-9">
              <p className="text-xl leading-9 text-white/[0.74] sm:text-2xl sm:leading-10">
                Ver vídeos y entender lo que te explican es
                relativamente fácil. Lo difícil llega cuando
                te pongo un gráfico delante y eres tú quien
                tiene que decirme qué está pasando ahí.
              </p>

              <p className="mt-6 text-base leading-8 text-white/[0.52] sm:text-lg">
                Por eso aquí vas a hacer gráficos. Muchos.
                Me los mandas, los corrijo, vemos qué has
                entendido, qué no, y vuelves a trabajar.
                Así una vez detrás de otra hasta que lo que
                antes no veías empiece a ser evidente.
              </p>
            </div>

          </div>

          <div className="mt-16 border-t border-white/[0.13] lg:mt-20">

            {proceso.map((item) => (
              <div
                key={item.numero}
                className="grid gap-4 border-b border-white/[0.13] py-7 sm:grid-cols-[90px_.75fr_1.25fr] sm:items-start sm:gap-8 sm:py-9"
              >
                <p className="font-display text-2xl font-black text-cmr-gold/75">
                  {item.numero}
                </p>

                <h3 className="font-display text-2xl font-black leading-tight text-white sm:text-3xl">
                  {item.titulo}
                </h3>

                <p className="max-w-2xl text-base leading-8 text-white/[0.58] sm:text-lg">
                  {item.texto}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* QUÉ INCLUYE + VÍDEO */}
      <section className="bg-[#F1EEE5] py-20 text-cmr-ink sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16 lg:px-12">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-greenDark">
              Mentoría PEV
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              No quiero que operes porque yo te diga dónde
              entrar. Quiero que aprendas a verlo tú.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-cmr-muted">
              Y para eso hay que trabajar. Me mandas tus
              gráficos, los corrijo y vamos viendo qué entiendes,
              dónde te estás equivocando y qué necesitas repetir.
              Ahí es donde realmente empiezas a avanzar.
            </p>

            <div className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {incluye.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-t border-cmr-ink/12 pt-4"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-cmr-green"
                    strokeWidth={3}
                  />

                  <p className="text-sm font-bold leading-6 text-cmr-ink/[0.78]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-[28px] bg-[#10231F] p-2 shadow-[0_28px_80px_rgba(7,21,18,0.20)] sm:p-3">

              <BunnyVideo
                libraryId="710893"
                videoId="a3d266db-42dc-4417-948e-b5a0a064367c"
                title="Presentación de la Mentoría PEV"
                posterUrl="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1785171609/cmrbolsa/Mentoria_PEV_reduced_whqywz.png"
                className="aspect-video overflow-hidden rounded-[21px]"
                cargaAlPulsar
              />

              <div className="px-4 pb-4 pt-5 sm:px-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cmr-gold">
                  Dentro de la Mentoría
                </p>

                <p className="mt-2 text-sm leading-6 text-white/[0.62]">
                  Aquí te explico con más detalle cómo entiendo
                  la Mentoría PEV y el trabajo que hacemos
                  durante el aprendizaje.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* QUÉ ES / QUÉ NO ES */}
      <section className="bg-[#0B1C18] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-gold">
              Antes de seguir
            </p>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Esto no es para todo el mundo. Y prefiero que lo sepas antes.
            </h2>
          </div>

          <div className="mt-14 grid gap-12 border-t border-white/[0.13] pt-10 lg:grid-cols-2 lg:gap-20">

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/[0.38]">
                Esto no lo vas a encontrar aquí
              </p>

              <div className="mt-6">
                {noEs.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/[0.12] py-5"
                  >
                    <p className="font-display text-lg font-black text-cmr-gold/60">
                      0{index + 1}
                    </p>

                    <p className="font-display text-xl font-black leading-tight text-white/[0.62] sm:text-2xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/[0.44]">
                Si vienes buscando alguna de estas cosas,
                mejor saberlo ahora y no perder el tiempo ni tú ni yo.
              </p>
            </div>

            <div className="lg:border-l lg:border-white/[0.13] lg:pl-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#8FD1C9]">
                Esto sí
              </p>

              <div className="mt-6">
                {siEs.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/[0.12] py-5"
                  >
                    <p className="font-display text-lg font-black text-[#8FD1C9]/70">
                      0{index + 1}
                    </p>

                    <p className="font-display text-xl font-black leading-tight text-white sm:text-2xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/[0.54]">
                Si vienes dispuesto a trabajar así, entonces
                ya estamos hablando de lo mismo.
              </p>
            </div>

          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.13] pt-8 md:flex-row md:items-center md:justify-between">

            <p className="max-w-2xl text-lg leading-8 text-white/[0.58]">
              Si lo que has leído hasta aquí es lo que buscas,
              sigue. Todavía quiero enseñarte alguna cosa más
              antes de que reserves una cita.
            </p>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById('compromiso')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
              }
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cmr-green px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(50,128,119,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-cmr-greenDark md:w-auto"
            >
              Quiero seguir viendo
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

          </div>

        </div>
      </section>

      {/* CONSTANCIA */}
      <section
        id="compromiso"
        className="scroll-mt-8 border-y border-white/10 bg-cmr-dark py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-gold">
                El compromiso
              </p>

              <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl">
                No te voy a meter prisa. Pero sí te voy a pedir constancia.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/[0.74] sm:text-2xl sm:leading-10">
                Cada alumno lleva su ritmo. Hay quien necesita
                más tiempo y quien avanza más rápido. Mientras
                estés trabajando y seas constante, seguimos.
              </p>

              <p className="mt-6 text-base leading-8 text-white/[0.52] sm:text-lg">
                Lo que no funciona es desaparecer durante semanas o meses
                y volver como si nada. Si dejas de mandar trabajo
                y no hay continuidad, se termina el seguimiento
                y la corrección de ejercicios. Podrás seguir
                teniendo acceso a la formación, a la comunidad
                y a las reuniones, pero el acompañamiento necesita
                que tú también hagas tu parte.
              </p>

              <div className="mt-10 grid border-y border-white/[0.13] sm:grid-cols-2">

                <div className="py-7 sm:pr-8">
                  <p className="font-display text-4xl font-black tracking-[-0.04em] text-white">
                    4–6 h
                  </p>

                  <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8FD1C9]">
                    por semana
                  </p>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/[0.48]">
                    Como referencia para mantener continuidad
                    y un ritmo de trabajo que permita avanzar.
                  </p>
                </div>

                <div className="border-t border-white/[0.13] py-7 sm:border-l sm:border-t-0 sm:pl-8">
                  <p className="font-display text-4xl font-black tracking-[-0.04em] text-white">
                    Trabajo
                    <span className="text-cmr-gold"> + </span>
                    corrección
                  </p>

                  <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-cmr-gold">
                    durante el aprendizaje
                  </p>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/[0.48]">
                    Necesito material real sobre el que podamos
                    corregir, repetir y seguir avanzando.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-[#10231F] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#8FD1C9]">
              Alumnos
            </p>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Mejor que te lo cuenten ellos.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {testimoniosMentoria.map((testimonio) => {
              const textoMostrado =
                resumirTestimonio(
                  testimonio.texto,
                  320
                )

              return (
                <figure
                  key={testimonio.id}
                  className="flex h-full flex-col rounded-[28px] border border-white/[0.12] bg-[#0D201C] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cmr-gold/35 bg-cmr-gold/10 font-display text-lg font-black uppercase text-cmr-gold">
                      {testimonio.nombre.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FD1C9]">
                        {testimonio.nombre}
                      </p>

                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/[0.32]">
                        Alumno Mentoría PEV
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-14 bg-cmr-gold/70" />

                  <blockquote className="mt-6 whitespace-pre-line text-base leading-8 text-white/[0.74] sm:text-lg">
                    “{textoMostrado}”
                  </blockquote>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.12] pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        setTestimonioAbiertoId(
                          testimonio.id
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/[0.68] transition hover:border-[#8FD1C9]/60 hover:text-white"
                    >
                      Leer completo
                    </button>

                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/[0.28]">
                      Testimonio real
                    </p>
                  </div>
                </figure>
              )
            })}

          </div>

          <div className="mt-14 border-t border-white/[0.13] pt-12">

            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-14">

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-gold">
                  Testimonios en vídeo
                </p>

                <h3 className="mt-4 max-w-md font-display text-3xl font-black leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                  Algunos prefirieron contarlo en vídeo.
                </h3>

                <p className="mt-5 max-w-md text-base leading-8 text-white/[0.56]">
                  Sin guion y con sus palabras. Te cuentan cómo
                  han vivido la Mentoría, cuánto han trabajado
                  y qué ha cambiado en su forma de ver el mercado.
                </p>
              </div>

              {videoTestimonioActivo && (
                <div
                  ref={videoTestimonioRef}
                  className="w-full scroll-mt-6 max-w-[760px] lg:ml-auto"
                >

                  {reproduciendoTestimonio &&
                  videoTestimonioEmbed ? (
                    <div className="aspect-video overflow-hidden rounded-[24px] border border-white/[0.14] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                      <iframe
                        src={videoTestimonioEmbed}
                        title={`Testimonio de ${videoTestimonioActivo.nombre}`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        setReproduciendoTestimonio(true)
                      }
                      className="group relative block aspect-video w-full overflow-hidden rounded-[24px] border border-white/[0.14] bg-black text-left shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
                      aria-label={`Ver testimonio de ${videoTestimonioActivo.nombre}`}
                    >
                      <img
                        src={obtenerYoutubeMiniatura(
                          videoTestimonioActivo.videoUrl
                        )}
                        alt={`Testimonio de ${videoTestimonioActivo.nombre}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
                      />

                      <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-[#0A1B17]/85 shadow-lg backdrop-blur-sm transition duration-200 group-hover:scale-105">
                          <span className="ml-1 block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent px-6 pb-5 pt-16">
                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8FD1C9]">
                          {videoTestimonioActivo.nombre}
                        </p>
                      </div>
                    </button>
                  )}

                </div>
              )}

            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

              {testimoniosVideoMentoria
                .filter(
                  (testimonio) =>
                    testimonio.id !==
                    videoTestimonioActivo?.id
                )
                .map((testimonio) => (
                  <button
                    key={testimonio.id}
                    type="button"
                    onClick={() => {
                      const esMovil =
                        window.matchMedia(
                          '(max-width: 1023px)'
                        ).matches

                      setVideoTestimonioActivoId(
                        testimonio.id
                      )

                      setReproduciendoTestimonio(
                        esMovil
                      )

                      if (esMovil) {
                        window.setTimeout(() => {
                          videoTestimonioRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                          })
                        }, 120)
                      }
                    }}
                    className="group text-left"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-[18px] border border-white/[0.11] bg-black transition duration-200 group-hover:border-[#8FD1C9]/50">

                      <img
                        src={obtenerYoutubeMiniatura(
                          testimonio.videoUrl
                        )}
                        alt={`Testimonio de ${testimonio.nombre}`}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                      />

                      <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/25" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-[#0A1B17]/80 backdrop-blur-sm">
                          <span className="ml-0.5 block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
                        </span>
                      </div>

                    </div>

                    <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white/[0.58] transition group-hover:text-[#8FD1C9]">
                      {testimonio.nombre}
                    </p>
                  </button>
                ))}

            </div>

          </div>
        </div>
      </section>

      {/* CARLOS */}
      <section className="bg-[#F1EEE5] py-20 text-cmr-ink sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:gap-16 lg:px-12">

          <div className="relative mx-auto w-full max-w-[460px] lg:mx-0">

            <div className="pointer-events-none absolute -inset-7 rounded-[3rem] bg-cmr-green/10 blur-[45px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-cmr-ink/10 bg-white shadow-[0_24px_70px_rgba(7,21,18,0.18)]">
              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1000/v1784914913/cmrbolsa/CARLOS_IMAGE_URL_02_reduced_fk9h9f.png"
                alt="Carlos Martín Rodríguez"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="lazy"
              />
            </div>

          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-greenDark">
              Quién está al otro lado
            </p>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Soy Carlos. Y mi objetivo es que llegue un momento
              en el que no me necesites para operar.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-cmr-muted">
              No estoy aquí para decirte compra aquí o vende allí.
              Estoy para enseñarte a leer el gráfico, corregirte
              cuando te equivocas y hacerte trabajar hasta que
              empieces a tomar tus propias decisiones.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-cmr-muted">
              Y a veces eso significa repetir, volver atrás o
              incluso dejar de operar durante un tiempo. Si todavía
              no sabes leer bien el mercado, lo último que necesitas
              es meterle prisa porque quieres ganar dinero ya.
            </p>
          </div>

        </div>
      </section>

      {/* PREGUNTAS */}
      <section className="bg-cmr-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-12">

          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#8FD1C9]">
            Dudas frecuentes
          </p>

          <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl">
            Antes de reservar, mejor dejar esto claro.
          </h2>

          <div className="mt-12 border-t border-white/[0.13]">

            {preguntas.map((item, index) => (
              <details
                key={item.pregunta}
                className="group border-b border-white/[0.13]"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_44px] items-center gap-4 py-7 text-left [&::-webkit-details-marker]:hidden sm:grid-cols-[60px_1fr_48px] sm:gap-6 sm:py-8">

                  <span className="font-display text-sm font-black tracking-[0.08em] text-cmr-gold/65 sm:text-base">
                    0{index + 1}
                  </span>

                  <span className="font-display text-xl font-black leading-tight text-white sm:text-2xl">
                    {item.pregunta}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] text-xl font-light text-[#8FD1C9] transition duration-200 group-hover:border-[#8FD1C9]/45 group-open:rotate-45 group-open:border-[#8FD1C9]/55 group-open:bg-[#8FD1C9]/10 sm:h-11 sm:w-11">
                    +
                  </span>

                </summary>

                <div className="grid grid-cols-[42px_1fr_44px] gap-4 pb-8 sm:grid-cols-[60px_1fr_48px] sm:gap-6">
                  <span />

                  <p className="max-w-3xl text-base leading-8 text-white/[0.56] sm:text-lg">
                    {item.respuesta}
                  </p>

                  <span />
                </div>

              </details>
            ))}

          </div>

        </div>
      </section>

      {/* RESERVA */}
      <section
        id="reserva"
        className="scroll-mt-8 border-t border-white/10 bg-[#0A1B17] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">

            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cmr-gold">
                Antes de reservar
              </p>

              <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl">
                Antes de reservar quiero saber si realmente te encaja.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/[0.54] sm:text-lg">
                Prefiero que tengas claro cómo funciona la Mentoría
                antes de que nos sentemos a hablar. Así no perdemos
                el tiempo ni tú ni yo.
              </p>

              <div className="mt-8 border-l-2 border-cmr-gold pl-5">
                <p className="text-sm font-bold leading-7 text-white/[0.72]">
                  La llamada es simplemente para hablar. Me cuentas
                  dónde estás, vemos qué buscas y te explico cómo
                  trabajamos. Si encaja, seguimos hablando.
                </p>
              </div>
            </div>

            <div>

              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#10231F] p-6 shadow-[0_28px_85px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cmr-green via-[#8FD1C9] to-cmr-gold" />

                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cmr-gold">
                  Una última cosa
                </p>

                <p className="mt-5 font-display text-2xl font-black leading-tight text-white sm:text-3xl">
                  La Mentoría PEV requiere trabajo continuado,
                  constancia, compromiso y una inversión
                  económica importante.
                </p>

                <p className="mt-5 text-lg leading-8 text-white/[0.62]">
                  Si vemos que encaja contigo, ¿estás dispuesto
                  a asumir todo ello?
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  <button
                    type="button"
                    onClick={() => {
                      setRespuestaFiltro('si')
                      setMostrarCalendarioPopup(true)
                    }}
                    className={`min-h-14 rounded-full border px-5 py-4 text-sm font-extrabold uppercase tracking-[0.12em] transition ${
                      respuestaFiltro === 'si'
                        ? 'border-[#8FD1C9] bg-cmr-green text-white'
                        : 'border-white/[0.18] bg-transparent text-white hover:border-[#8FD1C9]/70 hover:bg-white/5'
                    }`}
                  >
                    Sí, estoy dispuesto
                  </button>

                  <button
                    type="button"
                    onClick={() => setRespuestaFiltro('no')}
                    className={`min-h-14 rounded-full border px-5 py-4 text-sm font-extrabold uppercase tracking-[0.12em] transition ${
                      respuestaFiltro === 'no'
                        ? 'border-cmr-gold/70 bg-cmr-gold/10 text-cmr-gold'
                        : 'border-white/[0.18] bg-transparent text-white/70 hover:border-white/[0.35] hover:bg-white/5'
                    }`}
                  >
                    Ahora mismo no
                  </button>

                </div>

                {respuestaFiltro === 'no' && (
                  <div className="mt-6 border-t border-white/[0.12] pt-6">
                    <p className="text-base leading-7 text-white/[0.58]">
                      Entonces es mejor no reservar todavía.
                      Si más adelante puedes asumir el trabajo,
                      la constancia y la inversión que requiere
                      el proceso, podrás volver y valorar la
                      Mentoría con calma.
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </section>

            {testimonioPopup && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={() =>
            setTestimonioAbiertoId(null)
          }
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Testimonio de ${testimonioPopup.nombre}`}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[30px] border border-white/[0.14] bg-[#0D201C] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.55)] sm:p-9"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() =>
                setTestimonioAbiertoId(null)
              }
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] text-white/[0.62] transition hover:border-white/[0.35] hover:bg-white/[0.06] hover:text-white"
              aria-label="Cerrar testimonio"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 pr-14">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cmr-gold/35 bg-cmr-gold/10 font-display text-lg font-black uppercase text-cmr-gold">
                {testimonioPopup.nombre.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FD1C9]">
                  {testimonioPopup.nombre}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/[0.32]">
                  Alumno Mentoría PEV
                </p>
              </div>

            </div>

            <div className="mt-7 h-px w-14 bg-cmr-gold/70" />

            <blockquote className="mt-7 whitespace-pre-line text-base leading-8 text-white/[0.78] sm:text-lg sm:leading-9">
              “{testimonioPopup.texto}”
            </blockquote>

          </div>
        </div>
      )}

        {mostrarCalendarioPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() =>
            setMostrarCalendarioPopup(false)
          }
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Reserva tu sesión"
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/[0.14] bg-[#0B1C18] shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="flex items-center justify-between gap-5 border-b border-white/[0.12] px-5 py-4 sm:px-7 sm:py-5">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cmr-green/15 text-[#8FD1C9]">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-display text-lg font-black text-white sm:text-xl">
                    Reserva tu sesión
                  </p>

                  <p className="mt-0.5 text-xs text-white/[0.46] sm:text-sm">
                    Elige el día y la hora que mejor te encajen.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setMostrarCalendarioPopup(false)
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.14] text-white/[0.65] transition hover:border-white/[0.35] hover:bg-white/[0.06] hover:text-white"
                aria-label="Cerrar calendario"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <div className="min-h-0 flex-1 overflow-hidden bg-white">
              <CalendlyEmbebido />
            </div>

          </div>
        </div>
      )}


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
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.16] bg-[#10231F]/95 text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8FD1C9]/60 hover:bg-cmr-green sm:bottom-7 sm:right-7"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp
            className="h-5 w-5"
            strokeWidth={2.4}
          />
        </button>
      )}


      {/* FOOTER MÍNIMO LEGAL */}
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