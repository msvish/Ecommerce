import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function MainSlider() {
  const data = [
    {
      image: require("../../Assets/Images/image1.jpg"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("../../Assets/Images/image2.jpg"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("../../Assets/Images/image3.jpg"),
      caption: "Caption",
      description: "Description Here",
    },
  ];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={3000}
      pause={false}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MainSlider;
