import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [ok, setOk] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (form.phone && form.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Enter a valid phone number.'
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await new Promise(r => setTimeout(r, 800))
      setOk(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setErrors({})
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-50/70 via-white to-white"></div>
      <div className="container-px relative mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Get a free quote</h2>
          <p className="mt-3 max-w-prose text-slate-600">Tell us about your property and energy goals. We’ll respond within one business day.</p>

          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm ring-1 ring-black/[0.02]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.7c.98 0 1.822.668 2.043 1.623l.64 2.816a2.25 2.25 0 01-.57 2.1l-1.21 1.21a.75.75 0 00-.17.8 11.27 11.27 0 006.04 6.04.75.75 0 00.8-.17l1.21-1.21a2.25 2.25 0 012.1-.57l2.816.64c.955.221 1.623 1.063 1.623 2.043v2.7c0 1.243-1.007 2.25-2.25 2.25h-.75C9.303 24 0 14.697 0 3.75v-.75z"/></svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Call us</p>
                <a href="tel:+11234567890" className="text-sm text-slate-600 hover:text-primary-700">(123) 456-7890</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm ring-1 ring-black/[0.02]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M1.5 6A2.25 2.25 0 013.75 3.75h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zm2.66-.75a.75.75 0 00-.41 1.38l7.29 4.86a1.5 1.5 0 001.62 0l7.29-4.86a.75.75 0 00-.82-1.25L12 10.84 3.77 5.63a.75.75 0 00-.41-.38z"/></svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Email</p>
                <a href="mailto:hello@sunray.solar" className="text-sm text-slate-600 hover:text-primary-700">hello@sunray.solar</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm ring-1 ring-black/[0.02]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2.25c-3.727 0-6.75 2.97-6.75 6.634 0 4.694 6.048 11.61 6.308 11.9a.75.75 0 001.084 0c.26-.29 6.308-7.206 6.308-11.9 0-3.664-3.023-6.634-6.95-6.634zm0 9.134a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd"/></svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Office</p>
                <p className="text-sm text-slate-600">145 Greenway Blvd, Suite 200</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm ring-1 ring-black/[0.02]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM12.75 6a.75.75 0 00-1.5 0v6c0 .199.079.39.22.53l3.75 3.75a.75.75 0 101.06-1.06l-3.53-3.53V6z" clipRule="evenodd"/></svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Hours</p>
                <p className="text-sm text-slate-600">Mon–Fri, 9:00–18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {ok ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-900 shadow-sm ring-1 ring-black/[0.02]">
              <p className="text-lg font-semibold">Thanks! Your message has been received.</p>
              <p className="mt-1 text-sm">We’ll be in touch shortly.</p>
            </div>
          ) : (
            <form className="rounded-3xl border border-primary-100 bg-white/95 p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8" onSubmit={submit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800">Name<span className="text-red-500"> *</span></label>
                  <input
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500'}`}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800">Email<span className="text-red-500"> *</span></label>
                  <input
                    type="email"
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500'}`}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800">Phone</label>
                  <input
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500'}`}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800">Service interest</label>
                  <select
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option>Residential Installation</option>
                    <option>Commercial Installation</option>
                    <option>Maintenance & Monitoring</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800">Message<span className="text-red-500"> *</span></label>
                  <textarea
                    rows="5"
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500'}`}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-white shadow-sm transition-colors duration-150 ${submitting ? 'bg-leaf-400' : 'bg-leaf-500 hover:bg-leaf-600'} disabled:cursor-not-allowed`}
                >
                  {submitting && (
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  )}
                  {submitting ? 'Sending...' : 'Send message'}
                </button>
                <p className="mt-2 text-xs text-slate-500">We respect your privacy. We’ll never share your information.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}


