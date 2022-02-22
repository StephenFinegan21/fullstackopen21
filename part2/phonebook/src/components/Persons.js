import React from 'react'

const Persons = ( {list , filter, deleteContact}) => {
   //console.log(list)
   

   if(list.length < 1){
    return (
      <div>
          <p>none</p>
      </div>
    )
   }
   else{
    return (
      <div>
          {list.filter(name => name.name.toLowerCase()
              .includes(filter.toLowerCase()))
                  .map(((num) => 
                <div key={num.id}>
                      <li>
                        {num.name} - {num.number}
                      </li>
                      <button onClick={() => deleteContact(num.id)}>Delete</button>
                </div>
                  ))
          }
      </div>
    )
   }
  
}

export default Persons


