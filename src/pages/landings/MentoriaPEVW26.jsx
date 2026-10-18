
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react'
import BunnyVideo from '../../components/media/BunnyVideo'
import { siteConfig } from '../../data/siteConfig'

// ENLACES DE PAGO
// Los añadiremos cuando configuremos Comudia.
const ENLACES_PAGO = {
  unico: '',
  mensual: '',
}

// FOTOGRAFÍA DE CARLOS
const FOTO_CARLOS =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1000/v1784914913/cmrbolsa/CARLOS_IMAGE_URL_02_reduced_fk9h9f.png'

// VÍDEO DE LA LANDING ANTERIOR
// Lo cambiaremos cuando grabes el nuevo.
const VIDEO = {
  libraryId: '710893',
  videoId: 'a3d266db-42dc-4417-948e-b5a0a064367c',
  posterUrl:
    'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1200/v1785171609/cmrbolsa/Mentoria_PEV_reduced_whqywz.png',
}

const incluye = [
  '2 clases semanales en directo: uno de teoría y otro de práctica',
  'Sala de trading de lunes a jueves en apertura',
  'Formación organizada en módulos durante 6 meses',
  'Acceso anticipado a los módulos de cada mes',
  'Ejercicios prácticos y correcciones en grupo',
  'Grabaciones de las clases y biblioteca de vídeos',
  'Comunidad privada y resolución de dudas',
  '12 meses de formación y acompañamiento',
]

