import React, { useState } from "react";
import { TempWatchedData } from "../utils/DAO";

function BoxRight({ watched }: any) {
  const [isOpen, setIsOpen] = useState(true);

  const average = (arr: any) =>
    arr.reduce(
      (acc: number, cur: number, i: number, arr: TempWatchedData[]) =>
        acc + cur / arr.length,
      0
    );
  const avgImdbRating = average(
    watched.map((movie: TempWatchedData) => movie.imdbRating)
  );
  const avgUserRating = average(
    watched.map((movie: TempWatchedData) => movie.userRating)
  );
  const avgRuntime = average(
    watched.map((movie: TempWatchedData) => movie.runtime)
  );

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open: boolean) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>

          <ul className="list">
            {watched.map((movie: TempWatchedData) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BoxRight;
