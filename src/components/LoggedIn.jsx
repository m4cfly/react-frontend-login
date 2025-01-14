import React, { useState, useEffect } from "react"
import facade from "../apiFacade"

const URL = "http://localhost:7070/api"

function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState([{ totalPrice: "", firstName: "" }]); // fordi at vi får et array med objekter tilbage fra vores trips/guides/totalprice endpoint
       
    useEffect(() => {
        // facade.fetchData("trips/guides/totalprice", setDataFromServer, "GET", true);
        // console.log(dataFromServer)

        facade.fetchData("trips/guides/totalprice", (data) => {
            setDataFromServer(data);
            console.log(data); // Log the fetched data
        }, "GET", true);

    }, [])
 
    return (
      <div>
        <h2>Data Received from server</h2>
        {dataFromServer ? (
                <>
                    <h3>{dataFromServer[0].totalPrice}</h3>
                    <p>{dataFromServer[0].firstName}</p>
                    {/* Add more fields as needed */}
                </>
            ) : (
                <p>Loading...</p>
            )}
      </div>
    )
  }

    export default LoggedIn;
 