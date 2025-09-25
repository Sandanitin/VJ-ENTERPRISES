import React, { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(i => i.id !== id))
  }

  const updateQty = (id, qty) => {
    setCartItems((prev) => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
  }

  const cartCount = useMemo(() => cartItems.reduce((sum, i) => sum + i.qty, 0), [cartItems])

  return (
    <div className="min-h-screen text-slate-800 bg-white">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Products onAddToCart={addToCart} />
        <Services />
        <Cart items={cartItems} onRemove={removeFromCart} onUpdateQty={updateQty} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


