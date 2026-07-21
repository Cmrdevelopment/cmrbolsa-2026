import Header from './Header'
import Footer from './Footer'
import CookieConsent from './cookies/CookieConsent'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  )
}
