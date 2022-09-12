import React, { Component } from "react";

export default class ClockClass extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>With Class</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
