import React from 'react'

const Search = ({onChange}) => {
  return (
    <div>
        Find Countries: <input onChange={onChange} />
    </div>
  )
}

export default Search