import CurrencyTableFunction from "./components/using-function/CurrencyTable";
import CurrencyTableClass from "./components/using-class/CurrencyTable";

// pembuatan stateless component
function Header() {
  return (
    <header className="header">
      <h1>Currency Converter</h1>
    </header>
  )
}

function Content() {
  return (
    <div className="content">
      <h1>Table Using Class</h1>
      <CurrencyTableClass/>
      <h1>Table Using Function</h1>
      <CurrencyTableFunction/>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; Muhammad Anwar - 2022</p>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="container">
        {/* pemanggilan stateless component */}
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
      </div>
    </>
  )
}

export default App;
