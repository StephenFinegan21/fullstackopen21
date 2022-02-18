import React from 'react'
import Total from './Total'
import Content from './Content'
import Header from './Header'

const Course = ({ course }) => {
    console.log(course, 'is the props')
   // console.log(course.name, 'is name of course')
  
  
  return (
    <div>
    {
        course.map(courses =>
            <>
                <Header course={courses.name} />
                <Content parts={courses.parts} />
                <Total parts={courses.parts} />
             </>
        ) 
    }   
    </div>
  )
}


export default Course