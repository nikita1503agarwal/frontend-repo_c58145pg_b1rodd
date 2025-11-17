import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-black">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-950/40 to-blue-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow">Eleganza che brilla</span>
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg leading-relaxed">
            Collezioni pregiate, design contemporaneo e artigianalità italiana. Scopri il fascino senza tempo dei nostri diamanti e delle nostre creazioni.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#collezioni" className="px-6 py-3 rounded-full bg-amber-400 text-blue-950 font-semibold shadow-lg hover:shadow-amber-500/40 hover:scale-[1.02] transition-all">Collezioni</a>
            <a href="/contatti" className="px-6 py-3 rounded-full border border-amber-300/50 text-amber-200 hover:text-amber-100 hover:border-amber-300/80 transition-all">Prenota un appuntamento</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
