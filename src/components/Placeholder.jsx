import {
  Image,
  PlayCircle,
} from 'lucide-react'

export default function Placeholder({
  label = 'MEDIA_URL',
  dark = true,
  type = 'image',
  className = '',
}) {
  const Icon =
    type === 'video'
      ? PlayCircle
      : Image

  const containerClass = dark
    ? 'border-white/20 bg-white/[0.10]'
    : 'border-cmr-border bg-cmr-surfaceAlt'

  const textClass = dark
    ? 'text-cmr-onDarkMuted'
    : 'text-cmr-textMuted'

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border ${containerClass} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(50,128,119,.22),transparent_30%),linear-gradient(135deg,rgba(50,128,119,.16),transparent)]" />

      <div
        className={`relative flex min-h-[240px] flex-col items-center justify-center p-8 text-center ${textClass}`}
      >
        <Icon
          className="mb-4 h-10 w-10 text-cmr-green"
          aria-hidden="true"
        />

        <p
          className={`font-display text-lg font-bold ${
            dark
              ? 'text-cmr-onDark'
              : 'text-cmr-text'
          }`}
        >
          Hueco preparado
        </p>

        <p className="mt-2 max-w-xs text-sm">
          {label}
        </p>
      </div>
    </div>
  )
}