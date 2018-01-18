import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Link, Switch, Route } from "react-router-dom";

// Components
import Home from "../Home/Home";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Navigation from "../Navigation/Navigation";

import getPage from "../../services/getPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {}
    };
  }

  fetchData() {
    getPage().then(json => {
      console.log("some page stuff", json);
      console.log("hey baby");

      let pageData = this.state.pageData;

      pageData.p = json[1].p;
      pageData.h1 = json[1].h1;

      this.setState(pageData, () => console.log(this.state));
    });
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/admin"
            render={props => <Admin pageData={this.state.pageData} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
