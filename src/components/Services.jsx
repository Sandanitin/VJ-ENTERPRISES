import React from 'react'

const services = [
  { 
    title: 'Residential Installation',
    image: '/images/solar1.jpg',
    icon: (
      <svg className="h-6 w-6 text-leaf-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>
    ),
    points: ['Custom roof design', 'Tier‑1 high‑efficiency panels', 'Smart monitoring app']
  },
  { 
    title: 'Commercial Installation',
    image: '/images/solar2.jpg',
    icon: (
      <svg className="h-6 w-6 text-leaf-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="8" width="7" height="12"/><rect x="14" y="4" width="7" height="16"/><path d="M3 20h18"/></svg>
    ),
    points: ['Rooftop & ground‑mount', 'Peak‑shaving incentives', 'Turn‑key EPC delivery']
  },
  { 
    title: 'Battery Storage',
    image: '/images/solar3.jpg',
    icon: (
      <svg className="h-6 w-6 text-leaf-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4"/><path d="M10 10l-2 2h4l-2 2"/></svg>
    ),
    points: ['Backup power during outages', 'Time‑of‑use savings', 'Seamless integration']
  },
  { 
    title: 'Maintenance & Monitoring',
    image: '/images/solar4.jpg',
    icon: (
      <svg className="h-6 w-6 text-leaf-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12a9 9 0 1 0 18 0"/><path d="M12 7v5l3 3"/></svg>
    ),
    points: ['Annual inspections', 'Performance audits', 'Rapid service response']
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container-px mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Services</h2>
          <p className="mt-2 text-slate-600">From design to maintenance, we deliver reliable solar solutions tailored to your goals.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <article key={s.title} className="group rounded-xl border border-primary-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <img src={s.image} alt={`${s.title} illustration`} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 ring-1 ring-primary-100">{s.icon}</span>
                  <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc pl-5">
                  {s.points.map(p => (<li key={p}>{p}</li>))}
                </ul>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium group-hover:underline">Talk to an expert →</a>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA band */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-leaf-500 to-primary-600 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Not sure which service you need?</h3>
            <p className="text-white/90">Get a free assessment and custom proposal for your site.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-white/95 text-primary-700 hover:bg-white px-5 py-3 font-semibold shadow">
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}


