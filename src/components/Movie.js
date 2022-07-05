import React from "react";

export default function Movie(props) {
  const { movie } = props;
  return (
    <div>
      <div>
        <img src={movie.image} />
      </div>
      <div>
        <h2>{movie.titleOriginal}</h2>
        <div>
          <span>{`Rating: ${movie.rating}`}</span>
          <span>{` Released: ${movie.release}`}</span>
        </div>
      </div>
    </div>
  );
}
