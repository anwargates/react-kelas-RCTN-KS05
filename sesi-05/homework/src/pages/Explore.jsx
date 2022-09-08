import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Explore() {
  return (
    <>
      <Navbar page="Explore" />
      <section className="section-members">
        <div className="container d-flex flex-column align-items-center gap-3">
          <h1>This is Explore page</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Explore;
