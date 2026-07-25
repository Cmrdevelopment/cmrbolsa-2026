import {
  useState,
} from 'react'
import {
  Link,
} from 'react-router-dom'

import {
  ArrowRight,
  CheckCircle2,
  Copy,
  ExternalLink,
  GraduationCap,
  LockKeyhole,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
} from 'lucide-react'

import {
  siteConfig,
} from '../../data/siteConfig'

const LANDING_URL =
  'https://cmrbolsa.com/comunidad-pev-alternativa'

const mediaItems = [
  {
    id: 'presentacion',
    type: 'video',
    title:
      'Presentación de la Comunidad Trading PEV',
    thumbnail:
      'https://img.youtube.com/vi/MhkClUgg3Tk/hqdefault.jpg',
    url:
      'https://www.youtube.com/embed/MhkClUgg3Tk',
  },
  {
    id: 'plataforma',
    type: 'image',
    title:
      'Vista del área de alumnos',
    thumbnail:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864716/cmrbolsa/Presentacion-de-formaciones-de-cmrbolsa-high-1_tawnht.gif',
    url:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864716/cmrbolsa/Presentacion-de-formaciones-de-cmrbolsa-high-1_tawnht.gif',
  },
  {
    id: 'sesion',
    type: 'video',
    title:
      'Ejemplo de sesión en directo',
    thumbnail:
      'https://img.youtube.com/vi/yq-86EuSImg/hqdefault.jpg',
    url:
      'https://www.youtube.com/embed/yq-86EuSImg',
  },
]

const planes = [
  {
    nombre: 'Básico',
    texto:
      'Una opción para comenzar a conocer la metodología PEV y entrar en la comunidad.',
    icon: PlayCircle,
  },
  {
    nombre: 'Plus',
    texto:
      'Para avanzar con más formación, participación y acompañamiento dentro de la comunidad.',
    icon: UsersRound,
  },
  {
    nombre: 'Premium',
    texto:
      'La opción más completa para quien quiere aprovechar al máximo los contenidos y recursos disponibles.',
    icon: Sparkles,
    destacado: true,
  },
]

const incluidos = [
  {
    title:
      'Formación organizada',
    text:
      'Más de 200 vídeos estructurados por niveles para avanzar con orden.',
    icon: Video,
  },
  {
    title:
      'Reuniones semanales',
    text:
      'Sesiones conmigo para resolver dudas, ver mercado y trabajar la metodología.',
    icon: UsersRound,
  },
  {
    title:
      'Sala de trading escrita',
    text:
      'Zonas, escenarios, imágenes, contexto y razonamiento aplicado al mercado.',
    icon: MessageSquareText,
  },
  {
    title:
      'Ejercicios y ejemplos',
    text:
      'Retos, análisis y casos prácticos para convertir la teoría en criterio propio.',
    icon: GraduationCap,
  },
  {
    title:
      'Actualizaciones',
    text:
      'Nuevos contenidos y mejoras dentro de la formación cuando sean necesarios.',
    icon: Sparkles,
  },
  {
    title:
      'Sin permanencia',
    text:
      'Puedes entrar, probar la comunidad y cancelar cuando quieras.',
    icon: ShieldCheck,
  },
]

