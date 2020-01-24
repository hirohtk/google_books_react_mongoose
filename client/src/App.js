import React from 'react';
import Nav from "./components/nav";
import Search from "./components/search";
import ResultBox from "./components/ResultsBox";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

class App extends React.Component {

  state = {

  }

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
            <Search></Search>
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
