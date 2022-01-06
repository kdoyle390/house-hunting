import { useState } from 'react'

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
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" placeholder="Password"onChange={(e) => e.target.value}></input>
                <button type ="submit">Login</button>
            </form>
        </>
    )

}

export default Login;