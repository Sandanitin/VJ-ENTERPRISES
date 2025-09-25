import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 sm:pt-24">
      <div className="relative overflow-hidden">
        <img src="/images/solar1.jpg" alt="Solar panels field" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
        <div className="relative z-10 container-px mx-auto flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto">Clean, affordable solar for homes and businesses</h1>
            <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">Lower your energy bills with high‑efficiency systems designed, installed, and maintained by SunRay Solar. We handle everything—from consultation and permitting to monitoring.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-leaf-500 hover:bg-leaf-600 text-white px-6 py-3.5 font-semibold shadow">
                Get your free quote
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-white/90 hover:bg-white text-primary-700 px-6 py-3.5 font-semibold shadow">
                Explore Services
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}


