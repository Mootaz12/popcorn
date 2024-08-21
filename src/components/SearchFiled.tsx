import { useEffect, useRef } from "react";

function SearchFiled({
  setMovieName,
}: {
  setMovieName: (movieName: string) => void;
}) {
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);
  return (
    <input
      ref={searchRef}
      type="text"
      onChange={(e) => setMovieName(e.target.value)}
      placeholder="Search movies..."
      className="min-w-[300px] rounded-xl bg-secondaryViolet px-6 py-3 shadow-primaryViolet outline-none drop-shadow-md placeholder:text-placeholderColor lg:w-[500px]"
    />
  );
}

export default SearchFiled;
