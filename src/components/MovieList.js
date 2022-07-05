import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  console.log(props);
  return (
    <div>
      {props.movies.map((movie) => {
        return <Movie key={movie.uuid} movie={movie} />;
      })}
    </div>
  );
}
