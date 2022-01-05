import { useState } from 'react';
import Search from './Search';
import ViewFavorites from './ViewFavorites';
import Login from './Login';
import CreateAccount from './CreateAccount';


function Header() {
    const [isShown, setIsShown] = useState(false)
    const [logIn, setLogIn] = useState(false)

 

    return(
        <div className='header'>
            Header
            <button id="log-in" onClick={(e)=> setLogIn(!logIn)}>Log In</button>
            {logIn ? (<Login />) : null }
            <button id="create-account" onClick={(e)=> setIsShown(!isShown)}>Create Account</button>
            {isShown ? (<CreateAccount />) : null }
            <Search />
            <ViewFavorites />
            
        </div>

    )
}

export default Header;