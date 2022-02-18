import React from 'react'

const Button = ({handleClick}) => {
  return (
    <div>
    <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default Button