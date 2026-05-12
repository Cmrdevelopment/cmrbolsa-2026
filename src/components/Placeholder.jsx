import { Image, PlayCircle } from 'lucide-react'

export default function Placeholder({ label = 'MEDIA_URL', dark = true, type = 'image', className = '' }) {
  const Icon = type === 'video' ? PlayCircle : Image
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border ${dark ? 'border-white/10 bg-white/[0.06]' : 'border-cmr-line bg-cmr-soft'} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(50,128,119,.22),transparent_30%),linear-gradient(135deg,rgba(50,128,119,.16),transparent)]" />
      <div className={`relative flex min-h-[240px] flex-col items-center justify-center p-8 text-center ${dark ? 'text-white/75' : 'text-cmr-muted'}`}>
        <Icon className="mb-4 h-10 w-10 text-cmr-green" />
        <p className="font-display text-lg font-bold">Hueco preparado</p>
        <p className="mt-2 max-w-xs text-sm">{label}</p>
      </div>
    </div>
  )
}
