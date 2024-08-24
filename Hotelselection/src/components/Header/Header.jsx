import React, { useEffect, useState } from "react";
import lng from "../../assets/icons/lng.svg";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavMobile from "./NavMobile.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from "react-scroll";
const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
    return () => {};
  }, []);
  return (
    <header
      className={`  ${sticky ? "dark-nav" : ""} header row py-2 px-3 m-0`}
    >
      <div className="d-lg-none position-absolute p-0 col-auto">
        <NavMobile />
      </div>
      <div
        className=" col-lg-1 col   p-1  col-auto mx-5
      "
      >
        <img src={logo} className="logo" />
      </div>

      <div className="col-lg-7  d-none d-lg-block">
        <Navbar />
      </div>
      <div className="col  p-3 text-center w-auto  d-lg-block   d-none col">
        <Link to="signup">
          {" "}
          <button className="btn btn-outline-info">Sign up / Log in</button>
        </Link>
      </div>

      <div className="  p-2 text-center col-lg-1 col-md-1 col-sm-1 col ">
        <img className="lng-icon pointer-event" src={lng} />
      </div>
    </header>
  );
};

export default Header;
