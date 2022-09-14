import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="container">
          <Content />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
