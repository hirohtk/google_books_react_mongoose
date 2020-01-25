import React from 'react';
import Nav from "./components/nav";
import Search from "./components/search";
import ResultBox from "./components/ResultsBox";
import NoBookBox from "./components/noBooks";
import AxiosAPI from "./utils/AxiosAPI";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          {/* <Route exact path="/books" component={Books} />
    <Route exact path="/books/:id" component={Detail} />
    <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
