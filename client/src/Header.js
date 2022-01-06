import { useState } from 'react';
import Search from './Search';
import ViewFavorites from './ViewFavorites';
import Login from './Login';
import CreateAccount from './CreateAccount';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Img from './img/logo.png'



function Header() {
    const [isShown, setIsShown] = useState(false)
    const [logIn, setLogIn] = useState(false)

    function handleCreateAccount (e) {
        e.preventDefault();
        console.log("handle create account function ran")
    }

    return(
        // <div className='header'>
        //     Header
        //     <button id="log-in" onClick={(e)=> setLogIn(!logIn)}>Log In</button>
        //     {logIn ? (<Login />) : null }
        //     <button id="create-account" onClick={(e)=> setIsShown(!isShown)}>Create Account</button>
        //     {isShown ? (<CreateAccount handleCreateAccount={handleCreateAccount} />) : null }
        //     <Search />
        //     <ViewFavorites />
            
        // </div>
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
          />{' '}
              Flat Iron House Finder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listing/new/my-list">See All Listings</Nav.Link>
            <Nav.Link href="/listing/new/create-listing">Create Listing</Nav.Link>
            <Nav.Link href="/listing/new/my-favorites">Favorited Listings</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>

    )
}

export default Header;
