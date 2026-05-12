import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import { siteConfig } from '../data/siteConfig'
import ComunidadPage from './internas/ComunidadPage'
import CmrbolsaPage from './internas/CmrbolsaPage'
import SubstackPage from './internas/SubstackPage'

const pageData = {
  cmrbolsa: {
    eyebrow: 'CMRBolsa',
    title: 'Carlos Martín Rodríguez: de buscar atajos a entender cómo se mueve el mercado',
    text: 'Esta es la historia real detrás de CMRBolsa: errores, señales, sistemas, gurús, muchas horas de mercado y una forma de enseñar basada en Precio, Estructura, Volumen y cabeza.',
    media: 'CARLOS_IMAGE_URL_02',
    bullets: [
      'Más de 21 años en mercados',
      'PEV: Precio, Estructura y Volumen',
      'Más de 260 alumnos formados',
      'Claro, cercano y exigente cuando toca',
    ],
    cta: ['Ver Comunidad PEV', '/comunidad-pev'],
    note: 'CMRBolsa no nació de una promesa bonita. Nació después de equivocarme, buscar atajos y entender que el mercado no va de adivinar.',
  },

  comunidad: {
    eyebrow: 'Comunidad PEV',
    title: 'Comunidad Trading PEV de CMRBolsa',
    text: 'La puerta de entrada para conocer cómo trabajamos el mercado por dentro: formación en vídeos, reuniones semanales, sala escrita, contexto, imágenes, dudas, ejercicios y participación.',
    media: 'COMUNIDAD_VIDEO_URL',
    bullets: [
      'Precio normal: 59,99 €/mes',
      'Ahora por tiempo limitado: 36,99 €/mes',
      'Sin permanencia',
      'Sala escrita incluida mientras pagues',
      'Reuniones semanales conmigo',
      'Formación prevista para 16-18 meses',
    ],
    cta: ['Entrar en Comunidad', siteConfig.urls.comunidadCheckout],
    note: 'No vienes a copiar entradas. Vienes a entender qué estamos mirando, por qué una zona importa y cuándo una operación puede tener sentido.',
  },

  mentoria: {
    eyebrow: 'Mentoría PEV',
    title: 'Mentoría PEV de CMRBolsa',
    text: 'Un proceso serio para quien quiere corrección personal, acompañamiento directo, plan de trading y una estructura real de aprendizaje. No entra todo el mundo, y está bien que sea así.',
    media: 'MENTORIA_VIDEO_URL',
    bullets: [
      'Entrada por solicitud',
      'Entrevista personal',
      'Inversión importante',
      'Comunidad permanente incluida',
      'Sala incluida el primer año',
      'Correcciones personales',
    ],
    cta: ['Solicitar valoración', '/solicitud-mentoria'],
    note: 'La Mentoría no es para mirar. Es para trabajar, mandar gráficos, corregir, repetir y empezar a ordenar la cabeza delante del mercado.',
  },

  sala: {
    eyebrow: 'Sala escrita',
    title: 'Mercado en directo, pero por escrito y con contexto',
    text: 'No es una sala para copiar señales. Es una sala para seguir el razonamiento: zonas, imágenes, escenarios, entradas cuando aparecen y errores cuando toca.',
    media: 'SALA_VIDEO_URL',
    bullets: [
      'Comentarios escritos',
      'Imágenes del mercado',
      'Participación de alumnos',
      'Entradas reales cuando aparecen',
      'Stops y errores también',
      'Se puede revisar en diferido',
    ],
    cta: ['Ver Comunidad PEV', '/comunidad-pev'],
    note: 'No vienes a copiar una entrada. Vienes a seguir el razonamiento.',
  },

  eventos: {
    eyebrow: 'Eventos',
    title: 'Eventos CMRBolsa',
    text: 'Talleres, encuentros, sesiones online y espacios donde trabajar mercado, dudas y operativa con alumnos. Porque el trading también se entiende mejor cuando se comparte.',
    media: 'EVENTO_IMAGE_URL_01',
    bullets: [
      'Eventos realizados',
      'Fotos y vídeos',
      'Talleres online y presenciales',
      'Interés por ciudad',
      'Aviso para próximos eventos',
    ],
    cta: ['Avisarme del próximo', '#avisarme'],
    note: 'También nos hemos visto fuera del gráfico. Y eso ayuda a que la comunidad tenga vida real, no solo pantalla.',
  },

  testimonios: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen quienes ya han pasado por aquí',
    text: 'Vídeos, capturas y comentarios reales. No para prometer resultados, sino para enseñar cambios de proceso, mentalidad y forma de mirar el mercado.',
    media: 'TESTIMONIO_VIDEO_URL_01',
    bullets: [
      'Vídeos de alumnos',
      'Capturas de mensajes',
      'Comentarios de redes',
      'Historias de cambio',
      'Correcciones y sala',
    ],
    cta: ['Ver por dónde empezar', '/por-donde-empezar'],
    note: 'Lo importante no es que hablen de dinero. Es que hablen de cómo empezaron a mirar el mercado de otra manera.',
  },

  libro: {
    eyebrow: 'Mi libro',
    title: 'Desgranando la esencia del mercado',
    text: 'El ebook como puerta de entrada: capítulos gratis, Substack y una forma de empezar a entender cómo mira el mercado CMRBolsa.',
    media: 'LIBRO_IMAGE_URL',
    bullets: [
      'Ebook disponible',
      'Capítulos gratis próximamente',
      'Conexión con Substack',
      'Autoridad y método',
      'Puente hacia Comunidad',
    ],
    cta: ['Leer en Substack', siteConfig.urls.substack],
    note: 'Leer antes de entrar también es una buena forma de empezar. Hay gente que necesita verte pensar antes de dar el paso.',
  },

  substack: {
    eyebrow: 'Substack',
    title: 'Leer CMRBolsa antes de entrar también tiene sentido',
    text: 'Una sección puente para explicar qué publico en Substack, qué parte es gratis, qué parte es de pago y por qué puede ayudarte a entender mejor mi forma de mirar el mercado.',
    media: 'SUBSTACK_SCREENSHOT_URL',
    bullets: [
      'Artículos gratis',
      'Contenido de pago',
      'Análisis',
      'Reflexiones de mercado',
      'Puente hacia Comunidad',
    ],
    cta: ['Ir a Substack', siteConfig.urls.substack],
    note: 'No todo el mundo tiene que comprar al primer clic. Leer, mirar y entender también forma parte del camino.',
  },
}

