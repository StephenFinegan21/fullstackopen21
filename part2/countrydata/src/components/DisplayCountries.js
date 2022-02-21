import {React} from 'react'

import Weather from './Weather';


const DisplayCountries = ({ data, userSelection }) => {

   // More than 10 Countries Returned
   if(data.length > 10 || data.length === 0){
        return (
           <>
            <p>Too many Results, please change filter or enter a more specific value</p>
           </>
          )
    }
    // 1 result - (Detailed info)
    else if(data.length === 1){
        return(
            <div>
            {data.map(country => 
                <div key={country.name.common} >
                    <h3>{country.name.common}</h3>
                        <p>{country.capital}</p>
                        <p>{country.area}</p>
                    <h4>Languages :</h4>
                        {Object.values(country.languages)
                            .map(lan =>
                             <li key={lan}>
                                 {lan}
                            </li> )}
                    <img src={country.flags.png} alt ={country.name.common} style={{padding:'20px'}}/>
                    
                 
                </div>)}
                    <Weather 
                        country = {data[0].name.common}
                        city = {data[0].capital}
                   />
                       
                
        </div>
        )

    }
    else{
        return(
            <div>
            {data.map(country => 
                <li key={country.name.common}>
                    {country.name.common}
                    <button onClick={() => userSelection(country.name.common)}>Show</button>
                </li>)}
        </div>
        )
    }
    
    
  
}

export default DisplayCountries