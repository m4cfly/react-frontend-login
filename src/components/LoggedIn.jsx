import React, { useState, useEffect } from "react"
import facade from "../apiFacade"

//local URL
//const URL = "http://localhost:7070/api"
const URL = "https://api.pizzas.bytecode.dk/api"


function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState([{ id: "", pizzaName: "", quantity: "", price: "", done: "", user: {username:"", password: "",}}]); // fordi at vi får et array med objekter tilbage fra vores trips/guides/totalprice endpoint
       
    useEffect(() => {
        //facade.fetchData("pizza-orders/", setDataFromServer, "GET", true);
        //console.log(dataFromServer)

        facade.fetchData("pizza-orders/", (data) => {
            setDataFromServer(data);
            console.log(data); // Log the fetched data
        }, "GET", true);

    }, [])
 
    return (
      <div>
        <h2>Data Received from Pizza API Server</h2>
        {dataFromServer ? (
                <>
                    <h1>Hello </h1>
                    <h2>Your Order Number is # {dataFromServer[0].id}</h2>
                    <h3>You ordered = {dataFromServer[0].quantity}  x  {dataFromServer[0].pizzaName}</h3>
                    <p> </p>
                    <h2>Total Price = {dataFromServer[0].price}</h2>




                    {/* Add more fields as needed */}
                </>
            ) : (
                <p>Loading...</p>
            )}
      </div>
    )
  }


    export default LoggedIn;
 