import React, { Component } from "react";
import "./App.css";
import ClockClass from "./components/ClockClass";
import ClockFunc from "./components/ClockFunc";

class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          <h1>Realtime Clock</h1>
          <hr />
          <ClockClass />
          <hr />
          <ClockFunc />
        </div>
      </>
    );
  }
}

export default App;