import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const LOGO_CLARO =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/v1777842803/cmrbolsa/Logo_cmrbolsa_09_2023_aoggtn.png'

const LOGO_OSCURO =
  'https://res.cloudinary.com/dwbxywvdw/image/upload/v1778006883/logo-cmrbolsa-transparente_wmvu5g.png'

const navItems = [
  // { label: 'Inicio', href: '#inicio' },
  { label: 'CMRBolsa', href: '#cmrbolsa' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Mentoría', href: '#mentoria' },
  // { label: 'Sala escrita', href: '#sala' },
  { label: 'Eventos', href: '#eventos' },
  // { label: 'Testimonios', href: '#testimonios' },
  { label: 'Libro', href: '#libro' },
]

const darkSections = ['inicio', 'comunidad', 'eventos']

export default function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40)
  }

  handleScroll()
  window.addEventListener('scroll', handleScroll)

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0 && visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const isDarkHeader = !scrolled || darkSections.includes(activeSection)

  const headerClass = isDarkHeader
    ? 'border-white/10 bg-cmr-dark/90 text-white backdrop-blur-xl'
    : 'border-cmr-line bg-cmr-light/95 text-cmr-ink shadow-[0_18px_50px_rgba(20,32,29,0.08)] backdrop-blur-xl'

  const logo = isDarkHeader ? LOGO_OSCURO : LOGO_CLARO

  const closeMenu = () => setMenuOpen(false)

  const getNavHref = (href) => {
    return isHomePage ? href : `/${href}`
  }

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${headerClass}`}>
      <div className="mx-auto flex h-[82px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          to="/#inicio"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Ir al inicio"
        >
          <img
            src={logo}
            alt="CMRBolsa"
            className={`h-auto transition-all duration-300 ${
              isDarkHeader ? 'w-[150px] opacity-100' : 'w-[165px] opacity-100'
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.href}
                href={getNavHref(item.href)}
                className={`group relative rounded-full px-4 py-2 text-sm font-extrabold transition duration-200 ${
                  isDarkHeader
                    ? isActive
                      ? 'text-white'
                      : 'text-white/78 hover:text-white'
                    : isActive
                      ? 'text-cmr-green'
                      : 'text-cmr-ink/78 hover:text-cmr-green'
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
          <Link
            to="/por-donde-empezar"
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${
              isDarkHeader
                ? 'bg-white text-cmr-ink shadow-[0_18px_50px_rgba(255,255,255,0.10)] hover:bg-cmr-light2'
                : 'bg-cmr-green text-white shadow-[0_18px_50px_rgba(50,128,119,0.22)] hover:bg-cmr-greenDark'
            }`}
          >
            Ver por dónde empezar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            isDarkHeader
              ? 'border-white/15 bg-white/10 text-white'
              : 'border-cmr-line bg-white text-cmr-ink'
          }`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`border-t px-5 pb-6 pt-3 lg:hidden ${
            isDarkHeader
              ? 'border-white/10 bg-cmr-dark/98 text-white backdrop-blur-xl'
              : 'border-cmr-line bg-cmr-light/98 text-cmr-ink backdrop-blur-xl'
          }`}
        >
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId 

              return (
                <a
                  key={item.href}
                  href={getNavHref(item.href)}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition ${
                    isDarkHeader
                      ? isActive
                        ? 'bg-white/10 text-white'
                        : 'text-white/72 hover:bg-white/10 hover:text-white'
                      : isActive
                        ? 'bg-cmr-greenSoft text-cmr-green'
                        : 'text-cmr-ink/78 hover:bg-white hover:text-cmr-green'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="h-2 w-2 rounded-full bg-cmr-green" />}
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