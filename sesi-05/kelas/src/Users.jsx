import React from 'react';

export default class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'we', //mendefinisikan sebuah state
            password: 'we'
        }
    }

    setUsername = () => {
        this.setState({
            username: 'user01', //menulis state di dalam function
            password: '12345'
        })
    }

    getUsername() {
        return this.state.username
    }
    getPassword() {
        return this.state.password
    }

    render() {
        return (
            <>
                {/* membaca state di dalam render */}
                <h1>{this.state.username}</h1> 

                {/* //membaca state di dalam render */}
                <h1>{this.getUsername()}</h1>

                {/* set state dengan button */}
                <button onClick={this.setUsername}>Set Username</button>

                <h1>Belajar State</h1>
                {/* pemanggilan state langsung */}
                <div className="row">
                    <div className="col">Username: {this.state.username}</div>
                    <div className="col">Password: {this.state.password}</div>
                </div>

                {/* pemanggilan state dengan function */}
                <div className="row">
                    <div className="col">Username: {this.getUsername()}</div>
                    <div className="col">Password: {this.getPassword()}</div>
                </div>
            </>
        )
    }
}