import React from "react";

export const BestSelling = () => {
  return (
    <div className="bg-lime-600 flex flex-col w-full h-3/4">
      <div className="flex flex-row items-center justify-between h-1/4">
        <div className="p-10 text-black text-2xl font-medium">Best Selling</div>
        <div className="p-10 ">
          {" "}
          <p className="text-black cursor-pointer">View all</p>
        </div>
      </div>
      <div className="h-full"></div>
    </div>
  );
};
