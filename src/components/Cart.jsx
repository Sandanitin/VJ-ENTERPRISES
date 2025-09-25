import React, { useMemo } from 'react'

export default function Cart({ items, onRemove, onUpdateQty }) {
  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])

  return (
    <section id="cart" className="py-16 sm:py-20">
      <div className="container-px mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Cart</h2>
          <p className="mt-2 text-slate-600">This simple cart is for estimation only. Prices are sample data.</p>
        </div>

        {items.length === 0 ? (
          <p className="mt-6 text-slate-600">Your cart is empty. Browse the products above to add items.</p>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
                  <img src={item.image} alt={item.name} className="h-20 w-28 object-cover rounded-md" />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-sm text-slate-500">${item.price.toLocaleString()}</p>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <label className="text-sm text-slate-600">Qty</label>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={e => onUpdateQty?.(item.id, Number(e.target.value) || 1)}
                        className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <button
                    className="inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
                    onClick={() => onRemove?.(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <aside className="rounded-xl border border-primary-100 bg-white p-5 shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-slate-800">Summary</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">Items</dt>
                  <dd className="text-slate-800">{items.reduce((s, i) => s + i.qty, 0)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">Subtotal</dt>
                  <dd className="text-slate-800">${total.toLocaleString()}</dd>
                </div>
              </dl>
              <a href="#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-leaf-500 hover:bg-leaf-600 px-4 py-3 font-semibold text-white">Request a quote</a>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}


