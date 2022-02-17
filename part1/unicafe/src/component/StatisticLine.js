import React from 'react'

const StatisticLine = ({ type, value}) => {
  return (
    <>
    <table>
      <tr>
        <td>{type}</td>
        <td>{value}</td>
      </tr>

    </table>
    </>
  )
}

export default StatisticLine