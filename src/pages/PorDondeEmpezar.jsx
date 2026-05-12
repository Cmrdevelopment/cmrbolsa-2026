import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const questions = [
  { q: '¿Dónde estás ahora?', a: ['Estoy empezando', 'Llevo tiempo pero no avanzo', 'Quiero algo serio con corrección'] },
  { q: '¿Qué necesitas más?', a: ['Conocer cómo trabajáis', 'Orden y acompañamiento', 'Leer/ver primero sin pagar'] },
  { q: '¿Estás dispuesto a una inversión importante si encaja?', a: ['Ahora no', 'Puede ser, si lo veo claro', 'Sí, si hay proceso real'] }
]

export default function PorDondeEmpezar() {
  const [answers, setAnswers] = useState([])
  const done = answers.length === questions.length
  const mentor = answers.includes('Quiero algo serio con corrección') || answers.includes('Sí, si hay proceso real')
  const leer = answers.includes('Leer/ver primero sin pagar')
  const result = mentor ? 'Mentoría PEV' : leer ? 'Substack / Desgranando' : 'Comunidad PEV'
  const to = mentor ? '/solicitud-mentoria' : leer ? '/substack' : '/comunidad-pev'

  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero eyebrow="Mini test" title="¿Por dónde deberías empezar?" text="Te recomienda una opción principal y deja otra como alternativa." primaryLabel="Volver a inicio" primaryTo="/" />
      <section className="py-20">
        <div className="section-shell max-w-3xl">
          {!done ? questions.map((item, index) => (
            index === answers.length && <div key={item.q} className="card-light p-8"><h2 className="font-display text-3xl font-bold">{item.q}</h2><div className="mt-8 grid gap-3">{item.a.map((a) => <button key={a} onClick={() => setAnswers([...answers, a])} className="rounded-2xl border border-cmr-line bg-white p-4 text-left font-semibold hover:border-cmr-green hover:text-cmr-green">{a}</button>)}</div></div>
          )) : <div className="card-light p-8"><p className="eyebrow">Resultado</p><h2 className="mt-5 font-display text-4xl font-bold">Tu camino principal: {result}</h2><p className="mt-5 text-cmr-muted">Puedes mirar otra opción si quieres, pero ahora mismo esta parece la más lógica según tus respuestas.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to={to} className="btn-primary">Ver {result}</Link><Link to="/" className="btn-secondary-light">Volver al inicio</Link></div></div>}
        </div>
      </section>
    </div>
  )
}