const preguntas = [
  {
    pregunta: '¿Me vas a corregir los gráficos y ejercicios?',
    respuesta:
      'Sí. Los ejercicios y gráficos son una parte fundamental de la formación. En las clases prácticas revisaremos los trabajos, analizaremos errores y resolveremos dudas. Además, en la sala de trading veremos las estructuras del mercado en tiempo real. Al ser una mentoría grupal, no incluye correcciones individuales diarias de todos los ejercicios.',
  },
  {
    pregunta: '¿Puedo dejar de pagar si veo que no es para mí?',
    respuesta:
      'Por supuesto. Si eliges la modalidad mensual de 200 €, puedes cancelar cuando quieras, sin permanencia. No tendrás que pagar las mensualidades siguientes y mantendrás el acceso hasta finalizar el periodo abonado. Sin explicaciones ni compromisos adicionales.',
  },
  {
    pregunta: '¿Qué diferencia hay entre los vídeos y las clases en directo?',
    respuesta:
      'Los vídeos pregrabados son la base de tu formación y siguen un orden progresivo. Las clases en directo van mucho más allá: profundizaremos, trabajaremos gráficos reales y resolveremos dudas. Cuanto mejor prepares las clases con los vídeos, más partido les sacarás.',
  },
  {
    pregunta: '¿Cuánto dura la formación y cuánto tiempo tendré acceso?',
    respuesta:
      'El contenido está organizado en seis meses, con un programa completo de 12 meses de formación y acompañamiento. Si realizas el pago único o completas las seis mensualidades, conservarás el acceso hasta finalizar esos 12 meses.',
  },
  {
    pregunta: '¿Puedo avanzar más rápido que los demás?',
    respuesta:
      'Sí. Al comenzar cada mes tendrás disponibles todos los módulos correspondientes a ese periodo. Podrás estudiarlos por adelantado, preparar preguntas y aprovechar mucho mejor las sesiones en directo.',
  },
  {
    pregunta: '¿Qué pasa si no puedo asistir a las clases?',
    respuesta:
      'Las clases quedarán grabadas para que puedas verlas posteriormente y repasarlas mientras tengas acceso al programa. Siempre recomiendo asistir en directo cuando sea posible para poder participar y resolver dudas. Pero si no puedes venir puedes dejar tus preguntas y serán resueltas y las podrás ver en la grabación.',
  },
  {
    pregunta: '¿Las clases son individuales o grupales?',
    respuesta:
      'Son grupales. Tendremos dos sesiones semanales: teoría los lunes y práctica los jueves. También aprenderás de las preguntas y errores de otros compañeros. El programa no incluye clases individuales.',
  },
  {
    pregunta: '¿Qué hacemos en la sala de trading?',
    respuesta:
      'Analizamos el mercado estadounidense en directo, de lunes a jueves. Estudiamos el precio, el volumen, las estructuras y los diferentes escenarios. Podrás ver cómo interpreto el mercado y cómo tomo mis decisiones. No es una sala de señales para copiar operaciones.',
  },
  {
    pregunta: '¿Puedo empezar si tengo pocos conocimientos?',
    respuesta:
      'Sí. La formación comienza por los fundamentos necesarios para entender el precio, el volumen y las estructuras. Lo importante es tener ganas de aprender, estudiar y trabajar con los gráficos.',
  },
  {
    pregunta: '¿Cuánto tiempo tengo que dedicar cada semana?',
    respuesta:
      'Dependerá de tu experiencia y ritmo. Tendrás dos clases semanales, sala de trading, vídeos y ejercicios. No es necesario que estés conectado a todo, pero sí que mantengas constancia. Aprender a interpretar los mercados requiere práctica y muchos gráficos.',
  },
  {
    pregunta: '¿Terminaré preparado para operar con dinero real?',
    respuesta:
      'Si, si lo trabajas y te lo curras. El objetivo es que desarrolles conocimientos y criterio para interpretar los mercados y construir tus propios escenarios. Cada alumno avanza a un ritmo diferente. También tendrás que trabajar la gestión del riesgo, la disciplina y tu plan de trading. No hay garantías de rentabilidad.',
  },
  {
    pregunta: '¿Por qué cuesta 1.000 € o 1.200 € en mensualidades?',
    respuesta:
      'Con el pago único de 1.000 € tienes cubierto todo el programa de 12 meses. Con la modalidad mensual pagas 200 € durante un máximo de seis meses, pero puedes cancelar cuando quieras sin pagar las cuotas restantes. Si completas los seis pagos, mantendrás el acceso hasta finalizar tus 12 meses.',
  },
  
  {
    pregunta: '¿Y si quiero tutorías individuales y correcciones personalizadas?',
    respuesta:
      'Si buscas un acompañamiento más personalizado, también tienes la posibilidad de acceder a la Mentoría PEV Premium. Esta modalidad está pensada para quienes quieren trabajar de forma más individual conmigo, profundizar en sus dificultades y recibir correcciones personalizadas de sus gráficos y ejercicios. La Mentoría Premiun tiene unas condiciones y un precio propios que se explican por separado.',
  },
  {
    pregunta: 'Si los contenidos duran seis meses, ¿qué ocurre durante los otros seis?',
    respuesta:
      'La formación no termina a los seis meses. Durante los primeros seis meses iremos desarrollando los contenidos del Método PEV de forma estructurada y progresiva. Durante los siguientes seis meses seguirás asistiendo a las clases de teoría y práctica, participando en la sala de trading, resolviendo dudas y trabajando con los gráficos. Podrás volver a asistir a las clases mientras tengas acceso al programa, repasar conceptos y continuar avanzando. No son seis meses de formación y otros seis en los que te quedas solo. Son 12 meses de aprendizaje y acompañamiento.',
  },
  
  {
    pregunta: '¿Y si después de los 12 meses quiero seguir en la comunidad?',
    respuesta:
      '¡Por supuesto! Cuando termines tu año de formación, podrás seguir con nosotros si lo deseas. Simplemente tendrás la posibilidad de contratar la Sala de Trading, que también te permitirá seguir formando parte de la Comunidad PEV, asistir a las reuniones grupales y participar en los análisis diarios del mercado por un precio mínimo mensual. Podrás continuar aprendiendo, compartiendo experiencias y resolviendo dudas conmigo y con tus compañeros. No tendrás que volver a pagar la mentoría, solamente la cuota correspondiente a la Sala de Trading si decides continuar. Porque aprender a interpretar los mercados es un proceso que no termina en 12 meses.',
  },
  
  {
    pregunta: '¿Qué tengo que hacer para entrar en la Mentoría PEV?',
    respuesta:
      'Muy sencillo. Solo tienes que elegir la modalidad de pago que prefieras: 1.000 € en un único pago, con acceso a los 12 meses de formación, o 200 € al mes durante un máximo de seis mensualidades, sin permanencia y con posibilidad de cancelar cuando quieras. Una vez realizada la inscripción, recibirás las indicaciones para empezar tu formación. ¡Nos vemos dentro!',
    enlace: '#precios',
    textoEnlace: 'Elegir mi modalidad de pago',
  },



]

// BOTÓN DE COMPRA
function BotonPago({
  modalidad,
  children,
  destacado = false,
}) {
  const url = ENLACES_PAGO[modalidad]

  const estilos = destacado
    ? 'bg-white text-[#15594E] hover:bg-[#EDF8F1]'
    : 'bg-[#15594E] text-white hover:bg-[#0C463C]'

  if (!url) {
    return (
      <div>
        <button
          type="button"
          disabled
          className={`flex min-h-[52px] w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl px-5 py-3 font-extrabold opacity-70 ${estilos}`}
        >
          {children}
          <ArrowRight size={18} />
        </button>
        <p className={`mt-2 text-center text-xs ${
          destacado ? 'text-white/75' : 'text-[#7C827A]'
        }`}>
          Próximamente disponible
        </p>
      </div>
    )
  }

  return (
    <a
      href={url}
      className={`flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-extrabold transition ${estilos}`}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  )
}

// LANDING COMPLETA

