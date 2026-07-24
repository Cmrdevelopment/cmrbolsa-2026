import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CircleOff,
  Crosshair,
  TrendingUp,
} from 'lucide-react'

const velas = [
  {
    height: 'h-16',
    wick: 'h-24',
    tone: 'bg-white',
  },
  {
    height: 'h-24',
    wick: 'h-32',
    tone: 'bg-cmr-green',
  },
  {
    height: 'h-12',
    wick: 'h-20',
    tone: 'bg-white',
  },
  {
    height: 'h-32',
    wick: 'h-40',
    tone: 'bg-cmr-green',
  },
  {
    height: 'h-20',
    wick: 'h-28',
    tone: 'bg-white',
  },
  {
    height: 'h-40',
    wick: 'h-48',
    tone: 'bg-cmr-green',
  },
]

export default function NoEncontradoPage() {
  return (
    <section className="noise relative min-h-[calc(100vh-82px)] overflow-hidden bg-cmr-dark bg-cmr-radial text-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cmr-green/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cmr-gold/10 blur-3xl" />

      <div className="section-shell relative grid min-h-[calc(100vh-82px)] items-center gap-14 py-16 lg:grid-cols-[.92fr_1.08fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#79CFC4]">
            <CircleOff
              className="h-4 w-4"
              aria-hidden="true"
            />

            Error 404 · Zona no válida
          </div>

          <h1 className="mt-7 max-w-3xl font-display text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl">
            La página se ha salido del gráfico.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.74]">
            Esta URL no tiene estructura, volumen ni contexto. Mejor no forzamos
            la entrada.
          </p>

          <div className="mt-8 max-w-xl rounded-[1.75rem] border border-cmr-gold/30 bg-cmr-gold/[0.08] p-5">
            <div className="flex items-start gap-3">
              <Crosshair
                className="mt-1 h-6 w-6 shrink-0 text-cmr-gold"
                aria-hidden="true"
              />

              <div>
                <p className="font-display text-2xl font-black">
                  Stop ejecutado.
                </p>

                <p className="mt-2 leading-7 text-white/[0.68]">
                  Volvamos a una zona donde sí sepamos qué estamos haciendo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="btn-primary"
            >
              <ArrowLeft
                className="h-4 w-4"
                aria-hidden="true"
              />

              Volver al inicio
            </Link>

            <Link
              to="/por-donde-empezar"
              className="btn-secondary-dark"
            >
              Ver por dónde empezar

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <p className="mt-7 text-sm font-semibold text-white/[0.45]">
            En CMRBolsa tampoco perseguimos URLs.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.16] bg-white/[0.08] p-5 shadow-darkGlow backdrop-blur-xl">
            <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-cmr-green/25 bg-[#061613] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#79CFC4]">
                    URL / USD
                  </p>

                  <p className="mt-1 font-display text-xl font-black">
                    Sin cotización
                  </p>
                </div>

                <div className="rounded-full border border-red-400/25 bg-red-400/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-red-300">
                  Mercado cerrado
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-24 select-none text-center font-display text-[10rem] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[13rem]">
                404
              </div>

              <div className="absolute inset-x-6 bottom-16 top-32 rounded-[1.5rem] border border-white/[0.08] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:52px_52px] sm:inset-x-8">
                <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-3">
                  {velas.map((vela, index) => (
                    <div
                      key={`${vela.height}-${index}`}
                      className="relative flex w-full items-center justify-center"
                    >
                      <span
                        className={`absolute bottom-0 w-px ${vela.wick} bg-white/55`}
                      />

                      <span
                        className={`relative w-7 rounded-sm ${vela.height} ${vela.tone} shadow-[0_0_28px_rgba(63,169,156,0.26)] sm:w-9`}
                      />
                    </div>
                  ))}
                </div>

                <svg
                  viewBox="0 0 600 250"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  aria-hidden="true"
                >
                  <path
                    d="M10 215 C80 205, 92 160, 145 174 S225 220, 278 142 S350 82, 405 110 S476 92, 530 34 L640 -42"
                    fill="none"
                    stroke="#79CFC4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_12px_rgba(121,207,196,0.75)]"
                  />

                  <circle
                    cx="530"
                    cy="34"
                    r="7"
                    fill="#79CFC4"
                  />
                </svg>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-cmr-green/30 bg-cmr-dark/80 px-3 py-2 text-xs font-black text-[#79CFC4] backdrop-blur">
                  <TrendingUp
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  Precio fuera de rango
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-white/[0.38] sm:left-8 sm:right-8">
                <span>
                  Sin entrada
                </span>

                <span>
                  Sin contexto
                </span>

                <span>
                  Sin página
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}