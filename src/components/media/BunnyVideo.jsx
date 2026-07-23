import {
  useEffect,
  useRef,
  useState,
} from 'react'
import { Play } from 'lucide-react'

let promesaPlayerJs = null

function cargarPlayerJs() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.playerjs) {
    return Promise.resolve()
  }

  if (!promesaPlayerJs) {
    promesaPlayerJs = new Promise(
      (resolve, reject) => {
        const scriptExistente =
          document.querySelector(
            'script[data-bunny-playerjs="true"]'
          )

        if (scriptExistente) {
          scriptExistente.addEventListener(
            'load',
            resolve,
            { once: true }
          )

          scriptExistente.addEventListener(
            'error',
            reject,
            { once: true }
          )

          return
        }

        const script =
          document.createElement('script')

        script.src =
          'https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js'

        script.async = true
        script.dataset.bunnyPlayerjs =
          'true'

        script.addEventListener(
          'load',
          resolve,
          { once: true }
        )

        script.addEventListener(
          'error',
          reject,
          { once: true }
        )

        document.head.appendChild(
          script
        )
      }
    )
  }

  return promesaPlayerJs
}

export default function BunnyVideo({
  libraryId,
  videoId,
  title,
  className = '',
  cargaDiferida = false,
  cargaAlPulsar = false,
  posterUrl = '',
}) {
  const contenedorRef = useRef(null)
  const iframeRef = useRef(null)

  const [reinicio, setReinicio] =
    useState(0)

  const [debeCargar, setDebeCargar] =
    useState(
      () =>
        !cargaDiferida &&
        !cargaAlPulsar
    )

  const autoplay =
    cargaAlPulsar
      ? 'true'
      : 'false'

  const src =
    `https://player.mediadelivery.net/embed/${libraryId}/${videoId}` +
    `?autoplay=${autoplay}` +
    '&preload=false' +
    '&loop=false' +
    '&muted=false' +
    '&playsinline=true' +
    '&rememberPosition=false' +
    '&compactControls=true' +
    '&showSpeed=false' +
    '&chromecast=false' +
    '&disableAirplay=true' +
    '&disableIosPlayer=true' +
    `&playerInstance=${reinicio}`

  useEffect(() => {
    if (cargaAlPulsar) {
      return undefined
    }

    if (!cargaDiferida) {
      setDebeCargar(true)
      return undefined
    }

    if (debeCargar) {
      return undefined
    }

    const contenedor =
      contenedorRef.current

    if (!contenedor) {
      return undefined
    }

    if (
      typeof window === 'undefined' ||
      !(
        'IntersectionObserver'
        in window
      )
    ) {
      setDebeCargar(true)
      return undefined
    }

    const observador =
      new IntersectionObserver(
        (entradas) => {
          const entrada =
            entradas[0]

          if (
            entrada?.isIntersecting
          ) {
            setDebeCargar(true)
            observador.disconnect()
          }
        },
        {
          rootMargin:
            '600px 0px',
          threshold: 0,
        }
      )

    observador.observe(
      contenedor
    )

    return () => {
      observador.disconnect()
    }
  }, [
    cargaAlPulsar,
    cargaDiferida,
    debeCargar,
  ])

  useEffect(() => {
    if (!debeCargar) {
      return undefined
    }

    let efectoActivo = true
    let reinicioSolicitado = false
    let temporizador = null

    function volverALaCaratula() {
      if (
        !efectoActivo ||
        reinicioSolicitado
      ) {
        return
      }

      reinicioSolicitado = true

      temporizador =
        window.setTimeout(
          () => {
            if (!efectoActivo) {
              return
            }

            if (cargaAlPulsar) {
              setDebeCargar(false)
            }

            setReinicio(
              (valorActual) =>
                valorActual + 1
            )
          },
          200
        )
    }

    function comprobarFinal(datos) {
      const informacion =
        datos?.data || datos

      const segundos = Number(
        informacion?.seconds
      )

      const duracion = Number(
        informacion?.duration
      )

      if (
        Number.isFinite(segundos) &&
        Number.isFinite(duracion) &&
        duracion > 0 &&
        segundos >=
          duracion - 0.3
      ) {
        volverALaCaratula()
      }
    }

    cargarPlayerJs()
      .then(() => {
        if (
          !efectoActivo ||
          !iframeRef.current ||
          !window.playerjs
        ) {
          return
        }

        const player =
          new window.playerjs.Player(
            iframeRef.current
          )

        player.on('ready', () => {
          if (!efectoActivo) {
            return
          }

          player.on(
            'ended',
            volverALaCaratula
          )

          player.on(
            'timeupdate',
            comprobarFinal
          )
        })
      })
      .catch((error) => {
        console.error(
          'No se pudo conectar con el reproductor de Bunny:',
          error
        )
      })

    return () => {
      efectoActivo = false

      if (temporizador) {
        window.clearTimeout(
          temporizador
        )
      }
    }
  }, [
    cargaAlPulsar,
    debeCargar,
    reinicio,
  ])

  return (
    <div
      ref={contenedorRef}
      className={`relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black ${className}`}
    >
      {debeCargar ? (
        <iframe
          key={reinicio}
          ref={iframeRef}
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; encrypted-media"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : cargaAlPulsar &&
        posterUrl ? (
        <button
          type="button"
          onClick={() =>
            setDebeCargar(true)
          }
          aria-label={`Reproducir ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer overflow-hidden bg-cmr-dark"
        >
          <img
            src={posterUrl}
            alt={`Carátula de ${title}`}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />

          <span className="absolute inset-0 bg-gradient-to-t from-cmr-dark/55 via-cmr-dark/10 to-transparent" />

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-cmr-dark/75 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-cmr-green">
              <Play
                className="ml-1 h-9 w-9"
                fill="currentColor"
              />
            </span>
          </span>
        </button>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-cmr-dark2 px-6 text-center">
          <p className="text-sm font-bold text-white/60">
            El vídeo se cargará al llegar a esta sección
          </p>
        </div>
      )}
    </div>
  )
}