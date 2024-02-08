import React from "react";
import { Movie, TempWatchedData } from "../../utils/types";

function extractDuration(durationStr: string): number | null {
  const durationNumber: number = parseInt(durationStr.match(/\d+/)?.[0] || "");

  if (!isNaN(durationNumber)) {
    return durationNumber;
  } else {
    return null;
  }
}

function Summary({ watched }: any) {
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
    watched.map((movie: Movie) => movie.userRating)
  );
  const avgRuntime = average(
    watched.map((movie: Movie) => extractDuration(movie.Runtime))
  );
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{Number(avgImdbRating).toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{Number(avgUserRating).toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
