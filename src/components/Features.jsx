import { motion } from 'framer-motion'
import { Sparkles, Gem, Shield } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Finiture in oro 18k',
    desc: 'Materiali selezionati con cura e standard qualitativi superiori.'
  },
  {
    icon: Gem,
    title: 'Diamanti certificati',
    desc: 'Tagli perfetti e certificazioni internazionali per ogni pietra.'
  },
  {
    icon: Shield,
    title: 'Garanzia e cura',
    desc: 'Assistenza post-vendita, lucidature e controlli periodici.'
  }
]

export default function Features() {
  return (
    <section id="collezioni" className="relative bg-gradient-to-b from-blue-950 to-blue-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-amber-200">Perché Tulipano Jewels</motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-blue-950 shadow-lg">
                <it.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-amber-100">{it.title}</h3>
              <p className="mt-2 text-blue-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
