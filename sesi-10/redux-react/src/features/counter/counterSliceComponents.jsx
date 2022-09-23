import { Component } from "react";
import { Connect } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

class CounterClass extends Component {
  state = {
    incrementAmount: 0,
  };

  setIncrementAmount = (val) => {
    this.setState({
      incrementAmount: Number(val) || 0,
    });
  };
}
