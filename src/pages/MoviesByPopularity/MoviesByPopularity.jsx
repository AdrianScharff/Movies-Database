import React, { useEffect, useState } from "react";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
// import { fetchMoviesByRate } from "../../services/moviesServices";
import { fetchMoviesByPopularity } from "../../services/moviesServices";
import { useParams } from "react-router-dom";
import Filter from "../Home/Filter";

const MoviesByPopularity = () => {
  const [moviesByPopularity, setMoviesByPopularity] = useState([]);

  const { popularityRange } = useParams();

  const getMoviesByPopularity = async (popRange) => {
    try {
      const fetchedMovies = await fetchMoviesByPopularity(popRange);
      setMoviesByPopularity(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesByPopularity(popularityRange);
  }, [popularityRange]);

  return (
    <>
      <Filter />
      <MoviesContainer>
        {moviesByPopularity.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            path={"../movie/"}
          />
        ))}
      </MoviesContainer>
    </>
  );
};

export default MoviesByPopularity;
