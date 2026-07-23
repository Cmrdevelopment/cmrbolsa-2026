import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  Layers3,
  Maximize2,
  ShoppingBag,
  Sparkles,
  UsersRound,
} from 'lucide-react'

import PageHero from '../../components/PageHero'
import TestimoniosCarousel from '../../components/testimonios/TestimoniosCarousel'
import TestimonioModal from '../../components/testimonios/TestimonioModal'
import { testimoniosActivos } from '../../data/testimonios'

const COMPRA_LIBRO_URL =
  'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LPLDA4WQ7EE9J'

const PORTADA_VIDEO_URL =
  'https://res.cloudinary.com/dwbxywvdw/video/upload/v1706827352/cmrbolsa/Desgranando_SOLO_portada_animation_kuc2zu.mp4'

const FOTO_LIBRO_URL =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1000/v1784735869/cmrbolsa/cmrbolsa-libro-desgranando.reduced_bxydqw.png'

const INDICE_LIBRO_URL =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1400/v1707243633/cmrbolsa/Indice_Desgranando_la_esencia_del_mercado_reduced_i6pq0d.png'

const PORTADA_CONTRAPORTADA_URL =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_1400/v1707243625/cmrbolsa/Portada_y_contraportada_2024_reduced_igw2zu.png'

const contenidosLibro = [
  {
    titulo: 'Precio y volumen',
    texto:
      'Aprender a observar qué está haciendo el precio y qué información aporta realmente el volumen.',
    icono: Eye,
  },
  {
    titulo: 'Estructura del mercado',
    texto:
      'Entender cómo se forman los impulsos, las correcciones, las zonas y los movimientos que se repiten.',
    icono: Layers3,
  },
  {
    titulo: 'Profesionales y masa',
    texto:
      'Comprender los engaños, maniobras y comportamientos que aparecen una y otra vez en los gráficos.',
    icono: UsersRound,
  },
]

const puntosLibro = [
  '264 páginas de contenido',
  'Más de 100 gráficos explicativos',
  'Precio, volumen y estructura',
  'Ejemplos aplicados al mercado',
  'Errores frecuentes del trader',
  'Experiencias personales y aprendizajes',
]

const testimoniosLibro = testimoniosActivos.filter(
  (testimonio) =>
    testimonio.categoria === 'libro'
)

