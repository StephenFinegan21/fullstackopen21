import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '00223567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()

  //Prevent duplicates
  
   if((persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase()))){
     alert(`${newName} already exists in contacts`)
     return
   }
   
    
   
    setPersons([
      ...persons,
      {
        name:newName,
        number:newNumber
      }
    ])

    setNewName('')
    setNewNumber('')
  }

  const handleInput = (event) =>{
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input required value={newName} onChange={handleInput} placeholder='add a new Contact' />
          number: <input required value={newNumber} onChange={handleNewNumber} placeholder='add a new Number' />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <li key ={person.name}>
          {person.name} - {person.number}
        </li>
        
        
        
        )}
    </div>
  )
}

export default App