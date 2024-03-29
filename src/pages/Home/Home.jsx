import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchMoviesByRate } from "../../services/moviesServices";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async (value) => {
    try {
      const fetchedMovies = await fetchMoviesByRate(value);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllMovies(null);
  }, []);

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
            path={"movie/"}
          />
        ))}
      </MoviesContainer>
    </>
  );
};

export default Home;
