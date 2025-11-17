import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'
import { useState } from 'react'

export default function Privacy() {
  const [cookieOpenSignal, setCookieOpenSignal] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-blue-100">
      <Navbar onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <div className="pt-36 pb-20 mx-auto max-w-5xl px-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-amber-200">Privacy & Cookie Policy</h1>
        <div className="mt-6 space-y-6 text-blue-100/90 leading-relaxed">
          <section className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Informativa</h2>
            <p className="mt-3">Questo sito rispetta il Regolamento (UE) 2016/679 (GDPR). I dati raccolti tramite moduli di contatto sono trattati per rispondere alle richieste e non vengono ceduti a terzi. Puoi richiedere in ogni momento l'accesso, la rettifica o la cancellazione scrivendo all'indirizzo email indicato nei contatti.</p>
          </section>
          <section className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Cookie</h2>
            <p className="mt-3">Utilizziamo cookie necessari al funzionamento del sito e, previo consenso, cookie di analytics e di marketing. Puoi modificare le preferenze in qualsiasi momento.</p>
            <button onClick={() => setCookieOpenSignal(c => c + 1)} className="mt-4 px-4 py-2 rounded-full bg-amber-400 text-blue-950 font-semibold hover:brightness-110 transition">Gestisci preferenze</button>
          </section>
          <section className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Titolare del trattamento</h2>
            <p className="mt-3">Tulipano Jewels – Via dei Gioielli 12, Milano – Email: info@tulipanojewels.it</p>
          </section>
        </div>
      </div>
      <Footer onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <CookieConsent openExternally={cookieOpenSignal > 0} onClose={() => setCookieOpenSignal(0)} />
    </div>
  )
}
