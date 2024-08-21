import React, { useEffect, useState } from "react";
import WatchedMovieCard from "./WatchedMovieCard";
import MoviesSummary from "./MoviesSummary";
import DisplayMovie from "./DisplayMovie";

function WatchedMovies({
  selectedMovie,
  setSelectedMovie,
}: {
  selectedMovie: string;
  setSelectedMovie: (selectedMovie: string) => void;
}) {
  const [watchedMovies, setWatchedMovies] = useState<WatchedMovie[]>([]);
  useEffect(() => {
    const storedMovies = localStorage.getItem("watchedMovies");
    if (storedMovies) {
      setWatchedMovies(JSON.parse(storedMovies));
    }
  }, []);
  return (
    <>
      {selectedMovie && selectedMovie !== "" ? (
        <DisplayMovie
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          watchedMovies={watchedMovies}
          setWatchedMovies={setWatchedMovies}
        />
      ) : (
        <>
          <MoviesSummary watchedMovies={watchedMovies} />
          {watchedMovies?.map((watchedMovie: any) => (
            <WatchedMovieCard
              key={watchedMovie.imdbID}
              watchedMovie={watchedMovie}
              setWatchedMovies={setWatchedMovies}
              watchedMovies={watchedMovies}
            />
          ))}
        </>
      )}
    </>
  );
}
export default WatchedMovies;
