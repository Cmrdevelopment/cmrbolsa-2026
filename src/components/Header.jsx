import {
  useEffect,
  useState,
} from 'react'
import {
  Link,
  useLocation,
} from 'react-router-dom'
import {
  ArrowRight,
  Menu,
  X,
} from 'lucide-react'

import SelectorTema from './SelectorTema'
import { useTema } from '../context/TemaContext.jsx'

const LOGO_PARA_FONDO_CLARO =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/v1777842803/cmrbolsa/Logo_cmrbolsa_09_2023_aoggtn.png'

const LOGO_PARA_FONDO_OSCURO =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/v1778006883/logo-cmrbolsa-transparente_wmvu5g.png'

const navItems = [
  {
    label: 'CMRBolsa',
    href: '#cmrbolsa',
  },
  {
    label: 'Comunidad',
    href: '#comunidad',
  },
  {
    label: 'Mentoría',
    href: '#mentoria',
  },
  {
    label: 'Eventos',
    href: '#eventos',
  },
  {
    label: 'Libro',
    href: '#libro',
  },
]

const darkSections = [
  'inicio',
  'comunidad',
  'eventos',
]

export default function Header() {
  const location = useLocation()

  const {
    esTemaOscuro,
  } = useTema()

  const isHomePage =
    location.pathname === '/'

  const [scrolled, setScrolled] =
    useState(false)

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [
    activeSection,
    setActiveSection,
  ] = useState('inicio')

  const [
    sobreHeroInterno,
    setSobreHeroInterno,
  ] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      )
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isHomePage) {
      setSobreHeroInterno(false)
      return undefined
    }

    const actualizarPosicionHero = () => {
      const hero =
        document.querySelector(
          '[data-page-hero="true"]'
        )

      if (!hero) {
        setSobreHeroInterno(
          window.scrollY <= 40
        )

        return
      }

      const limiteHeader = 82

      setSobreHeroInterno(
        hero.getBoundingClientRect()
          .bottom > limiteHeader
      )
    }

    const frame =
      window.requestAnimationFrame(
        actualizarPosicionHero
      )

    window.addEventListener(
      'scroll',
      actualizarPosicionHero,
      {
        passive: true,
      }
    )

    window.addEventListener(
      'resize',
      actualizarPosicionHero
    )

    return () => {
      window.cancelAnimationFrame(
        frame
      )

      window.removeEventListener(
        'scroll',
        actualizarPosicionHero
      )

      window.removeEventListener(
        'resize',
        actualizarPosicionHero
      )
    }
  }, [
    isHomePage,
    location.pathname,
  ])

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('inicio')
      return undefined
    }

    const sectionIds = [
      'inicio',
      ...navItems.map((item) =>
        item.href.replace('#', '')
      ),
    ]

    const elementos =
      sectionIds
        .map((id) =>
          document.getElementById(id)
        )
        .filter(Boolean)

    if (!elementos.length) {
      return undefined
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              )

          if (
            visibleEntries.length > 0 &&
            visibleEntries[0]
              ?.target?.id
          ) {
            setActiveSection(
              visibleEntries[0]
                .target.id
            )
          }
        },
        {
          root: null,
          rootMargin:
            '-24% 0px -58% 0px',
          threshold: [
            0.05,
            0.15,
            0.3,
          ],
        }
      )

    elementos.forEach(
      (elemento) => {
        observer.observe(elemento)
      }
    )

    return () => {
      observer.disconnect()
    }
  }, [isHomePage])

  const sobreSeccionOscura =
    isHomePage
      ? (
          !scrolled ||
          darkSections.includes(
            activeSection
          )
        )
      : sobreHeroInterno

  /*
   * En modo oscuro la cabecera siempre utiliza
   * su versión oscura: fondo oscuro, letras claras
   * y logo preparado para fondo oscuro.
   *
   * En modo claro cambia según la sección visible.
   */
  const usarCabeceraOscura =
    esTemaOscuro ||
    sobreSeccionOscura

  const headerClass =
    usarCabeceraOscura
      ? 'border-white/[0.14] bg-cmr-dark/[0.94] text-white shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl'
      : 'border-cmr-line bg-cmr-light/[0.96] text-cmr-ink shadow-[0_18px_50px_rgba(20,32,29,0.08)] backdrop-blur-xl'

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const getNavHref = (href) => {
    return isHomePage
      ? href
      : `/${href}`
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex h-[82px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="/#inicio"
          onClick={closeMenu}
          className="relative block h-[56px] w-[170px] shrink-0"
          aria-label="Ir al inicio de CMRBolsa"
        >
          <img
            src={
              LOGO_PARA_FONDO_OSCURO
            }
            alt=""
            aria-hidden="true"
            className={`absolute left-0 top-1/2 h-auto w-[150px] -translate-y-1/2 object-contain object-left transition duration-300 ${
              usarCabeceraOscura
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          />

          <img
            src={
              LOGO_PARA_FONDO_CLARO
            }
            alt=""
            aria-hidden="true"
            className={`absolute left-0 top-1/2 h-auto w-[165px] -translate-y-1/2 object-contain object-left transition duration-300 ${
              usarCabeceraOscura
                ? 'pointer-events-none opacity-0'
                : 'opacity-100'
            }`}
          />

          <span className="sr-only">
            CMRBolsa
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const sectionId =
              item.href.replace('#', '')

            const isActive =
              isHomePage &&
              activeSection ===
                sectionId

            return (
              <a
                key={item.href}
                href={getNavHref(
                  item.href
                )}
                aria-current={
                  isActive
                    ? 'page'
                    : undefined
                }
                className={`group relative rounded-full px-4 py-2 text-sm font-extrabold transition duration-200 ${
                  usarCabeceraOscura
                    ? isActive
                      ? 'text-white'
                      : 'text-white/[0.78] hover:text-white'
                    : isActive
                      ? 'text-cmr-green'
                      : 'text-cmr-ink/[0.78] hover:text-cmr-green'
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cmr-green transition duration-200 ${
                    isActive
                      ? 'scale-100 opacity-100'
                      : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-70'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SelectorTema
            sobreOscuro={
              usarCabeceraOscura
            }
          />

          <Link
            to="/por-donde-empezar"
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${
              usarCabeceraOscura
                ? 'border border-white/[0.16] bg-white text-cmr-ink shadow-[0_18px_50px_rgba(255,255,255,0.10)] hover:bg-cmr-light2'
                : 'bg-cmr-green text-white shadow-[0_18px_50px_rgba(50,128,119,0.22)] hover:bg-cmr-greenDark'
            }`}
          >
            Ver por dónde empezar

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <SelectorTema
            sobreOscuro={
              usarCabeceraOscura
            }
          />

          <button
            type="button"
            onClick={() =>
              setMenuOpen(
                (value) => !value
              )
            }
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
              usarCabeceraOscura
                ? 'border-white/[0.25] bg-white/[0.12] text-white hover:bg-white/[0.20]'
                : 'border-cmr-line bg-white text-cmr-ink hover:border-cmr-green/50 hover:bg-cmr-light2'
            }`}
            aria-label={
              menuOpen
                ? 'Cerrar menú'
                : 'Abrir menú'
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`border-t px-5 pb-6 pt-3 lg:hidden ${
            usarCabeceraOscura
              ? 'border-white/[0.14] bg-cmr-dark/[0.98] text-white backdrop-blur-xl'
              : 'border-cmr-line bg-cmr-light/[0.98] text-cmr-ink backdrop-blur-xl'
          }`}
        >
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const sectionId =
                item.href.replace(
                  '#',
                  ''
                )

              const isActive =
                isHomePage &&
                activeSection ===
                  sectionId

              return (
                <a
                  key={item.href}
                  href={getNavHref(
                    item.href
                  )}
                  onClick={closeMenu}
                  aria-current={
                    isActive
                      ? 'page'
                      : undefined
                  }
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition ${
                    usarCabeceraOscura
                      ? isActive
                        ? 'bg-white/[0.15] text-white'
                        : 'text-white/[0.78] hover:bg-white/[0.12] hover:text-white'
                      : isActive
                        ? 'bg-cmr-greenSoft text-cmr-green'
                        : 'text-cmr-ink/[0.78] hover:bg-white hover:text-cmr-green'
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-cmr-green" />
                  )}
                </a>
              )
            })}

            <Link
              to="/por-donde-empezar"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-cmr-green px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(50,128,119,0.22)] transition hover:bg-cmr-greenDark"
            >
              Ver por dónde empezar

              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}