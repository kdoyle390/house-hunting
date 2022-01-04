import ListingCard from './ListingCard'
import { useState, useEffect } from 'react'

function ListingContainer () {

    const [listings, setListings] = useState([])

    useEffect( () => {
      fetch(`http://localhost:6001/houses`)
        .then(resp => resp.json())
        .then(data => setListings(data));
    },[])

    const showListings = listings.map(listing => <ListingCard listing={listing} setListings={setListings}/>)

    return(
        <div>
            {showListings}
        </div>
    )
}

export default ListingContainer;