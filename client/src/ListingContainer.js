
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListingCard from "./ListingCard"
import FavoritesListings from './FavoritesListings';
import CreateListing from './CreateListing';



function ListingContainer({ search }){

    const [listings, setListings] = useState([])
    console.log(listings)


    useEffect(() => {
        fetch(`http://localhost:6001/listings`)

        .then(resp => resp.json())
        .then((listings) => {
            setListings(listings)
        })
    }, [])

    const filteredListings = listings.filter(listing => {
        return listing.city.toLowerCase().includes(search.toLowerCase())
    });


    function toggleFavorite(listingToAdd) {
        setListings((listings) => {
            const listingIndex = listings.findIndex(
                (listing) => 
                    listing.id === listingToAdd.id
            );
            return [
                ...listings.slice(0, listingIndex),
                {
                    ...listingToAdd,
                    favorite: !listingToAdd.favorite,
                },
                ...listings.slice(listingIndex + 1)
            ]
        })
    }

    return (
     

        <div id="Listings">
            <Switch>
            
            <Route path="/listing/new/my-list">
            {
                filteredListings.map(listing => <ListingCard key={listing.id} listing={listing} onFavorite={toggleFavorite}/>)
            }
            </Route>

            <Route path="/listing/new/my-favorites">
                <FavoritesListings/>
            </Route>

            <Route path="/listing/new/create-listing">
                <CreateListing/>
            </Route>

            </Switch>
        </div>


    )
}

export default ListingContainer;






// function ListingContainer () {

//     const [listings, setListings] = useState([])

//     useEffect( () => {
//       fetch(`http://localhost:6001/results`)
//         .then(resp => resp.json())
//         .then(data => setListings(data));
//     },[])

//     return(
//         <ListingCard listings={listings} setListings={setListings}/>
//     )
// }

// export default ListingContainer;