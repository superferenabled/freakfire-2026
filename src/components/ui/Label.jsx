import React from 'react'

export default function Label({ children, htmlFor }) {
  return (
    <label className="block font-semibold mb-1.5" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
