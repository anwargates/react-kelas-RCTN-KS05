import React, { Component } from "react";

export default class Halu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
    };
  }

  // function ini digunakan untku membatasi keadaan/kejadian apa saja yang bisa mentrigger re-render
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length !== nextState.users.length) {
      return true;
    }
    return false;
  }
}
