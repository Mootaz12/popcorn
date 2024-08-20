import React, { useState, useEffect } from "react";
import Image from "next/image";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayMovie({
  selectedMovie,
  watchedMovies,
  setWatchedMovies,
  setSelectedMovie,
}: {
  selectedMovie: string;
  watchedMovies: any[];
  setWatchedMovies: (watchedMovies: any[]) => void;
  setSelectedMovie: (selectedMovie: string) => void;
}) {
  const [movie, setMovie] = useState<any>();
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [newMovie, setNewMovie] = useState<any | null>(null);
  const [isAddable, setIsAddable] = useState<boolean>(false);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${selectedMovie}`,
        );
        const data = await response.json();

        if (data) {
          setMovie(data);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovie(null);
      }
    };
    fetchMovie();
  }, [selectedMovie]);

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };
  const handleAddMovieToWatchedList = () => {
    if (newMovie) {
      const updatedMovies = [...watchedMovies, newMovie];
      setWatchedMovies(updatedMovies);
      localStorage.setItem("watchedMovies", JSON.stringify(updatedMovies));
    }
    setSelectedMovie("");
  };
  const movieIsRated = watchedMovies.filter(
    (movie) => movie.imdbID === selectedMovie,
  );

  return (
    <React.Fragment>
      <div className="flex flex-row items-center gap-x-8 rounded-t-xl bg-accentGray">
        <Image
          className="rounded-tl-xl"
          priority
          src={movie?.Poster}
          alt={movie?.Title}
          width={120}
          height={120}
        />
        <div className="flex flex-col gap-y-2 px-4 text-sm text-white">
          <p className="text-lg font-semibold">{movie?.Title}</p>
          <p>
            {movie?.Released} &bull; {movie?.Runtime}
          </p>
          <p>{movie?.Genre}</p>
          <p>
            <FontAwesomeIcon icon={faStar} className="text-gold" /> IMDb Rating:{" "}
            {movie?.imdbRating}
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-3 rounded-xl bg-accentGray p-5">
          {movieIsRated && movieIsRated.length > 0 ? (
            <p className="text-white">
              Your rated this movie {movieIsRated[0]?.myRating}
            </p>
          ) : (
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row gap-2">
                {[...Array(10)].map((_, index) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className={`cursor-pointer text-xl ${
                      hoveredStar !== null && index <= hoveredStar
                        ? "text-gold"
                        : "hover:text-gold"
                    } ${
                      isAddable &&
                      index <= (newMovie?.myRating ?? 0) - 1 &&
                      "text-gold"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      if (movie) {
                        setNewMovie({ ...movie, myRating: index + 1 });
                        setIsAddable(true);
                      }
                    }}
                  />
                ))}
              </div>
              <p className="text-xl font-semibold text-gold">
                {isAddable
                  ? newMovie?.myRating
                  : hoveredStar !== null
                    ? hoveredStar + 1
                    : 0}
              </p>
            </div>
          )}
          {isAddable && (
            <button
              type="button"
              className="w-full rounded-full bg-primaryViolet py-2 text-white"
              onClick={handleAddMovieToWatchedList}
            >
              <FontAwesomeIcon icon={faPlus} /> Add to List
            </button>
          )}
        </div>
        <div className="mt-10 flex max-w-[400px] flex-col gap-3 px-10 text-left text-sm font-light text-white">
          <p>{movie?.Plot}</p>
          <p>{movie?.Writer}</p>
          <p>Directed by {movie?.Director}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DisplayMovie;
