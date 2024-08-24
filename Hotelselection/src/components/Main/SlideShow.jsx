import React from "react";
import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.avif";
import room3 from "../../assets/images/room3.avif";
import room4 from "../../assets/images/room4.avif";
import hotel11 from "../../assets/images/hotel1.jpg";
import hotel22 from "../../assets/images/hotel2.jpg";
import hotel33 from "../../assets/images/hotel3.jpg";
import Slider from "./Slider";

//   (hotel1 = {
//     id: 1,
//     name: "hotel1",
//     hotel: hotel1,
//     room1: room1,
//     room2: room2,
//     room3: room3,
//     room4: room4,
//   }),
//   (hotel2 = {
//     id: 2,
//     hotel: hotel2,
//     room1: room1,
//     room2: room2,
//     room3: room3,
//     room4: room4,
//   }),
//   (hotel3 = {
//     id: 3,
//     hotel: hotel3,
//     room1: room1,
//     room2: room2,
//     room3: room3,
//     room4: room4,
//   }),
// ];

const hotel1 = [
  {
    id: 1,
    image: hotel11,
  },
  {
    id: 2,
    image: room1,
  },
  {
    id: 3,
    image: room2,
  },
  {
    id: 4,
    image: room3,
  },
  {
    id: 5,
    image: room4,
    content: "fake review",
    author: "dane doe",
  },
];
const hotel2 = [
  {
    id: 1,
    image: hotel22,
  },
  {
    id: 2,
    image: room1,
  },
  {
    id: 3,
    image: room2,
  },
  {
    id: 4,
    image: room3,
  },
  {
    id: 5,
    image: room4,
  },
];
const hotel3 = [
  {
    id: 1,
    image: hotel33,
  },
  {
    id: 2,
    image: room1,
  },
  {
    id: 3,
    image: room2,
  },
  {
    id: 4,
    image: room3,
  },
  {
    id: 5,
    image: room4,
  },
];

const SlideShow = () => {
  return (
    <div className="slideshow my-2">
      <h4>Choose Our Best Room</h4>
      <Slider hotel1={hotel1} hotel2={hotel2} hotel3={hotel3} />
    </div>
  );
};

export default SlideShow;
