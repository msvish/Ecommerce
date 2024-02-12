import React, { useState } from "react";
import CustomCarousel from "../utils/Carousel/carousel";

function Main() {
  return (
    <div className="w-full h-full">
      <div className="parent bg-green-300 w-full h-3/4">
        <CustomCarousel />
      </div>
    </div>
  );
}

export default Main;
