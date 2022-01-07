import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Search from './Search';
import ViewFavorites from './ViewFavorites';
import Login from './Login';
import ManageAccount from './ManageAccount'


import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Img from './img/logo.png'



function Header({ search, onSearch }) {
    // const [isShown, setIsShown] = useState(false)
    const [logIn, setLogIn] = useState(false)
    const history = useHistory();

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
        //     <Search search={search} onSearch={onSearch}/>
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
    <Nav.Link onClick={() => history.push("/")} >Home</Nav.Link>
    <Nav.Link onClick={() => history.push("/account")}>Manage Account</Nav.Link>
    <Nav.Link onClick={() => history.push("/listing/new/my-list")}>See All Listings</Nav.Link>
    <Nav.Link onClick={() => history.push("/listing/new/create-listing")}>Create Listing</Nav.Link>
    <Nav.Link onClick={() => history.push("/listing/new/my-favorites")}>Favorited Listings</Nav.Link>
  </Nav>
  </Container>
</Navbar>
</>

    )
}

export default Header;