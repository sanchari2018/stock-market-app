import React from 'react';
import Home from './Components/Home';
import RouteComponent from './Components/RouteComponent'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/RouteComponent/:id" component={RouteComponent} />
    </Switch>
  </Router>
  );
};

export default App;
