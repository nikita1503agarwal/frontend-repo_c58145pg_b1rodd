import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'
import { useState } from 'react'

export default function About() {
  const [cookieOpenSignal, setCookieOpenSignal] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-blue-100">
      <Navbar onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <div className="pt-36 pb-20 mx-auto max-w-5xl px-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-amber-200">La Nostra Storia</h1>
        <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
          Tulipano Jewels nasce dall'incontro tra passione artigianale e design contemporaneo. Da oltre vent'anni selezioniamo materiali d'eccellenza e lavoriamo
          ogni creazione con cura, unendo tecniche tradizionali e innovazione.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-semibold text-amber-100">Filosofia</h3>
            <p className="mt-3 text-blue-100/80">Il nostro obiettivo è valorizzare la bellezza naturale delle pietre e trasformarla in gioielli unici, pensati per durare nel tempo.</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-semibold text-amber-100">Artigianalità</h3>
            <p className="mt-3 text-blue-100/80">Ogni pezzo viene controllato e rifinito a mano, garantendo qualità e dettagli impeccabili.</p>
          </div>
        </div>
      </div>
      <Footer onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <CookieConsent openExternally={cookieOpenSignal > 0} onClose={() => setCookieOpenSignal(0)} />
    </div>
  )
}
