import React, { useState } from "react";
import CustomCarousel from "../utils/Carousel/carousel";
import { BestSelling } from "../BestSelling/bestSelling";

function Main() {
  return (
    <div className="w-full h-full">
      <div className="parent bg-green-300 w-full h-3/4">
        <CustomCarousel />
        <BestSelling />
        <CustomCarousel />
        <BestSelling />
      </div>
    </div>
  );
}

export default Main;
