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
        <h1>{templateData.h1}</h1>
        <p>{templateData.p}</p>
        <p>{calculated}</p>
      </div>
    );
  }
}

export default Admin;
