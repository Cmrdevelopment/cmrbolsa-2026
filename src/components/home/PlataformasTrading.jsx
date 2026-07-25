import {
  ExternalLink,
  LineChart,
  Radio,
} from 'lucide-react'

const NINJATRADER_URL =
  'https://ninjatraderdomesticvendor.sjv.io/c/6784069/3069488/37581'

const KINETICK_URL =
  'https://kinetick.com/NinjaTrader'

const NINJATRADER_LOGO =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/v1706028206/cmrbolsa/NinjaTrader_Wordmark_color_RGB_dgfbzx.png'

const KINETICK_LOGO =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/v1706028138/cmrbolsa/Kinetick_Logo_zkqggw.png'

export default function PlataformasTrading() {
  return (
    <section className="relative overflow-hidden bg-cmr-light py-16 transition-colors duration-300 dark:bg-cmr-dark3">
      <div className="pointer-events-none absolute -left-32 top-0 hidden h-80 w-80 rounded-full bg-cmr-green/[0.10] blur-3xl dark:block" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            Plataforma y datos
          </span>

          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink dark:text-white sm:text-4xl">
            Herramientas que utilizo para trabajar el mercado
          </h2>

          <p className="mt-4 text-lg leading-8 text-cmr-muted dark:text-white/[0.70]">
            NinjaTrader como plataforma de análisis y operativa, y Kinetick
            para disponer de datos de mercado.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-white/[0.16] dark:bg-white/[0.08] dark:shadow-[0_22px_65px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="flex h-20 items-center justify-center rounded-2xl border border-cmr-line bg-white p-4">
              <img
                src={NINJATRADER_LOGO}
                alt="NinjaTrader"
                className="max-h-12 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                <LineChart
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                NinjaTrader
              </h3>
            </div>

            <p className="mt-4 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
              Plataforma que utilizo para analizar y trabajar los mercados de
              futuros.
            </p>

            <a
              href={NINJATRADER_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Conocer NinjaTrader

              <ExternalLink
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </article>

          <article className="flex h-full flex-col rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-white/[0.16] dark:bg-white/[0.08] dark:shadow-[0_22px_65px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="flex h-20 items-center justify-center rounded-2xl border border-cmr-line bg-white p-4">
              <img
                src={KINETICK_LOGO}
                alt="Kinetick"
                className="max-h-12 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green dark:bg-cmr-green/[0.16] dark:text-[#79CFC4]">
                <Radio
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-display text-2xl font-black text-cmr-ink dark:text-white">
                Kinetick
              </h3>
            </div>

            <p className="mt-4 flex-1 leading-7 text-cmr-muted dark:text-white/[0.68]">
              Servicio de datos de mercado que puede utilizarse junto con
              NinjaTrader.
            </p>

            <a
              href={KINETICK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-light mt-6 w-full"
            >
              Conocer Kinetick

              <ExternalLink
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </article>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-cmr-muted dark:text-white/[0.48]">
          El enlace de NinjaTrader es un enlace de afiliado. Si contratas
          desde él, puedo recibir una comisión sin coste adicional para ti.
        </p>
      </div>
    </section>
  )
}