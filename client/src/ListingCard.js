//import React, { useState, useEffect } from 'react';
import styled from "styled-components";


function ListingCard({ listings: { address, house_img, rent } }) {
  return (
    <ListingStyle>
    <div>
      <div>
        <img
          src={house_img} alt='houseimage' width="500" height="400"/>
        <div>
          <h4>{address}</h4>
          <h5>Rent: {rent}</h5>
        </div>
      </div>
      <p>♡</p>
    </div>
    </ListingStyle>
  );
}

export default ListingCard;

const ListingStyle = styled.div`
  border: 3px solid black;
  position: relative;
  margin: 15px;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 70px;
  padding: 7px;
  box-shadow: 10px 10px grey;
  background: white;
`;
