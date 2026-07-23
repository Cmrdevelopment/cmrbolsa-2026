/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    extend: {
      colors: {
        cmr: {
          /*
           * Colores originales de la marca.
           * Los mantenemos para no romper ningún componente actual.
           */
          green: '#328077',
          greenDark: '#25675F',
          greenSoft: '#DDEBE7',

          dark: '#071512',
          dark2: '#10231F',
          dark3: '#17332D',

          light: '#F6F3EA',
          light2: '#EDF4F0',
          paper: '#FBF8EF',

          ink: '#14201D',
          muted: '#66736E',
          line: '#DCE7E2',

          gold: '#D8B45C',

          /*
           * Colores semánticos.
           * Estos cambiarán automáticamente según el tema activo.
           */
          page:
            'rgb(var(--cmr-page) / <alpha-value>)',

          pageAlt:
            'rgb(var(--cmr-page-alt) / <alpha-value>)',

          surface:
            'rgb(var(--cmr-surface) / <alpha-value>)',

          surfaceAlt:
            'rgb(var(--cmr-surface-alt) / <alpha-value>)',

          surfaceStrong:
            'rgb(var(--cmr-surface-strong) / <alpha-value>)',

          text:
            'rgb(var(--cmr-text) / <alpha-value>)',

          textMuted:
            'rgb(var(--cmr-text-muted) / <alpha-value>)',

          border:
            'rgb(var(--cmr-border) / <alpha-value>)',

          borderStrong:
            'rgb(var(--cmr-border-strong) / <alpha-value>)',

          /*
           * Textos y elementos colocados sobre bloques oscuros
           * que seguirán formando parte de la identidad de la web.
           */
          onDark:
            'rgb(var(--cmr-on-dark) / <alpha-value>)',

          onDarkMuted:
            'rgb(var(--cmr-on-dark-muted) / <alpha-value>)',

          /*
           * Fondos del Header.
           * Conservamos también los nombres antiguos mientras
           * adaptamos los componentes uno por uno.
           */
          header:
            'rgb(var(--cmr-header) / <alpha-value>)',

          headerOpen:
            'rgb(var(--cmr-header-open) / <alpha-value>)',

          headerDark:
            'rgba(7, 21, 18, 0.50)',

          headerDarkOpen:
            'rgba(7, 21, 18, 0.96)',

          headerLight:
            'rgba(246, 243, 234, 0.92)',

          headerLightOpen:
            'rgba(246, 243, 234, 0.98)',
        },
      },

      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          'sans-serif',
        ],

        display: [
          'Nunito Sans',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },

      boxShadow: {
        soft:
          '0 18px 50px rgba(20, 32, 29, 0.10)',

        warm:
          '0 22px 70px rgba(50, 128, 119, 0.20)',

        darkGlow:
          '0 28px 90px rgba(50, 128, 119, 0.24)',

        header:
          '0 18px 50px rgba(20, 32, 29, 0.08)',

        headerLight:
          '0 18px 50px rgba(255, 255, 255, 0.10)',

        cta:
          '0 18px 50px rgba(50, 128, 119, 0.22)',
      },

      backgroundImage: {
        'cmr-radial':
          'radial-gradient(circle at top left, rgba(50, 128, 119, 0.32), transparent 34%), radial-gradient(circle at bottom right, rgba(216, 180, 92, 0.12), transparent 30%)',

        'paper-noise':
          'linear-gradient(135deg, rgba(50, 128, 119, 0.06), transparent 35%), linear-gradient(0deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45))',
      },
    },
  },

  plugins: [],
}