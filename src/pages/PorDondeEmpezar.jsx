import {
  useMemo,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  RotateCcw,
  Sparkles,
} from 'lucide-react'

const caminos = {
  comunidad: {
    nombre: 'Comunidad PEV',
    etiqueta: 'Creo que aquí encajas mejor',
    descripcion:
      'Por tus respuestas, creo que la Comunidad es el mejor punto de partida. Tendrás una formación ordenada, reuniones y contacto conmigo, sin entrar todavía en el trabajo más personal de la Mentoría.',
    puntos: [
      'Formación ordenada por niveles',
      'Reuniones semanales conmigo',
      'Sala escrita y seguimiento del mercado',
      'Puedes avanzar a tu ritmo',
    ],
    enlacePrincipal: '/comunidad-pev',
    textoPrincipal: 'Ver la Comunidad PEV',
    enlaceAlternativo: '/substack',
    textoAlternativo: 'Empezar leyendo primero',
  },

  mentoria: {
    nombre: 'Mentoría PEV',
    etiqueta: 'Creo que necesitas algo más personal',
    descripcion:
      'Por tus respuestas, creo que no necesitas seguir acumulando contenido. Necesitas hacer ejercicios, recibir correcciones y saber exactamente qué tienes que mejorar.',
    puntos: [
      'Ejercicios con correcciones',
      'Un camino claro de principio a fin',
      'Creación de tu plan de trading',
      'Seguimiento más personal',
    ],
    enlacePrincipal: '/solicitud-mentoria',
    textoPrincipal: 'Ver si la Mentoría encaja conmigo',
    enlaceAlternativo: '/comunidad-pev',
    textoAlternativo: 'Conocer primero la Comunidad',
  },

  lectura: {
    nombre: 'Empezar leyendo',
    etiqueta: 'Creo que conviene empezar con calma',
    descripcion:
      'Creo que lo mejor es que primero veas cómo trabajo, leas algunas cosas y después decidas con calma si quieres dar el siguiente paso.',
    puntos: [
      'Ver cómo entiendo el mercado',
      'Empezar sin compromiso',
      'Leer artículos, ideas y experiencias',
      'Decidir después con más criterio',
    ],
    enlacePrincipal: '/substack',
    textoPrincipal: 'Empezar por Substack',
    enlaceAlternativo: '/desgranando-la-esencia-del-mercado',
    textoAlternativo: 'Conocer el libro',
  },
}

