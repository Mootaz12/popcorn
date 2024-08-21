import React from "react";
import Image from "next/image";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MovieCard({
  movie,
  selectedMovie,
  setSelectedMovie,
}: {
  movie: Movie;
  selectedMovie: string;
  setSelectedMovie: (selectedMovie: string) => void;
}) {
  const handleSelectingMovie = () => {
    if (selectedMovie === movie.imdbID) {
      setSelectedMovie("");
    } else {
      setSelectedMovie(movie.imdbID);
    }
  };
  return (
    <div className="relative flex flex-row items-center justify-start gap-4 border-b-2 border-b-bgColor p-4">
      <Image
        src={
          (movie.Poster &&
            movie.Poster !== "N/A" &&
            movie.Poster.startsWith("http") &&
            movie.Poster) ||
          ""
        }
        alt={movie.Title}
        width={70}
        height={70}
      />
      <div className="flex flex-col">
        <p
          className="cursor-pointer text-lg text-white"
          onClick={handleSelectingMovie}
        >
          {movie.Title}
        </p>
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faCalendar} className="text-white" />
          <p className="text-white">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
