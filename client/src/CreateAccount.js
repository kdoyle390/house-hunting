import { useState } from 'react'

function CreateAccount({handleCreateAccount}) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
//add code to confirm passwords match - on backend with validations?

function handleSubmit(e) {
    e.preventDefault();
    const newUserData = {
        firstName: firstName,
        lastName: lastName, 
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    fetch("/login", {
    
      method: "PATCH",
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
            <input type="text" placeholder="First Name" onChange={(e) => console.log(e.target.value)} value={firstName}></input>
            <input type="text" placeholder="Last Name"onChange={(e) => console.log(e.target.value)} value={lastName}></input>
            <input type="email" placeholder="Email address"onChange={(e) => console.log(e.target.value)} value={email}></input>
            <input type="text" placeholder="Password"onChange={(e) => console.log(e.target.value)} value={password}></input>
            <input type="text" placeholder="Confirm Password"onChange={(e) => console.log(e.target.value)} value={confirmPassword}></input>
            <input type ="submit" placeholder="Submit" ></input>
        </form>
    )

}

export default CreateAccount
