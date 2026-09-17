import {
  useLocation,
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import BotonSubir from './BotonSubir'
import MetricoolTracker from './MetricoolTracker'
import CookieConsent from './cookies/CookieConsent'

export default function Layout({
  children,
}) {
  const {
    pathname,
  } = useLocation()

  const esLandingSinNavegacion =
    pathname ===
      '/comunidad-pev-alternativa' ||
    pathname ===
      '/trading-sin-atajos-wjd-092026'

  return (
    <div className="min-h-screen bg-cmr-page text-cmr-text transition-colors duration-200">
      {!esLandingSinNavegacion && (
        <Header />
      )}

      <main
        className={
          esLandingSinNavegacion
            ? 'min-h-screen'
            : 'min-h-[calc(100vh-82px)] pt-[82px]'
        }
      >
        {children}
      </main>

      {!esLandingSinNavegacion && (
        <Footer />
      )}

      {!esLandingSinNavegacion && (
        <BotonSubir />
      )}

      <MetricoolTracker />

      <CookieConsent />
    </div>
  )
}