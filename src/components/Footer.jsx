export default function Footer({ onOpenCookies }) {
  return (
    <footer className="bg-blue-950 text-blue-100 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Tulipano Jewels. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/about" className="hover:text-amber-200 transition-colors">About</a>
            <a href="/contatti" className="hover:text-amber-200 transition-colors">Contatti</a>
            <button onClick={onOpenCookies} className="hover:text-amber-200 transition-colors">Preferenze Cookie</button>
            <a href="/privacy" className="hover:text-amber-200 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
