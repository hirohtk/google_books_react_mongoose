import React from 'react';
import Nav from "./components/nav";
import Search from "./components/search";
import ResultBox from "./components/ResultsBox";
import NoBookBox from "./components/noBooks";
import API from "./utils/API"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

class App extends React.Component {

  state = {
    searchTerm: "",
    results: []
  }

  search = (query) => {
    console.log(`Searching for ${query}...`)
    API.search(query).then((response) => {
      // Setting up a more manageable array in state:
      let cleanResultArray = [];
      for (let i = 0; i < 7; i++) {
        let responseObj = {};
        responseObj.title = response.data.items[i].volumeInfo.title;
        responseObj.authors = response.data.items[i].volumeInfo.authors.join(", ");
        responseObj.description = response.data.items[i].volumeInfo.description;
        responseObj.image = response.data.items[i].volumeInfo.imageLinks.thumbnail;
        responseObj.link = response.data.items[i].volumeInfo.infoLink;
        cleanResultArray.push(responseObj);
      }
      this.setState({results: cleanResultArray}, () => console.log(this.state.results));
      // ... why doesn't this work?  I've done the above instead, but would like to use a callback instead, ideally.
      // this.setState({results: cleanResultArray}).then( (what) => console.log(this.state.results))
    })
    
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
                {
                  (this.state.results.length === 0) ? 
                  <NoBookBox>
                  </NoBookBox> 
                  :
                this.state.results.map( (each) => (
                  <ResultBox
                title={each.title}
                authors={each.authors}
                description={each.description}
                image={each.image}
                link={each.link}>
                </ResultBox>
                )
                )
              }
              <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
