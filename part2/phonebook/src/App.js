import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()

  //Prevent duplicates
   if((persons.map(person => person.name.toLowerCase).includes(newName.toLowerCase))){
     alert(`${newName} already exists in contacts`)
     return
   }
    
    setPersons([
      ...persons,
      {name:newName}
    ])

    setNewName('')
  }

  const handleInput = (event) =>{
    setNewName(event.target.value)
   
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input value={newName} onChange={handleInput} placeholder='add a new Contact' />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li>{person.name}</li>)}
    </div>
  )
}

export default App