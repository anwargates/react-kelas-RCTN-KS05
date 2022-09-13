import Clock from "./components/Clock";
import HaluFetch from "./components/ajax-xhr/HaluFetch";
import HaluFunc from "./components/ajax-xhr/HaluFunc";

function App() {
  return (
    <>
      <div className="container">
        <Clock />
        <hr/>
        <h1>Halu Using Class</h1>
        <HaluFetch/>
        <hr/>
        <h1>Halu Using Function</h1>
        <HaluFunc/>
      </div>
    </>
  )
}

export default App;
