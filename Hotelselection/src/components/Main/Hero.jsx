import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero d-flex ">
      <div className="col-lg-6"></div>
      <div className="hero-content border col-lg-6 p-2 position-relative rounded-3">
        <Link to="slideshow">
          <button className="btn btn-primary">Chosoe Your Dream Hotel</button>
        </Link>
        <p className="w-auto my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          expedita asperiores perspiciatis aspernatur consequatur nam ea magni
          quos nobis consequuntur?
        </p>
      </div>
    </div>
  );
};

export default Hero;
