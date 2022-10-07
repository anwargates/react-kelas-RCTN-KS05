import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
            <button className="btn btn-info btn-lg" type="button">
              Back to Home
            </button>
          </Link>
          <div class="about">
            <h1 class="my-4">
              <b>About Me</b>
            </h1>
            <h5>
              <b>Nama:</b> Muhammad Anwar Firdaus
            </h5>
            <h5>
              <b>Kode Peserta:</b> RCTN-KS05-010
            </h5>
            <h5>
              <b>Hobi:</b> Gaming
            </h5>
            <br /> <br />
            <h1 class="my-4">
              <b>Progress Aplikasi per sesi</b>
            </h1>
            <h5>Sesi 1 - 12 done</h5>
          </div>
        </div>
      </div>
    </>
  );
}
