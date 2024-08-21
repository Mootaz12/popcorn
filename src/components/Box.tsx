import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";

function Box({ children }: { children: ReactNode }) {
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const handleButtonClick = () => {
    setShowMovies((prev) => !showMovies);
  };
  return (
    <section className="relative flex min-h-[500px] min-w-[300px] flex-col rounded-xl bg-gray pb-5 md:min-w-[400px] lg:min-w-[500px]">
      <button
        className="absolute right-2 top-2 z-10 rounded-full bg-bgColor px-1 text-2xl text-white"
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon icon={showMovies ? faMinus : faPlus} />
      </button>
      <div
        className={`${
          showMovies ? "flex" : "hidden"
        } flex-col transition-opacity duration-300`}
      >
        {children}
      </div>
    </section>
  );
}

export default Box;
