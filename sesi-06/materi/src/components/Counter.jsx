import React, { useState } from "react";

function Counter({ initalCount }) {
  // deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(initalCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initalCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default Counter;
