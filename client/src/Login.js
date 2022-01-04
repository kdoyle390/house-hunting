
function Login() {


    return(
        <>
            <form>
                <input type="text" placeholder="Email" onChange={(e) => e.target.value}></input>
                <input type="text" placeholder="Password"></input>
                <input type ="submit" placeholder="Submit"></input>
            </form>
        </>
    )

}

export default Login;