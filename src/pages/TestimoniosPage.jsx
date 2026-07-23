import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import TestimoniosGrid from '../components/testimonios/TestimoniosGrid'
import { testimoniosActivos } from '../data/testimonios'

export default function TestimoniosPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink transition-colors duration-300 dark:bg-cmr-dark dark:text-white">
      <PageHero
        eyebrow="Experiencias reales"
        title="Lo que cuentan quienes han trabajado conmigo"
        text="No se trata de prometer resultados ni de enseñar operaciones aisladas. Se trata de ver cómo otras personas han empezado a ordenar su forma de mirar el mercado, trabajar con más criterio y entender mejor lo que tienen delante."
        primaryLabel="Ver por dónde empezar"
        primaryTo="/por-donde-empezar"
        secondaryLabel="Conocer la Comunidad"
        secondaryTo="/comunidad-pev"
      />

      <section className="relative overflow-hidden bg-cmr-light py-20 transition-colors duration-300 dark:bg-cmr-dark2">
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-96 w-96 rounded-full bg-cmr-green/[0.10] blur-3xl dark:block" />

        <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-80 w-80 rounded-full bg-cmr-gold/[0.06] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow">
              Vídeos, mensajes y opiniones
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white sm:text-5xl">
              Experiencias contadas de distintas maneras
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted dark:text-white/[0.70]">
              Algunos alumnos prefieren escribir, otros mandar una captura y
              otros contar su experiencia en vídeo. Aquí puedes verlas todas y
              elegir el formato que quieras.
            </p>
          </div>

          <TestimoniosGrid
            testimonios={testimoniosActivos}
            cantidadInicial={9}
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-cmr-paper py-16 transition-colors duration-300 dark:bg-cmr-dark3">
        <div className="pointer-events-none absolute -right-32 bottom-0 hidden h-80 w-80 rounded-full bg-cmr-green/[0.10] blur-3xl dark:block" />

        <div className="section-shell relative">
          <div className="grid gap-8 rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/[0.16] dark:bg-white/[0.08] dark:shadow-[0_24px_75px_rgba(0,0,0,0.28)] sm:p-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cmr-green/20 bg-cmr-greenSoft text-cmr-green dark:border-cmr-green/30 dark:bg-cmr-green/[0.14] dark:text-[#79CFC4]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <span className="eyebrow">
                  Sin promesas raras
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink dark:text-white sm:text-4xl">
                Cada alumno lleva su propio proceso
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-cmr-muted dark:text-white/[0.70]">
                Estas experiencias no garantizan que otra persona vaya a obtener
                los mismos resultados. El avance depende del trabajo, la
                constancia, la gestión del riesgo y la capacidad de aplicar lo
                aprendido.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/por-donde-empezar"
                className="btn-primary"
              >
                Ver por dónde empezar

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/comunidad-pev"
                className="btn-secondary-light"
              >
                Conocer la Comunidad PEV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}