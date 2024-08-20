import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieCard from "./MovieCard";
function DisplayedMovies({
  movies,
  setSelectedMovie,
}: {
  movies: any;
  setSelectedMovie: (selectedMovie: string) => void;
}) {
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const handleButtonClick = () => {
    setButtonClicked((prev) => !buttonClicked);
    setShowMovies((prev) => !showMovies);
  };
  return (
    <section className="relative bg-gray flex flex-col lg:min-w-[500px] md:min-w-[400px] min-w-[300px] min-h-[500px] rounded-xl">
      <button
        className="bg-bgColor px-1 rounded-full text-white text-2xl top-2 absolute right-2"
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon icon={buttonClicked ? faPlus : faMinus} />
      </button>
      <div
        className={`${
          showMovies ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 flex flex-col`}
      >
        {showMovies &&
          movies.map((movie: any) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
      </div>
    </section>
  );
}

export default DisplayedMovies;
