import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
      </>
    );
  }
}

export default App;
