import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ id, title, image, voteAverage, path }) => {
  return (
    <div className="border border-black p-2 rounded-lg flex md:flex-col items-center h-[10rem] md:h-fit">
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`image of ${title}`}
        className="h-full md:min-h-[23.5vh]"
      />
      <div className="grid grid-rows-[repeat(3, 1fr)] h-[8.5rem] md:h-[8rem] w-full text-[18px] md:text-[14px] text-center md:py-3 px-7 md:px-0">
        <p className="font-semibold">{title}</p>
        <p className="flex flex-col justify-center">{voteAverage}</p>
        <div className="flex flex-col justify-end items-center">
          <NavLink
            to={path + id}
            className="py-1 px-2 rounded-lg bg-orange-400 hover:bg-orange-200 w-fit"
          >
            See details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
