import React from 'react'
import '../src/App.css';

import { Lines } from 'react-preloaders';
const axios = require('axios');

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showLoader: true
        };
    }

    componentDidMount()
    {
        console.log("Component Mounted");
        this.getDataFromApi();
    }

    componentDidUpdate()
    {
        // console.log("Component Updated", this.state.data);
    }

    GetCoronaInfo(items) {

        const itemsList = items.items;
        const listItems = itemsList.map((item) =>
            <div className='contentParent' key={item.CountryCode}>
                <h4 className="h4"> {item.Country}</h4>
                <h4 className="h4">{item.TotalConfirmed}</h4>
                <h4 className="h4">{item.TotalRecovered}</h4>
                <h4 className="h4">{item.TotalDeaths}</h4>
            </div>
        );

        return (
            listItems
        );
    }

    getDataFromApi() {
        axios.get("https://api.covid19api.com/summary").then((response) => {
            // console.log("API RESPONSE SUCCESS", response.data.Countries.length);


            this.setState({ data: response.data.Countries, showLoader: false})

        }).catch(function (error) {
            console.log("API RESPONSE ERROR", error);
        })
    }
    showLoader
    render()
    {
        return <div className="body">
            {
              this.state.showLoader ? <Lines style time={500000}/> : <div>
              <h2 className="title">Below Are Corovic19 update in the world</h2>
  
                  <div className="subHeader">
                  <h2 className="h2">Country</h2>
                  <h2 className="h2">Confirmed Cases</h2>
                  <h2 className="h2">Recovered</h2>
                  <h2 className="h2">Death</h2>
                  </div>
  
                  <div className="contentBody">
                  <this.GetCoronaInfo items={this.state.data} />
                  </div>
  
              </div>
              
            }
        </div>
    }

}

export default Home