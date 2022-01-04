import { useState } from 'react'

function Login() {
//pass down an onLogin function - but from where?
function onLogin() {
    console.log("onLogin function ran")
}

const [username, setUsername] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  })
    .then((r) => r.json())
    .then((user) => onLogin(user));
}
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input type="text" placeholder="Password"onChange={(e) => e.target.value}></input>
                <button type ="submit">Login</button>
            </form>
        </>
    )

}

export default Login;