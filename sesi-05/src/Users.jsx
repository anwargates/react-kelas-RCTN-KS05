import React from 'react';

export default class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '' //mendefinisikan sebuah state
        }
    }

    setUsername = () => {
        this.setState({
            username: 'user01' //menulis state di dalam function
        })
    }

    getUsername() {
        return this.state.username
    }

    render() {
        return (
            <>
                <h1>{this.state.username}</h1> //membaca state di dalam render
                <h1>{this.getUsername()}</h1> //membaca state di dalam render
                <button onClick={this.setUsername}>Set Username</button>
            </>
        )
    }
}