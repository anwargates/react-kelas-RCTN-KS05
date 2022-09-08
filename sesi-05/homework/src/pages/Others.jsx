import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Others() {
  return (
    <>
      <Navbar page="Others" />
      <section className="section-members">
        <div className="container d-flex flex-column align-items-center gap-3">
          <h1>This is Others page</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Others;
