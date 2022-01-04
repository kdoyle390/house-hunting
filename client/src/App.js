import {useState, useEffect } from 'react'
import './App.css';
import Header from './Header'
import ListingContainer from './ListingContainer'

function App() {


  const [listings, setListings] = useState([])

  useEffect( () => {
    fetch(`http://localhost:6001/houses`)
      .then(resp => resp.json())
      .then(data => setListings(data));
  },[])


  return (
    <div className="App">
      <Header />
      <ListingContainer listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;
