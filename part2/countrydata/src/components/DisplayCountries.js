import React from 'react'

const DisplayCountries = ({ data, filter }) => {

    console.log(data)
   

    if(data.length > 10 || data.length === 0){
        return (
           <>
            <p>Too many Results, please change filter or enter a more specific value</p>
           </>
          )
    }
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
                    
                    <img src={country.flags.png} alt={`flag of ${country.name.common}`}  />

                </div>)}
        </div>
        )


    }
    else{
        return(
            <div>
            {data.map(country => 
                <li key={country.name.common}>
                    {country.name.common}
                </li>)}
        </div>
        )
    }
    
    
  
}

export default DisplayCountries