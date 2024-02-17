import React, { useEffect, useState } from "react";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchMoviesByRate } from "../../services/moviesServices";
import { useParams } from "react-router-dom";
import Filter from "../Home/Filter";

const MoviesByRate = () => {
  const [moviesByRate, setMoviesByRate] = useState([]);

  const { rateAsString } = useParams();
  const rate = parseInt(rateAsString);

  const getMoviesByRate = async (rate) => {
    try {
      const fetchedMovies = await fetchMoviesByRate(rate);
      setMoviesByRate(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesByRate(rate);
  }, [rate]);

  return (
    <>
      <Filter />
      <MoviesContainer>
        {moviesByRate.map((movie) => (
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

export default MoviesByRate;
