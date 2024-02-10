import React from "react";
import { Movie } from "../../utils/types";

function List({ watched, onSetMovie, onDeleteWatched }: any) {
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
              <span>{Number(movie.userRating)}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.Runtime}</span>
            </p>
            <button
              onClick={() => onDeleteWatched(movie.imdbID)}
              className="btn-delete"
            >
              ➖
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
