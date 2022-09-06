import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: ''
        }
    }

    // update state dalam sebuah function
    increment = () => {
        this.setState({
            username: this.state.counter + 1
        })
    }
    decrement = () => {
        this.setState({
            username: this.state.counter - 1
        })
    }

    render() {
        return (
            <>
                <h3>{this.state.counter}</h3>
                <br />
                // memanggil function ketika tombol ditekan
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}