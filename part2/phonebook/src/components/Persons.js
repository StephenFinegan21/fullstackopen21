import React from 'react'

const Persons = ( {list , filter}) => {

    console.log(
        
        
    
    
    
    )
   
  return (
    <div>
        {list.filter(name => name.name
            .includes(filter))
                .map(((num) => 
                    <li>{num.name} - {num.number}</li>
                ))
        }
    </div>
  )
}

export default Persons


