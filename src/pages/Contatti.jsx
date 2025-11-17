import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'
import { useState } from 'react'

export default function Contatti() {
  const [cookieOpenSignal, setCookieOpenSignal] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-blue-100">
      <Navbar onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <div className="pt-36 pb-20 mx-auto max-w-5xl px-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-amber-200">Contatti</h1>
        <p className="mt-4 text-blue-100/90">Per informazioni, preventivi o appuntamenti in boutique.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-semibold text-amber-100">Dove trovarci</h3>
            <p className="mt-2 text-blue-100/80">Via dei Gioielli 12, Milano</p>
            <p className="text-blue-100/80">Lun - Sab, 10:00 - 19:00</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-semibold text-amber-100">Scrivici</h3>
            <form className="mt-4 space-y-4" onSubmit={(e)=>e.preventDefault()}>
              <input className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Nome" />
              <input className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Email" type="email" />
              <textarea className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Messaggio" rows="4" />
              <button className="px-6 py-3 rounded-full bg-amber-400 text-blue-950 font-semibold hover:brightness-110 transition">Invia</button>
            </form>
          </div>
        </div>
      </div>
      <Footer onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <CookieConsent openExternally={cookieOpenSignal > 0} onClose={() => setCookieOpenSignal(0)} />
    </div>
  )
}
