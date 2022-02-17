import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad}) => {

   if(good > 0 || bad > 0  || neutral > 0 ) {
    return (
        <>
         <h2>Statistics</h2>
             <StatisticLine type ="Good" value={good} />
             <StatisticLine type ="Neutral" value={neutral}  />
             <StatisticLine type ="Bad" value={bad}  />
             <StatisticLine type ="All" value={good + neutral + bad}  />
             <StatisticLine type ="Average" value={(good - bad) / (good + neutral + bad) }  />
             <StatisticLine type ="Positive" value={good / (good + neutral + bad) + '%'}  />
          </>
         )
   }
   else{
       return(
           <>
            <p>No Feedback Given</p>
           </>
       )
   }
  





}

export default Statistics