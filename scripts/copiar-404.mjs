import {
  access,
  copyFile,
} from 'node:fs/promises'

import {
  constants,
} from 'node:fs'

const archivoOrigen =
  new URL(
    '../dist/404/index.html',
    import.meta.url
  )

const archivoDestino =
  new URL(
    '../dist/404.html',
    import.meta.url
  )

try {
  await access(
    archivoOrigen,
    constants.R_OK
  )

  await copyFile(
    archivoOrigen,
    archivoDestino
  )

  console.log(
    '✓ Página personalizada dist/404.html generada'
  )
} catch (error) {
  console.error(
    'No se pudo generar dist/404.html:',
    error
  )

  process.exitCode = 1
}