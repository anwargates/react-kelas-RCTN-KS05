import React, { Component } from "react";

export default class ExchangeRates extends Component {
  constructor() {
    super();
    this.state = [
      {
        name: "1234",
        exch: "1234",
        buy: "1234",
        sell: "1234",
      },
    ];
  }

  addData(val) {
    this.setState(val);
    console.log(this.state);
  }

  getStateArray() {
    return this.state;
  }
}
