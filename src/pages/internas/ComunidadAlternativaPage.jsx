
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ArrowRight,
  Copy,
  ExternalLink,
  GraduationCap,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
} from 'lucide-react'

import { siteConfig } from '../../data/siteConfig'

const LANDING_URL =
  'https://cmrbolsa.com/comunidad-pev-alternativa'

const mediaItems = [
  {
    id: 'presentacion',
    type: 'video',
    title: 'Presentación de la Comunidad Trading PEV',
    thumbnail:
      'https://img.youtube.com/vi/MhkClUgg3Tk/hqdefault.jpg',
    url:
      'https://www.youtube.com/embed/MhkClUgg3Tk',
  },
  {
    id: 'plataforma',
    type: 'image',
    title: 'Vista del área de alumnos',
    thumbnail:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864716/cmrbolsa/Presentacion-de-formaciones-de-cmrbolsa-high-1_tawnht.gif',
    url:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864716/cmrbolsa/Presentacion-de-formaciones-de-cmrbolsa-high-1_tawnht.gif',
  },
  {
    id: 'sesion',
    type: 'video',
    title: 'Ejemplo de sesión en directo',
    thumbnail:
      'https://img.youtube.com/vi/yq-86EuSImg/hqdefault.jpg',
    url:
      'https://www.youtube.com/embed/yq-86EuSImg',
  },
]

const pilares = [
  {
    nombre: 'Clase semanal en directo',
    texto:
      'Cada semana nos conectamos online para trabajar la metodología PEV, responder preguntas y corregir ejercicios y gráficos contigo.',
    icon: UsersRound,
    destacado: true,
  },
  {
    nombre: 'Sala escrita diaria',
    texto:
      'Seguimos el mercado cada día de sesión con análisis, zonas, escenarios e hipótesis sobre precio, estructura y volumen. Sin señales.',
    icon: MessageSquareText,
  },
  {
    nombre: 'Vídeos para reforzar',
    texto:
      'Más de 200 vídeos organizados para preparar las clases, repasar conceptos y seguir aprendiendo a tu ritmo. Un apoyo, no el centro de la Comunidad.',
    icon: Video,
  },
]

const incluidos = [
  {
    title: 'Una clase online en directo cada semana',
    text:
      'Trabajamos juntos la metodología PEV, resolvemos preguntas y corregimos ejercicios y gráficos en la sesión semanal.',
    icon: UsersRound,
  },
  {
    title: 'Sala de trading escrita cada día de mercado',
    text:
      'Compartimos lecturas del mercado, hipótesis, zonas y razonamientos basados en precio, estructura y volumen.',
    icon: MessageSquareText,
  },
  {
    title: 'Práctica y correcciones',
    text:
      'Revisamos gráficos, analizamos errores y aprendemos de las preguntas y del trabajo de los demás.',
    icon: GraduationCap,
  },
  {
    title: 'Más de 200 vídeos de apoyo',
    text:
      'Material pregrabado para estudiar conceptos, preparar preguntas y repasar lo trabajado en directo.',
    icon: Video,
  },
  {
    title: 'Aprender a pensar por ti mismo',
    text:
      'Buscamos interpretar el mercado con criterio propio, no copiar operaciones ni depender de señales.',
    icon: Sparkles,
  },
  {
    title: 'Participación en la Comunidad',
    text:
      'Un espacio para compartir dudas, análisis y experiencias con personas que trabajan la metodología PEV.',
    icon: ShieldCheck,
  },
]

