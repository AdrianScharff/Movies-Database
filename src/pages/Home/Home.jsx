import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { getAllMovies } from "../../services/moviesServices";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMoviesData = async () => {
    try {
      const fetchedMovies = await getAllMovies();
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesData();
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
          />
        ))}
      </MoviesContainer>
    </>
  );
};

export default Home;
