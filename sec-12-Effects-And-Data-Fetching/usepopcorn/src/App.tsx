import { useState, useEffect } from "react";
import { Data, TempWatchedData } from "./utils/DAO";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Logo from "./components/NavbarComponents/Logo";
import Searchbar from "./components/NavbarComponents/Searchbar";
import Item from "./components/NavbarComponents/Item";
import ListMovies from "./components/BoxContent/ListMovies";
import Summary from "./components/BoxContent/Summary";
import List from "./components/BoxContent/List";

const tempMovieData: Data[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData: TempWatchedData[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const apiKey: string = "24a23ab4";
const movie: string = "300";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  useEffect(function () {
    const getMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${movie}`
        );

        if (!res.ok) throw Error("Failed to fetch");

        const data = await res.json();

        if (data.Response === "False") return setError(data.Error);

        setMovies(data.Search);
      } catch (err: any) {
        console.log(err);

        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Logo />
        <Searchbar />
        <Item movies={movies} />
      </Navbar>

      <main className="main">
        {/* <Box element={<ListMovies movies={movies} />} /> */}

        {loading && !error && <Loader />}
        {error && <Error message={error} />}
        {!error && !loading && (
          <Box>
            <ListMovies movies={movies} />
          </Box>
        )}
        <Box>
          <Summary watched={watched} />
          <List watched={watched} />
        </Box>
      </main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function Error({ message }: any) {
  return <p className="error">{message}</p>;
}
