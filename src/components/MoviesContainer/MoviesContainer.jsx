import React from "react";

const MoviesContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-8 px-1 md:px-20 py-5 ">
      {children}
    </div>
  );
};

export default MoviesContainer;
