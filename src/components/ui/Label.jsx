import React from 'react'

export default function Label({ children, htmlFor }) {
  return (
    <label className="ui-label" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
