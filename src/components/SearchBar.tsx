import React, { ReactNode } from "react";

function SearchBar({ children }: { children: ReactNode }) {
  return (
    <header>
      <nav className="flex flex-col items-center justify-between gap-y-4 rounded-xl bg-primaryViolet p-3 text-white md:flex-row md:gap-14 md:px-8 lg:gap-x-20 lg:px-12">
        <div className="text-3xl font-bold">Popcorn</div>
        {children}
      </nav>
    </header>
  );
}

export default SearchBar;
