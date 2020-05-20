import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Link to={`/${movie.id}`} key={movie.id}>
          <MovieDetails movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
