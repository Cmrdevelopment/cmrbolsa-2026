import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GenericPage from './pages/GenericPage'
import PorDondeEmpezar from './pages/PorDondeEmpezar'
import SolicitudMentoria from './pages/SolicitudMentoria'

export default function App() {
  return (
    <>
    <Layout>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cmrbolsa" element={<GenericPage type="cmrbolsa" />} />
        <Route path="/comunidad-pev" element={<GenericPage type="comunidad" />} />
        <Route path="/mentoria-pev" element={<GenericPage type="mentoria" />} />
        <Route path="/sala-escrita" element={<GenericPage type="sala" />} />
        <Route path="/eventos" element={<GenericPage type="eventos" />} />
        <Route path="/testimonios" element={<GenericPage type="testimonios" />} />
        <Route path="/desgranando-la-esencia-del-mercado" element={<GenericPage type="libro" />} />
        <Route path="/substack" element={<GenericPage type="substack" />} />
        <Route path="/por-donde-empezar" element={<PorDondeEmpezar />} />
        <Route path="/solicitud-mentoria" element={<SolicitudMentoria />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
    </>
  )
}
