export const seoBase = {
  siteName: 'CMRBolsa',
  siteUrl:
    'https://cmrbolsa.com',
  defaultTitle:
    'CMRBolsa | Formación en trading con el método PEV',
  defaultDescription:
    'Aprende a entender el mercado con el método PEV: precio, estructura y volumen. Comunidad, Mentoría PEV, sala escrita, eventos y contenidos de CMRBolsa.',
  defaultImage:
    'https://res.cloudinary.com/dwbxywvdw/image/upload/v1784919487/cmrbolsa/cmrbolsa-imagen-social-premium_tnqe7n.png',
  defaultImageAlt:
    'CMRBolsa, formación en trading con el método PEV',
  defaultRobots:
    'index, follow',
}

export const seoPaginas = {
  '/': {
    title:
      'CMRBolsa | Formación en trading con el método PEV',
    description:
      'Aprende a leer el mercado con precio, estructura y volumen. Descubre la Comunidad PEV, la Mentoría, la sala escrita y los contenidos de CMRBolsa.',
  },

  '/cmrbolsa': {
    title:
      'Carlos Martín Rodríguez | Historia y método de CMRBolsa',
    description:
      'Conoce la historia de Carlos Martín Rodríguez, creador de CMRBolsa, y cómo nació el método PEV para entender el precio, la estructura y el volumen.',
  },

  '/comunidad-pev': {
    title:
      'Comunidad PEV | Formación y acompañamiento en trading',
    description:
      'Vídeos organizados, reuniones semanales, sala escrita, ejercicios y acompañamiento para aprender a entender el mercado con el método PEV.',
  },

  '/comunidad-pev-alternativa': {
    title:
      'Comunidad Trading PEV | Planes y acceso',
    description:
      'Conoce los planes disponibles para entrar en la Comunidad Trading PEV de CMRBolsa y aprender con formación, reuniones y sala escrita.',
    robots:
      'noindex, follow',
  },

  '/mentoria-pev': {
    title:
      'Mentoría PEV | Formación personal en trading con CMRBolsa',
    description:
      'Un proceso completo con ejercicios, correcciones personales, reuniones, plan de trading y acompañamiento directo con Carlos Martín Rodríguez.',
  },

  '/solicitud-mentoria': {
    title:
      'Solicitar valoración para la Mentoría PEV | CMRBolsa',
    description:
      'Cuéntame tu experiencia, tus dificultades y el tiempo que puedes dedicar para valorar si la Mentoría PEV tiene sentido para ti.',
  },

  '/sala-escrita': {
    title:
      'Sala de trading escrita | Análisis de mercado con PEV',
    description:
      'Sigue análisis, zonas, escenarios e hipótesis de mercado aplicando precio, estructura y volumen en la sala escrita de CMRBolsa.',
  },

  '/eventos': {
    title:
      'Eventos de trading, talleres y encuentros | CMRBolsa',
    description:
      'Consulta los próximos talleres, sesiones online, seminarios y encuentros organizados por CMRBolsa para alumnos y personas interesadas en PEV.',
  },

  '/testimonios': {
    title:
      'Experiencias y testimonios de alumnos | CMRBolsa',
    description:
      'Conoce las experiencias de alumnos que han aprendido a trabajar el mercado con más criterio, paciencia, orden y comprensión mediante PEV.',
  },

  '/por-donde-empezar': {
    title:
      'Por dónde empezar en CMRBolsa | Comunidad, Mentoría o libro',
    description:
      'Responde unas preguntas y descubre qué opción puede encajar mejor contigo: Comunidad PEV, Mentoría, libro, Substack o contenidos gratuitos.',
  },

  '/desgranando-la-esencia-del-mercado': {
    title:
      'Desgranando la esencia del mercado | Libro de CMRBolsa',
    description:
      'Descubre el libro de Carlos Martín Rodríguez sobre precio, estructura, volumen y una forma más ordenada de comprender el comportamiento del mercado.',
  },

  '/substack': {
    title:
      'CMRBolsa en Substack | Artículos y reflexiones sobre trading',
    description:
      'Artículos, análisis y reflexiones de Carlos Martín Rodríguez para entender mejor el mercado, el método PEV y la parte mental del trading.',
  },

  '/contacto': {
    title:
      'Contacto | Habla con CMRBolsa',
    description:
      'Envía una consulta a CMRBolsa sobre la Comunidad PEV, Mentoría, eventos, colaboraciones, el libro, Substack, pagos o cualquier otra cuestión.',
  },

  '/aviso-legal': {
    title:
      'Aviso legal | CMRBolsa',
    description:
      'Consulta la información legal, titularidad y condiciones generales de uso del sitio web de CMRBolsa.',
  },

  '/politica-privacidad': {
    title:
      'Política de privacidad | CMRBolsa',
    description:
      'Consulta cómo CMRBolsa recoge, utiliza y protege los datos personales facilitados por los usuarios de esta web.',
  },

  '/politica_de_cookies': {
    title:
      'Política de cookies | CMRBolsa',
    description:
      'Información sobre las cookies utilizadas en la web de CMRBolsa, su finalidad y las opciones disponibles para gestionarlas.',
  },

  '/terminos_y_condiciones': {
    title:
      'Términos y condiciones | CMRBolsa',
    description:
      'Consulta los términos y condiciones aplicables a los contenidos, productos y servicios ofrecidos a través de CMRBolsa.',
  },

  '/declaracion-de-riesgos-ninja-trader': {
    title:
      'Declaración de riesgos de futuros | CMRBolsa',
    description:
      'Consulta la declaración de riesgos aplicable a la operativa con futuros, forex y productos apalancados, junto con la información oficial de NinjaTrader.',
  },

  '/404': {
    title:
      'Página no encontrada | CMRBolsa',
    description:
      'La página que buscas no existe o se ha salido del gráfico. Vuelve a CMRBolsa para seguir aprendiendo sobre trading y el método PEV.',
    robots:
      'noindex, follow',
  },
}

export function obtenerSeoPagina(pathname) {
  const rutaSeo =
    seoPaginas[pathname]
      ? pathname
      : '/404'

  const seoPagina =
    seoPaginas[rutaSeo]

  return {
    ...seoBase,
    ...seoPagina,
    canonicalPath:
      seoPagina.canonicalPath ??
      rutaSeo,
  }
}