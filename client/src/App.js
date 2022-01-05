
import {useState, useEffect } from 'react'

import './App.css';
import Header from './Header'
import ListingContainer from './ListingContainer'

function App() {

  const [search, setSearch] = useState("")

  function handleSearch(newSearch){
    console.log(newSearch)
    setSearch(newSearch)
  }


  // const [listings, setListings] = useState([])


  // useEffect( () => {
  //   fetch(`http://localhost:6001/listings`)
  //     .then(resp => resp.json())
  //     .then(data => setListings(data));
  // })

  return(
    <div className="App">
      <Header search={search} onSearch={handleSearch}/>
      <ListingContainer search={search}/>
     

    </div>
  )
}

export default App;
