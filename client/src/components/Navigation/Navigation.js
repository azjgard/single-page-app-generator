import React, { Component } from "react";
import "./Navigation.css";

import { Link, Switch, Route } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    );
  }
}

export default Navigation;
