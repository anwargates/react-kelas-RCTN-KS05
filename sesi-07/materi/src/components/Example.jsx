import React from "react";

function Example() {
  const [count, setCount] = useState(second);

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default Example;
