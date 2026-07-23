import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  BookOpen,
  ChevronRight,
  FileText,
  GraduationCap,
  Users,
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { SiSubstack } from 'react-icons/si'

const socialLinks = [
  {
    label: 'X',
    href: 'https://x.com/cmrbolsa',
    icon: FaXTwitter,
    cardClass:
      'border-white/20 hover:border-white/40',
    iconClass:
      'border-white/20 bg-white/10 text-white',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cmrbolsa',
    icon: FaInstagram,
    cardClass:
      'border-[#E1306C]/25 hover:border-[#E1306C]/55',
    iconClass:
      'border-[#E1306C]/30 bg-[#E1306C]/10 text-[#FF7AAA]',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@cmrbolsa',
    icon: FaTiktok,
    cardClass:
      'border-[#69C9D0]/25 hover:border-[#69C9D0]/55',
    iconClass:
      'border-[#69C9D0]/30 bg-[#69C9D0]/10 text-[#69C9D0]',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@cmrbolsa',
    icon: FaYoutube,
    cardClass:
      'border-[#FF0000]/25 hover:border-[#FF0000]/55',
    iconClass:
      'border-[#FF0000]/30 bg-[#FF0000]/10 text-[#FF5A5A]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cmrbolsa',
    icon: FaFacebookF,
    cardClass:
      'border-[#1877F2]/25 hover:border-[#1877F2]/55',
    iconClass:
      'border-[#1877F2]/30 bg-[#1877F2]/10 text-[#68A7FF]',
  },
  {
    label: 'Substack',
    href: 'https://cmrbolsa.substack.com/',
    icon: SiSubstack,
    cardClass:
      'border-[#FF6719]/25 hover:border-[#FF6719]/55',
    iconClass:
      'border-[#FF6719]/30 bg-[#FF6719]/10 text-[#FF945C]',
  },
]

const linkClass =
  'text-white/82 transition duration-200 hover:translate-x-0.5 hover:text-white'

