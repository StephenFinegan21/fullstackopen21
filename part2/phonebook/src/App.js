import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phonebook from './services/phonebook'

const App = () => {

  //Initial list
  const [persons, setPersons] = useState([
  ]) 

  const [newName, setNewName] = useState('')    //Temporary store for new contact name
  const [newNumber, setNewNumber] = useState('')//Temporary store for new contact number
  const [filter, setFilter] = useState('')      //Store for filtering contacts

  //On page load get the initial contacts
  
  useEffect(() => {
    phonebook
      .getAllContacts()
      .then(response => {
        setPersons(response.data)
        
      })
    
  }, [])
 

  
  //Adding a new Contact
  const addPerson = (event) =>{
    event.preventDefault()

    //Check for Duplicate
    if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())){
        
        const existingContactToUpdate = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        const updatedPerson = { ...existingContactToUpdate, number: newNumber }
        let confirmToReplace = window.confirm(`Change number for  ${existingContactToUpdate.name} with ${newNumber} `)

       if(!confirmToReplace) return
        phonebook
         .overWriteContact(existingContactToUpdate.id, updatedPerson)
          .then(res => {
            // If person in the current list matches the duplicate, replace with updated details
             setPersons(persons.map(p => p.id !== existingContactToUpdate.id ? p : res.data))
          })

    setNewName('')
    setNewNumber('')
     }
    else{ //Not a duplicate
  
  //Temporary object that stores new contact details
    const PersonObject ={
      name: newName,
      number: newNumber
    }

    phonebook
      .createContact(PersonObject)
        .then(res => {
        setPersons([...persons 
        ,res.data])
        })
        
    //Reset the new contact details to blank
    setNewName('')
    setNewNumber('')
    }
  }


  const deleteContact = id => {
    phonebook
    .deleteContact(id )
      .then(setPersons(persons.filter(p => p.id !== id)))
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
        filter = {filter}  
        deleteContact ={deleteContact}/>
    </div>
  )
}

export default App