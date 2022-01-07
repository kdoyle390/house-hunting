
import React, { useState } from 'react';
import styled from "styled-components";


function ListingCard({ listing, onFavorite, handleDeletedListing }) {
  const { id, favorite, address, house_img, rent, city, state, square_feet, num_beds, num_baths }= listing
  
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(() => handleDeletedListing(id))
}

  return (
    <ListingStyle>
    <div>
      <div>
        <img
          src={house_img} alt='houseimage' width="500" height="400"/>
        <div>
          <h4>{address}, {city}, {state}</h4>
          <h4>Sq. ft: {square_feet}</h4>
          <h4>Bed/Bath: {num_beds}/{num_baths}</h4>
          <h5>Rent: ${rent}/month</h5>
        </div>
      </div>
      <button onClick={() => onFavorite(listing)} className={`emoji-button favorite ${favorite  ? "active" : ""}`}>
        {favorite ? "★" : "☆"}
      </button>
      <div>
        <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
    </div>
    </div>
    
    </ListingStyle>
  );
}

export default ListingCard;

const ListingStyle = styled.div`
  border: 4px solid black;
  position: relative;
  margin: 20px;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 10px;
  padding: 7px;
  box-shadow: 10px 10px lightblue;
  background: white;
`;

