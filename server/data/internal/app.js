import React, { Component } from "react";

import { Link, Switch, Route } from "react-router-dom";

###components###

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          ###routes###
        </Switch>
      </div>
    );
  }
}

export default App;
