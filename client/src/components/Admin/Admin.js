import React, { Component } from "react";
import "./Admin.css";

import getPage from "../../services/getPage";

/*

{
  url: '/dfgndfg/dfgjndfgn',
  template: 'default',
  data: {
    p: 'dfgjndkfjngfdg',
    h1: 'dfgdnfgkjdnfgnkjdf'
  }
}

*/

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p: this.props.pageData.p,
      h1: this.props.pageData.h1
    };
  }

  handleChange(e) {
    const name = e.currentTarget.name;
    let obj = {};
    obj[name] = e.currentTarget.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <div className="CreatePage">
          <h2>P tag</h2>
          <input
            type="text"
            name="p"
            value={this.state.p}
            onChange={this.handleChange.bind(this)}
          />
          <h2>H1 tag</h2>
          <input
            type="text"
            name="h1"
            value={this.state.h1}
            onChange={this.handleChange.bind(this)}
          />
          <button
            onClick={() => {
              // do some cool stuff
              console.log("just sumbitted that ish");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Admin;
