import React from 'react';
import Nav from "./components/nav";
import Search from "./components/search";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
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
      </div>
    </div>
  );
}

export default App;
