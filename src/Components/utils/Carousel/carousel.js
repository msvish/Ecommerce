import React, { useEffect, useState } from "react";
import "./carousel.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const CustomCarousel = () => {
  const data = [
    {
      image: require("../../../Assets/Images/image1.jpg"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("../../../Assets/Images/image2.jpg"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("../../../Assets/Images/image3.jpg"),
      caption: "Caption",
      description: "Description Here",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? data.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === data.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="child h-full w-full relative">
      <div
        style={{ backgroundImage: `url(${data[index].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className="absolute  top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default CustomCarousel;
