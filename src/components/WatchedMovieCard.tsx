import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import {
  faRankingStar,
  faStar,
  faStopwatch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
function WatchedMovieCard({
  watchedMovie,
  watchedMovies,
  setWatchedMovies,
}: {
  watchedMovie: WatchedMovie;
  watchedMovies: WatchedMovie[];
  setWatchedMovies: (watchdMovies: WatchedMovie[]) => void;
}) {
  const handleDelete = () => {
    const updatedWatchedMovies = watchedMovies.filter(
      (movie: Movie) => movie.imdbID !== watchedMovie.imdbID,
    );
    setWatchedMovies(updatedWatchedMovies);
    localStorage.setItem("watchedMovies", JSON.stringify(updatedWatchedMovies));
  };
  return (
    <div className="flex flex-row items-center justify-start gap-4 border-b-2 border-b-bgColor p-4">
      <Image
        src={watchedMovie.Poster && watchedMovie.Poster}
        alt={watchedMovie.Title}
        width={70}
        height={70}
        priority
      />
      <div className="flex flex-col">
        <p className="text-lg text-white">{watchedMovie.Title}</p>
        <div className="flex flex-row items-center gap-10">
          <p className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faStar} />
            {watchedMovie.imdbRating}
          </p>
          <p className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faRankingStar} />
            {watchedMovie.myRating}
          </p>
          <p className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faStopwatch} />
            {watchedMovie.Runtime}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="ml-auto rounded-full bg-red-500 px-1 hover:bg-red-600"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
}

export default WatchedMovieCard;
