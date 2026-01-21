import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function Header() {
  return (
    <header className="site-header">
      <div className="brand">FreakFire</div>
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/studio">The Studio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">© {new Date().getFullYear()} FreakFire Studio</footer>
      </BrowserRouter>
    </div>
  )
}
