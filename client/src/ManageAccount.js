import CreateAccount from './CreateAccount';
import Login from './Login'
import { useState} from 'react'
import {Route} from 'react-router-dom'

function ManageAccount({ user, setUser, users, setUsers }) {
    return(
        <div>
           <CreateAccount user={user} setUsers={setUsers} setUsers={setUsers} setUser={setUser} />
           <h3 style={{ paddingTop: "1em"}}>Or Login Below</h3>
            <Login user={user} users={users} setUser={setUser}/>
        </div>
    )
}

export default ManageAccount;