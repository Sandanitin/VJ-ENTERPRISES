import React, { useEffect, useState } from 'react'

export default function Hero() {
  const slides = [
    { src: '/images/solar1.jpg', alt: 'Solar panels field at sunset' },
    { src: '/images/solar2.jpg', alt: 'Rooftop solar installation' },
    { src: '/images/solar3.jpg', alt: 'Technician inspecting solar array' },
  ]
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i + slides.length - 1) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative pt-20 sm:pt-24">
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />

        {/* Content */}
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

        {/* Controls */}
        <div className="relative z-10 container-px mx-auto">
          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-between">
            <button
              className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/90 hover:bg-white text-slate-800 px-3 py-2 shadow"
              onClick={prev}
              aria-label="Previous slide"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ring-2 ring-offset-2 ring-transparent transition-colors ${i === index ? 'bg-leaf-500' : 'bg-white/70 hover:bg-white'}`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/90 hover:bg-white text-slate-800 px-3 py-2 shadow"
              onClick={next}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


