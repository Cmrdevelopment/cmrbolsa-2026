import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import TestimonioCard from './TestimonioCard'

const STORAGE_KEY =
  'cmrbolsa_testimonios_home_pagina'

function dividirEnGrupos(testimonios, cantidad) {
  const grupos = []

  for (
    let indice = 0;
    indice < testimonios.length;
    indice += cantidad
  ) {
    grupos.push(
      testimonios.slice(
        indice,
        indice + cantidad
      )
    )
  }

  return grupos
}

function obtenerCantidadPorPantalla() {
  if (typeof window === 'undefined') return 3

  if (window.innerWidth < 768) return 1
  if (window.innerWidth < 1024) return 2

  return 3
}

function obtenerPaginaGuardada() {
  if (typeof window === 'undefined') return 0

  const paginaGuardada = Number.parseInt(
    window.sessionStorage.getItem(STORAGE_KEY) || '0',
    10
  )

  return Number.isNaN(paginaGuardada)
    ? 0
    : Math.max(paginaGuardada, 0)
}

export default function TestimoniosCarousel({
  testimonios = [],
  intervalo = 8000,
}) {
  const [cantidadPorPantalla, setCantidadPorPantalla] =
    useState(obtenerCantidadPorPantalla)

  const [paginaActual, setPaginaActual] =
    useState(obtenerPaginaGuardada)

  const [estaPausado, setEstaPausado] =
    useState(false)

  useEffect(() => {
    function actualizarCantidad() {
      setCantidadPorPantalla(
        obtenerCantidadPorPantalla()
      )
    }

    window.addEventListener(
      'resize',
      actualizarCantidad
    )

    return () => {
      window.removeEventListener(
        'resize',
        actualizarCantidad
      )
    }
  }, [])

  const grupos = useMemo(
    () =>
      dividirEnGrupos(
        testimonios,
        cantidadPorPantalla
      ),
    [testimonios, cantidadPorPantalla]
  )

  useEffect(() => {
    if (!grupos.length) return

    setPaginaActual((pagina) =>
      Math.min(
        pagina,
        grupos.length - 1
      )
    )
  }, [grupos.length])

  useEffect(() => {
    window.sessionStorage.setItem(
      STORAGE_KEY,
      String(paginaActual)
    )
  }, [paginaActual])

  useEffect(() => {
    if (
      estaPausado ||
      grupos.length <= 1
    ) {
      return undefined
    }

    const temporizador = window.setInterval(() => {
      setPaginaActual((pagina) =>
        pagina === grupos.length - 1
          ? 0
          : pagina + 1
      )
    }, intervalo)

    return () => {
      window.clearInterval(temporizador)
    }
  }, [
    estaPausado,
    grupos.length,
    intervalo,
  ])

  if (!testimonios.length) return null

  const paginaSegura = Math.min(
    paginaActual,
    Math.max(grupos.length - 1, 0)
  )

  const testimoniosVisibles =
    grupos[paginaSegura] || []

  function mostrarAnterior() {
    setPaginaActual((pagina) =>
      pagina === 0
        ? grupos.length - 1
        : pagina - 1
    )
  }

  function mostrarSiguiente() {
    setPaginaActual((pagina) =>
      pagina === grupos.length - 1
        ? 0
        : pagina + 1
    )
  }

  return (
    <div
      onMouseEnter={() => setEstaPausado(true)}
      onMouseLeave={() => setEstaPausado(false)}
      onFocusCapture={() => setEstaPausado(true)}
      onBlurCapture={() => setEstaPausado(false)}
    >
      <div className="relative">
        <div
          key={`${paginaSegura}-${cantidadPorPantalla}`}
          className={`grid animate-[fadeIn_.45s_ease-out] gap-6 ${
            cantidadPorPantalla === 1
              ? 'grid-cols-1'
              : cantidadPorPantalla === 2
                ? 'grid-cols-2'
                : 'grid-cols-3'
          }`}
        >
          {testimoniosVisibles.map((testimonio) => (
            <TestimonioCard
              key={testimonio.id}
              testimonio={testimonio}
              compact
            />
          ))}
        </div>

        {grupos.length > 1 && (
          <>
            <button
              type="button"
              onClick={mostrarAnterior}
              aria-label="Ver testimonios anteriores"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-cmr-line bg-white text-cmr-ink shadow-soft transition hover:border-cmr-green/35 hover:text-cmr-green sm:-translate-x-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={mostrarSiguiente}
              aria-label="Ver más testimonios"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-cmr-line bg-white text-cmr-ink shadow-soft transition hover:border-cmr-green/35 hover:text-cmr-green sm:translate-x-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {grupos.length > 1 && (
        <div className="mt-7 flex items-center justify-center gap-4">
          <div className="h-1.5 w-full max-w-[220px] overflow-hidden rounded-full bg-cmr-line">
            <div
              className="h-full rounded-full bg-cmr-green transition-all duration-500"
              style={{
                width: `${
                  ((paginaSegura + 1) / grupos.length) * 100
                }%`,
              }}
            />
          </div>

          <span className="min-w-[64px] text-center text-sm font-extrabold text-cmr-muted">
            {paginaSegura + 1} / {grupos.length}
          </span>
        </div>
      )}
    </div>
  )
}