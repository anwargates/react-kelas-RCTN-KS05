import React from "react";

function Halu() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json)
      .then((data) => this.setState({ todos: data.slice(0, 20) }));
  });

  return (
    <div>
      <table className="table">
        <tbody>
          {this.state.todos.map((todo, index) => {
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "v" : "x"}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Halu;
