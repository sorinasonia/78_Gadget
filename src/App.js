import React from 'react';
// import logo from './logo.svg';
import './App.css';
const axios = require('axios');

let data = []

function App() {

  function GetCoronaInfo(items)
  {

    console.log("ITEM IS", items.items);

    return null
    // listItems = c.map((item) =>
    //   <li key={item.CountryCode}>{item.Country}</li>
    // );

    // return (
    //   <h4>{listItems}</h4>
    // );
    
  }

  function getDataFromApi()
  {
    axios.get("https://api.covid19api.com/summary").then(function (response) {
      data = response.data.Countries;
    }).catch(function (error) {

      console.log("API RESPONSE ERROR", error);
    })
  }

  getDataFromApi()

  return (

    <div className="body">
   
      <h2 className="title">Below Are Corovic19 update in the world</h2>

     <div className="subHeader">
      <h2 className="h2">Country</h2>
      <h2 className="h2">Confirmed Cases</h2>
      <h2 className="h2">Recovered</h2>
      <h2 className="h2">Death</h2>
     </div>


      <div className="contentBody">
        <GetCoronaInfo items={data}/>
      </div>

    </div>
  );
}

export default App;

