import React from "react";
import CardContainer from "../utils/Cards/Card";

export const BestSelling = () => {
  return (
    <div className="bg-[#E1E0DE] flex flex-col w-full h-full">
      <div className="flex flex-row text-[#3B3A3F] items-center justify-between h-1/5">
        <div className="p-10  text-2xl font-medium">Best Selling</div>
        <div className="p-10 ">
          {" "}
          <p className="cursor-pointer">View all</p>
        </div>
      </div>
      <div className="h-full p-12 pt-0">
        <div className="w-full h-full flex flex-row gap-x-5 overflow-x-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 9].map((value, index) => {
            return <CardContainer key={index} id={value} />;
          })}
        </div>
      </div>
    </div>
  );
};
