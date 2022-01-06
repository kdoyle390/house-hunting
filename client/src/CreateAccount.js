import { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
            <input type="text" placeholder="Last Name"onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
            <input type="email" placeholder="Email address"onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <input type="text" placeholder="Password"onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <input type="text" placeholder="Confirm Password"onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
            <input type ="submit" placeholder="Submit" ></input>
        </form>
    )

}

export default CreateAccount
