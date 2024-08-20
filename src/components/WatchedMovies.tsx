import {
  faMinus,
  faPlus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import WatchedMovieCard from "./WatchedMovieCard";
import WatchedMoviesHead from "./WatchedMoviesHead";
import DisplayMovie from "./DisplayMovie";

function WatchedMovies({
  selectedMovie,
  setSelectedMovie,
}: {
  selectedMovie: string;
  setSelectedMovie: (selectedMovie: string) => void;
}) {
  const [watchedMovies, setWatchedMovies] = useState<any[]>([]);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const handleButtonClick = () => {
    setButtonClicked((prev) => !buttonClicked);
    setShowMovies((prev) => !showMovies);
  };
  const handleDeletingSelectedMovie = () => {
    setSelectedMovie("");
  };
  useEffect(() => {
    const storedMovies = localStorage.getItem("watchedMovies");
    if (storedMovies) {
      setWatchedMovies(JSON.parse(storedMovies));
    }
  }, []);
  if (selectedMovie && selectedMovie !== "")
    return (
      <section className="relative flex min-h-[500px] min-w-[300px] flex-col rounded-xl bg-gray md:min-w-[400px] lg:min-w-[500px]">
        <button
          className="absolute left-2 top-2 rounded-full bg-bgColor px-1 text-2xl text-white"
          onClick={handleDeletingSelectedMovie}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="px-[.5px]" />
        </button>
        <DisplayMovie
          selectedMovie={selectedMovie}
          setWatchedMovies={setWatchedMovies}
          watchedMovies={watchedMovies}
          setSelectedMovie={setSelectedMovie}
        />
      </section>
    );
  else
    return (
      <section className="relative flex min-h-[500px] min-w-[300px] flex-col rounded-xl bg-gray md:min-w-[400px] lg:min-w-[500px]">
        <button
          className="absolute right-2 top-2 rounded-full bg-bgColor px-1 text-2xl text-white"
          onClick={handleButtonClick}
        >
          <FontAwesomeIcon icon={buttonClicked ? faPlus : faMinus} />
        </button>
        <WatchedMoviesHead watchedMovies={watchedMovies} />
        <div
          className={`${
            showMovies ? "opacity-100" : "opacity-0"
          } flex flex-col transition-opacity duration-300`}
        >
          {showMovies &&
            watchedMovies.map((watchedMovie: any) => (
              <WatchedMovieCard
                key={watchedMovie.imdbID}
                watchedMovie={watchedMovie}
                setWatchedMovies={setWatchedMovies}
                watchedMovies={watchedMovies}
              />
            ))}
        </div>
      </section>
    );
}
export default WatchedMovies;
