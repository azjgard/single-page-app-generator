import React, { Component } from "react";
import "./Admin.css";

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
  render() {
    return (
      <div>
        <div className="CreatePage">
          <h2>P tag</h2>
          <input type="text" name="p" />
          <h2>H1 tag</h2>
          <input type="text" name="h1" />
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
