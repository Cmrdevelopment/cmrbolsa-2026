import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function esEnlaceExterno(url) {
  return (
    typeof url === 'string' &&
    (
      url.startsWith('https://') ||
      url.startsWith('http://')
    )
  )
}

function HeroButton({
  to,
  children,
  variant = 'primary',
}) {
  const className =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary-dark'

  if (esEnlaceExterno(to)) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={to}
      className={className}
    >
      {children}
    </Link>
  )
}

export default function PageHero({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  contenidoInferior,
  contenidoLateral,
}) {
  return (
    <section
      data-page-hero="true"
      className="noise relative overflow-hidden border-b border-white/[0.12] bg-[#173E38] bg-cmr-radial py-16 text-white transition-colors duration-300 dark:bg-[#071A17] sm:py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cmr-green/[0.22] blur-3xl dark:bg-cmr-green/[0.14]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cmr-gold/[0.13] blur-3xl dark:bg-cmr-gold/[0.08]" />

      <div
        className={`section-shell relative ${
          contenidoLateral
            ? 'grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center'
            : ''
        }`}
      >
        <div className={contenidoLateral ? 'max-w-4xl' : 'max-w-5xl'}>
          {eyebrow && (
            <span className="eyebrow-dark">
              {eyebrow}
            </span>
          )}

          <h1 className="hero-text-balance mt-6 font-display text-4xl font-black leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {text && (
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white/[0.76] sm:text-xl">
              {text}
            </p>
          )}

          {(primaryLabel || secondaryLabel) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryLabel && primaryTo && (
                <HeroButton to={primaryTo}>
                  {primaryLabel}

                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </HeroButton>
              )}

              {secondaryLabel && secondaryTo && (
                <HeroButton
                  to={secondaryTo}
                  variant="secondary"
                >
                  {secondaryLabel}

                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </HeroButton>
              )}
            </div>
          )}

          {contenidoInferior && (
            <div className="mt-5">
              {contenidoInferior}
            </div>
          )}
        </div>

        {contenidoLateral && (
          <div>
            {contenidoLateral}
          </div>
        )}
      </div>
    </section>
  )
}