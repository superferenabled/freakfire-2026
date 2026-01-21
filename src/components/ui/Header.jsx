import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4.5">
      <div className="font-bold text-3xl text-f-accent">FreakFire</div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
        <Link to="/games" className="text-gray-300 hover:text-white transition-colors">Games</Link>
        <Link to="/studio" className="text-gray-300 hover:text-white transition-colors">The Studio</Link>
        <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
      </nav>
    </header>
  )
}