export default function ComunidadAlternativaPage() {
  const [
    selectedMedia,
    setSelectedMedia,
  ] = useState(mediaItems[0])

  const [
    copied,
    setCopied,
  ] = useState(false)

  async function copiarEnlace() {
    try {
      await navigator.clipboard.writeText(
        LANDING_URL
      )

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
              Formación, reuniones semanales, sala escrita, ejercicios y
              acompañamiento para aprender a entender el mercado con precio,
              estructura y volumen.
            </p>

            <div className="mt-7">
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/[0.14] bg-black">
                {selectedMedia.type ===
                'video' ? (
                  <iframe
                    key={
                      selectedMedia.id
                    }
                    title={
                      selectedMedia.title
                    }
                    src={
                      selectedMedia.url
                    }
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={
                      selectedMedia.url
                    }
                    alt={
                      selectedMedia.title
                    }
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {mediaItems.map(
                  (item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Mostrar ${item.title}`}
                      aria-pressed={
                        selectedMedia.id ===
                        item.id
                      }
                      onClick={() =>
                        setSelectedMedia(
                          item
                        )
                      }
                      className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border-2 bg-black transition ${
                        selectedMedia.id ===
                        item.id
                          ? 'border-cmr-green'
                          : 'border-white/[0.14] hover:border-white/40'
                      }`}
                    >
                      <img
                        src={
                          item.thumbnail
                        }
                        alt=""
                        className="h-full w-full object-cover"
                      />

                      {item.type ===
                        'video' && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                          <PlayCircle
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                <LockKeyhole className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-3 font-bold">
                  Comunidad privada
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                <UsersRound className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-3 font-bold">
                  Tres planes
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                <ShieldCheck className="h-5 w-5 text-[#79CFC4]" />

                <p className="mt-3 font-bold">
                  Sin permanencia
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.16] bg-white/[0.10] shadow-darkGlow backdrop-blur">
              <div className="flex min-h-36 items-center justify-center bg-cmr-green/20 p-6">
                <img
                  src={
                    siteConfig.logoUrl
                  }
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
                    onClick={
                      copiarEnlace
                    }
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.14] bg-white/[0.08] px-2 py-1 font-bold text-white transition hover:bg-white/[0.14]"
                  >
                    {copied
                      ? 'Copiado'
                      : 'Copiar'}

                    <Copy
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <p className="mt-5 leading-7 text-white/[0.70]">
                  Una comunidad para aprender a trabajar el mercado con más
                  orden, criterio y una estructura clara.
                </p>

                <div className="mt-6 rounded-2xl border border-cmr-gold/30 bg-cmr-gold/[0.10] p-4">
                  <p className="font-bold text-cmr-gold">
                    Plazas sujetas a disponibilidad
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/[0.65]">
                    Consulta en Comudia los planes, condiciones y disponibilidad
                    actualizados.
                  </p>
                </div>

                <a
                  href={
                    siteConfig.urls
                      .comunidadCheckout
                  }
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
                  Los precios y condiciones vigentes se muestran siempre en
                  Comudia.
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
              Planes disponibles
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Elige cómo quieres entrar
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Puedes empezar con una opción sencilla o elegir un plan con más
              formación, recursos y acompañamiento.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {planes.map(
              (plan) => {
                const Icon =
                  plan.icon

                return (
                  <article
                    key={
                      plan.nombre
                    }
                    className={`relative flex h-full flex-col rounded-[2rem] border p-7 shadow-soft transition hover:-translate-y-1 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)] ${
                      plan.destacado
                        ? 'border-cmr-green bg-cmr-greenSoft dark:bg-cmr-green/[0.12]'
                        : 'border-cmr-line bg-white dark:border-white/[0.14] dark:bg-cmr-dark3'
                    }`}
                  >
                    {plan.destacado && (
                      <span className="absolute right-5 top-5 rounded-full bg-cmr-green px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                        Más completo
                      </span>
                    )}

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-green text-white">
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-6 font-display text-3xl font-black text-cmr-ink dark:text-white">
                      {plan.nombre}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
                      {plan.texto}
                    </p>

                    <a
                      href={
                        siteConfig.urls
                          .comunidadCheckout
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-7 w-full justify-center"
                    >
                      Ver plan y acceder

                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  </article>
                )
              }
            )}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-cmr-muted dark:text-white/[0.56]">
            Consulta en Comudia qué incluye actualmente cada plan y sus
            condiciones vigentes.
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
                Formación, mercado y acompañamiento
              </h2>

              <p className="mt-6 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
                La idea no es que copies una entrada. Es que entiendas qué
                estamos mirando, por qué importa una zona y cuándo lo mejor es
                no tocar nada.
              </p>

              <div className="mt-7 rounded-[1.75rem] border border-cmr-green/25 bg-cmr-greenSoft p-6 dark:bg-cmr-green/[0.10]">
                <p className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                  Cambia la velocidad, no la estructura.
                </p>

                <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.68]">
                  La base empieza en el intradía porque los movimientos se
                  repiten con más frecuencia. Después esa misma lógica puede
                  trasladarse a swing, corto, medio y largo plazo.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {incluidos.map(
                (item) => {
                  const Icon =
                    item.icon

                  return (
                    <article
                      key={
                        item.title
                      }
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
                }
              )}
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
            Si quieres aprender a mirar el mercado con más orden, puedes empezar
            por aquí.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.70]">
            Revisa los planes actuales en Comudia y elige el que mejor encaje
            con el apoyo que necesitas.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={
                siteConfig.urls
                  .comunidadCheckout
              }
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