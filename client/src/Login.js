import { useState } from 'react'
import styled from "styled-components";

function Login({handleLogin}) {

// do we need to add the password to the below function and then validate on the backend?
const [email, setEmail] = useState("");
function handleSubmit(e) {
  e.preventDefault();
  fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((r) => r.json())
    .then((user) => handleLogin(user));
}
    return(
        <div>
          <FormStyle >
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" placeholder="Password"onChange={(e) => e.target.value}></input>
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