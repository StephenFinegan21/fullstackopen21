import React from 'react'

const Statistic = ({ type, value}) => {
  return (
    <div>
        <p>{type} - {value}</p>
    </div>
  )
}

export default Statistic