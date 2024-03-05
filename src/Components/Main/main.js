import React, { useState } from "react";
import CustomCarousel from "../utils/Carousel/carousel";
import { BestSelling } from "../BestSelling/bestSelling";
import ServiceForm from "../Forms/ServiceForm";
import ContactForm from "../Forms/ContactForm";
import Footer from "../Footer/footer";

function Main() {
  return (
    <div className="w-full h-full">
      <div className="parent w-full h-3/4">
        <CustomCarousel />
      </div>
      <div className="parent w-full h-3/4">
        <BestSelling />
      </div>
      <div className="parent w-full h-3/4">
        <CustomCarousel />
      </div>
      <div className="parent w-full h-3/4">
        <BestSelling />
      </div>
      <div className="parent w-full h-3/4 bg-[#F2F2F0]">
        <ServiceForm />
      </div>
      <div className="parent w-full h-3/4 bg-[#CADEC8]">
        <ContactForm />
      </div>
      <div className="parent h-12">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Main;
