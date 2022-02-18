import React from 'react'
import Total from './Total'
import Content from './Content'
import Header from './Header'

const Course = ({ course }) => {
    //console.log(course, 'is the props')
   // console.log(course.name, 'is name of course')
  return (
    <div>
    
      <Header course={course.name} />
        
      <Content parts={course.parts} />
      <Total parts={course.parts} />
        
        
    </div>
  )
}

export default Course