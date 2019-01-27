import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
      <h2 className="nav-h2">{<i>e</i>}Fitness</h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3 className="h3">About</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3 className="h3">BP Log</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/exerciseLog"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "exerciseLog"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3 className="h3">Exercise Log</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
