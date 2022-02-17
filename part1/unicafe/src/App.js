import { useState } from 'react'
import Button from './component/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () =>{
    setGood(good + 1)
  }

  const addNeutral = () =>{
    setNeutral(neutral + 1)
  }

  const addBad = () =>{
    setBad(bad + 1)
  }

  console.log(good, neutral, bad)


  return (
    <div>
      <Button handleClick={() => addGood()} name="Good" />
      <Button handleClick={() => addNeutral()} name="Neutral" />
      <Button handleClick={() => addBad()} name="Bad" />

      <h2>Statistics</h2>
      <p>Good - {good}</p>
      <p>Neutral - {neutral}</p>
      <p>Bad - {bad}</p>
    </div>
  )
}

export default App