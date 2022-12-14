import React, { Component } from "react";

export default class Halu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data.slice(0, 20) }));
  }

  render() {
    const postTodo = this.state;
    return (
      <div>
        <table className="table">
          <tbody>
            {console.log(postTodo.todos)}
            {this.state.todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "v" : "x"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
