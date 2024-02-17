import React, { useState } from "react";
import RatesContext from "./RatesContext";

const RatesContextProvider = ({ children }) => {
  const [showRates, setShowRates] = useState(false);

  return (
    <RatesContext.Provider value={{ showRates, setShowRates }}>
      {children}
    </RatesContext.Provider>
  );
};

export default RatesContextProvider;
