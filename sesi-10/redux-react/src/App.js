import React from "react";
import CounterClass from './features/counter/CounterClassComponent'
import CounterFn from './features/counter/CounterFnComponent'
// import CounterClass from './components/CounterClass'
// import CounterFn from './components/CounterFn'
import "./App.css";

function App() {
  return (
    <main className="App">
      <CounterClass />
      <CounterFn />
    </main >
  )
}


export default App;
