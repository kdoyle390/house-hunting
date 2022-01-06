
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListingCard from "./ListingCard"
import FavoritesListings from './FavoritesListings';
import CreateListing from './CreateListing';


function ListingContainer(){

    const [listings, setListings] = useState([])

    useEffect( () => {
      fetch(`http://localhost:6001/results`)
        .then(resp => resp.json())
        .then(data => setListings(data));
    },[])

    // const filteredListings = listings.filter(listing => {
    //     return listing.//(whatever we want to search by).toLowerCase().includes(search.toLowerCase())
    // });


    const renderListings = listings.map(listings => {
        return <ListingCard key={listings.id} listings={listings}/>
    })

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