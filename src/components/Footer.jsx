import { Link } from 'react-router-dom'
import {
  BookOpen,
  Users,
  GraduationCap,
  ChevronRight,
  FileText,
  AlertTriangle,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="noise border-t border-white/10 bg-cmr-dark bg-cmr-radial text-white">
      <div className="section-shell py-16 sm:py-20">
        {/* AVISO LEGAL ARRIBA */}
        <div
          id="aviso-riesgo"
          className="mb-12 rounded-[2rem] border border-cmr-gold/18 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cmr-gold/14 text-cmr-gold">
              <AlertTriangle className="h-6 w-6" />
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cmr-gold">
                    Aviso importante
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-white">
                    Aviso de riesgo y declaraciones legales
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/68 sm:text-base">
                El contenido de CMRBolsa tiene finalidad formativa. Operar en mercados financieros implica
                riesgo, no hay garantías de resultados y cada persona es responsable de sus decisiones, su
                gestión de riesgo y su operativa.
              </p>

              <details
                id="declaraciones-legales"
                className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-cmr-dark2/55"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-extrabold text-white/76 transition hover:bg-white/6 hover:text-white">
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cmr-green" />
                    Leer declaraciones completas
                  </span>

                  <span className="text-xs uppercase tracking-[0.18em] text-cmr-green">
                    abrir
                  </span>
                </summary>

                <div className="border-t border-white/10 px-5 py-5 text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
                  <p>
                    <span className="font-bold text-white/72">Declaración de Riesgo:</span>{' '}
                    La operación de futuros y forex sobrelleva riesgos substanciales y no es para todos
                    los inversionistas. Un inversionista podría potencialmente perder todo o más de la
                    inversión inicial. Capital de riesgo es dinero que puede ser perdido sin poner en
                    juego la seguridad financiera o estilo de vida de la persona. Solo capital de riesgo
                    debe ser utilizado para trading, y solo aquellas personas con suficiente capital de
                    riesgo deben considerar trading. Resultados pasados no son necesariamente indicativos
                    de resultados futuros.
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-white/72">
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
                    <span className="font-bold text-white/72">Testimonios:</span>{' '}
                    Los testimonios que aparecen en este sitio web pueden no ser representativos de todos
                    los clientes o usuarios y no constituyen una garantía de rendimiento, rentabilidad o
                    éxito futuro.
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-white/72">
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
        <div className="grid w-full gap-10 px-8 lg:grid-cols-[1fr_2.35fr] lg:items-start xl:gap-10 xl:px-14">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-cmr-green">
            CMRBolsa
          </p>

          <h2 className="mt-4 max-w-xs font-display text-3xl font-black leading-tight tracking-[-0.02em] text-white">
            Trading sin señales raras.
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-7 text-white/68 sm:text-base">
            Método, trabajo y cabeza para aprender a mirar el mercado sin ir dando palos de ciego.
          </p>
        </div>

          <div className="grid gap-10 lg:ml-12 lg:grid-cols-3 xl:ml-20 xl:gap-14">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/52">
                Empezar
              </p>

              <div className="mt-6 grid gap-4 text-sm font-bold">
                <Link to="/#inicio" className="text-white/74 transition hover:text-cmr-green">
                  Inicio
                </Link>

                <Link to="/#cmrbolsa" className="text-white/74 transition hover:text-cmr-green">
                  CMRBolsa
                </Link>

                <Link to="/por-donde-empezar" className="text-white/74 transition hover:text-cmr-green">
                  Por dónde empezar
                </Link>

                <Link to="/testimonios" className="text-white/74 transition hover:text-cmr-green">
                  Testimonios
                </Link>

                <Link to="/substack" className="text-white/74 transition hover:text-cmr-green">
                  Substack
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/52">
                Formación
              </p>

              <div className="mt-6 grid gap-4 text-sm font-bold">
                <Link to="/comunidad-pev" className="text-white/74 transition hover:text-cmr-green">
                  Comunidad PEV
                </Link>

                <Link to="/mentoria-pev" className="text-white/74 transition hover:text-cmr-green">
                  Mentoría PEV
                </Link>

                <Link to="/sala-escrita" className="text-white/74 transition hover:text-cmr-green">
                  Sala escrita
                </Link>

                <Link to="/eventos" className="text-white/74 transition hover:text-cmr-green">
                  Eventos
                </Link>

                <Link to="/desgranando-la-esencia-del-mercado" className="text-white/74 transition hover:text-cmr-green">
                  Libro
                </Link>

                
              </div>
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/52">
                Legal
              </p>

              <div className="mt-6 grid gap-4 text-sm font-bold">
                <a href="#aviso-riesgo" className="text-white/74 transition hover:text-cmr-green">
                  Aviso de riesgo
                </a>

                <a
                  href="#declaraciones-legales"
                  className="text-white/74 transition hover:text-cmr-green"
                >
                  Declaraciones legales
                </a>

                <Link to="/privacidad" className="text-white/74 transition hover:text-cmr-green">
                  Política de privacidad
                </Link>

                <Link to="/aviso-legal" className="text-white/74 transition hover:text-cmr-green">
                  Aviso legal
                </Link>

                <Link to="/cookies" className="text-white/74 transition hover:text-cmr-green">
                  Política de cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PIE FINAL */}

        {/* TARJETAS PRINCIPALES ABAJO */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 lg:grid-cols-3">
          <Link
            to="/comunidad-pev"
            className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:-translate-y-0.5 hover:bg-white/8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-green/14 text-cmr-green">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <p className="font-display text-2xl font-black leading-tight text-white">
                  Comunidad PEV
                </p>

                <p className="mt-2 text-sm leading-6 text-white/68">
                  Vídeos, reuniones, sala escrita y acompañamiento.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-green transition">
                  Ver Comunidad
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/mentoria-pev"
            className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:-translate-y-0.5 hover:bg-white/8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-green/14 text-cmr-green">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div>
                <p className="font-display text-2xl font-black leading-tight text-white">
                  Mentoría PEV
                </p>

                <p className="mt-2 text-sm leading-6 text-white/68">
                  Para quien quiere corrección, orden y proceso directo.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-green transition">
                  Ver Mentoría
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/desgranando-la-esencia-del-mercado"
            className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:-translate-y-0.5 hover:bg-white/8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-gold/12 text-cmr-gold">
                <BookOpen className="h-5 w-5" />
              </div>

              <div>
                <p className="font-display text-2xl font-black leading-tight text-white">
                  Desgranando la esencia del mercado
                </p>

                <p className="mt-2 text-sm leading-6 text-white/68">
                  El libro y Substack son una buena forma de empezar a conocer cómo miro el mercado.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cmr-green transition">
                  Ver libro
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CMRBolsa · Todos los derechos reservados.</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/privacidad" className="transition hover:text-white/72">
              Privacidad
            </Link>

            <Link to="/aviso-legal" className="transition hover:text-white/72">
              Aviso legal
            </Link>

            <Link to="/cookies" className="transition hover:text-white/72">
              Cookies
            </Link>
          </div>
        </div>
      </div>
      
    </footer>
  )
}