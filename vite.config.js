import {
  fileURLToPath,
  URL,
} from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  vitePrerenderPlugin,
} from 'vite-prerender-plugin'

const rutasPrerender = [
  '/',
  '/cmrbolsa',
  '/comunidad-pev',
  '/mentoria-pev',
  '/solicitud-mentoria',
  '/sala-escrita',
  '/eventos',
  '/testimonios',
  '/por-donde-empezar',
  '/desgranando-la-esencia-del-mercado',
  '/substack',
  '/contacto',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica_de_cookies',
  '/terminos_y_condiciones',
  '/404',
]

export default defineConfig({
  plugins: [
    react(),

    vitePrerenderPlugin({
      renderTarget: '#root',

      prerenderScript:
        fileURLToPath(
          new URL(
            './src/main.jsx',
            import.meta.url
          )
        ),

      additionalPrerenderRoutes:
        rutasPrerender,

      previewMiddlewareFallback:
        '/404',
    }),
  ],
})
