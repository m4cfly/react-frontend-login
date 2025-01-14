const URL = "http://localhost:7070/api";

function handleHttpErrors(res) {
if (!res.ok) {
  return Promise.reject({ status: res.status, fullError: res.json() })
}
return res.json();
}

function apiFacade() {
/* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/
   
const login = (user, password) => { const options = makeOptions("POST", false, {username: user, password: password });
return fetch(URL + "/auth/login/", options) // Vi fetcher vores URL + /auth/login/ - HUSK AT SKRIVE UNDERROUTE EFTER URL HER!!!
    .then(handleHttpErrors) // Vi får et promise/token tilbage, hvis vi ikke får forkerte statuskoder
    .then(res => {setToken(res.token) })
    
}

const fetchData = (urlPath, callback, method, addToken, body) => {
  const options = makeOptions(method, addToken, body);
  return fetch(URL + "/" + urlPath, options)
  .then(handleHttpErrors)
  .then(data => {
    callback(data);
  })

  
}
const makeOptions= (method,addToken,body) =>{ {/* addToken er en boolean */  }
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: 'application/json',
    }
  }
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Baerer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}
const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
const getToken = () => {
  return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
}

return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData
}
}
const facade = apiFacade();
export default facade;
