import { useEffect, useState } from 'react'

const defaultState = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const storageKey = 'tj_cookie_consent_v1'

export default function CookieConsent({ openExternally = false, onClose }) {
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState(defaultState)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPrefs({ ...defaultState, ...parsed })
      } catch {}
    }
    setLoaded(true)
    const shouldOpen = !saved
    setOpen(shouldOpen || openExternally)
  }, [openExternally])

  useEffect(() => {
    if (!loaded) return
    // Load analytics scripts only if consented
    if (prefs.analytics) {
      // Example: GTM placeholder - user should replace with their container id
      // const s = document.createElement('script')
      // s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-XXXX'
      // document.head.appendChild(s)
    }
  }, [prefs, loaded])

  const save = () => {
    localStorage.setItem(storageKey, JSON.stringify(prefs))
    setOpen(false)
    onClose && onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={save} />
      <div className="relative w-full sm:max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 p-6">
          <h3 className="text-2xl font-semibold text-amber-200">Preferenze Cookie</h3>
          <p className="mt-2 text-blue-100/80 text-sm">
            Usiamo cookie per garantire il corretto funzionamento del sito, analizzare il traffico e personalizzare l'esperienza. Puoi modificare le tue preferenze in qualsiasi momento.
          </p>
          <div className="mt-6 space-y-3">
            <Toggle checked readOnly label="Necessari" description="Sempre attivi per garantire il funzionamento del sito." />
            <Toggle checked={prefs.analytics} onChange={(v)=>setPrefs(p=>({...p, analytics:v}))} label="Analytics" description="Aiutano a capire come viene utilizzato il sito (anonimizzati)." />
            <Toggle checked={prefs.marketing} onChange={(v)=>setPrefs(p=>({...p, marketing:v}))} label="Marketing" description="Usati per personalizzare contenuti e annunci." />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={()=>{ setPrefs(defaultState); save() }} className="px-4 py-2 rounded-full bg-blue-800 text-blue-100 hover:bg-blue-700 transition">Rifiuta non necessari</button>
            <button onClick={()=>{ setPrefs({ necessary:true, analytics:true, marketing:true }); save() }} className="px-4 py-2 rounded-full bg-amber-400 text-blue-950 font-semibold hover:brightness-110 transition">Accetta tutti</button>
            <button onClick={save} className="px-4 py-2 rounded-full border border-amber-300/50 text-amber-200 hover:text-amber-100 hover:border-amber-300/80 transition">Salva preferenze</button>
          </div>
          <p className="mt-4 text-xs text-blue-200/70">Conforme al GDPR: raccolta del consenso, granularità per categoria, possibilità di revoca.</p>
        </div>
      </div>
    </div>
  )
}

function Toggle({ label, description, checked, onChange, readOnly }) {
  return (
    <label className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
      <input type="checkbox" className="mt-1 h-4 w-4" checked={checked} readOnly={readOnly} onChange={(e)=>onChange && onChange(e.target.checked)} />
      <div>
        <p className="text-amber-100 font-medium">{label}</p>
        <p className="text-blue-100/80 text-sm">{description}</p>
      </div>
    </label>
  )
}
