import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import getAllMovies from "../../services/moviesServices";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    try {
      const fetchedMovies = await getAllMovies();
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <Filter />
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard
            image={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            popularity={movie.popularity}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        ))}
      </MoviesContainer>
    </>
  );
};

export default Home;
