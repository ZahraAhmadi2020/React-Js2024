import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Slider = ({ hotel1, hotel2, hotel3 }) => {
  return (
    <div div className="sliders row">
      <Carousel className=" slider my-3 col-lg-4 col-md-6 col-sm-12">
        {hotel1.map((hotel) => (
          <Carousel.Item key={hotel.id}>
            <img
              className="testimonialImages d-block w-100 rounded "
              src={hotel.image}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel className="slider my-3  col-lg-4 col-md-6 col-sm-12 ">
        {hotel2.map((hotel) => (
          <Carousel.Item key={hotel.id}>
            <img
              className="testimonialImages d-block w-100 rounded"
              src={hotel.image}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel className="slider my-3 col-lg-4 col-md-6 col-sm-12">
        {hotel3.map((hotel) => (
          <Carousel.Item key={hotel.id}>
            <img
              className="testimonialImages d-block w-100 rounded"
              src={hotel.image}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
