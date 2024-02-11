import React from "react";

const Filter = () => {
  return (
    <div className="bg-red-500 flex flex-col gap-2 md:gap-8 items-center p-5 md:flex-row mt-[96px]">
      <div className="flex gap-1 bg-yellow-400 w-fit">
        <input
          type="text"
          className="border w-5/6 md:w-96 py-2 md:py-3 rounded-full ps-4"
          placeholder="Search movie"
        />
        <button className="bg-blue-500 p-2 rounded-full text-white">
          Search
        </button>
      </div>
      <button className="bg-blue-500 py-2 md:py-3 rounded-full w-3/5 md:w-80 text-white">
        Filter by rates
      </button>
    </div>
  );
};

export default Filter;
