import React, { useState } from "react";
import CustomCarousel from "../utils/Carousel/carousel";
import { BestSelling } from "../BestSelling/bestSelling";
import Form from "../Forms/ContactForm";

function Main() {
  return (
    <div className="w-full h-full">
      <div className="parent bg-green-300 w-full h-3/4">
        <CustomCarousel />
      </div>
      <div className="parent bg-green-100 w-full h-3/4">
        <BestSelling />
      </div>
      <div className="parent bg-green-300 w-full h-3/4">
        <CustomCarousel />
      </div>
      <div className="parent bg-green-100 w-full h-3/4">
        <BestSelling />
      </div>
      <div className="parent w-full h-3/4">
        <Form/>
      </div>
    </div>
  );
}

export default Main;
