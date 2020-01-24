import React from 'react';
import Nav from "./components/nav";
import Search from "./components/search";
import ResultBox from "./components/ResultsBox";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

class App extends React.Component {

  state = {

  }

  search = (query) => {
    console.log(`Searching for ${query}...`)
  }

  // the onChange JS handler that's in the form triggers this method below, which changes state every time a key is pressed
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`name is ${name}`)
    console.log(`value is ${value}`)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <div className="staticJumbotron col s12">
              <h3>(React) Google Books Search</h3>
              <h4>Search for and Save Books of interest!</h4>
            </div>
            <Search
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            value={this.searchTerm}
            >
            </Search>
          </div>
          <div className="row">
            <div className="results">
              <h3>Results</h3>
              <div>
                <ResultBox>
                </ResultBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