export default function LibroPage() {
  const [imagenAmpliada, setImagenAmpliada] =
    useState(null)

  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Mi libro"
        title="Desgranando la esencia del mercado"
        text="No es un libro para memorizar una estrategia ni para buscar una entrada mágica. Es una introducción profunda a la lectura del mercado mediante el precio, el volumen y la estructura."
        primaryLabel="Comprar el libro"
        primaryTo={COMPRA_LIBRO_URL}
        secondaryLabel="Empezar leyendo en Substack"
        secondaryTo="/substack"
        contenidoInferior={
          <div className="max-w-2xl rounded-2xl border border-cmr-gold/[0.38] bg-cmr-gold/[0.12] p-5">
            <p className="font-display text-lg font-black text-white">
              Actualmente disponible solo en ebook
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-white/[0.80]">
              La 1.ª y la 2.ª edición en papel están agotadas. Actualmente no
              hay una fecha prevista para la publicación de una 3.ª edición.
            </p>
          </div>
        }
        contenidoLateral={
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[4rem] bg-cmr-green/[0.22] blur-3xl" />

            <div className="pointer-events-none absolute -bottom-12 -right-10 h-56 w-56 rounded-full bg-cmr-gold/[0.14] blur-[70px]" />

            <div className="relative rounded-[2.5rem] border border-white/[0.16] bg-white/[0.10] p-5 shadow-darkGlow backdrop-blur-xl">
              <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.10] bg-cmr-dark2 p-5 sm:min-h-[500px]">
                <video
                  src={PORTADA_VIDEO_URL}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Portada animada del libro Desgranando la esencia del mercado"
                  className="max-h-[470px] w-full object-contain"
                />
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-white/[0.12] bg-black/[0.18] p-5">
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-1 h-6 w-6 shrink-0 text-[#79CFC4]" />

                  <div>
                    <p className="font-display text-xl font-black text-white">
                      Un libro de trabajo
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                      Para leer, revisar los gráficos y volver a consultar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                  <p className="font-display text-xl font-black text-white">
                    264
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.55]">
                    Páginas
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                  <p className="font-display text-xl font-black text-white">
                    +100
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.55]">
                    Gráficos
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4">
                  <p className="font-display text-xl font-black text-white">
                    2019
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/[0.55]">
                    Publicación
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-96 w-96 rounded-full bg-cmr-green/[0.08] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Qué encontrarás dentro
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              No se trata de ver más velas. Se trata de empezar a entenderlas.
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              El objetivo del libro es ayudarte a construir una forma más
              ordenada de observar el mercado, independientemente de la
              estrategia o del plazo en el que operes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contenidosLibro.map((contenido) => {
              const Icono = contenido.icono

              return (
                <article
                  key={contenido.titulo}
                  className="rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cmr-green/35 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)] dark:hover:border-cmr-green/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                    <Icono
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
                    {contenido.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-cmr-muted dark:text-white/[0.66]">
                    {contenido.texto}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-20 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.07] blur-3xl dark:block" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-cmr-line bg-white shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_24px_75px_rgba(0,0,0,0.28)] sm:row-span-2">
              <img
                src={FOTO_LIBRO_URL}
                alt="Carlos Martín sosteniendo el libro Desgranando la esencia del mercado"
                loading="lazy"
                className="h-full min-h-[560px] w-full object-cover object-center"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setImagenAmpliada({
                  src: INDICE_LIBRO_URL,
                  alt: 'Índice del libro Desgranando la esencia del mercado',
                  titulo: 'Índice del libro',
                })
              }
              aria-label="Ampliar índice del libro"
              className="group relative flex min-h-[270px] cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.75rem] border border-cmr-line bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cmr-green/35 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]"
            >
              <img
                src={INDICE_LIBRO_URL}
                alt="Índice del libro Desgranando la esencia del mercado"
                loading="lazy"
                className="max-h-[270px] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.20] bg-cmr-dark/[0.78] text-white shadow-lg backdrop-blur transition group-hover:scale-110 group-hover:bg-cmr-dark">
                <Maximize2
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                setImagenAmpliada({
                  src: PORTADA_CONTRAPORTADA_URL,
                  alt: 'Portada y contraportada del libro Desgranando la esencia del mercado',
                  titulo: 'Portada y contraportada',
                })
              }
              aria-label="Ampliar portada y contraportada del libro"
              className="group relative flex min-h-[270px] cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.75rem] border border-cmr-line bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cmr-green/35 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)]"
            >
              <img
                src={PORTADA_CONTRAPORTADA_URL}
                alt="Portada y contraportada del libro Desgranando la esencia del mercado"
                loading="lazy"
                className="max-h-[270px] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.20] bg-cmr-dark/[0.78] text-white shadow-lg backdrop-blur transition group-hover:scale-110 group-hover:bg-cmr-dark">
                <Maximize2
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>

          <div>
            <span className="eyebrow">
              De dónde nace
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
              Después de sistemas, señales, gurús y muchas horas de mercado
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              El libro recoge parte del recorrido que me llevó a dejar de buscar
              sistemas perfectos y empezar a centrarme en cómo se mueve
              realmente el precio.
            </p>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
              Está escrito desde la experiencia de alguien que también empezó
              buscando atajos, probando herramientas y creyendo que la solución
              estaba siempre en el siguiente sistema.
            </p>

            <div className="mt-8 grid gap-3">
              {puntosLibro.map((punto) => (
                <div
                  key={punto}
                  className="flex items-center gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green dark:text-[#79CFC4]" />

                  <span className="font-semibold leading-6 text-cmr-ink dark:text-white/[0.86]">
                    {punto}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-light2 py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-96 w-96 rounded-full bg-cmr-green/[0.07] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-cmr-line bg-white p-7 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)] sm:p-9">
              <span className="eyebrow">
                Si estás empezando
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white">
                Empieza entendiendo antes de llenar el gráfico de cosas
              </h2>

              <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
                Te ayudará a conocer conceptos esenciales y a evitar parte del
                camino de sistemas milagro, indicadores mágicos y promesas
                demasiado bonitas.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cmr-line bg-white p-7 shadow-soft transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark3 dark:shadow-[0_22px_65px_rgba(0,0,0,0.26)] sm:p-9">
              <span className="eyebrow">
                Si ya tienes experiencia
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white">
                Amplía tu forma de interpretar lo que ya estás viendo
              </h2>

              <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
                El libro puede complementar tu forma actual de operar,
                aportándote otra visión sobre el precio, el volumen, las zonas y
                la estructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {testimoniosLibro.length > 0 && (
        <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark3">
          <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-96 w-96 rounded-full bg-cmr-gold/[0.06] blur-3xl dark:block" />

          <div className="section-shell relative">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="eyebrow">
                  Opiniones de lectores
                </span>

                <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-5xl">
                  Lo que cuentan quienes ya lo han leído
                </h2>

                <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.68]">
                  Experiencias reales de lectores que utilizaron el libro para
                  ordenar y ampliar su forma de mirar el mercado.
                </p>
              </div>

              <Link
                to="/testimonios"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-cmr-line bg-white px-6 py-3 text-sm font-extrabold text-cmr-ink shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/40 hover:text-cmr-green dark:border-white/[0.16] dark:bg-white/[0.08] dark:text-white dark:hover:border-cmr-green/45 dark:hover:bg-white/[0.12] dark:hover:text-[#79CFC4]"
              >
                Ver todos los testimonios
              </Link>
            </div>

            <div className="mt-10">
              <TestimoniosCarousel
                testimonios={testimoniosLibro}
                intervalo={8000}
              />
            </div>
          </div>
        </section>
      )}

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white dark:bg-[#061613]">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Sparkles className="h-9 w-9 text-[#79CFC4]" />

            <h2 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.025em] text-white sm:text-5xl">
              Puedes empezar por el libro y decidir después hasta dónde quieres
              llegar
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.70]">
              Lee, revisa los gráficos y conoce mi forma de entender el mercado.
              Después podrás continuar con Substack, la Comunidad PEV o la
              Mentoría.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={COMPRA_LIBRO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Comprar el libro

              <ShoppingBag className="h-4 w-4" />
            </a>

            <Link
              to="/comunidad-pev"
              className="btn-secondary-dark"
            >
              Ver Comunidad PEV
            </Link>
          </div>
        </div>
      </section>

      <TestimonioModal
        abierto={Boolean(imagenAmpliada)}
        etiqueta="Vista ampliada"
        titulo={
          imagenAmpliada?.titulo ||
          'Desgranando la esencia del mercado'
        }
        textoCerrar="Cerrar imagen ampliada"
        onCerrar={() =>
          setImagenAmpliada(null)
        }
      >
        {imagenAmpliada && (
          <div className="flex min-h-[60vh] items-center justify-center rounded-[1.5rem] bg-white p-3 sm:p-6">
            <img
              src={imagenAmpliada.src}
              alt={imagenAmpliada.alt}
              className="max-h-[76vh] max-w-full object-contain"
            />
          </div>
        )}
      </TestimonioModal>
    </div>
  )
}