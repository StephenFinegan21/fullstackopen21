import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  //Initial list
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')    //Temporary store for new contact name
  const [newNumber, setNewNumber] = useState('')//Temporary store for new contact number
  const [filter, setFilter] = useState('')      //Store for filtering contacts


  const addPerson = (event) =>{
    event.preventDefault()

    //Prevent duplicate names being added
    if((persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase()))){
     alert(`${newName} already exists in contacts`)
     return
   }
  //Append new contact onto existing persons list
    setPersons([
      ...persons,
      {
        name:newName,
        number:newNumber
      }
    ])

    //Reset the new contact details to blank
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value = {filter} onChange={handleFilter} />

    <h2>Add a New Contact</h2>
      <PersonForm
        handleSubmit = {addPerson}
        name = {newName} enterName = {handleNewName}
        number = {newNumber} enterNumber = {handleNewNumber}
      />
      
      <h2>Contacts</h2>
      <Persons 
        list = {persons}
        filter = {filter}  />
     
    </div>
  )
}

export default App