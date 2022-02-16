import React from 'react'

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return (
    <>
    <div>
        <p>{part1}</p>
        <p>{exercises1}</p>
    </div>

    <div>
        <p>{part2}</p>
        <p>{exercises2}</p>
    </div>

    <div>
        <p>{part3}</p>
        <p>{exercises3}</p>
    </div>
    </>
  )
}

export default Content