function isExternalUrl(url) {
  return url?.startsWith('http')
}

function ActionButton({ to, children, variant = 'primary' }) {
  const className =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary-light'

  if (isExternalUrl(to)) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default function GenericPage({ type }) {
  if (type === 'comunidad') return <ComunidadPage />
  if (type === 'cmrbolsa') return <CmrbolsaPage />
  if (type === 'substack') return <SubstackPage />

  const data = pageData[type]

  if (!data) {
    return (
      <div className="bg-cmr-light py-32 text-cmr-ink">
        <div className="section-shell">
          <div className="card-light p-8">
            <h1 className="font-display text-4xl font-black tracking-[-0.02em]">
              Página no encontrada
            </h1>
            <p className="mt-4 text-cmr-muted">
              Esta página todavía no está configurada.
            </p>
            <Link to="/" className="btn-primary mt-8">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        text={data.text}
        primaryLabel={data.cta[0]}
        primaryTo={data.cta[1]}
        secondaryLabel="Volver al inicio"
        secondaryTo="/#inicio"
      />

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative">
            <Placeholder
              label={data.media}
              dark={false}
              type={data.media.includes('VIDEO') ? 'video' : 'image'}
              className="min-h-[480px] bg-white"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/92 p-5 shadow-soft backdrop-blur">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="text-sm font-semibold leading-6 text-cmr-muted">
                  {data.note}
                </p>
              </div>
            </div>
          </div>

          <div className="card-light p-7 sm:p-8">
            <span className="eyebrow">{data.eyebrow}</span>

            <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Qué encontrarás aquí
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              Esta página amplía la sección de la Home. Aquí iremos metiendo los textos definitivos,
              vídeos, capturas reales, testimonios y enlaces de Cloudinary cuando los tengamos preparados.
            </p>

            <div className="mt-8 grid gap-3">
              {data.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center gap-3 rounded-2xl border border-cmr-line bg-cmr-paper p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green" />
                  <span className="font-semibold leading-6 text-cmr-ink">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton to={data.cta[1]}>
                {data.cta[0]}
                <ArrowRight className="h-4 w-4" />
              </ActionButton>

              <Link to="/#inicio" className="btn-secondary-light">
                Volver a inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {type === 'eventos' && (
        <section id="avisarme" className="bg-cmr-paper py-20">
          <div className="section-shell">
            <div className="card-light p-8">
              <span className="eyebrow">Próximos eventos</span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink sm:text-5xl">
                Quiero que me aviséis del próximo evento
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-cmr-muted">
                Aquí irá el formulario de interés: nombre, email, ciudad,
                si prefiere online o presencial y qué tema le interesa trabajar.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}