import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px mx-auto py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" alt="SunRay Solar logo" className="h-7 w-7" />
              <span className="font-semibold text-slate-800 text-lg">SunRay Solar</span>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Clean, affordable solar solutions for homes and businesses. Design, installation,
              maintenance, and monitoring—end to end.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#home" className="hover:text-primary-700">Home</a></li>
              <li><a href="#services" className="hover:text-primary-700">Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary-700">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 tracking-wide">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="mailto:hello@sunraysolar.com" className="hover:text-primary-700">hello@sunraysolar.com</a>
              </li>
              <li>
                <a href="tel:+11234567890" className="hover:text-primary-700">+1 (123) 456-7890</a>
              </li>
              <li>Mon–Fri, 9am–6pm</li>
              <li>123 Solar Ave, Sunnyvale, CA</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 tracking-wide">Follow Us</h4>
            <div className="mt-4 flex items-center gap-4">
              <a aria-label="Visit us on Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.4-4.11 11.628-11.628 11.628-2.31 0-4.457-.676-6.266-1.84.321.038.63.05.964.05 1.915 0 3.68-.652 5.084-1.755a4.104 4.104 0 0 1-3.832-2.844c.253.038.506.063.772.063.367 0 .734-.05 1.076-.139a4.096 4.096 0 0 1-3.287-4.02v-.05c.544.303 1.18.493 1.85.518a4.086 4.086 0 0 1-1.827-3.41c0-.759.202-1.456.556-2.066a11.654 11.654 0 0 0 8.457 4.29 4.619 4.619 0 0 1-.101-.938 4.09 4.09 0 0 1 7.084-2.798 8.023 8.023 0 0 0 2.596-.988 4.114 4.114 0 0 1-1.8 2.26 8.206 8.206 0 0 0 2.36-.63 8.851 8.851 0 0 1-2.046 2.12z"/></svg>
              </a>
              <a aria-label="Visit us on LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z"/></svg>
              </a>
              <a aria-label="Visit us on Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.2 4 .5c-.9.3-1.6.7-2.3 1.4C1 2.6.6 3.3.3 4.2.1 5 .1 5.9 0 7.2 0 8.5 0 8.9 0 12s0 3.5.1 4.8c.1 1.3.2 2.2.5 3 .3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.8.3 1.7.4 3 .5 1.3.1 1.7.1 4.9.1s3.5 0 4.8-.1c1.3-.1 2.2-.2 3-.5.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.8.4-1.7.5-3 .1-1.3.1-1.7.1-4.9s0-3.5-.1-4.8c-.1-1.3-.2-2.2-.5-3-.3-.9-.7-1.6-1.4-2.3C21.4.9 20.7.5 19.8.2 19 .1 18.1 0 16.8 0 15.5 0 15.1 0 12 0z"/><circle cx="12" cy="12" r="3.2"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SunRay Solar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-700">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-primary-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


