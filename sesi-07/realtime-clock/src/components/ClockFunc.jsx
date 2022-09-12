import React from "react";
import { useState } from "react";

function ClockFunc() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  setInterval(() => tick(), 1000);

  return (
    <div>
      <h1>With Function</h1>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default ClockFunc;
