import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Eye,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from 'lucide-react'
import Placeholder from '../../components/Placeholder'

const metodo = [
  {
    title: 'Conocimiento',
    label: 'Precio, Estructura y Volumen',
    percent: '100%',
    text: 'Es la base. Sin entender qué está haciendo el mercado, todo lo demás se convierte en intuición, prisa o suerte.',
    icon: LineChart,
  },
  {
    title: 'Timing',
    label: 'Entrada, salida y contexto',
    percent: '100%',
    text: 'No basta con ver una zona. Tienes que saber dónde entrar, dónde salir y por qué tiene sentido hacerlo justo ahí.',
    icon: Compass,
  },
  {
    title: 'Emociones',
    label: 'Conocerte para controlarte',
    percent: '100%',
    text: 'El miedo, la revancha o la euforia no se eliminan. Se conocen, se detectan y se gestionan antes de que manden por ti.',
    icon: ShieldCheck,
  },
]

const noEncontraras = [
  'No vas a encontrar señales mágicas.',
  'No vas a encontrar promesas de vivir del trading en dos tardes.',
  'No vas a encontrar “compra aquí y vende allí” sin explicación.',
  'No vas a encontrar una colección de indicadores para esconder que no entiendes el precio.',
]

const etapas = [
  {
    title: 'Primero me equivoqué',
    text: 'Como casi todos. Busqué atajos, probé cosas, cambié de enfoque más veces de las que me gustaría admitir y aprendí a base de mercado real y porque encontré a mi mentor.',
  },
  {
    title: 'Después me enseñaron a leer el mercado',
    text: 'Dejé de mirar el gráfico como una pelea de velas sueltas y empecé a mirar el mercado cómo un todo: precio, estructura y volumen.',
  },
  {
    title: 'Ahora intento enseñarlo claro',
    text: 'No para que dependas de mí, sino para que entiendas qué estás viendo y puedas tomar mejores decisiones delante del mercado.',
  },
]

const formas = [
  'Explico lo que veo, pero también por qué lo veo.',
  'Me interesa más que aprendas a esperar que que entres por entrar.',
  'Si una operación no tiene sentido, no se fuerza.',
  'Los errores se hablan, porque ahí se aprende mucho.',
  'El mercado manda. Nosotros nos adaptamos.',
  'PEV no va de adivinar. Va de leer mejor.',
]

