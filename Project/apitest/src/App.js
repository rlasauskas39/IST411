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
        <input className="text" name="userName" id="userName" onChange={this.myChangeHandler}></input><br/>
        <label for="userCity">City:</label>
        <input className="text" name="userCity" id="userCity" onChange={this.myChangeHandler}></input>
        <br/>
        <button className="button" onClick={this.handleClick}>Click</button>
        <Description description={this.state.description} />
      </div>
    )
  }
}

export default App;