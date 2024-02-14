import React, { useEffect, useState } from "react";
import { Movie } from "../utils/types";
import { Loader } from "../App";
import StarRating from "./StarRating";
const apiKey: string = "24a23ab4";

function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: any) {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);

  const isRated = watched.some((item: Movie) => item.imdbID === selectedId);
  // console.log(isRated);

  const watchedUserRating = watched?.find(
    (item: Movie) => item?.imdbID === selectedId
  )?.userRating;

  const handleAdd = (movie: any) => {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: movie?.Title,
      Year: movie?.Year,
      Poster: movie?.Poster,
      imdbRating: Number(movie?.imdbRating),
      Runtime: movie?.Runtime,
      userRating: Number(rating),
    };
    onAddWatched(newWatchedMovie);
  };

  useEffect(
    function () {
      function callback(e: any) {
        if (e.code === "Escape") onCloseMovie();
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(() => {
    if (!movie?.Title) return;
    document.title = `Movie | ${movie?.Title}`;

    return function () {
      document.title = "usePopcorn";
    };
  }, [movie]);

  useEffect(() => {
    const movieDetails = async () => {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com?apikey=${apiKey}&i=${selectedId}`
      );
      setLoading(false);
      const data = await res.json();

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
                {movie?.Released} &bull; {movie?.Runtime}
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
              {!isRated ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setRating}
                  />
                  {rating && rating > 0 && (
                    <button
                      className="btn-add"
                      onClick={() => handleAdd(movie)}
                    >
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>you rated this movie with {watchedUserRating} ⭐</p>
              )}
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
