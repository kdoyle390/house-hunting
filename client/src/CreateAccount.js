
function CreateAccount({handleCreateAccount}) {

//add code to confirm passwords match - on backend with validations?
    return(
        <form onSubmit={handleCreateAccount}>
            <input type="text" placeholder="First Name" onChange={(e) => console.log(e.target.value)}></input>
            <input type="text" placeholder="Last Name"onChange={(e) => console.log(e.target.value)}></input>
            <input type="email" placeholder="Email address"onChange={(e) => console.log(e.target.value)}></input>
            <input type="text" placeholder="Password"onChange={(e) => console.log(e.target.value)}></input>
            <input type="text" placeholder="Confirm Password"onChange={(e) => console.log(e.target.value)}></input>
            <input type ="submit" placeholder="Submit" ></input>
        </form>
    )

}

export default CreateAccount