const preguntas = [
  {
    id: 'situacion',
    titulo: '¿En qué punto estás ahora?',
    texto:
      'No importa que tengas poca experiencia. Solo quiero saber desde dónde partes.',
    respuestas: [
      {
        id: 'empezando',
        titulo: 'Estoy empezando',
        texto:
          'Todavía estoy conociendo conceptos y necesito una base clara.',
        puntuacion: {
          comunidad: 1,
          mentoria: 0,
          lectura: 3,
        },
      },
      {
        id: 'bloqueado',
        titulo: 'Llevo tiempo, pero no avanzo',
        texto:
          'He visto formación y estrategias, pero sigo sin ordenar lo que hago.',
        puntuacion: {
          comunidad: 4,
          mentoria: 2,
          lectura: 0,
        },
      },
      {
        id: 'correccion',
        titulo: 'Quiero que me corrijan y me guíen de verdad',
        texto:
          'Busco trabajar ejercicios, recibir correcciones y saber en qué estoy fallando.',
        puntuacion: {
          comunidad: 1,
          mentoria: 5,
          lectura: 0,
        },
      },
    ],
  },

  {
    id: 'necesidad',
    titulo: '¿Qué crees que necesitas más?',
    texto:
      'Piensa en lo que de verdad te ayudaría ahora mismo.',
    respuestas: [
      {
        id: 'conocer',
        titulo: 'Primero quiero ver cómo trabajas',
        texto:
          'Quiero conocer tu forma de entender el mercado antes de decidir.',
        puntuacion: {
          comunidad: 1,
          mentoria: 0,
          lectura: 4,
        },
      },
      {
        id: 'estructura',
        titulo: 'Necesito poner orden y seguir un camino claro',
        texto:
          'Voy saltando de una cosa a otra y no sé bien qué debería trabajar primero.',
        puntuacion: {
          comunidad: 4,
          mentoria: 2,
          lectura: 0,
        },
      },
      {
        id: 'personal',
        titulo: 'Quiero que revises lo que hago',
        texto:
          'Quiero saber dónde estoy fallando y qué tengo que corregir.',
        puntuacion: {
          comunidad: 1,
          mentoria: 5,
          lectura: 0,
        },
      },
    ],
  },

  {
    id: 'tiempo',
    titulo: '¿Cuánto tiempo real puedes dedicarle?',
    texto:
      'Piensa en el tiempo que de verdad puedes mantener cada semana.',
    respuestas: [
      {
        id: 'poco',
        titulo: 'Menos de 2 horas semanales',
        texto:
          'Ahora mismo necesito empezar poco a poco y sin demasiada presión.',
        puntuacion: {
          comunidad: 1,
          mentoria: 0,
          lectura: 4,
        },
      },
      {
        id: 'medio',
        titulo: 'Entre 3 y 5 horas semanales',
        texto:
          'Puedo estudiar, revisar gráficos y mantener una rutina.',
        puntuacion: {
          comunidad: 4,
          mentoria: 2,
          lectura: 0,
        },
      },
      {
        id: 'alto',
        titulo: 'Más de 5 horas semanales',
        texto:
          'Puedo hacer ejercicios y dedicarle tiempo de verdad.',
        puntuacion: {
          comunidad: 2,
          mentoria: 5,
          lectura: 0,
        },
      },
    ],
  },

  {
    id: 'inversion',
    titulo: 'Y respecto a la inversión, ¿cómo lo ves?',
    texto:
      'No se trata de gastar más, sino de elegir algo que te encaje ahora.',
    respuestas: [
      {
        id: 'sin-compromiso',
        titulo: 'Prefiero conocerlo bien antes de pagar',
        texto:
          'Quiero leer, ver cómo trabajas y decidir después.',
        puntuacion: {
          comunidad: 0,
          mentoria: 0,
          lectura: 5,
        },
      },
      {
        id: 'progresivo',
        titulo: 'Puedo empezar poco a poco',
        texto:
          'Puedo invertir si veo claro que me va a ayudar.',
        puntuacion: {
          comunidad: 5,
          mentoria: 1,
          lectura: 0,
        },
      },
      {
        id: 'importante',
        titulo: 'Pagaría más si veo que es justo lo que necesito',
        texto:
          'Pero tendría que ser un trabajo personal, con seguimiento y correcciones.',
        puntuacion: {
          comunidad: 1,
          mentoria: 5,
          lectura: 0,
        },
      },
    ],
  },
]

