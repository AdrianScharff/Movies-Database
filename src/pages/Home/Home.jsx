import React, { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import { fetchMoviesByRate } from "../../services/moviesServices";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
import RatesContext from "../../contexts/RatesContext";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const { selectedRate } = useContext(RatesContext);

  const getMoviesData = async (rateOrNull) => {
    try {
      const fetchedMovies = await fetchMoviesByRate(rateOrNull);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesData(selectedRate);
  }, [selectedRate]);

  return (
    <>
      <Filter />
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
          />
        ))}
      </MoviesContainer>
    </>
  );
};

export default Home;
