import React, { Component } from "react";

export default class ExchangeRates extends Component {
  constructor() {
    super();
    this.state = [
      {
        name: null,
        buy: null,
        exc: null,
        sell: null,
      },
    ];
  }
}
