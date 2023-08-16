import React from 'react'
import './Button.css'
const Button = ({text ,type}) => {
  return (  
        <button type={type}>
                {text}
        </button>
  )
}

export default Button
