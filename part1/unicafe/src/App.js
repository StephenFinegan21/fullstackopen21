import { useState } from 'react'
import Button from './component/Button'
import Statistics from './component/Statistics'

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

  //console.log(good, neutral, bad)


  return (
    <div>
      <Button handleClick={() => addGood()} name="Good" />
      <Button handleClick={() => addNeutral()} name="Neutral" />
      <Button handleClick={() => addBad()} name="Bad" />

      <Statistics 
        good ={good}
        neutral ={neutral} 
        bad ={bad}  />
      
      
      
    </div>
  )
}

export default App