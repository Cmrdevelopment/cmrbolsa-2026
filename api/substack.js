import Parser from 'rss-parser'

const SUBSTACK_FEED_URL =
  'https://cmrbolsa.substack.com/feed'

const NUMERO_ARTICULOS = 6

const parser = new Parser({
  customFields: {
    item: [
      [
        'content:encoded',
        'contenidoHtml',
      ],
      [
        'media:content',
        'mediaContent',
      ],
      [
        'media:thumbnail',
        'mediaThumbnail',
      ],
    ],
  },
})

function obtenerUrlMedia(media) {
  if (!media) {
    return null
  }

  if (Array.isArray(media)) {
    return obtenerUrlMedia(media[0])
  }

  if (typeof media === 'string') {
    return media
  }

  return (
    media.url ??
    media.$?.url ??
    null
  )
}

function obtenerPrimeraImagen(html) {
  if (!html) {
    return null
  }

  const coincidencia = html.match(
    /<img[^>]+src=["']([^"']+)["']/i
  )

  return coincidencia?.[1] ?? null
}

function limpiarTextoHtml(html) {
  if (!html) {
    return ''
  }

  return html
    .replace(
      /<script[\s\S]*?<\/script>/gi,
      ' '
    )
    .replace(
      /<style[\s\S]*?<\/style>/gi,
      ' '
    )
    .replace(
      /<[^>]+>/g,
      ' '
    )
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

function limitarTexto(
  texto,
  limite = 220
) {
  if (!texto) {
    return ''
  }

  if (texto.length <= limite) {
    return texto
  }

  return `${texto
    .slice(0, limite)
    .trim()}…`
}

function normalizarArticulo(item) {
  const contenidoHtml =
    item.contenidoHtml ??
    item.content ??
    ''

  const resumenBase =
    item.contentSnippet ??
    item.summary ??
    contenidoHtml

  const imagen =
    obtenerUrlMedia(
      item.mediaContent
    ) ??
    obtenerUrlMedia(
      item.mediaThumbnail
    ) ??
    (
      item.enclosure?.type
        ?.toLowerCase()
        .startsWith('image/')
        ? item.enclosure.url
        : null
    ) ??
    obtenerPrimeraImagen(
      contenidoHtml
    )

  return {
    titulo:
      limpiarTextoHtml(
        item.title
      ) ||
      'Artículo de CMRBolsa',

    enlace:
      item.link ?? null,

    fecha:
      item.isoDate ??
      item.pubDate ??
      null,

    resumen:
      limitarTexto(
        limpiarTextoHtml(
          resumenBase
        )
      ),

    imagen,
  }
}

export default async function handler(
  req,
  res
) {
  if (req.method !== 'GET') {
    res.setHeader(
      'Allow',
      'GET'
    )

    return res.status(405).json({
      ok: false,
      message:
        'Método no permitido.',
    })
  }

  try {
    const feed =
      await parser.parseURL(
        SUBSTACK_FEED_URL
      )

    const articulos =
      feed.items
        .map(
          normalizarArticulo
        )
        .filter(
          (articulo) =>
            articulo.enlace
        )
        .slice(
          0,
          NUMERO_ARTICULOS
        )

    res.setHeader(
      'Cache-Control',
      'public, max-age=0, must-revalidate'
    )

    res.setHeader(
      'CDN-Cache-Control',
      'public, s-maxage=900, stale-while-revalidate=86400'
    )

    res.setHeader(
      'Vercel-CDN-Cache-Control',
      'public, s-maxage=900, stale-while-revalidate=86400'
    )

    return res.status(200).json({
      ok: true,
      publicacion:
        feed.title ??
        'El Informe de CMRBolsa',
      enlace:
        feed.link ??
        'https://cmrbolsa.substack.com/',
      articulos,
    })
  } catch (error) {
    console.error(
      'Error leyendo el RSS de Substack:',
      error
    )

    res.setHeader(
      'Cache-Control',
      'no-store'
    )

    return res.status(502).json({
      ok: false,
      message:
        'No se pudieron obtener los artículos de Substack.',
    })
  }
}