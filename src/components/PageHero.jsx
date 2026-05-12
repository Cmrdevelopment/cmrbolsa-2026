import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function isExternalUrl(url) {
  return url?.startsWith('http')
}

function HeroButton({ to, children, variant = 'primary' }) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary-dark'

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

export default function PageHero({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial pt-[142px] pb-20 text-white sm:pb-24">
      <div className="section-shell">
        <div className="max-w-5xl">
          {eyebrow && <span className="eyebrow-dark">{eyebrow}</span>}

          <h1 className="hero-text-balance mt-7 font-display text-4xl font-black leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {text && (
            <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-white/76">
              {text}
            </p>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryLabel && (
              <HeroButton to={primaryTo}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </HeroButton>
            )}

            {secondaryLabel && (
              <HeroButton to={secondaryTo} variant="secondary">
                {secondaryLabel}
              </HeroButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}