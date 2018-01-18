import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Link, Switch, Route } from "react-router-dom";

// Components
import Home from "../Home/Home";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Navigation from "../Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
