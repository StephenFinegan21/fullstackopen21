import React from 'react'

const Filter = ( { filter, onChange}) => {
  return (
    <div>
        Search: <input  value={filter} onChange={onChange} placeholder='Search Contacts' />
    </div>
  )
}

export default Filter