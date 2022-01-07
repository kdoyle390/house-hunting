import { useState } from 'react'
import ViewFavorites from './ViewFavorites'
import ListingCard from './ListingCard';

function FavoritesListings( {listings, toggleFavorite} ) {

    const filteredListings = listings.filter(({ favorite }) => favorite)

    return(
        <div>
        {
            filteredListings.map(listing => <ListingCard key={listing.id} listing={listing} onFavorite={toggleFavorite}/>)
        }
        </div>
    )

}

export default FavoritesListings;