
import './App.css';
import { useState, useEffect } from 'react'

import axios from 'axios'
import Search from './components/Search';
import DisplayCountries from './components/DisplayCountries';

function App() {

  const [searchTerm, setSearchTerm] = useState ()
  const [initialData, setInitialData] = useState ([])
  const [countries, setCountries] = useState ([])

  useEffect(() => {
    console.log('fetch from API')
    axios.get('https://restcountries.com/v3.1/all')
        .then(res => {
          setInitialData(res.data)
        })
   
  }, [])

  useEffect(() => {
    console.log('filter change')
    setCountries(initialData.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase())))

   
  }, [searchTerm])

  

  const filterCountries = (event) => {
    setSearchTerm(event.target.value)
    
  }

  const filterByUserSelection = (selection) => {
    setSearchTerm(selection)
    
  }

  
  
  //console.log(countries)
  return (
    <div className="App">
        <Search  value={searchTerm} onChange={filterCountries} />
        <DisplayCountries data = {countries} userSelection={filterByUserSelection}  />
    </div>
  );
}

export default App;
