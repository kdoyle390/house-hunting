
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListingCard from "./ListingCard"
import FavoritesListings from './FavoritesListings';
import CreateListing from './CreateListing';



function ListingContainer({ search }){

    const [listings, setListings] = useState([])


    useEffect(() => {
        fetch(`http://localhost:6001/listings`)

        .then(resp => resp.json())
        .then((listings) => {
            setListings(listings)
            console.log(listings)
        })
    }, [])

    const filteredListings = listings.filter(listing => {
        return listing.city.toLowerCase().includes(search.toLowerCase())
    });


    const renderListings = filteredListings.map(listings => {
        return <ListingCard key={listings.id} listings={listings}/>
    })

    function handleFavorites(listingToAdd) {
        const favoriteToAdd = listings.find(
            (listing) => listing.id === listingToAdd.id
        );
        if (!favoriteToAdd) {
            setListings([...setListings, listingToAdd])
        }
    }

    return (
     

        <div id="Listings">
            <BrowserRouter>
            <Switch>
            
            <Route path="/listing/new/my-list">
            {renderListings}
            </Route>

            <Route path="/listing/new/my-favorites">
                <FavoritesListings/>
            </Route>

            <Route path="/listing/new/create-listing">
                <CreateListing/>
            </Route>

            </Switch>
            </BrowserRouter>
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