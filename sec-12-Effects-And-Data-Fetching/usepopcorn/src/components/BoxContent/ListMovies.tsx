import React from "react";
import { Data } from "../../utils/types";

function ListMovies({ movies, onSetMovie }: any) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie: Data) => (
        <li key={movie.imdbID} onClick={() => onSetMovie(movie.imdbID)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListMovies;
