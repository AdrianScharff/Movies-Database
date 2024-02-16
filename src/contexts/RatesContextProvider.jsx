import React, { useState } from "react";

import RatesContext from "./RatesContext";

const RatesContextProvider = ({ children }) => {
  const [selectedRate, setSelectedRate] = useState(null);
  const [showRates, setShowRates] = useState(false);

  return (
    <RatesContext.Provider
      value={{ selectedRate, setSelectedRate, showRates, setShowRates }}
    >
      {children}
    </RatesContext.Provider>
  );
};

export default RatesContextProvider;
