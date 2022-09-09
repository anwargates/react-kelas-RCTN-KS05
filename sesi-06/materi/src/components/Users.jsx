import React, { Component } from "react";


// Statefull Component
export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
    };
  }

  render() {
    return <div>{this.state.username}</div>;
  }
}
