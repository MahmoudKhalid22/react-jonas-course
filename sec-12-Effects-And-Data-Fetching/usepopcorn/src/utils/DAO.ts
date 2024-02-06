export interface Data {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}
export interface TempWatchedData extends Data {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
