import React from "react";

function MoviesResult({ movies }: { movies: Movie[] }) {
  return (
    <p className="whitespace-nowrap text-lg">
      Found <span>{movies ? movies.length : "0"}</span> results
    </p>
  );
}

export default MoviesResult;
