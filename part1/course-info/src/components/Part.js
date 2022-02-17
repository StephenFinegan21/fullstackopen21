import React from 'react'

const Part = ( { data }) => {
  return (
    <div>
        <p>{data.name}</p>
        <p>{data.exercises}</p>
        
    </div>
  )
}

export default Part