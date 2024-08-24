import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="py-2">
      <ul className="m-0">
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="slideshow" smooth={true} offset={-260} duration={500}>
            Hotels
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>

        <li>
          {" "}
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button className="btn btn-outline-light">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
