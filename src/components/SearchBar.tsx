import React, { useState } from "react";

function SearchBar({
  movies,
  setMovies,
}: {
  movies: any;
  setMovies: (movies: any) => void;
}) {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!movieName) return;

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${movieName}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  return (
    <header>
      <nav className="flex flex-col md:flex-row bg-primaryViolet items-center justify-between text-white lg:gap-x-20 md:gap-14 gap-y-4 lg:px-12 md:px-8 p-3 rounded-xl">
        <div className="text-3xl font-bold">Popcorn</div>
        <form onSubmit={handleSubmit}>
          <input
            name="movieName"
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            placeholder="Search movies..."
            className="placeholder:text-placeholderColor px-6 py-3 bg-secondaryViolet rounded-xl outline-none min-w-[300px] lg:w-[500px] drop-shadow-md shadow-primaryViolet"
          />
        </form>
        <p className="text-lg whitespace-nowrap">
          Found <span>{movies ? movies.length : "0"}</span> results
        </p>
      </nav>
    </header>
  );
}

export default SearchBar;
