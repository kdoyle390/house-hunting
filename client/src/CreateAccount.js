import { useState } from 'react'
import styled from "styled-components";

function CreateAccount({handleCreateAccount}) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

//add code to confirm passwords match - on backend with validations?
// add functionality to handleCreateAccount that renders a modal that says "Account successfully created. Please Log In, with an "Okay" button to close Modal?
    function handleCreateAccount (e) {
        console.log("handle create account function ran")
    }

// accounts are being created and posted to the db.json file no need to render
function handleSubmit(e) {
    e.preventDefault();
    const newUserData = {
        first_name: firstName,
        last_name: lastName, 
        email: email,
        password: password,
        confirm_password: confirmPassword
    }
    fetch("http://localhost:6001/users", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((r) => r.json())
      .then((user) => handleCreateAccount(user));
           
  }



    return(
        <div>
            <FormStyle>
                <form onSubmit={handleSubmit} className="">
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                    <input type="text" placeholder="Last Name"onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                    <input type="email" placeholder="Email address"onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <input type="text" placeholder="Password"onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    <input type="text" placeholder="Confirm Password"onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                    <button type ="submit" placeholder="Submit" >Submit</button>
                 </form>
            </FormStyle>
        </div>
    )

}

export default CreateAccount

const FormStyle = styled.div`
display: flex;
justify-content: center;
    h2 {
        font-size: 24px;
        margin: 2px;
    }
    form {
        width: 50%;
        height
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

