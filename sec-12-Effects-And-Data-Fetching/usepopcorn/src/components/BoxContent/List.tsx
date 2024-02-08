import React from "react";
import { Movie } from "../../utils/types";

function List({ watched, onSetMovie }: any) {
  console.log(watched);

  return (
    <ul className="list list-movies">
      {watched.map((movie: Movie) => (
        <li key={movie.imdbID}>
          <img src={movie?.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{Number(movie.imdbRating).toFixed(2)}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{Number(movie.userRating).toFixed(2)}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.Runtime}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
