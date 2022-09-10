import CurrencyTable from "./components/CurrencyTable";

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
      <p>Silakan isikan dengan paragraf yang kamu kehendaki</p>
      <CurrencyTable/>
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
