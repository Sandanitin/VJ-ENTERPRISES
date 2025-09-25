import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [ok, setOk] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email || '')) return
    setOk(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Get a free quote</h2>
          <p className="mt-2 text-slate-600">Tell us about your property and energy goals. We’ll respond within one business day.</p>
          {ok ? (
            <div className="mt-6 rounded-md bg-green-50 p-4 text-green-800">Thanks! Your message has been received.</div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={submit} noValidate>
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input className="mt-1 w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service interest</label>
                <select className="mt-1 w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                  <option value="">Select a service</option>
                  <option>Residential Installation</option>
                  <option>Commercial Installation</option>
                  <option>Maintenance & Monitoring</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
              </div>
              <button type="submit" className="inline-flex items-center rounded-md bg-leaf-500 hover:bg-leaf-600 text-white px-5 py-3 font-semibold">Send message</button>
            </form>
          )}
        </div>
        <div className="rounded-xl overflow-hidden border border-primary-100 shadow-sm">
          <img src="/images/solar4.jpg" alt="Service area" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}


