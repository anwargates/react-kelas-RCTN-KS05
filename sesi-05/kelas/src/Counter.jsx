import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    // update state dalam sebuah function
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <>
                <h3>Hitung Counter: {this.state.counter}</h3>
                <br />
                {/* memanggil function ketika tombol ditekan */}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}