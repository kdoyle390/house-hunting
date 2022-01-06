import { useState } from 'react';
import Search from './Search';
import ViewFavorites from './ViewFavorites';
import Login from './Login';
import CreateAccount from './CreateAccount';


function Header({handleLogin, handleLogout, user}) {
    const [isShown, setIsShown] = useState(false)
    const [logIn, setLogIn] = useState(false)

 

    return(
        <div className='header'>
            Header
            <div>
            {/* {user ? (<p>Welcome, {user}!</p>) : (<p>Please login</p>)}
            <button id="log-in" onClick={(e)=> setLogIn(!logIn)}>Log In</button>
            {logIn ? (<Login handleLogin={handleLogin} />) : null } */}
            <button id="create-account" onClick={(e)=> setIsShown(!isShown)}>Create Account</button>
            {isShown ? (<CreateAccount />) : null }
            <Search />
            <ViewFavorites />
            </div>
            
        </div>

    )
}

export default Header;