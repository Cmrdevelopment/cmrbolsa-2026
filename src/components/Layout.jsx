import Header from './Header'
import Footer from './Footer'
import CookieConsent from './cookies/CookieConsent'

export default function Layout({
  children,
}) {
  return (
    <div className="min-h-screen bg-cmr-page text-cmr-text transition-colors duration-200">
      <Header />

      <main className="min-h-[calc(100vh-82px)] pt-[82px]">
        {children}
      </main>

      <Footer />

      <CookieConsent />
    </div>
  )
}