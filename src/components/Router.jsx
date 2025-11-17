import { Routes, Route } from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import Contatti from '../pages/Contatti'
import Privacy from '../pages/Privacy'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contatti" element={<Contatti />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}
