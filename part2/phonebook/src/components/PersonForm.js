import React from 'react'

const PersonForm = ( { handleSubmit, name, number, enterName, enterNumber } ) => {

    
  return (
   <form onSubmit = {handleSubmit}>
        <div>
            name: <input required value={name}  onChange={enterName} placeholder='add a new Name' /> 
            number: <input required value={number}  onChange={enterNumber} placeholder='add a new Number' />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}

export default PersonForm