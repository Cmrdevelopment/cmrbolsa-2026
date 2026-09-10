import {
  useEffect,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'

const PIXEL_ID = '2728182284159788'

const STORAGE_KEY =
  'cmrbolsa_cookie_consent'

function hasMarketingConsent() {
  try {
    const savedConsent =
      window.localStorage.getItem(
        STORAGE_KEY
      )

    if (!savedConsent) {
      return false
    }

    const consent =
      JSON.parse(savedConsent)

    return (
      consent?.preferences?.marketing ===
      true
    )
  } catch {
    return false
  }
}

function loadMetaPixel() {
  if (window.fbq) {
    return
  }

  const fbq = function () {
    if (fbq.callMethod) {
      fbq.callMethod.apply(
        fbq,
        arguments
      )
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

  const script =
    document.createElement('script')

  script.async = true
  script.src =
    'https://connect.facebook.net/en_US/fbevents.js'

  document.head.appendChild(script)

  window.fbq('init', PIXEL_ID)
}

export default function MetaPixel() {
  const location = useLocation()

  const [
    marketingAllowed,
    setMarketingAllowed,
  ] = useState(
    hasMarketingConsent
  )

  const lastPage =
    useRef(null)

  useEffect(() => {
    const handleConsentChange = (
      event
    ) => {
      const allowed =
        event.detail?.preferences
          ?.marketing === true

      setMarketingAllowed(allowed)

      if (
        !allowed &&
        window.fbq
      ) {
        window.fbq(
          'consent',
          'revoke'
        )
      }
    }

    window.addEventListener(
      'cmrbolsa:cookie-consent-updated',
      handleConsentChange
    )

    return () => {
      window.removeEventListener(
        'cmrbolsa:cookie-consent-updated',
        handleConsentChange
      )
    }
  }, [])

  useEffect(() => {
    if (!marketingAllowed) {
      return
    }

    loadMetaPixel()

    window.fbq(
      'consent',
      'grant'
    )

    const currentPage =
      `${location.pathname}${location.search}`

    if (
      lastPage.current ===
      currentPage
    ) {
      return
    }

    lastPage.current =
      currentPage

    window.fbq(
      'track',
      'PageView'
    )
  }, [
    marketingAllowed,
    location.pathname,
    location.search,
  ])

  return null
}