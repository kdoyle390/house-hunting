
function Login() {


    return(
        <>
            <form>
                <input type="text" placeholder="Email" onChange={(e) => e.target.value}></input>
                <input type="text" placeholder="Password"onChange={(e) => e.target.value}></input>
                <input type ="submit"></input>
            </form>
        </>
    )

}

export default Login;