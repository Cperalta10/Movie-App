import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";

const options = {
  method: "GET",
  url: "https://movies-app1.p.rapidapi.com/api/movies",
  headers: {
    "X-RapidAPI-Key": "ad202dd662msh6aad4045b2d18f9p177dcajsn5a5d2ced55bb",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

function App() {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList.length);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovieList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {movieList.length ? (
        <MovieList movies={movieList} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
