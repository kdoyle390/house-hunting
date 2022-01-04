import { useState } from 'react';
import Search from './Search';
import Favorites from './Favorites';
import Login from './Login';
import CreateAccount from './CreateAccount';

// add state and a button that says "Create account" when click the create account component toggles
function Header() {
    const [isShown, setIsShown] = useState(false)



    return(
        <div className='header'>
            Header
            <Login />
            <button id="create-account" onClick={(e)=> setIsShown(!isShown)}>Create Account</button>
            {isShown ? (<CreateAccount />) : null }
            <Search />
            <Favorites />
            
        </div>

    )
}

export default Header;