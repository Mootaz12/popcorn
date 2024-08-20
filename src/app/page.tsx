"use client";
import DisplayedMovies from "@/components/DisplayedMovies";
import SearchBar from "@/components/SearchBar";
import WatchedMovies from "@/components/WatchedMovies";
import React, { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<string>("");
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <SearchBar setMovies={setMovies} movies={movies} />
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <DisplayedMovies movies={movies} setSelectedMovie={setSelectedMovie} />
        <WatchedMovies
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </main>
  );
}

export default Home;