export default function MentoriaPEVW26() {
  useEffect(() => {
    // Eliminar anclas anteriores al abrir la página
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname + window.location.search
      )
    }

    // Mostrar siempre la portada al entrar
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (

    <div className="min-h-screen bg-[#FCFDFB] text-[#163B30]">

      {/* CABECERA */}
      <header className="sticky top-0 z-40 border-b border-[#E1EDE4] bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex min-h-[74px] max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#inicio" aria-label="Volver al inicio">
            <img
              src={siteConfig.logoUrl}
              alt="CMRBolsa"
              className="h-auto w-[145px] object-contain sm:w-[175px]"
            />
          </a>

          <a
            href="#precios"
            className="inline-flex items-center gap-2 rounded-full bg-[#15594E] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0C463C]"
          >
            Ver precios
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* PORTADA */}
      <section
        id="inicio"
        className="scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_90%_5%,#E3F3E8,transparent_60%)]"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.12fr_.88fr] lg:gap-12">

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[.16em] text-[#39816C]">
              Mentoría PEV · CMRBolsa
            </p>

            <h1 className="font-display text-[clamp(2.8rem,5.2vw,4.9rem)] font-black leading-[1.04] tracking-[-.055em]">
              Aprende a leer el mercado.
              <span className="block text-[#428F74]">
                Y a pensar por ti.
              </span>
            </h1>

            <p className="mt-5 max-w-[600px] text-lg leading-8 text-[#546C5F]">
              Aprende el método PEV con clases en directo,
              práctica sobre gráficos y sala de trading.
              Sin señales, sin atajos y sin promesas
              de rentabilidad.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold text-[#24634F]">
              <span className="rounded-full bg-[#E6F2E8] px-3 py-2">
                12 meses de formación
              </span>
              <span className="rounded-full bg-[#E6F2E8] px-3 py-2">
                6 meses de contenidos
              </span>
              <span className="rounded-full bg-[#E6F2E8] px-3 py-2">
                Desde 200 €/mes
              </span>
            </div>

            <a
              href="#precios"
              className="mt-7 inline-flex min-h-[54px] items-center gap-3 rounded-xl bg-[#15594E] px-7 py-3.5 font-black text-white shadow-lg transition hover:bg-[#0C463C]"
            >
              Quiero empezar
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[395px] lg:mr-0">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[28px] bg-[#DDEFE3]" />
            <img
              src={FOTO_CARLOS}
              alt="Carlos Martín Rodríguez, creador del método PEV"
              className="relative aspect-[4/5] w-full rounded-[28px] object-cover shadow-[0_18px_52px_rgba(24,69,51,.13)]"
            />
          </div>

        </div>
      </section>

      {/* VÍDEO Y CONTENIDOS */}
      <section
        id="programa"
        className="bg-[#F1F7F1] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-9 lg:grid-cols-2 lg:gap-12">

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[.16em] text-[#418A6E]">
              Conoce la formación
            </p>

            <div className="overflow-hidden rounded-[25px] border border-[#D6E6DC] bg-black shadow-[0_18px_50px_rgba(25,68,45,.12)]">
              <BunnyVideo
                libraryId={VIDEO.libraryId}
                videoId={VIDEO.videoId}
                posterUrl={VIDEO.posterUrl}
                title="Presentación de la Mentoría PEV"
                cargaAlPulsar
                className="aspect-video overflow-hidden"
              />
            </div>

          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[.16em] text-[#418A6E]">
              Aprende, practica y avanza
            </p>

            <h2 className="font-display text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">
              Vídeos para prepararte.
              Clases para avanzar.
            </h2>

            <ul className="mt-6 space-y-3">
              {incluye.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-6 text-[#466457]"
                >
                  <Check
                    size={19}
                    className="mt-0.5 shrink-0 text-[#278963]"
                    strokeWidth={3}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-extrabold text-[#215844]">
              El objetivo es que aprendas a interpretar
              el mercado y tomar tus propias decisiones.
            </p>
          </div>

        </div>
      </section>

      {/* PRECIOS */}
      <section
        id="precios"
        className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[930px]">

          <div className="mb-9 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[.16em] text-[#438A71]">
              Tú eliges
            </p>

            <h2 className="font-display text-3xl font-black tracking-[-.04em] sm:text-4xl">
              La Mentoría PEV.
              Dos formas de empezar.
            </h2>

            <p className="mt-3 text-[#647B6D]">
              El mismo programa y acompañamiento.
              Tú eliges cómo pagarlo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* PAGO ÚNICO */}
            <article className="flex flex-col rounded-[25px] border border-[#DBEADF] bg-[#FAFCFA] p-7 sm:p-8">

              <p className="text-xs font-black uppercase tracking-[.15em] text-[#658070]">
                Pago único
              </p>

              <p className="mt-3 font-display text-5xl font-black tracking-[-.055em]">
                1.000 €
              </p>

              <p className="mt-4 flex-1 text-[15px] leading-7 text-[#5B7265]">
                Un único pago y acceso a los 12 meses
                completos de formación, clases,
                sala de trading y acompañamiento.
              </p>

              <div className="mt-7">
                <BotonPago modalidad="unico">
                  Elegir pago único
                </BotonPago>
              </div>

            </article>

            {/* PAGO MENSUAL */}
            <article className="relative flex flex-col rounded-[25px] border-2 border-[#1A6954] bg-[#15594E] p-7 text-white shadow-[0_20px_55px_rgba(19,75,56,.15)] sm:p-8">

              <span className="absolute -top-3 right-5 rounded-full bg-[#F7E5A6] px-4 py-1.5 text-xs font-black text-[#4B4B29]">
                SIN PERMANENCIA
              </span>

              <p className="text-xs font-black uppercase tracking-[.15em] text-[#C7E2D2]">
                Pago mensual
              </p>

              <p className="mt-3 font-display text-5xl font-black tracking-[-.055em]">
                200 €
                <span className="ml-2 text-lg">
                  / mes
                </span>
              </p>

              <p className="mt-4 flex-1 text-[15px] leading-7 text-white/85">
                Hasta seis mensualidades.
                Cancela cuando quieras y no pagues
                las siguientes cuotas.

                Si completas los seis pagos,
                continuarás disfrutando del programa
                hasta finalizar tus 12 meses.
              </p>

              <div className="mt-7">
                <BotonPago
                  modalidad="mensual"
                  destacado
                >
                  Empezar por 200 €/mes
                </BotonPago>
              </div>

            </article>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-[#78887C]">
            Seis pagos mensuales suman 1.200 €.
            Si cancelas antes, el acceso termina
            al finalizar el periodo abonado.
          </p>

        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section
        id="preguntas"
        className="bg-[#F5F9F5] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[850px]">

          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[.16em] text-[#438A71]">
              Antes de empezar
            </p>

            <h2 className="font-display text-3xl font-black tracking-[-.04em] sm:text-4xl">
              Lo importante, sin letra pequeña.
            </h2>

            <p className="mt-3 text-[#647B6D]">
              12 preguntas frecuentes.
              Abre solamente las que necesites.
            </p>
          </div>

          <div className="divide-y divide-[#D8E7DC] border-y border-[#D8E7DC]">
            {preguntas.map((item, index) => (
              <details
                key={item.pregunta}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-bold text-[#254938] [&::-webkit-details-marker]:hidden">

                  <span>
                    <span className="mr-3 text-xs text-[#70A189]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.pregunta}
                  </span>

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[#37856A] transition-transform group-open:rotate-180"
                  />


                </summary>

                <div className="pb-5 pl-8 pr-8">
                  <p className="text-[15px] leading-7 text-[#63786B]">
                    {item.respuesta}
                  </p>

                  {item.enlace && (
                    <a
                      href={item.enlace}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#15594E] px-6 py-3 font-bold text-white transition hover:bg-[#0C463C]"
                    >
                      {item.textoEnlace}
                      <ArrowRight size={18} />
                    </a>
                  )}
                </div>

              </details>

            ))}
          </div>

        </div>
      </section>

      {/* LLAMADA FINAL */}
      <section className="bg-[#E5F1E7] px-5 py-10 text-center sm:px-8">

        <h2 className="font-display text-2xl font-black tracking-[-.04em] sm:text-3xl">
          No copies mis operaciones.
          Aprende a entenderlas.
        </h2>

        <a
          href="#precios"
          className="mt-5 inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#15594E] px-6 py-3 font-extrabold text-white transition hover:bg-[#0C463C]"
        >
          Ver las dos modalidades
          <ArrowRight size={18} />
        </a>

        <p className="mt-4 text-xs text-[#708577]">
          Formación, no asesoramiento financiero.
          Operar conlleva riesgos y no se garantizan resultados.
        </p>

      </section>

      {/* PIE DE PÁGINA */}
      <footer className="border-t border-[#DAE9DC] bg-white px-5 py-6 text-xs text-[#778D80] sm:px-8">

        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3">

          <p>
            © CMRBolsa · Carlos Martín Rodríguez
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/aviso-legal"
              target="_blank"
              rel="noreferrer"
            >
              Aviso legal
            </Link>

            <Link
              to="/politica-privacidad"
              target="_blank"
              rel="noreferrer"
            >
              Privacidad
            </Link>

            <Link
              to="/politica_de_cookies"
              target="_blank"
              rel="noreferrer"
            >
              Cookies
            </Link>
          </div>

        </div>
      </footer>

    </div>
  )
}
