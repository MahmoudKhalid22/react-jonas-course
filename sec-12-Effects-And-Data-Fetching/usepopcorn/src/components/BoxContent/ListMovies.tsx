import React from "react";
import { Data } from "../../utils/DAO";

function ListMovies({ movies }: any) {
  return (
    <ul className="list">
      {movies?.map((movie: Data) => (
        <li key={movie.imdbID}>
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
