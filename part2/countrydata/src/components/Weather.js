import {React, useEffect, useState} from 'react'
import axios from 'axios';



const Weather = ({ city}) => {

    const [weather, setWeather] = useState('')
    

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${city}`},
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_WEATHER_KEY
            }
          };
          console.log(options.headers)
        
          axios.request(options).then(function (response) {
            console.log(response.data);
            setWeather(response.data.current)
    
        }).catch(function (error) {
            console.error(error);
        });
       
       
         
       }, [])
       
  
    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>Temperature: {weather.temp_c}C</p>
            {weather.condition ? <img src = {weather.condition.icon} alt='weather icon'/> : ''  }
            <p>Wind:  {weather.wind_kph} km/h</p>
                        
        </div>
      )
  }
  
   


export default Weather