import React, { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const sections = links.map(l => document.querySelector(l.href))
      const offset = 120
      let current = '#home'
      for (const section of sections) {
        if (!section) continue
        const top = section.offsetTop - offset
        if (window.scrollY >= top) current = `#${section.id}`
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-white/70 backdrop-blur'}`}>
      <nav className="container-px mx-auto flex items-center justify-between py-3" aria-label="Main">
        <a href="#home" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="SunRay Solar logo" className="h-8 w-8" />
          <span className="font-semibold text-primary-700">SunRay Solar</span>
        </a>
        <button className="md:hidden p-2 rounded-md text-primary-700 hover:bg-primary-50" aria-expanded={open} onClick={() => setOpen(v=>!v)}>
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`relative py-2 text-sm font-medium hover:text-primary-700 ${active===l.href?'text-primary-700':''}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden">
          <ul className="container-px mx-auto pb-3 space-y-2">
            {links.map(l => (
              <li key={l.href}><a href={l.href} className="block rounded-md px-3 py-2 text-sm hover:bg-primary-50">{l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}


