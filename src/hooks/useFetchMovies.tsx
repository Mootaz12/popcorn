import { useEffect, useState } from "react";

export function useFetchMovies(
  movieName: string,
  setMovies: (movies: Movie[]) => void,
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      if (!movieName && movieName.length < 1) return;
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${movieName}`,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          movieName.length > 1 && setError("Movies not found.");
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setError(error.message || "An unknown error occurred.");
          setMovies([]);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
    return () => controller.abort();
  }, [movieName, setMovies]);
  return { isLoading, error };
}
