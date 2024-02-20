import React, { useState } from "react";
import PopularityContext from "./PopularityContext";

const PopularityContextProvider = ({ children }) => {
  const [showPopularities, setShowPopularities] = useState(false);

  return (
    <PopularityContext.Provider
      value={{ showPopularities, setShowPopularities }}
    >
      {children}
    </PopularityContext.Provider>
  );
};

export default PopularityContextProvider;
