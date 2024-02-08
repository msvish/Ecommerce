import React from "react";
import { Cart, Heart, Login } from "../../Assets/svg";

const Header = () => {
  return (
    <div className="h-full w-full">
      <div className="h-1/4 bg-lime-600"></div>
      <div className="h-1/2">
        <div className="h-full w-full flex flex-row justify-center">
          <div className="w-1/3 flex flex-row items-center justify-center">
            {" "}
            <p className="font-bold text-3xl text-lime-600">Agro Cart</p>
          </div>
          <div className="w-1/3 flex flex-row items-center justify-evenly">
            <div className="flex flex-col items-center md:flex-row">
              <input
                type="text"
                // value={searchTerm}
                // onChange={handleSearchInput}
                placeholder="Search..."
                className="w-full md:w-auto px-6 py-1 text-lg rounded-lg border border-gray-300 focus:border-lime-600 focus:outline-none"
              />
              {/* <button
                // onClick={handleSearch}
                className="mt-2 md:mt-0 md:ml-2 px-4 py-1 bg-lime-600 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Search
              </button> */}
              <div>
                {/* Display search results */}
                {/* {searchResults.length > 0 ? (
                  <p>Search Results for: {searchResults}</p>
                ) : (
                  <p>No results found</p>
                )} */}
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-row justify-end">
            <div className="flex flex-row items-center p-2 cursor-pointer">
              <div className="p-1">
                <Heart />
              </div>
              <div className="p-2">Wishlist</div>
            </div>
            <div className="flex flex-row items-center p-2 cursor-pointer">
              <div className="p-1">
                <Login />
              </div>
              <div className="p-2">Login</div>
            </div>
            <div className="flex flex-row items-center p-2 cursor-pointer">
              <div className="p-1">
                <Cart />
              </div>
              <div className="p-2"> Cart</div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="h-1/4 flex flex-row items-center justify-evenly">
        <div className="font-bold cursor-pointer hover:text-lime-600">
          Store
        </div>
        <div className="font-bold cursor-pointer hover:text-lime-600">
          Escources
        </div>
        <div className="font-bold cursor-pointer hover:text-lime-600">
          About Us
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