export default function ComunidadAlternativaPage() {
  const [selectedMedia, setSelectedMedia] =
    useState(mediaItems[0])

  const [copied, setCopied] = useState(false)

  async function copiarEnlace() {
    try {
      await navigator.clipboard.writeText(LANDING_URL)

      setCopied(true)

      window.setTimeout(
        () => setCopied(false),
        1600
      )
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cmr-green/20 blur-3xl" />

        <div className="section-shell relative grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/[0.14] bg-white/[0.08] p-5 shadow-darkGlow backdrop-blur sm:p-7">
            <span className="eyebrow-dark">
              Comunidad privada
            </span>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl">
              Comunidad Trading PEV de CMRBolsa
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.74]">
              Una clase online semanal en directo conmigo y una sala
              escrita cada día de mercado. Analizamos precio, estructura
              y volumen, resolvemos dudas y corregimos ejercicios.
              Los vídeos sirven de apoyo.
            </p>

            <div className="mt-7">
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/[0.14] bg-black">
                {selectedMedia.type === 'video' ? (
                  <iframe
                    key={selectedMedia.id}
                    title={selectedMedia.title}
                    src={selectedMedia.url}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {mediaItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Mostrar ${item.title}`}
                    aria-pressed={selectedMedia.id === item.id}
                    onClick={() => setSelectedMedia(item)}
                    className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border-2 bg-black transition ${
                      selectedMedia.id === item.id
                        ? 'border-cmr-green'
                        : 'border-white/[0.14] hover:border-white/40'
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="h-full w-full object-cover"
                    />

                    {item.type === 'video' && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <PlayCircle
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                <UsersRound className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-3 font-bold">
                  Clase semanal en directo
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                <MessageSquareText className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-3 font-bold">
                  Sala escrita diaria
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                <ShieldCheck className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-3 font-bold">
                  Sin señales
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.16] bg-white/[0.10] shadow-darkGlow backdrop-blur">
              <div className="flex min-h-36 items-center justify-center bg-cmr-green/20 p-6">
                <img
                  src={siteConfig.logoUrl}
                  alt="CMRBolsa"
                  className="max-h-24 w-auto rounded-2xl bg-white p-4 shadow-soft"
                />
              </div>

              <div className="p-6">
                <h2 className="font-display text-2xl font-black">
                  Comunidad Trading PEV
                </h2>

                <div className="mt-3 flex items-center gap-2 text-sm text-white/[0.55]">
                  <span>
                    cmrbolsa.com/comunidad-pev-alternativa
                  </span>

                  <button
                    type="button"
                    onClick={copiarEnlace}
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.14] bg-white/[0.08] px-2 py-1 font-bold text-white transition hover:bg-white/[0.14]"
                  >
                    {copied ? 'Copiado' : 'Copiar'}

                    <Copy
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <p className="mt-5 leading-7 text-white/[0.70]">
                  Cada semana trabajamos en directo y cada día de mercado
                  analizamos escenarios en la sala escrita. Los vídeos
                  pregrabados te ayudan a preparar y repasar lo aprendido.
                </p>

                <div className="mt-6 rounded-2xl border border-cmr-gold/30 bg-cmr-gold/[0.10] p-4">
                  <p className="font-bold text-cmr-gold">
                    Consulta la disponibilidad
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/[0.65]">
                    Los planes, precios y condiciones vigentes se
                    muestran directamente en Comudia.
                  </p>
                </div>

                <a
                  href={siteConfig.urls.comunidadCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full justify-center"
                >
                  Ver planes en Comudia

                  <ExternalLink
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>

                <p className="mt-3 text-center text-xs leading-5 text-white/[0.48]">
                  Consulta el plan disponible y sus condiciones
                  antes de contratar.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              Los pilares de la Comunidad
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Lo importante ocurre en directo y en la sala escrita
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              El aprendizaje se apoya en tres recursos que se complementan.
              Consulta en Comudia los planes de acceso disponibles
              y sus condiciones.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pilares.map((pilar) => {
              const Icon = pilar.icon

              return (
                <article
                  key={pilar.nombre}
                  className={`relative flex h-full flex-col rounded-[2rem] border p-7 shadow-soft transition hover:-translate-y-1 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)] ${
                    pilar.destacado
                      ? 'border-cmr-green bg-cmr-greenSoft dark:bg-cmr-green/[0.12]'
                      : 'border-cmr-line bg-white dark:border-white/[0.14] dark:bg-cmr-dark3'
                  }`}
                >
                  {pilar.destacado && (
                    <span className="absolute right-5 top-5 rounded-full bg-cmr-green px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                      Pilar principal
                    </span>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-green text-white">
                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-black text-cmr-ink dark:text-white">
                    {pilar.nombre}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
                    {pilar.texto}
                  </p>

                  <a
                    href={siteConfig.urls.comunidadCheckout}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 w-full justify-center"
                  >
                    Consultar acceso en Comudia

                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              )
            })}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-cmr-muted dark:text-white/[0.56]">
            Los planes y precios vigentes se consultan directamente
            en Comudia. Estas tarjetas describen los recursos de
            la Comunidad, no modalidades de pago.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <span className="eyebrow">
                Qué encontrarás dentro
              </span>

              <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
                Clase semanal, sala diaria y vídeos de apoyo
              </h2>

              <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
                En la clase online semanal resolvemos dudas y corregimos
                gráficos. Durante los días de mercado seguimos el análisis
                en la sala escrita. Los vídeos te ayudan a preparar
                y repasar, pero lo esencial es aprender a leer
                el mercado por ti mismo.
              </p>

              <div className="mt-7 rounded-[1.75rem] border border-cmr-green/25 bg-cmr-greenSoft p-6 dark:bg-cmr-green/[0.10]">
                <p className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                  Cambia la velocidad, no la estructura.
                </p>

                <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.68]">
                  La base empieza en el intradía porque los movimientos
                  se repiten con más frecuencia. Después esa misma lógica
                  puede trasladarse a swing, corto, medio y largo plazo.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {incluidos.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-cmr-line bg-white p-6 shadow-soft dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                  >
                    <Icon
                      className="h-6 w-6 text-cmr-green dark:text-[#79CFC4]"
                      aria-hidden="true"
                    />

                    <h3 className="mt-5 font-display text-xl font-black text-cmr-ink dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-cmr-muted dark:text-white/[0.66]">
                      {item.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell text-center">
          <span className="eyebrow-dark">
            Comunidad PEV
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.025em] sm:text-5xl">
            Una clase conmigo cada semana. El mercado, día a día,
            en la sala escrita.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.70]">
            Aprende la metodología PEV con clases en directo, correcciones,
            análisis del mercado y una biblioteca de vídeos para reforzar
            lo aprendido. Consulta las condiciones de acceso en Comudia.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.urls.comunidadCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ver planes en Comudia

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/comunidad-pev"
              className="btn-secondary-dark"
            >
              Ver página principal
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
