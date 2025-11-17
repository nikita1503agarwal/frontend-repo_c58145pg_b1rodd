import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onOpenCookies }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-300 ${
      isActive ? 'bg-blue-900/20 text-blue-100' : 'text-blue-50 hover:text-amber-200'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-blue-900/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow ring-1 ring-white/40" />
              <div className="text-lg tracking-wide font-semibold">
                <span className="text-amber-300">Tulipano</span>{' '}
                <span className="text-blue-100">Jewels</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/contatti" className={linkClass}>Contatti</NavLink>
              <button onClick={onOpenCookies} className="ml-2 px-4 py-2 rounded-full text-amber-200 hover:text-amber-300 border border-amber-400/30 hover:border-amber-400/60 transition-colors">Cookie</button>
            </nav>
            <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 pt-2 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/contatti" className={linkClass}>Contatti</NavLink>
                <button onClick={() => { setOpen(false); onOpenCookies && onOpenCookies(); }} className="px-4 py-2 rounded-full text-amber-200 hover:text-amber-300 border border-amber-400/30 hover:border-amber-400/60 transition-colors">Preferenze Cookie</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
