import React from 'react'

const Total = ({ parts }) => {
 



  
  return (
    <div>
       {
       parts
       .map(part => part.exercises)               //Map through parts and save exercises into an array
       .reduce((total, amount) => total + amount) //Sum the exercises 
       }
    </div>
  )
}

export default Total