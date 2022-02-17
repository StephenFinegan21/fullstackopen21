import React from 'react'

const Button = ({name, handleClick}) => {
    
  return (
    <>
    <button style={{padding : '10px', width: '100px'}} onClick={handleClick}>{name} </button>
    
    </>
  )
}

export default Button