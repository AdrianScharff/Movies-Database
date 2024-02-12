import React from "react";

const MovieCard = ({
  id,
  title,
  overview,
  popularity,
  image,
  releaseDate,
  voteAverage,
  voteCount,
}) => {
  return (
    <div className="border border-black p-2 rounded-lg flex md:flex-col h-[10rem] md:h-fit">
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`image of ${title}`}
      />
      <div className="flex flex-col justify-between items-center md:h-[7rem] w-full text-[18px] md:text-[14px] py-4 md:py-1">
        <p className="text-center font-semibold">{title}</p>
        <p>{voteAverage}</p>
        <button className="py-1 px-2 rounded-lg bg-orange-400 hover:bg-orange-200">
          See details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
