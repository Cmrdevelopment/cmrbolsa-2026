import { PlayCircle } from 'lucide-react'

function resolverRutaMedia(ruta) {
  if (!ruta) {
    return ''
  }

  if (
    ruta.startsWith('http://') ||
    ruta.startsWith('https://') ||
    ruta.startsWith('/') ||
    ruta.startsWith('data:')
  ) {
    return ruta
  }

  return `/testimonios/${ruta}`
}

function obtenerYoutubeData(url) {
  const resultadoVacio = {
    embedUrl: '',
    videoId: '',
    esVertical: false,
  }

  if (!url) {
    return resultadoVacio
  }

  try {
    const parsedUrl = new URL(url)

    if (
      parsedUrl.hostname.includes(
        'youtu.be'
      )
    ) {
      const videoId =
        parsedUrl.pathname
          .split('/')
          .filter(Boolean)[0]

      return {
        embedUrl: videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : '',
        videoId: videoId || '',
        esVertical: false,
      }
    }

    if (
      parsedUrl.hostname.includes(
        'youtube.com'
      )
    ) {
      const videoIdWatch =
        parsedUrl.searchParams.get(
          'v'
        )

      if (videoIdWatch) {
        return {
          embedUrl:
            `https://www.youtube.com/embed/${videoIdWatch}`,
          videoId:
            videoIdWatch,
          esVertical:
            false,
        }
      }

      if (
        parsedUrl.pathname.startsWith(
          '/shorts/'
        )
      ) {
        const videoIdShort =
          parsedUrl.pathname
            .split('/')
            .filter(Boolean)[1]

        return {
          embedUrl: videoIdShort
            ? `https://www.youtube.com/embed/${videoIdShort}`
            : '',
          videoId:
            videoIdShort || '',
          esVertical:
            true,
        }
      }

      if (
        parsedUrl.pathname.startsWith(
          '/embed/'
        )
      ) {
        const videoIdEmbed =
          parsedUrl.pathname
            .split('/')
            .filter(Boolean)[1]

        return {
          embedUrl: videoIdEmbed
            ? `https://www.youtube.com/embed/${videoIdEmbed}`
            : '',
          videoId:
            videoIdEmbed || '',
          esVertical:
            false,
        }
      }
    }
  } catch {
    return resultadoVacio
  }

  return resultadoVacio
}

function obtenerVimeoEmbed(url) {
  if (
    !url ||
    !url.includes('vimeo.com')
  ) {
    return ''
  }

  const coincidencia =
    url.match(
      /vimeo\.com\/(?:video\/)?(\d+)/
    )

  return coincidencia?.[1]
    ? `https://player.vimeo.com/video/${coincidencia[1]}`
    : ''
}

function obtenerMiniaturaYoutube(
  videoId
) {
  if (!videoId) {
    return ''
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

export default function TestimonioMedia({
  testimonio,
  className = '',
  vistaPrevia = false,
}) {
  if (!testimonio) {
    return null
  }

  const {
    tipo,
    nombre,
    texto,
    imagenUrl,
    videoUrl,
    portadaUrl,
    orientacion,
  } = testimonio

  const imagen =
    resolverRutaMedia(
      imagenUrl
    )

  const video =
    resolverRutaMedia(
      videoUrl
    )

  const portada =
    resolverRutaMedia(
      portadaUrl
    )

  const youtubeData =
    obtenerYoutubeData(
      videoUrl
    )

  const vimeoEmbed =
    obtenerVimeoEmbed(
      videoUrl
    )

  const videoEmbed =
    youtubeData.embedUrl ||
    vimeoEmbed

  const esVideoVertical =
    youtubeData.esVertical ||
    orientacion === 'vertical'

  const tieneVideo =
    tipo === 'video' ||
    tipo === 'mixto' ||
    Boolean(videoUrl)

  const tieneImagen =
    tipo === 'imagen' ||
    tipo === 'mixto' ||
    Boolean(imagenUrl)

  const miniaturaVideo =
    portada ||
    obtenerMiniaturaYoutube(
      youtubeData.videoId
    )

  if (
    vistaPrevia &&
    tieneVideo
  ) {
    return (
      <div
        className={`group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-cmr-dark shadow-[0_16px_45px_rgba(0,0,0,0.16)] ${className}`}
      >
        {miniaturaVideo ? (
          <img
            src={miniaturaVideo}
            alt={`Vista previa del testimonio de ${
              nombre ||
              'un alumno de CMRBolsa'
            }`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full bg-cmr-dark bg-cmr-radial" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-cmr-dark/[0.78] via-cmr-dark/[0.12] to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.26] bg-cmr-dark/[0.72] text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 group-hover:scale-110 group-hover:border-cmr-green/55 group-hover:bg-cmr-green">
            <PlayCircle className="h-8 w-8" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 rounded-full border border-white/[0.18] bg-cmr-dark/[0.76] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur">
          Ver vídeo
        </div>
      </div>
    )
  }

  if (
    vistaPrevia &&
    tieneImagen &&
    imagen
  ) {
    return (
      <div
        className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] border border-cmr-line bg-cmr-paper transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 ${className}`}
      >
        <img
          src={imagen}
          alt={
            texto
              ? `Testimonio de ${
                  nombre ||
                  'un alumno de CMRBolsa'
                }`
              : `Imagen de ${
                  nombre ||
                  'un alumno de CMRBolsa'
                }`
          }
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    )
  }

  if (
    tieneVideo &&
    videoEmbed
  ) {
    return (
      <div
        className={`relative overflow-hidden rounded-[1.5rem] border border-white/[0.14] bg-cmr-dark shadow-[0_18px_55px_rgba(0,0,0,0.24)] ${
          esVideoVertical
            ? 'mx-auto w-full max-w-[360px]'
            : 'w-full'
        } ${className}`}
      >
        <iframe
          src={videoEmbed}
          title={`Testimonio de ${
            nombre ||
            'un alumno de CMRBolsa'
          }`}
          className={
            esVideoVertical
              ? 'aspect-[9/16] w-full'
              : 'aspect-video w-full'
          }
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (
    tieneVideo &&
    video
  ) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[1.5rem] border border-white/[0.14] bg-cmr-dark shadow-[0_18px_55px_rgba(0,0,0,0.24)] ${
          esVideoVertical
            ? 'mx-auto w-full max-w-[360px]'
            : 'w-full'
        } ${className}`}
      >
        <video
          controls
          preload="metadata"
          poster={
            portada ||
            undefined
          }
          className={`w-full bg-cmr-dark object-contain ${
            esVideoVertical
              ? 'aspect-[9/16]'
              : 'aspect-video'
          }`}
        >
          <source src={video} />

          Tu navegador no permite reproducir este vídeo.
        </video>

        {!portada && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-cmr-dark/[0.18]">
            <PlayCircle className="h-14 w-14 text-white/[0.80]" />
          </div>
        )}
      </div>
    )
  }

  if (
    tieneImagen &&
    imagen
  ) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-cmr-line bg-cmr-paper transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2 ${className}`}
      >
        <img
          src={imagen}
          alt={
            texto
              ? `Testimonio de ${
                  nombre ||
                  'un alumno de CMRBolsa'
                }`
              : `Imagen de ${
                  nombre ||
                  'un alumno de CMRBolsa'
                }`
          }
          loading="lazy"
          className="max-h-[620px] w-full object-contain"
        />
      </div>
    )
  }

  return null
}