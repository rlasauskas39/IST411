import React, {Component} from 'react';
import Description from './components/desc';
import './index.css'
import './my-style.css';

class App extends Component{
  constructor(){
    super()

    // Needed for clicking buttons to run a method
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleClickRandom = this.handleClickRandom.bind(this)
    this.handleClickId = this.handleClickId.bind(this)
    
    //All state variables that I need, holds data returned from API, error information, and information provided by the user
    this.state = {
      description: [],
      userName: "",
      userState: "",
      userCity: "",
      userType: "",
      userId: "",
      inputError: ""
    }
  }
  
  //Change handler to automatically change the state variables to be updated when a text box is filled in or a dropdown option is selected
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  //Method to do the filtered search on the database
  handleClickSearch(){
    //Parameters for the API call that will be used to filter
    let name = "&by_name=" + this.state.userName
    let city = "&by_city=" + this.state.userCity
    let state = "&by_state=" + this.state.userState
    let type = "&by_type=" + this.state.userType

    //Make the API call with all necessary filters implemented
    fetch("https://api.openbrewerydb.org/breweries?per_page=50" + city + name + state + type)
    .then(res => res.json())
    .then((data) => {

      //Sets the state of the array of JSON objects to read later on, and the error value so that the error is not displayed
      this.setState({description: data})
      this.setState({inputError: ""})
    })
  }

  //Method for the random search
  handleClickRandom(){
    //Random number between 8034 and 15895 to use in the API call
    let id = parseInt((Math.random() * 7861) + 8034);

    //Makes the API call with the random ID number
    fetch("https://api.openbrewerydb.org/breweries/" + id)
    .then(res => res.json())
    .then((data) => {

      //Sets the state to the JSON and places in an array so that the .map works in desc.js, and sets the error value to nothing so the error is not displayed
      this.setState({description: [data]})
      this.setState({inputError: ""})
    })
  }

  //Method for the ID search
  handleClickId(){
    //Variable to hold the ID chosen by the user
    let id = this.state.userId;

    //Ensures the ID number is an integer not a string
    parseInt(id);

    //Checks to see if the chosen ID number falls within the acceptable range, if not then the error is given a statement so it will show on the screen. If it is within the range it will make the API call and return the JSON
    if(id < 8034 || id > 15895){
      this.setState({inputError: "Invalid input. Please enter a value within the range 8034-15895"});
    } else {
      //Makes the API call with chosen ID number
      fetch("https://api.openbrewerydb.org/breweries/" + id)
      .then(res => res.json())
      .then((data) => {

        //Sets state variables to the returned data and a no error response
        this.setState({description: [data]})
        this.setState({inputError: ""})
      })
    }
  }  
  
  render(){
    return(
      <div className="container">
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
              <h2 class="navbar-brand">Brewery Finder</h2>
            </div>
        </nav>
        <header class="masthead text-white text-center">
          <div class="overlay"></div>
            <div class="container">
              <div class="col-xl-9 mx-auto"><h1 class="mb-5"><span class="mast-title">Find Your Next Favorite Brewery Now!</span></h1></div>
                <div class="row">
                    
                  <div class="col-lg-3">
                    <div class="mx-auto mb-lg-0">
                      <label for="userName">Name:</label><br />
                      <input type="text" class="main-text" name="userName" id="userName" placeholder="Search by Name" onChange={this.myChangeHandler}></input>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="mx-auto mb-lg-0">
                      <label for="userCity">City:</label><br />
                      <input type="text" class="main-text" name="userCity" id="userCity" placeholder="Search by City" onChange={this.myChangeHandler}></input>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="mx-auto mb-lg-0">
                      <label for="userType">Type: </label><br />
                      <select id="userType" name="userType" onChange={this.myChangeHandler}>
                        <option value="">Search by Type</option>
                        <option value="micro">Micro</option>
                        <option value="nano">Nano</option>
                        <option value="regional">Regional</option>
                        <option value="brewpub">Brewpub</option>
                        <option value="large">Large</option>
                        <option value="planning">Planning</option>
                        <option value="bar">Bar</option>
                        <option value="contract">Contract</option>
                        <option value="proprietor">Proprietor</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="mx-auto mb-lg-0">
                      <label for="userState">State: </label><br />
                      <select id="userState" name="userState" onChange={this.myChangeHandler}>
                        <option value="">Search by State</option>
                        <option value="alabama">Alabama</option>
                        <option value="alaska">Alaska</option>
                        <option value="arizona">Arizona</option>
                        <option value="arkansas">Arkansas</option>
                        <option value="california">California</option>
                        <option value="colorado">Colorado</option>
                        <option value="connecticut">Connecticut</option>
                        <option value="delaware">Delaware</option>
                        <option value="florida">Florida</option>
                        <option value="georgia">Georgia</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="idaho">Idaho</option>
                        <option value="illinois">Illinois</option>
                        <option value="indiana">Indiana</option>
                        <option value="iowa">Iowa</option>
                        <option value="kansas">Kansas</option>
                        <option value="kentucky">Kentucky</option>
                        <option value="louisiana">Louisiana</option>
                        <option value="maine">Maine</option>
                        <option value="maryland">Maryland</option>
                        <option value="massachusetts">Massachusetts</option>
                        <option value="michigan">Michigan</option>
                        <option value="minnesota">Minnesota</option>
                        <option value="mississippi">Mississippi</option>
                        <option value="missouri">Missouri</option>
                        <option value="montana">Montana</option>
                        <option value="nebraska">Nebraska</option>
                        <option value="nevada">Nevada</option>
                        <option value="new_hampshire">New Hampshire</option>
                        <option value="new_jersey">New Jersey</option>
                        <option value="new_mexico">New Mexico</option>
                        <option value="new_york">New York</option>
                        <option value="north_carolina">North Carolina</option>
                        <option value="north_dakota">North Dakota</option>
                        <option value="ohio">Ohio</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="oregon">Oregon</option>
                        <option value="pennsylvania">Pennsylvania</option>
                        <option value="rhode_island">Rhode Island</option>
                        <option value="south_carolina">South Carolina</option>
                        <option value="south_dakota">South Dakota</option>
                        <option value="tennessee">Tennessee</option>
                        <option value="texas">Texas</option>
                        <option value="utah">Utah</option>
                        <option value="vermont">Vermont</option>
                        <option value="virginia">Virginia</option>
                        <option value="washington">Washington</option>
                        <option value="west_virginia">West Virginia</option>
                        <option value="wisconsin">Wisconsin</option>
                        <option value="wyoming">Wyoming</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-xl-9 mx-auto">
                  <button className="bg-primary" onClick={this.handleClickSearch}>Find Breweries</button>
                </div>

                <div class="col-xl-9 mx-auto">
                  <button className="btn-random" onClick={this.handleClickRandom}>Random Brewery</button>
                </div>

                <div class="col-xl-9 mx-auto">
                  <input type="text" class="id-text" name="userId" id="userId" placeholder="8034-15895" onChange={this.myChangeHandler}></input>
                  <button className="bg-primary" onClick={this.handleClickId}>Search by ID</button>
                </div>

                <div class="col-xl-9 mx-auto error-display">
                  <p>{this.state.inputError}</p>
                </div>
            </div>
        </header>

        <Description description={this.state.description} />

        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><p>Credit to Open Brewery DB by Chris J Mears</p></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">Page Created by Ryan Lasauskas</p>
                    </div>  
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default App;