import CreateAccount from './CreateAccount';
import Login from './Login'
import {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'

function ManageAccount() {
    
    const [user, setUser] = useState(null);
// CORS issue? 
useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, []);


function handleLogin(user) {
  setUser(user);
}

function handleLogout() {
  setUser(null);
}
    
    return(
        <div>
           <p> Manage Account page</p>

           
           <CreateAccount />
           <Route path="/login">
            <Login />
            </Route>
        </div>
    )
}

export default ManageAccount;