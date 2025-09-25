import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Alex Johnson',
    location: 'Austin, TX',
    quote: 'Our bill dropped by more than half. The team was professional and fast.',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Priya N.',
    location: 'San Jose, CA',
    quote: 'The monitoring app is great. I always know what the system is producing.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Luis Martinez',
    location: 'Phoenix, AZ',
    quote: 'Excellent workmanship and they handled all the permits and rebates.',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop'
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const regionRef = useRef(null)
  const prev = () => setIndex((i) => (i + testimonials.length - 1) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    const el = regionRef.current
    if (!el) return
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-px mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">What our customers say</h2>

        <div
          className="mt-8"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
          ref={regionRef}
        >
          <article className="grid gap-6 sm:grid-cols-[120px_1fr] items-center rounded-xl border border-primary-100 bg-white p-6 shadow-sm">
            <img
              src={testimonials[index].photo}
              alt={`${testimonials[index].name} from ${testimonials[index].location}`}
              className="h-24 w-24 sm:h-28 sm:w-28 object-cover rounded-full"
            />
            <div>
              <p className="text-lg text-slate-800">“{testimonials[index].quote}”</p>
              <p className="mt-4 font-semibold text-slate-700">
                {testimonials[index].name}
                <span className="ml-2 text-slate-500 font-normal">• {testimonials[index].location}</span>
              </p>
            </div>
          </article>

          <div className="mt-4 flex items-center justify-between">
            <button
              className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ← Prev
            </button>
            <div className="flex items-center gap-2" aria-label="Slide navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ring-2 ring-offset-2 ring-transparent transition-colors ${i === index ? 'bg-primary-600' : 'bg-primary-200 hover:bg-primary-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              onClick={next}
              aria-label="Next testimonial"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


