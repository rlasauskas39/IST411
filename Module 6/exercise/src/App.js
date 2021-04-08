import React from 'react';
import './index.css';

class Survey extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "None Submitted",
      gender: "None Submitted",
      familiar: "None Submitted",
      predict: "None Submitted",
      players: "None Submitted"
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    alert("The Following Has Been Submitted: \r\n" +
    "   Name:                 " + this.state.name + "\n" +
    "   Gender:               " + this.state.gender + "\n" +
    "   Familiarity:          " + this.state.familiar + "\n" +
    "   Prediction:          " + this.state.predict + "\n" +
    "   Favorite players: " + this.state.players + "\n");
  }

  render(){
    return(
      <div class="container">
        <header class="header">
          <h1 id="title" class="text-center">NFL Football Survey</h1>
          <p id="descRequired" class="description text-center">* = required field</p><br/><br/><br/>
        </header>
        <form id="survey-form" onSubmit={this.mySubmitHandler}>
          <div class="form-group">
            <h1 id="nameTitle" class="text-center">Name   *</h1>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Enter Name Here"
              onChange={this.myChangeHandler}
              required
            />
          </div>

          <div class="form-group">
            <h1 id="genderTitle" class="text-center">Gender</h1>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                class="input-radio"
                onChange={this.myChangeHandler}
              />Male</label
            ><br/>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                class="input-radio"
                onChange={this.myChangeHandler}
              />Female</label
            ><br/>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                class="input-radio"
                onChange={this.myChangeHandler}
              />Other</label
            ><br/><br/>
          </div>

          <div class="form-group">
            <h1 id="famTitle" class="text-center">Familiarity with NFL Football</h1>
            <label>
              <input
                type="radio"
                name="familiar"
                value="unfamiliar"
                class="input-radio"
                onChange={this.myChangeHandler}
              />1</label
            ><br/>
            <label>
              <input
                type="radio"
                name="familiar"
                value="subpar"
                class="input-radio"
                onChange={this.myChangeHandler}
              />2</label
            ><br/>
            <label>
              <input
                type="radio"
                name="familiar"
                value="normal"
                class="input-radio"
                onChange={this.myChangeHandler}
              />3</label
            ><br/>
            <label>
              <input
                type="radio"
                name="familiar"
                value="above"
                class="input-radio"
                onChange={this.myChangeHandler}
              />4</label
            ><br/>
            <label>
              <input
                type="radio"
                name="familiar"
                value="extreme"
                class="input-radio"
                onChange={this.myChangeHandler}
              />5</label
            ><br/><br/>
          </div>

          <div class="form-group">
            <h1 id="predictTitle" class="text-center">Prediction for Winner of Superbowl LV</h1>
            <select id="prediction" name="predict" class="form-control" onChange={this.myChangeHandler}>
              <option value="None Selected">Select A Winner</option>
              <option value="tb">Tampa Bay Buccaneers</option>
              <option value="kc">Kansas City Chiefs</option>
            </select>
          </div>

          <div class="form-group">
            <h1 id="playersTitle" class="text-center">Favorite Player(s)</h1>
            <textarea
              name="players"
              class="input-textarea"
              cols="100"
              rows="5"
              placeholder="Here"
              onChange={this.myChangeHandler}>
            </textarea><br/><br/>
          </div>

          <div class="form-group">
            <button type="submit" id="submit" class="submit-button">
              Submit
            </button><br/><br/>
          </div>
        </form>
        
      </div>
    );
  }
}


export default Survey;