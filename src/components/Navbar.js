import React from "react";
import "../styles/Navbar.css";
import btb from "./images/btb.jpg";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img src={btb} alt="BTB Logo" />
      </div>

      <div className="navigation-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Analysis</a>
          </li>
        </ul>
      </div>

      <div className="nav-buttons">
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
