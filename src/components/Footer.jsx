import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px mx-auto py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="SunRay Solar logo" className="h-6 w-6" />
          <span className="font-semibold text-slate-700">SunRay Solar</span>
        </div>
        <ul className="flex gap-5 text-sm text-slate-600">
          <li><a href="#home" className="hover:text-primary-700">Home</a></li>
          <li><a href="#services" className="hover:text-primary-700">Services</a></li>
          <li><a href="#testimonials" className="hover:text-primary-700">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-primary-700">Contact</a></li>
        </ul>
        <div className="text-right text-xs text-slate-500">© {new Date().getFullYear()} SunRay Solar</div>
      </div>
    </footer>
  )
}


