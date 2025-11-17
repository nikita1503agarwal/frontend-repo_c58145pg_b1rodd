import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'
import { useState } from 'react'

export default function Home() {
  const [cookieOpenSignal, setCookieOpenSignal] = useState(0)

  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <Hero />
      <Features />
      <Footer onOpenCookies={() => setCookieOpenSignal(c => c + 1)} />
      <CookieConsent openExternally={cookieOpenSignal > 0} onClose={() => setCookieOpenSignal(0)} />
    </div>
  )
}
