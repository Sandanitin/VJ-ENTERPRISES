import React from 'react'

const products = [
  {
    id: 'panel-kit-5kw',
    name: '5kW Solar Panel Kit',
    image: '/images/solar2.jpg',
    description: 'High‑efficiency Tier‑1 panels with wiring and combiner box.',
    price: 4999,
  },
  {
    id: 'inverter-6kw',
    name: '6kW Hybrid Inverter',
    image: '/images/solar3.jpg',
    description: 'Grid‑tie + battery ready inverter with smart monitoring.',
    price: 1799,
  },
  {
    id: 'battery-10kwh',
    name: '10kWh Lithium Battery',
    image: '/images/solar4.jpg',
    description: 'Wall‑mounted LFP battery with 6,000 cycle life.',
    price: 3299,
  },
  {
    id: 'mounting-roof',
    name: 'Roof Mounting Hardware',
    image: '/images/solar1.jpg',
    description: 'Universal aluminum racking and flashing kit.',
    price: 649,
  },
]

export default function Products({ onAddToCart }) {
  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-px mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Products</h2>
          <p className="mt-2 text-slate-600">Explore popular solar hardware. Add items to your cart to estimate a system.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(p => (
            <article key={p.id} className="group rounded-xl border border-primary-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary-700 font-semibold">${(p.price).toLocaleString()}</span>
                  <button
                    className="inline-flex items-center rounded-md bg-leaf-500 hover:bg-leaf-600 text-white px-3 py-2 text-sm font-medium"
                    onClick={() => onAddToCart?.(p)}
                    aria-label={`Add ${p.name} to cart`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


