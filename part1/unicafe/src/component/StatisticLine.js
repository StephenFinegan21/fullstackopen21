import React from 'react'

const StatisticLine = ({ type, value}) => {
  return (
    <>
    <table>
      <tbody>
        <tr>
          <td>{type}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default StatisticLine