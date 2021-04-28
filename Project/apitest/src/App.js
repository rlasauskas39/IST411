import React, {Component} from 'react';
import Description from './components/desc';

class App extends Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    description: [],
    userName: "",
    userState: "",
    userCity: "",
    userType: ""
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleClick(){
    let name = "&by_name=" + this.state.userName
    let city = "&by_city=" + this.state.userCity
    let state = "&by_state=" + this.state.userState
    let type = "&by_type=" + this.state.userType

    fetch("https://api.openbrewerydb.org/breweries?per_page=50" + city + name + state + type)
    .then(res => res.json())
    .then((data) => {
      this.setState({description: data})
    })
    .catch(console.log)
    alert(city + name)
  }

  render(){
    return(
      <div className="container">
        <label for="userName">Name:</label>
        <input className="text" name="userName" id="userName" onChange={this.myChangeHandler}></input>
        <br/>

        <label for="userCity">City:</label>
        <input className="text" name="userCity" id="userCity" onChange={this.myChangeHandler}></input>
        <br/>

        <label for="userType">Type: </label>
        <select id="userType" name="userType" onChange={this.myChangeHandler}>
            <option value="">Select A Type</option>
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
          </select><br/>

        <label for="userState">State: </label>
        <select id="userState" name="userState" onChange={this.myChangeHandler}>
          <option value="">Select a State</option>
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
        </select><br/>
        <button className="button" onClick={this.handleClick}>Click</button>
        <Description description={this.state.description} />
      </div>
    )
  }
}

export default App;