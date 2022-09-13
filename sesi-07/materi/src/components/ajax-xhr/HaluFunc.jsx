import React from "react";
import { useState, useEffect } from "react";

function Halu() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 20)));
  }, [url]);

  return (
    <div>
      <table className="table">
        <tbody>
          {console.log(todos)}
          {todos.map((todo, index) => {
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

export default Halu;
