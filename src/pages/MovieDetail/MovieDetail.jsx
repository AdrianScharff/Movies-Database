import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/moviesServices";
import getLanguage from "../../services/getLanguage";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieData = async () => {
    const fetchedMovie = await getMovieById(id);
    setMovie(fetchedMovie);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="flex flex-col justify-center mb-8 mt-[96px] md:py-10 md:px-20 gap-6">
      <div className="flex flex-col md:grid grid-cols-[15fr_12fr] gap-4 md:gap-9">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={`image of ${movie.title}`}
          className="w-full"
        />
        <div className="flex flex-col items-center md:items-start md:justify-evenly gap-6">
          <p className="px-5 md:px-0 font-bold text-5xl">{movie.title}</p>
          <p className="px-5 md:px-0 md:text-3xl">{movie.overview}</p>
          <p className="text-orange-400 font-semibold md:text-5xl border w-fit border-gray-500 p-4 rounded-full">
            {movie.vote_average}
          </p>
        </div>
      </div>
      <div className="px-5 md:px-0 flex justify-center md:mt-10">
        <div className="md:text-2xl flex flex-col gap-5">
          <p>
            <span className="font-semibold">Vote count:</span>{" "}
            {movie.vote_count}
          </p>
          <p>
            <span className="font-semibold">Release date:</span>{" "}
            {movie.release_date}
          </p>
          <p>
            <span className="font-semibold">Original language:</span>{" "}
            {getLanguage(movie.original_language)}
          </p>
          <p>
            <span className="font-semibold">Original title:</span>{" "}
            {movie.original_title}
          </p>
          <p>
            <span className="font-semibold">Popularity:</span>{" "}
            {movie.popularity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