export default function Footer() {
  return (
    <footer className="noise border-t border-white/15 bg-cmr-dark bg-cmr-radial text-white">
      <div className="section-shell py-16 sm:py-20">
        {/* AVISO LEGAL */}
        <div
          id="aviso-riesgo"
          className="mb-14 rounded-[2rem] border border-cmr-gold/35 bg-cmr-dark2/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cmr-gold/30 bg-cmr-gold/15 text-cmr-gold">
              <AlertTriangle className="h-6 w-6" />
            </div>

            <div className="w-full">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cmr-gold">
                Aviso importante
              </p>

              <h3 className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl">
                Aviso de riesgo y declaraciones legales
              </h3>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/82 sm:text-base">
                El contenido de CMRBolsa tiene finalidad formativa. Operar en mercados financieros implica
                riesgo, no hay garantías de resultados y cada persona es responsable de sus decisiones, su
                gestión de riesgo y su operativa.
              </p>

              <details
                id="declaraciones-legales"
                className="group mt-6 overflow-hidden rounded-[1.5rem] border border-white/20 bg-black/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-extrabold text-white/88 transition hover:bg-white/10 hover:text-white">
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cmr-green" />
                    Leer declaraciones completas
                  </span>

                  <span className="text-xs uppercase tracking-[0.18em] text-cmr-green">
                    Abrir
                  </span>
                </summary>

                <div className="border-t border-white/15 px-5 py-5 text-xs leading-6 text-white/68 sm:text-sm sm:leading-7">
                  <p>
                    <span className="font-bold text-white">
                      Declaración de Riesgo:
                    </span>{' '}
                    La operación de futuros y forex sobrelleva riesgos substanciales y no es para todos
                    los inversionistas. Un inversionista podría potencialmente perder todo o más de la
                    inversión inicial. Capital de riesgo es dinero que puede ser perdido sin poner en
                    juego la seguridad financiera o estilo de vida de la persona. Solo capital de riesgo
                    debe ser utilizado para trading, y solo aquellas personas con suficiente capital de
                    riesgo deben considerar trading. Resultados pasados no son necesariamente indicativos
                    de resultados futuros.
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-white">
                      Declaración de Resultados Hipotéticos:
                    </span>{' '}
                    Los resultados hipotéticos de rendimiento tienen muchas limitaciones inherentes. No se
                    debe hacer representación de que alguna cuenta va o es probable que tenga resultados
                    similares a los mostrados. Existen diferencias frecuentes entre los resultados
                    hipotéticos y los resultados actuales obtenidos por cualquier programa de trading. El
                    trading hipotético no involucra riesgo financiero real, y ningún récord hipotético puede
                    considerar completamente el impacto emocional y financiero de operar en real. Existen
                    además muchos factores de mercado y de ejecución que pueden afectar negativamente a los
                    resultados reales.
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-white">
                      Testimonios:
                    </span>{' '}
                    Los testimonios que aparecen en este sitio web pueden no ser representativos de todos
                    los clientes o usuarios y no constituyen una garantía de rendimiento, rentabilidad o
                    éxito futuro.
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-white">
                      Declaración de la Sala de Operaciones en Directo:
                    </span>{' '}
                    La sala de trading tiene un carácter exclusivamente educativo. En ningún caso constituye
                    asesoramiento financiero ni recomendaciones de inversión. Las operaciones mostradas son
                    ejemplos con fines formativos y cada usuario es responsable de sus propias decisiones. El
                    trading conlleva riesgos y puede no ser adecuado para todos los inversores.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* FOOTER PRINCIPAL */}
        <div className="grid w-full gap-12 lg:grid-cols-[0.9fr_2.1fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-cmr-green">
              CMRBolsa
            </p>

            <h2 className="mt-4 max-w-sm font-display text-3xl font-black leading-tight tracking-[-0.02em] text-white">
              Trading sin señales raras.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/78 sm:text-base">
              Método, trabajo y cabeza para aprender a mirar el mercado sin ir dando palos de ciego.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6">
              <p className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white">
                <span className="h-2 w-2 rounded-full bg-cmr-green" />
                Empezar
              </p>

              <div className="mt-6 grid gap-4 text-sm font-bold">
                <Link
                  to="/#inicio"
                  className={linkClass}
                >
                  Inicio
                </Link>

                <Link
                  to="/#cmrbolsa"
                  className={linkClass}
                >
                  CMRBolsa
                </Link>

                <Link
                  to="/por-donde-empezar"
                  className={linkClass}
                >
                  Por dónde empezar
                </Link>

                <Link
                  to="/testimonios"
                  className={linkClass}
                >
                  Testimonios
                </Link>

                <Link
                  to="/substack"
                  className={linkClass}
                >
                  Substack
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6">
              <p className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white">
                <span className="h-2 w-2 rounded-full bg-cmr-green" />
                Formación
              </p>

              <div className="mt-6 grid gap-4 text-sm font-bold">
                <Link
                  to="/comunidad-pev"
                  className={linkClass}
                >
                  Comunidad PEV
                </Link>

                <Link
                  to="/mentoria-pev"
                  className={linkClass}
                >
                  Mentoría PEV
                </Link>

                <Link
                  to="/sala-escrita"
                  className={linkClass}
                >
                  Sala escrita
                </Link>

                <Link
                  to="/eventos"
                  className={linkClass}
                >
                  Eventos
                </Link>

                <Link
                  to="/desgranando-la-esencia-del-mercado"
                  className={linkClass}
                >
                  Libro
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6 sm:col-span-2 lg:col-span-1">
              <p className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white">
                <span className="h-2 w-2 rounded-full bg-cmr-gold" />
                Legal
              </p>

              <div className="mt-6 grid gap-4 text-sm font-bold">
                <a
                  href="#aviso-riesgo"
                  className={linkClass}
                >
                  Aviso de riesgo
                </a>

                <a
                  href="#declaraciones-legales"
                  className={linkClass}
                >
                  Declaraciones legales
                </a>

                <Link
                  to="/aviso-legal"
                  className={linkClass}
                >
                  Aviso legal
                </Link>

                <Link
                  to="/politica-privacidad"
                  className={linkClass}
                >
                  Política de privacidad
                </Link>

                <Link
                  to="/politica_de_cookies"
                  className={linkClass}
                >
                  Política de cookies
                </Link>

                <Link
                  to="/terminos_y_condiciones"
                  className={linkClass}
                >
                  Términos y condiciones
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* REDES SOCIALES */}
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.09] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cmr-green/15 blur-3xl" />
            <div className="absolute -bottom-12 left-20 h-28 w-28 rounded-full bg-cmr-gold/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cmr-green">
                  Sígueme también en redes
                </p>

                <h3 className="mt-3 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                  Más mercado, más ideas y más CMRBolsa fuera de la web.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/76">
                  Vídeos, análisis, reflexiones, artículos y contenido para seguir entendiendo el mercado con PEV.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:min-w-[620px]">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${social.label} de CMRBolsa`}
                      className={`group flex items-center justify-between gap-4 rounded-2xl border bg-cmr-dark2/80 px-4 py-4 text-white/88 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 ${social.cardClass}`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${social.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>

                        <span className="text-sm font-extrabold text-white">
                          {social.label}
                        </span>
                      </span>

                      <ChevronRight className="h-4 w-4 text-white/45 transition group-hover:translate-x-0.5 group-hover:text-white" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* TARJETAS PRINCIPALES */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Link
            to="/comunidad-pev"
            className="group rounded-[1.75rem] border border-white/20 bg-white/[0.09] px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/55 hover:bg-white/[0.14]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/30 bg-cmr-green/15 text-cmr-green">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <p className="font-display text-2xl font-black leading-tight text-white">
                  Comunidad PEV
                </p>

                <p className="mt-2 text-sm leading-6 text-white/76">
                  Vídeos, reuniones, sala escrita y acompañamiento.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-green">
                  Ver Comunidad
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/mentoria-pev"
            className="group rounded-[1.75rem] border border-white/20 bg-white/[0.09] px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:border-cmr-green/55 hover:bg-white/[0.14]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/30 bg-cmr-green/15 text-cmr-green">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div>
                <p className="font-display text-2xl font-black leading-tight text-white">
                  Mentoría PEV
                </p>

                <p className="mt-2 text-sm leading-6 text-white/76">
                  Para quien quiere corrección, orden y un proceso más directo.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-green">
                  Ver Mentoría
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/desgranando-la-esencia-del-mercado"
            className="group rounded-[1.75rem] border border-white/20 bg-white/[0.09] px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:border-cmr-gold/55 hover:bg-white/[0.14]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cmr-gold/30 bg-cmr-gold/15 text-cmr-gold">
                <BookOpen className="h-5 w-5" />
              </div>

              <div>
                <p className="font-display text-2xl font-black leading-tight text-white">
                  Desgranando la esencia del mercado
                </p>

                <p className="mt-2 text-sm leading-6 text-white/76">
                  El libro y Substack son una buena forma de empezar a conocer cómo miro el mercado.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-gold">
                  Ver libro
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* PIE INFERIOR */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CMRBolsa · Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link
              to="/aviso-legal"
              className="transition hover:text-white"
            >
              Aviso legal
            </Link>

            <Link
              to="/politica-privacidad"
              className="transition hover:text-white"
            >
              Privacidad
            </Link>

            <Link
              to="/politica_de_cookies"
              className="transition hover:text-white"
            >
              Cookies
            </Link>

            <Link
              to="/terminos_y_condiciones"
              className="transition hover:text-white"
            >
              Términos y condiciones
            </Link>

            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent(
                    'cmrbolsa:open-cookie-settings'
                  )
                )
              }}
              className="text-left transition hover:text-white"
            >
              Configurar cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}