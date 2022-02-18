import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  return (
    <>
    {
      parts.map((part, i) => 
      <Part 
        data = {part}
        key = {i} />)
    }
    </>
  )
}

export default Content