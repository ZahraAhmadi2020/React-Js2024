import React from "react";
import { Link } from "react-scroll";
import up from "../../assets/icons/up.svg";
const Footer = () => {
  return (
    <footer>
      <Link to="hero" className="up">
        <img src={up} />
      </Link>
    </footer>
  );
};

export default Footer;
