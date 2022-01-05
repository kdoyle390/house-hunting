
import {useState, useEffect } from 'react'

import './App.css';
import Header from './Header'
import ListingContainer from './ListingContainer'

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }


  return(
    <div className="App">
      <Header />
      
      <ListingContainer />
     

    </div>
  )
}

export default App;
