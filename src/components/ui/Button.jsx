import React from 'react'

export default function Button({ children, className = '', ...props }) {
  return (
    <button className={`ui-button ${className}`} {...props}>
      {children}
    </button>
  )
}
