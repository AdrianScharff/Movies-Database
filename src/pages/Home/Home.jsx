import React, { useContext, useEffect, useState, useRef } from "react";
import Filter from "./Filter";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
import {
  fetchMoviesByRate,
  fetchMoviesBySearch,
} from "../../services/moviesServices";
import RatesContext from "../../contexts/RatesContext";
import SearchContext from "../../contexts/SearchContext";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { selectedRate } = useContext(RatesContext);
  const { textSubmitted } = useContext(SearchContext);

  const getMoviesByRate = async (rateOrNull) => {
    try {
      const fetchedMovies = await fetchMoviesByRate(rateOrNull);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoviesBySearch = async (word) => {
    try {
      const fetchedMovies = await fetchMoviesBySearch(word);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesByRate(selectedRate);
  }, [selectedRate]);

  useEffect(() => {
    if (textSubmitted !== "") {
      getMoviesBySearch(textSubmitted);
    }
  }, [textSubmitted]);

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
