import React, { useEffect, useState } from "react";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchMoviesBySearch } from "../../services/moviesServices";
import Filter from "../Home/Filter";
import { useParams } from "react-router-dom";

const MoviesBySearch = () => {
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const { text } = useParams();

  const getMoviesBySearch = async (word) => {
    try {
      const fetchedMovies = await fetchMoviesBySearch(word);
      setMoviesBySearch(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesBySearch(text);
  }, [text]);

  return (
    <>
      <Filter />
      <MoviesContainer>
        {moviesBySearch.map((movie) => (
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

export default MoviesBySearch;