export default function CmrbolsaPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial pt-[142px] pb-20 text-white sm:pb-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">CMRBolsa</span>

            <h1 className="hero-text-balance mt-7 font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Soy Carlos. En redes y en el mercado me conocen como CMRBolsa.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/76">
              Opero desde el 2005 y enseño trading desde una idea muy simple:
              si no entiendes qué está haciendo el precio, dónde lo está haciendo
              y por qué puede tener sentido una entrada, tarde o temprano acabas
              operando desde la emoción.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/comunidad-pev" className="btn-primary">
                Ver Comunidad PEV
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/por-donde-empezar" className="btn-secondary-dark">
                Ver por dónde empezar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 text-center grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">2005</p>
                <p className="mt-1 text-sm text-white/62">operando mercados</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">PEV</p>
                <p className="mt-1 text-sm text-white/62">precio, estructura y volumen</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-black text-white">+260</p>
                <p className="mt-1 text-sm text-white/62">alumnos formados</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3.5rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-darkGlow backdrop-blur">
              <Placeholder
                label="CARLOS_IMAGE_URL_02"
                type="image"
                className="min-h-[420px] border-cmr-green/25 bg-cmr-dark3"
              />

              <div className="mt-5 rounded-3xl bg-cmr-dark/90 p-5">
                <div className="flex items-start gap-3">
                  <Eye className="mt-1 h-6 w-6 shrink-0 text-cmr-green" />
                  <div>
                    <p className="font-display text-xl font-black text-white">
                      No intento que copies mi entrada.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Intento que entiendas qué estoy mirando, por qué lo miro
                      y cuándo no merece la pena meter la mano.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft lg:block">
              <p className="font-display text-xl font-black text-cmr-ink">
                Pico y pala.
              </p>
              <p className="mt-1 text-sm text-cmr-muted">
                Aquí no hay atajos raros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Mi historia</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Antes de enseñar esto, también fui el que buscaba la respuesta rápida.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              Empecé como empieza demasiada gente: buscando atajos. Señales, sistemas,
              gurús, promesas y alguna hostia bien dada por el camino. Con los años
              entendí que el trading no iba de adivinar, sino de saber qué está haciendo
              el precio, dónde lo está haciendo y cuándo tiene sentido meter la mano.
            </p>

            <div className="mt-8 rounded-[2rem] border border-cmr-line bg-cmr-paper p-6 shadow-soft">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                No se trata de acertar cada día.
              </p>

              <p className="mt-3 leading-7 text-cmr-muted">
                Se trata de dejar de operar por impulso, dejar de perseguir velas y empezar
                entender que es lo que pasa detrás de las velas. Habrá días para operar y días para no tocar nada.
                Y eso también es trading.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {etapas.map((item, index) => (
              <div key={item.title} className="card-light p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-green text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-black leading-tight tracking-[-0.02em] text-cmr-ink">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-cmr-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Método PEV</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Para ser trader necesitas tres patas. Y las tres al 100%.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cmr-muted">
              No vale tener solo conocimiento. No vale tener solo control emocional. Y no vale ver una zona si luego no sabes cuándo entrar o cuándo salir.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {metodo.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-cmr-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cmr-green/35"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cmr-green/8 blur-2xl transition group-hover:bg-cmr-green/14" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="inline-flex rounded-full border border-cmr-green/20 bg-cmr-green/10 px-3 py-1 text-sm font-extrabold text-cmr-green">
                      {item.percent}
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="mt-7 font-display text-3xl font-black leading-tight tracking-[-0.02em] text-cmr-ink">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.16em] text-cmr-green">
                      {item.label}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-cmr-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-cmr-green/20 bg-cmr-dark p-7 text-white shadow-darkGlow">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-cmr-green">
                La idea clave
              </p>

              <p className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.02em]">
                No es 80/20.
                <br />
                Es 100/100/100.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cmr-line bg-cmr-light p-7 shadow-soft">
              <p className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                Si una pata falla, el mercado te lo acaba cobrando.
              </p>

              <p className="mt-4 leading-7 text-cmr-muted">
                Sin conocimiento no entiendes lo que está pasando. Sin timing entras tarde, sales mal o disparas sin sentido.
                Y sin control emocional, aunque veas la zona y la entrada, puedes acabar traicionando tu propio plan.
                Por eso en PEV no trabajamos una parte y dejamos las otras al azar: trabajamos las tres patas al 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-dark py-20 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-start">
          <div>
            <span className="eyebrow-dark">Cómo enseño</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Directo, cercano y sin hacerte creer que esto es fácil.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/72">
              Me gusta explicar el mercado con claridad, pero sin suavizar lo que no hay
              que suavizar. El trading exige paciencia, práctica, gestión emocional y muchas
              horas delante del gráfico. Quien te venda otra cosa, te está vendiendo humo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/comunidad-pev" className="btn-primary">
                Entrar en Comunidad PEV
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/mentoria-pev" className="btn-secondary-dark">
                Ver Mentoría PEV
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {formas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-cmr-green" />
                <p className="mt-4 font-semibold leading-7 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Placeholder
              label="YOUTUBE_O_INSTAGRAM_REEL_URL"
              type="video"
              className="min-h-[420px] bg-white"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/92 p-5 shadow-soft backdrop-blur">
              <div className="flex items-start gap-3">
                <MessageSquareText className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="text-sm font-semibold leading-6 text-cmr-muted">
                  Aquí podremos poner un reel o vídeo donde se te vea hablando,
                  explicando mercado o mostrando tu forma de trabajar.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Redes y contenido</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Si me sigues en redes, ya sabes por dónde voy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              Hablo de mercado, de errores, de estructura, de paciencia, de lateralidades,
              de correcciones, de psicotrading y de esas cosas que solo entiendes cuando
              llevas tiempo peleándote con el gráfico.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <UsersRound className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  Comunidad para no aprender solo ni ir saltando de idea en idea.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  Libro, Substack y análisis para quien quiere entender antes de entrar.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-[0_10px_30px_rgba(20,32,29,0.05)]">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />
                <p className="font-semibold leading-7 text-cmr-ink">
                  Nada de promesas absurdas: esto va de método, trabajo y gestión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Lo que no vendo</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Si buscas una señal mágica, esta no es tu casa.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-muted">
              CMRBolsa no va de venderte una vida perfecta desde una playa con un portátil.
              Va de aprender a mirar el mercado con más orden, asumir riesgo y trabajar
              una metodología que se entrena.
            </p>
          </div>

          <div className="grid gap-3">
            {noEncontraras.map((item) => (
              <div key={item} className="card-light p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green" />
                  <p className="font-bold leading-7 text-cmr-ink">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow-dark">CMRBolsa</span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Puedes empezar mirando. Pero si quieres avanzar, toca trabajar.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Lee, mira vídeos, entra en Comunidad o solicita Mentoría. Pero no te engañes:
              el mercado no premia al que más consume contenido. Premia al que aprende
              a ejecutar con cabeza.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/comunidad-pev" className="btn-primary">
                Ver Comunidad PEV
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/por-donde-empezar" className="btn-secondary-dark">
                Ver por dónde empezar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}