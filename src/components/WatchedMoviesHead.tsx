import React from "react";
import {
  faHashtag,
  faStar,
  faRankingStar,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function WatchedMoviesHead({ watchedMovies }: { watchedMovies: any[] }) {
  const rating = (
    watchedMovies.reduce(
      (acc, watchedMovie) => acc + Number(watchedMovie.imdbRating),
      0
    ) /
      watchedMovies.length +
    1
  ).toFixed(1);
  const averageWatchTime = watchedMovies.reduce(
    (acc, watchedMovie) => acc + Number(watchedMovie.Runtime.split(" ")[0]),
    0
  );
  const myRating = (
    watchedMovies.reduce(
      (acc, watchedMovie) => acc + Number(watchedMovie.myRating),
      0
    ) /
      watchedMovies.length +
    1
  ).toFixed(1);
  return (
    <div className="bg-accentGray text-white flex flex-col justify-start p-5 gap-y-2 font-semibold rounded-xl">
      <p className="uppercase">movies you watched</p>
      <div className="flex flex-row items-center  lg:gap-x-10 gap-x-5 ">
        <p className="flex items-center gap-2 ">
          <FontAwesomeIcon icon={faHashtag} />
          <span>{watchedMovies.length} movies</span>
        </p>
        <p className="flex items-center gap-2  ">
          <FontAwesomeIcon icon={faStar} />
          <span>{watchedMovies.length > 0 ? rating : "0"}</span>
        </p>
        <p className="flex items-center gap-2  ">
          <FontAwesomeIcon icon={faRankingStar} />
          <span>{watchedMovies.length > 0 ? myRating : "0"}</span>
        </p>
        <p className="flex items-center gap-2  ">
          <FontAwesomeIcon icon={faStopwatch} />
          <span>{watchedMovies.length > 0 ? averageWatchTime : "0"} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedMoviesHead;
