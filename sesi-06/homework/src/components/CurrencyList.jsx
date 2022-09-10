import React, { Component } from "react";

export default class CurrencyList extends Component {
  constructor() {
    super();
    this.state = {
      currency: ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"],
    };
  }
}
