import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(
    [
      {
        quote : 'If it hurts, do it more often', 
        votes : 0 
      },
      {
        quote : 'Adding manpower to a late software project makes it later!', 
        votes : 0 
        }, 
      {
        quote :  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
       votes : 0 
       }, 
      {
        quote :'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
         votes : 0 
         }, 
      {
        quote :'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
         votes : 0 
         }, 
      {
        quote : 'Premature optimization is the root of all evil.', 
        votes : 0 
        }, 
      {
        quote :     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
       votes : 0 
       }, 
      {
        quote :     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
       votes : 0 
       }, 
    ]
  )

  const [highestVoted, setHighestVoted] = useState('None')

  const nextAnecdote = () => {
    const randomNumber =  Math.floor(Math.random() * 8);
    setSelected(randomNumber)
  }

  const addVote = () => {
    
    setAnecdotes([...anecdotes], anecdotes[selected].votes += 1)
    getMostVotes()
  }

  const getMostVotes = () => {
      const voteValues = (anecdotes.map(item => item.votes)) //Get the array of votes
      const max = Math.max(...voteValues)                    //Get the highest count of votes
      anecdotes.find(highest => highest.votes === max)       //Find the object item with the highest votes
    
     setHighestVoted(anecdotes.find(highest => highest.votes === max).quote)  //Set as new highest

    
  return (
    <div>
     
      <p> { anecdotes[selected].quote } </p>
      <p>  has {anecdotes[selected].votes} votes</p>
      <Button handleClick={nextAnecdote} text="Next"/>
      <Button handleClick={addVote} text="Vote"/>

    
      <h1>Anecdote with the most votes</h1>
      <p>{highestVoted}</p>
    </div>
  )
}

export default App