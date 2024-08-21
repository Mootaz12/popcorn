import React from "react";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import Error from "./Error";
function MoviesList({
  movies,
  selectedMovie,
  setSelectedMovie,
  isLoading,
  error,
}: {
  movies: any;
  selectedMovie: string;
  setSelectedMovie: (selectedMovie: string) => void;
  isLoading: boolean;
  error: string | null;
}) {
  return (
    <>
      {isLoading && !error && <Loading />}
      {error && <Error error={error} />}
      {!isLoading &&
        !error &&
        movies.map((movie: any) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
            selectedMovie={selectedMovie}
          />
        ))}
    </>
  );
}

export default MoviesList;
