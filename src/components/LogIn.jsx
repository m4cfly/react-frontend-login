import React, { useState,useEffect } from "react"
import facade from "../apiFacade";


function LogIn({login, setLoggedIn}) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(loginCredentials.username, loginCredentials.password).then(() => { 
        // console.log("Logged in")});
        setLoggedIn(true); // Vi sætter loggedIn til true, så vi kan se at vi er logget ind
    })
    }
  
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value }); {/* vi spreader loginCredentials, og sætter value ind for hvert id */}
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={performLogin}>
        <input placeholder="User Name" id="username" onChange={onChange} value={loginCredentials.username} />
        <input placeholder="Password" id="password" onChange={onChange} value={loginCredentials.password} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default LogIn;
