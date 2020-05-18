import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import MovieDetails from "./MovieDetails";

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { itemID } = useParams();

  useEffect(() => {
    const id = itemID;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    const item = axios
      .get(`http://localhost:5000/api/movies/${id}/`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemID]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieDetails movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
};

export default Movie;
