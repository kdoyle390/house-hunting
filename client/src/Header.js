import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Search from './Search';
import ViewFavorites from './ViewFavorites';
import Login from './Login';
import ManageAccount from './ManageAccount'


import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Img from './img/logo.png'



function Header({ search, onSearch, user }) {
    // const [isShown, setIsShown] = useState(false)
    const [logIn, setLogIn] = useState(false)
    const history = useHistory();

    function handleCreateAccount (e) {
        e.preventDefault();
        console.log("handle create account function ran")
    }

    return(
      <>
        <Navbar bg="primary" variant="dark" sticky="top" expand="xxl" >
          <Container className="p-3">
            
            
          <Navbar.Brand href="#home">
          <img
          alt=""
          src={Img}
          width="30"
          height="30"
          className="d-inline-block align-top"
          />
              Flat Iron House Finder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => history.push("/listing/new/my-list")} >Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/account")}>Manage Account</Nav.Link>
            <Nav.Link onClick={() => history.push("/listing/new/create-listing")}>Create Listing</Nav.Link>
            <Nav.Link onClick={() => history.push("/listing/new/my-favorites")}>Favorited Listings</Nav.Link>
          </Nav>

          {user ?  
              <div style={{ color: 'white', paddingRight: "1em" }}> Hello {user.first_name} {user.last_name} </div> 
              : null
            }
          </Container>
        </Navbar>

        
      </>

    )
}

export default Header;