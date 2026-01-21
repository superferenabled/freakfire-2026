import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Home from './pages/Home'
import Games from './pages/Games'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}
