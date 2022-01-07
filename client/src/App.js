
import {useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Header from './Header'
import ListingContainer from './ListingContainer'
import Footer from './Footer';
import ManageAccount from './ManageAccount';




function App() {

  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/users")
      .then((res) => res.json())
      .then((newUsers) => {setUsers(newUsers)})
  }, [])
  


  function handleSearch(newSearch){
    console.log(newSearch)
    setSearch(newSearch)
  }

  return(
    <div className="App">
      <Header user={user} search={search} onSearch={handleSearch}/>
      <ListingContainer search={search}/>
      <Route path="/account">
        <ManageAccount users={users} setUsers={setUsers} user={user} setUser={setUser} />
      </Route>
      {/* <Footer /> */}

    </div>
  )
}

export default App;
