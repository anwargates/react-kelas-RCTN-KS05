import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItem: ["Create Meetup", "Explore", "Others"],
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand">QTemu</a>
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
                {this.state.navItem.map((val) => (
                  <li key={val.toString()} className="nav-item">
                    <a
                      className={`nav-link ${val == this.props.page ? "active" : ""}`}
                      href="#"
                    >
                      {val}
                    </a>
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
