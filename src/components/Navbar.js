import React from "react";
import "../styles/Navbar.css";
import btb from "./images/btb.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="nav-logo">
          <img src={btb} alt=""></img>
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
        <div className="flex">
          <button className="login">Login</button>
          <button className="intouch">Get in touch</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
