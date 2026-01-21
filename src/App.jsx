import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Home from './pages/Home'
import Games from './pages/Games'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

const colors = {
  '/': '#ff6b6b', // red
  '/games': '#4ade80', // green
  '/studio': '#a78bfa', // purple
  '/blog': '#fb923c', // orange
  '/contact': '#f472b6', // pink
}

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', colors[location.pathname] || '#ff6b6b')
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
