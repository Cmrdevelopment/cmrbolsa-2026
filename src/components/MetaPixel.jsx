import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PIXEL_ID = '2728182284159788'

function loadMetaPixel() {
  if (window.fbq) {
    return
  }

  const fbq = function () {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, arguments)
    } else {
      fbq.queue.push(arguments)
    }
  }

  window.fbq = fbq
  window._fbq = fbq

  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []

  const script = document.createElement('script')

  script.async = true
  script.src =
    'https://connect.facebook.net/en_US/fbevents.js'

  document.head.appendChild(script)

  window.fbq('init', PIXEL_ID)
}

export default function MetaPixel() {
  const location = useLocation()

  useEffect(() => {
    loadMetaPixel()

    const currentPage =
      `${location.pathname}${location.search}`

    if (
      window.__cmrMetaLastPage === currentPage
    ) {
      return
    }

    window.__cmrMetaLastPage = currentPage

    window.fbq('track', 'PageView')
  }, [
    location.pathname,
    location.search,
  ])

  return null
}