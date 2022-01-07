import { useState } from 'react'
import styled from "styled-components";

function Login({user, setUser, users}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const myUser = users.find((thisUser) => thisUser.username === email);
    if (myUser) {
      if(myUser.password === password) {
        setUser(myUser);
      }
    }
    console.log(myUser) 
    console.log(email)
    console.error("Login failed");  
    
  }

// do we need to add the password to the below function and then validate on the backend?
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (user) return null;
  return(
    <div>
      <FormStyle >
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type ="submit">Login</button>
        </form>
      </FormStyle>
    </div>
  )

}

export default Login;

const FormStyle = styled.div`
display: flex;
justify-content: center;
    h2 {
        font-size: 24px;
        margin: 2px;
    }
    form {
        width: 20%;
        margin: 10px;
        padding: 5px;
        border-radius: 5px;
        background-color: aqua;
        color: black;
        font-weight: bold;
        box-shadow: 7px 7px black;
    }
    label {
        font-size: 16px;
        justify-content: left;
    }
    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 90%;
        height: 20px;
        font-family: arial;
        border-radius: 5px;
        position: relative;
        right: 3px;
        padding: 5px;
    }
    input {
        display: block;
        justify-content: center;
        /* margin: auto; */
        margin: 0px;
        position: relative;
        left: 10px;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
        height: 20px;
        background-color: white;
        padding: 5px;
    }
    #img {
        text-align-last: center;
        margin: auto;
        padding: 5px;
        font-weight: bold;
    }
    button {
        background-color: white;
        border: none;
        color: black;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 5px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }
`