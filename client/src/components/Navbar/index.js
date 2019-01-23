import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand" to="/">
       <h2>{<i>e</i>}Fitness</h2>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3>About</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bplog"
              className={
                window.location.pathname === "/" || window.location.pathname === "/bplog"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3>Blood Pressure Log</h3>
            </Link>
          </li>
          {/**g added below this line */}
          <li className="nav-item">
            <Link
              to="/sign in"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link disable"
                  : "nav-link"
              }
            >
              <h3>Sign In </h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign up"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link disabled"
                  : "nav-link"
              }
            >
              <h3>Sign Up</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/exerciselog"
              className={
                window.location.pathname === "/" || window.location.pathname === "/exerciselog"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3>Activity Log</h3>
            </Link>
          </li>
    </ul>
      </div>
    </nav>
  );
}

export default Navbar;
