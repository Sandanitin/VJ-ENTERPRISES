import React from 'react'

export default function About() {
  const stats = [
    { label: 'Years in business', value: '10+' },
    { label: 'Projects delivered', value: '1,200+' },
    { label: 'Avg. customer rating', value: '4.9/5' },
    { label: 'CO₂ offset to date', value: '25,000+ tons' },
  ]

  const values = [
    { title: 'Quality without compromise', desc: 'Tier‑1 equipment, meticulous engineering, and certified installers on every project.' },
    { title: 'Transparent & on-time', desc: 'Clear timelines, proactive updates, and no surprise change orders.' },
    { title: 'Safety first', desc: 'We exceed code requirements and follow rigorous safety protocols on‑site.' },
  ]

  return (
    <section id="about" className="relative py-16 sm:py-24">
      {/* Background aesthetics */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-leaf-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />
      </div>

      <div className="container-px mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-primary-200 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm">About us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">About VJ Enterprises</h2>
          <p className="mt-3 text-slate-600">We design and deliver high‑efficiency solar and storage systems for homes and businesses. From feasibility and permitting to installation and monitoring, our in‑house team ensures performance, longevity, and a seamless customer experience.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-leaf-500 hover:bg-leaf-600 text-white px-5 py-3 font-semibold shadow">Talk to an expert</a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-white/90 hover:bg-white text-primary-700 px-5 py-3 font-semibold ring-1 ring-primary-200 shadow">Explore services</a>
          </div>
        </div>

        {/* Mission highlight */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary-600 to-leaf-600 text-white p-6 sm:p-8 shadow-md">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-xl sm:text-2xl font-bold">Our mission</h3>
              <p className="mt-2 text-white/90">Accelerate the world’s transition to clean energy by building solar and storage systems that are safe, reliable, and delightfully simple to own.</p>
            </div>
            <div className="md:col-span-4">
              <ul className="grid grid-cols-2 gap-3 text-sm">
                <li className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/20">End‑to‑end delivery</li>
                <li className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/20">Data‑driven design</li>
                <li className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/20">Top‑tier hardware</li>
                <li className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/20">Service for life</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">How we work</h3>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '1', t: 'Consult & assess', d: 'Site assessment, bills review, and goals alignment.' },
              { n: '2', t: 'Engineer & permit', d: 'Stamped drawings, utility interconnect, AHJ approvals.' },
              { n: '3', t: 'Install & commission', d: 'Certified crews, safety first, thorough QA and testing.' },
              { n: '4', t: 'Monitor & support', d: 'Performance tracking, proactive maintenance, rapid response.' },
            ].map(s => (
              <div key={s.n} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-primary-100">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 ring-1 ring-primary-200 text-primary-700 font-bold">{s.n}</span>
                  <div>
                    <div className="font-semibold text-slate-900">{s.t}</div>
                    <p className="mt-1 text-sm text-slate-600">{s.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & badges */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Certifications & partnerships</h3>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {['NABCEP Certified', 'UL Listed Components', 'Tier‑1 Panels', 'Licensed & Insured', 'Net Metering Partner'].map(b => (
              <span key={b} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-primary-100 shadow-sm">{b}</span>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Values + Quote */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid gap-4">
              {values.map(v => (
                <div key={v.title} className="group rounded-xl bg-white/90 backdrop-blur p-5 shadow-sm ring-1 ring-primary-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 ring-1 ring-primary-100 text-leaf-600">✓</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">{v.title}</h3>
                      <p className="mt-1 text-slate-600 text-sm">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <figure className="mt-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-primary-100">
              <blockquote className="text-slate-700 text-sm sm:text-base">“The VJ team delivered on time with exceptional attention to detail. Our utility bills dropped immediately and the monitoring app is super intuitive.”</blockquote>
              <figcaption className="mt-3 text-xs text-slate-500">— A happy commercial client</figcaption>
            </figure>
          </div>

          {/* Right: Images + Stats */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-primary-100">
                <img src="/images/solar4.jpg" alt="Our team installing a solar array" className="w-full h-72 sm:h-80 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/solar2.jpg" alt="Commercial rooftop" className="h-32 sm:h-36 w-full object-cover rounded-xl ring-1 ring-primary-100" loading="lazy" />
                <img src="/images/solar3.jpg" alt="Battery storage system" className="h-32 sm:h-36 w-full object-cover rounded-xl ring-1 ring-primary-100" loading="lazy" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map(s => (
                  <div key={s.label} className="rounded-xl bg-white/95 p-4 text-center shadow-sm ring-1 ring-primary-100">
                    <div className="text-xl font-extrabold text-primary-700">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Frequently asked questions</h3>
          <div className="mt-4 divide-y divide-primary-100 rounded-xl ring-1 ring-primary-100 bg-white">
            {[
              { q: 'How long does installation take?', a: 'Residential projects typically install in 1–2 days once permits are approved. Commercial timelines vary by size and interconnection requirements.' },
              { q: 'What warranties do you provide?', a: 'We include 25‑year panel and production warranties with workmanship coverage. Batteries and inverters follow manufacturer terms.' },
              { q: 'Do you handle incentives and permits?', a: 'Yes. We manage all permitting, interconnection, and applicable incentives or rebates as part of our turn‑key delivery.' },
              { q: 'How does monitoring work?', a: 'Our smart app provides real‑time production and consumption data with alerting and remote diagnostics.' },
            ].map(item => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-medium text-slate-800 flex items-center justify-between">
                  {item.q}
                  <span className="ml-3 text-primary-600 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



