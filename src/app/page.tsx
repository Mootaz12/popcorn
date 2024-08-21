"use client";
import Box from "@/components/Box";
import MoviesList from "@/components/MoviesList";
import MoviesResult from "@/components/MoviesResult";
import SearchBar from "@/components/SearchBar";
import SearchFiled from "@/components/SearchFiled";
import WatchedMovies from "@/components/WatchedMovies";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import React, { useState } from "react";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string>("");
  const [movieName, setMovieName] = useState<string>("");

  const { isLoading, error } = useFetchMovies(movieName, setMovies);
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <SearchBar>
        <SearchFiled setMovieName={setMovieName} />
        <MoviesResult movies={movies} />
      </SearchBar>
      <div className="flex flex-1 flex-col gap-4 md:flex-row">
        <Box>
          <MoviesList
            movies={movies}
            setSelectedMovie={setSelectedMovie}
            isLoading={isLoading}
            error={error}
            selectedMovie={""}
          />
          <></>
        </Box>
        <Box>
          <WatchedMovies
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </Box>
      </div>
    </main>
  );
}

export default Home;
