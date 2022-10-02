import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Awards from "./pages/Awards";

function App() {
  return (
    <div className="App">
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <Sidebar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </main>
    </div >
  )
}


export default App;
