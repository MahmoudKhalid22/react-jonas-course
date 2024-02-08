import React, { useEffect, useState } from "react";
import { Movie } from "../utils/DAO";
import { Loader } from "../App";
import StarRating from "./StarRating";
const apiKey: string = "24a23ab4";

function MovieDetails({ selectedId, onCloseMovie }: any) {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const movieDetails = async () => {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com?apikey=${apiKey}&i=${selectedId}`
      );
      setLoading(false);
      const data = await res.json();
      console.log(data);

      setMovie(data);
    };
    movieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button onClick={onCloseMovie} className="btn-back">
              &larr;
            </button>
            <img src={movie?.Poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{movie?.Title}</h2>
              <p>
                {movie?.Released} &bull; {movie?.runtime}
              </p>
              <p>{movie?.genre}</p>
              <p>
                <span>⭐</span>
                {movie?.imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p>
              <em>{movie?.plot}</em>
            </p>
            <p>Starring {movie?.Actors}</p>
            <p>Directed by {movie?.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
