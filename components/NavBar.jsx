import React from "react";

//Component Imports

//Context Imports

// CSS Imports
import "/src/NavBar.css";

function NavBar() {
  return (
    <>
      <nav id="topNav" className="navbar nav">
        <div class="container">
          <button
            className="navbar-toggler"
            aria-expanded="false"
            aria-controls="navbarDropdown"
          >
            <span>&#9776;</span>
          </button>
          <a className="navbar-brand" href="">
            The ToolBOX
          </a>
          <ul class="navbar-nav">
            <li className="nav-link">
              <a href="index.html">Home</a>
            </li>
            <li className="nav-link">
              <a href="#">Ideas</a>
            </li>
            <li className="nav-link">
              <a href="profile.html">Profile</a>
            </li>
            <li className="nav-link">
              <a href="about.html">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
