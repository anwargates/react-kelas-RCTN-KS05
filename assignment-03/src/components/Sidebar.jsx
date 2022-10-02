import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="/profile-img.png"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <Link to="/">Muhammad Anwar</Link>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/anwargates" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/anwar.synyster/"
                className="facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/anwargates88/"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/anwargates/" className="github">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  <i className="bx bx-home"></i> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <i className="bx bx-user"></i> <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/resume" className="nav-link">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link to="/skills" className="nav-link">
                  <i className="bx bx-server"></i> <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="nav-link">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/awards" className="nav-link">
                  <i className="bx bx-certification"></i> <span>Awards</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
