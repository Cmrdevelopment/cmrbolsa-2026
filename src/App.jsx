import {
  lazy,
  Suspense,
} from 'react'
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'

const LegalPage = lazy(
  () => import('./pages/LegalPage')
)

const PorDondeEmpezar = lazy(
  () => import('./pages/PorDondeEmpezar')
)

const SolicitudMentoria = lazy(
  () => import('./pages/SolicitudMentoria')
)

const TestimoniosPage = lazy(
  () => import('./pages/TestimoniosPage')
)

const CmrbolsaPage = lazy(
  () => import('./pages/internas/CmrbolsaPage')
)

const ComunidadPage = lazy(
  () => import('./pages/internas/ComunidadPage')
)

const MentoriaPage = lazy(
  () => import('./pages/internas/MentoriaPage')
)

const SubstackPage = lazy(
  () => import('./pages/internas/SubstackPage')
)

const EventosPage = lazy(
  () => import('./pages/internas/EventosPage')
)

const SalaEscritaPage = lazy(
  () => import('./pages/internas/SalaEscritaPage')
)

const LibroPage = lazy(
  () => import('./pages/internas/LibroPage')
)

function CargandoPagina() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cmr-light px-6">
      <div className="flex items-center gap-3 rounded-2xl border border-cmr-line bg-white px-5 py-4 shadow-soft">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-cmr-green/25 border-t-cmr-green" />

        <span className="text-sm font-bold text-cmr-muted">
          Cargando página…
        </span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />

      <Suspense
        fallback={<CargandoPagina />}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cmrbolsa"
            element={<CmrbolsaPage />}
          />

          <Route
            path="/comunidad-pev"
            element={<ComunidadPage />}
          />

          <Route
            path="/mentoria-pev"
            element={<MentoriaPage />}
          />

          <Route
            path="/substack"
            element={<SubstackPage />}
          />

          <Route
            path="/sala-escrita"
            element={<SalaEscritaPage />}
          />

          <Route
            path="/eventos"
            element={<EventosPage />}
          />

          <Route
            path="/testimonios"
            element={<TestimoniosPage />}
          />

          <Route
            path="/desgranando-la-esencia-del-mercado"
            element={<LibroPage />}
          />

          <Route
            path="/mi-libro"
            element={
              <Navigate
                to="/desgranando-la-esencia-del-mercado"
                replace
              />
            }
          />

          <Route
            path="/por-donde-empezar"
            element={<PorDondeEmpezar />}
          />

          <Route
            path="/solicitud-mentoria"
            element={<SolicitudMentoria />}
          />

          <Route
            path="/aviso-legal"
            element={<LegalPage type="aviso" />}
          />

          <Route
            path="/politica-privacidad"
            element={
              <LegalPage type="privacidad" />
            }
          />

          <Route
            path="/politica_de_cookies"
            element={
              <LegalPage type="cookies" />
            }
          />

          <Route
            path="/terminos_y_condiciones"
            element={
              <LegalPage type="terminos" />
            }
          />

          <Route
            path="/privacidad"
            element={
              <Navigate
                to="/politica-privacidad"
                replace
              />
            }
          />

          <Route
            path="/cookies"
            element={
              <Navigate
                to="/politica_de_cookies"
                replace
              />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  )
}