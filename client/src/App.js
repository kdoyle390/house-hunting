
import {useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Header'
import ListingContainer from './ListingContainer'
import Login from './Login'



function App() {

  const [user, setUser] = useState(null);

// CORS issue 
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
    <div className="App">
      <Header user={user}  handleLogin={handleLogin} handleLogout={handleLogout} />
      
      <Route path="/login">
      <Login />
      </Route>
      <ListingContainer />
    </div>
  )
}

export default App;
