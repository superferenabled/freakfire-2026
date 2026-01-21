import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4.5">
      <div className="font-bold text-3xl text-f-accent">FreakFire</div>
      <nav className="flex space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-f-accent' : 'text-gray-300 hover:text-blue-300 transition-colors'}>Home</NavLink>
        <NavLink to="/games" className={({ isActive }) => isActive ? 'text-f-accent' : 'text-gray-300 hover:text-green-300 transition-colors'}>Games</NavLink>
        <NavLink to="/studio" className={({ isActive }) => isActive ? 'text-f-accent' : 'text-gray-300 hover:text-purple-300 transition-colors'}>The Studio</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-f-accent' : 'text-gray-300 hover:text-orange-300 transition-colors'}>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-f-accent' : 'text-gray-300 hover:text-pink-300 transition-colors'}>Contact</NavLink>
      </nav>
    </header>
  )
}