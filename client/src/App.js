import React from 'react';
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import PageNotFound from "./components/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route component={PageNotFound} />
          {/* <Route exact path="/books" component={Books} />
    <Route exact path="/books/:id" component={Detail} />
    <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
