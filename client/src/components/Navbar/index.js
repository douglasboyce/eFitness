import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
              to="/dashboard"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3>myDashboard</h3>
            </Link>
          </li>
          {/**g added below this line */}
          <li className="nav-item">
            <Link
              to="/sign in"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link active"
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
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h3>Sign Up</h3>
            </Link>
          </li>
          {/**g added line above this line */}
    </ul>
      </div>
    </nav>
  );
}

export default Navbar;
