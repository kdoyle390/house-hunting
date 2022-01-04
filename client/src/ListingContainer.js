import React, { useState, useEffect } from 'react';
import ListingCard from "./ListingCard"


function ListingContainer(){

    const [listings, setListings] = useState([])


    useEffect(() => {
        fetch(`http://localhost:6001/houses`)
        .then(resp => resp.json())
        .then((listings) => {
            setListings(listings)
        })
    }, [])

    // const filteredListings = listings.filter(listing => {
    //     return listing.//(whatever we want to search by).toLowerCase().includes(search.toLowerCase())
    // });


    const renderListings = listings.map(listings => {
        return <ListingCard key={listings.id} listings={listings}/>
    })

    return (
        <div>
            {renderListings}
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