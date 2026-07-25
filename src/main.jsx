import React from 'react'
import {
  createRoot,
  hydrateRoot,
} from 'react-dom/client'
import {
  BrowserRouter,
} from 'react-router-dom'

import App from './App.jsx'
import {
  TemaProvider,
} from './context/TemaContext.jsx'
import {
  obtenerSeoPagina,
} from './data/seoPaginas.js'

import './styles/index.css'

function Aplicacion({
  Router,
  routerProps = {},
}) {
  return (
    <TemaProvider>
      <Router {...routerProps}>
        <App />
      </Router>
    </TemaProvider>
  )
}

if (typeof window !== 'undefined') {
  const root =
    document.getElementById('root')

  const aplicacion = (
    <React.StrictMode>
      <Aplicacion
        Router={BrowserRouter}
      />
    </React.StrictMode>
  )

  if (root.hasChildNodes()) {
    hydrateRoot(
      root,
      aplicacion
    )
  } else {
    createRoot(root).render(
      aplicacion
    )
  }
}

async function renderizarAplicacion(
  aplicacion
) {
  const {
    renderToReadableStream,
  } = await import(
    'react-dom/server.browser'
  )

  const stream =
    await renderToReadableStream(
      aplicacion,
      {
        onError(error) {
          console.error(
            'Error durante el prerenderizado:',
            error
          )
        },
      }
    )

  await stream.allReady

  return new Response(
    stream
  ).text()
}

export async function prerender({
  url,
}) {
  const [
    {
      StaticRouter,
    },
    {
      parseLinks,
    },
  ] = await Promise.all([
    import(
      'react-router-dom/server'
    ),
    import(
      'vite-prerender-plugin/parse'
    ),
  ])

  const urlPrerender =
    new URL(
      url,
      'https://cmrbolsa.com'
    )

  const rutaNormalizada =
    urlPrerender.pathname === '/'
      ? '/'
      : urlPrerender.pathname.replace(
          /\/+$/,
          ''
        )

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

  const ubicacion = [
    urlPrerender.pathname,
    urlPrerender.search,
  ].join('')

  const aplicacion = (
    <Aplicacion
      Router={StaticRouter}
      routerProps={{
        location: ubicacion,
      }}
    />
  )

  const html =
    await renderizarAplicacion(
      aplicacion
    )

  const links =
    parseLinks(html)

  return {
    html,

    links: new Set(links),

    head: {
      lang: 'es',

      title,

      elements: new Set([
        {
          type: 'meta',
          props: {
            name: 'robots',
            content: robots,
          },
        },

        {
          type: 'meta',
          props: {
            name: 'description',
            content: description,
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:type',
            content: 'website',
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:locale',
            content: 'es_ES',
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:site_name',
            content: seo.siteName,
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:title',
            content: title,
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:description',
            content: description,
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:image',
            content: image,
          },
        },

        {
          type: 'meta',
          props: {
            property:
              'og:image:secure_url',
            content: image,
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:image:type',
            content: 'image/png',
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:image:width',
            content: '1200',
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:image:height',
            content: '630',
          },
        },

        {
          type: 'meta',
          props: {
            property: 'og:image:alt',
            content: imageAlt,
          },
        },

        {
          type: 'meta',
          props: {
            name: 'twitter:card',
            content:
              'summary_large_image',
          },
        },

        {
          type: 'meta',
          props: {
            name: 'twitter:title',
            content: title,
          },
        },

        {
          type: 'meta',
          props: {
            name:
              'twitter:description',
            content: description,
          },
        },

        {
          type: 'meta',
          props: {
            name: 'twitter:image',
            content: image,
          },
        },

        {
          type: 'meta',
          props: {
            name:
              'twitter:image:alt',
            content: imageAlt,
          },
        },
      ]),
    },
  }
}