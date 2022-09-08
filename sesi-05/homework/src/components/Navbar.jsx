import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  //build state untuk item navigasi
  constructor(props) {
    super(props);
    this.state = {
      navItem: [
        {
          id: 1,
          page: "Create Meetup",
          to: "/create-meetup",
        },
        {
          id: 2,
          page: "Explore",
          to: "/explore",
        },
        {
          id: 3,
          page: "Others",
          to: "/others",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">QTemu</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* mengirim props */}
                {this.state.navItem.map((val) => (
                  <li key={val.id.toString()} className="nav-item">
                    <Link
                    // menambahkan class sesuai state
                      className={`nav-link ${
                        val.page == this.props.page ? "active" : ""
                      }`}
                      to={val.to}
                    >
                      {console.log(val)}
                      {val.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex">
              <a className="nav-link" href="#">
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
