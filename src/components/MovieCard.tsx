import React from "react";
import Image from "next/image";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MovieCard({
  movie,
  setSelectedMovie,
}: {
  movie: any;
  setSelectedMovie: (selectedMovie: string) => void;
}) {
  const handleSelectingMovie = () => {
    setSelectedMovie(movie.imdbID);
  };
  return (
    <div className="flex flex-row items-center justify-start gap-4 p-4 border-b-bgColor border-b-2">
      <Image
        src={movie.Poster && movie.Poster}
        alt={movie.Title}
        width={70}
        height={70}
        priority
      />
      <div className="flex flex-col">
        <p
          className="text-white text-lg cursor-pointer"
          onClick={handleSelectingMovie}
        >
          {movie.Title}
        </p>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faCalendar} className="text-white" />
          <p className="text-white">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
