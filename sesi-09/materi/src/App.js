import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import AboutCompany from "./pages/AboutCompany";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Members from "./pages/Members";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="/members" element={<Members />} >
          <Route path=":memberName" element={<Member />} />
        </Route>
        <Route path="/items" element={
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        } >
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div >
  )
}


export default App;