export default function PorDondeEmpezar() {
  const [respuestas, setRespuestas] =
    useState([])

  const terminado =
    respuestas.length === preguntas.length

  const preguntaActual =
    preguntas[respuestas.length]

  const progreso =
    terminado
      ? 100
      : (
          respuestas.length /
          preguntas.length
        ) * 100

  const clasificacion = useMemo(() => {
    const puntuaciones = {
      comunidad: 0,
      mentoria: 0,
      lectura: 0,
    }

    respuestas.forEach((respuesta) => {
      Object.entries(
        respuesta.puntuacion
      ).forEach(
        ([camino, puntuacion]) => {
          puntuaciones[camino] +=
            puntuacion
        }
      )
    })

    return Object.entries(puntuaciones)
      .sort(
        (
          [, puntuacionA],
          [, puntuacionB]
        ) =>
          puntuacionB -
          puntuacionA
      )
      .map(([camino]) => camino)
  }, [respuestas])

  const resultadoPrincipal =
    caminos[
      clasificacion[0] ||
      'comunidad'
    ]

  const resultadoAlternativo =
    caminos[
      clasificacion[1] ||
      'lectura'
    ]

  function seleccionarRespuesta(
    respuesta
  ) {
    setRespuestas(
      (respuestasActuales) => [
        ...respuestasActuales,
        respuesta,
      ]
    )
  }

  function volverAtras() {
    setRespuestas(
      (respuestasActuales) =>
        respuestasActuales.slice(
          0,
          -1
        )
    )
  }

  function reiniciar() {
    setRespuestas([])
  }

  return (
    <div className="bg-cmr-light text-cmr-ink">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">
              Orientación personalizada
            </span>

            <h1 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              No todo el mundo debe empezar por el mismo sitio
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Contesta cuatro preguntas y te recomendaré
              la opción que parece más lógica para tu
              situación actual. No es un examen ni te
              obliga a nada.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-darkGlow backdrop-blur sm:p-8">
            <Compass className="h-9 w-9 text-cmr-green" />

            <p className="mt-5 font-display text-2xl font-black">
              Tardarás menos de dos minutos
            </p>

            <p className="mt-3 leading-7 text-white/68">
              Al terminar te diré por dónde empezaría yo
              en tu caso y qué otra opción podría
              encajarte.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-bold text-white/78">
              <CheckCircle2 className="h-5 w-5 text-cmr-green" />
              Sin registro y sin dejar tus datos
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 text-sm font-extrabold">
              <span className="text-cmr-green">
                {terminado
                  ? 'Ya tengo una recomendación'
                  : `Pregunta ${
                      respuestas.length + 1
                    } de ${
                      preguntas.length
                    }`}
              </span>

              <span className="text-cmr-muted">
                {Math.round(progreso)} %
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-cmr-line">
              <div
                className="h-full rounded-full bg-cmr-green transition-all duration-500"
                style={{
                  width: `${progreso}%`,
                }}
              />
            </div>
          </div>

          {!terminado && preguntaActual && (
            <div className="overflow-hidden rounded-[2rem] border border-cmr-line bg-white shadow-soft">
              <div className="border-b border-cmr-line bg-cmr-paper px-6 py-7 sm:px-9">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cmr-green">
                  Elige la que más se parezca a tu situación
                </p>

                <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-4xl">
                  {preguntaActual.titulo}
                </h2>

                <p className="mt-4 text-lg leading-8 text-cmr-muted">
                  {preguntaActual.texto}
                </p>
              </div>

              <div className="grid gap-4 p-5 sm:p-8">
                {preguntaActual.respuestas.map(
                  (respuesta, indice) => (
                    <button
                      key={respuesta.id}
                      type="button"
                      onClick={() =>
                        seleccionarRespuesta(
                          respuesta
                        )
                      }
                      className="group flex w-full items-start gap-4 rounded-[1.5rem] border border-cmr-line bg-white p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cmr-green/45 hover:bg-cmr-greenSoft/40 hover:shadow-soft sm:p-6"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cmr-paper font-display font-black text-cmr-green transition group-hover:bg-cmr-green group-hover:text-white">
                        {indice + 1}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-xl font-black text-cmr-ink">
                          {respuesta.titulo}
                        </span>

                        <span className="mt-2 block leading-7 text-cmr-muted">
                          {respuesta.texto}
                        </span>
                      </span>

                      <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-cmr-muted transition group-hover:translate-x-1 group-hover:text-cmr-green" />
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {terminado && (
            <div className="overflow-hidden rounded-[2.25rem] border border-cmr-green/25 bg-white shadow-[0_28px_90px_rgba(20,32,29,0.12)]">
              <div className="bg-cmr-dark bg-cmr-radial p-7 text-white sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-green text-white">
                  <Sparkles className="h-6 w-6" />
                </div>

                <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-cmr-green">
                  {resultadoPrincipal.etiqueta}
                </p>

                <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
                  Yo empezaría por aquí:
                  <span className="mt-2 block text-cmr-gold">
                    {resultadoPrincipal.nombre}
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                  {resultadoPrincipal.descripcion}
                </p>
              </div>

              <div className="p-6 sm:p-9">
                <div className="grid gap-3 sm:grid-cols-2">
                  {resultadoPrincipal.puntos.map(
                    (punto) => (
                      <div
                        key={punto}
                        className="flex items-center gap-3 rounded-2xl border border-cmr-line bg-cmr-paper p-4"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green" />

                        <span className="font-semibold leading-6 text-cmr-ink">
                          {punto}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={
                      resultadoPrincipal.enlacePrincipal
                    }
                    className="btn-primary"
                  >
                    {
                      resultadoPrincipal.textoPrincipal
                    }

                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={reiniciar}
                    className="btn-secondary-light"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Volver a empezar
                  </button>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-cmr-line bg-cmr-light p-5 sm:p-6">
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-cmr-muted">
                    Otra opción que también podría encajarte
                  </p>

                  <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-display text-2xl font-black text-cmr-ink">
                        {
                          resultadoAlternativo.nombre
                        }
                      </p>

                      <p className="mt-1 text-sm leading-6 text-cmr-muted">
                        También puede tener sentido,
                        dependiendo de cómo prefieras empezar.
                      </p>
                    </div>

                    <Link
                      to={
                        resultadoAlternativo.enlacePrincipal
                      }
                      className="btn-secondary-light shrink-0"
                    >
                      {
                        resultadoAlternativo.textoPrincipal
                      }
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!terminado &&
            respuestas.length > 0 && (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={volverAtras}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-cmr-muted transition hover:text-cmr-green"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver a la pregunta anterior
                </button>
              </div>
            )}
        </div>
      </section>
    </div>
  )
}