import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  obtenerSeoPagina,
} from '../data/seoPaginas'

function actualizarMetaNombre(
  name,
  content
) {
  let meta = document.head.querySelector(
    `meta[name="${name}"]`
  )

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

function actualizarMetaPropiedad(
  property,
  content
) {
  let meta = document.head.querySelector(
    `meta[property="${property}"]`
  )

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(
      'property',
      property
    )
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

export default function Seo() {
  const {
    pathname,
  } = useLocation()

  useEffect(() => {
    const rutaNormalizada =
      pathname === '/'
        ? '/'
        : pathname.replace(/\/+$/, '')

    const seo =
      obtenerSeoPagina(
        rutaNormalizada
      )

    const title =
      seo.title ??
      seo.defaultTitle

    const description =
      seo.description ??
      seo.defaultDescription

    const image =
      seo.image ??
      seo.defaultImage

    const imageAlt =
      seo.imageAlt ??
      seo.defaultImageAlt

    const robots =
      seo.robots ??
      seo.defaultRobots

    document.title = title

    actualizarMetaNombre(
      'description',
      description
    )

    actualizarMetaNombre(
      'robots',
      robots
    )

    actualizarMetaPropiedad(
      'og:type',
      'website'
    )

    actualizarMetaPropiedad(
      'og:locale',
      'es_ES'
    )

    actualizarMetaPropiedad(
      'og:site_name',
      seo.siteName
    )

    actualizarMetaPropiedad(
      'og:title',
      title
    )

    actualizarMetaPropiedad(
      'og:description',
      description
    )

    actualizarMetaPropiedad(
      'og:image',
      image
    )

    actualizarMetaPropiedad(
      'og:image:alt',
      imageAlt
    )

    actualizarMetaPropiedad(
      'og:image:secure_url',
      image
    )

    actualizarMetaPropiedad(
      'og:image:type',
      'image/png'
    )

    actualizarMetaPropiedad(
      'og:image:width',
      '1200'
    )

    actualizarMetaPropiedad(
      'og:image:height',
      '630'
    )

    actualizarMetaNombre(
      'twitter:card',
      'summary_large_image'
    )

    actualizarMetaNombre(
      'twitter:title',
      title
    )

    actualizarMetaNombre(
      'twitter:description',
      description
    )

    actualizarMetaNombre(
      'twitter:image',
      image
    )

    actualizarMetaNombre(
      'twitter:image:alt',
      imageAlt
    )
  }, [pathname])

  return null
}