import React from 'react'
import './button.css'

function Button({type, text, link}) {
  return (
    <button type='button' className={`${type}`}>
      <a href={link}>{text}</a>
    </button>
  )
}

export default Button
