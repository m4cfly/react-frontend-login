import React, { useState } from 'react'
import LogIn from './components/LogIn'
import LoggedIn from './components/LoggedIn'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Vi sætter loggedIn til false, så vi ikke er logget ind - vi bruger setLoggedIn til at ændre loggedIn til true, når vi logger ind

  const logout = () => { /*TODO*/ } 
  const login = (user, pass) => {

  }

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} setLoggedIn={setLoggedIn} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
          
        </div>)}
    </div>
  )
}
export default App
