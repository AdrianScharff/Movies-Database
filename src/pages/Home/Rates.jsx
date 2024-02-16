import React, { forwardRef, useContext } from "react";
import RatesContext from "../../contexts/RatesContext";

const Rates = forwardRef((props, ref) => {
  const rates = [5, 6, 7, 8];

  const { setSelectedRate, setShowRates } = useContext(RatesContext);

  const handleRateChange = (rate) => {
    setSelectedRate(rate);
  };

  const toggleRates = () => {
    setShowRates((prevShowRates) => !prevShowRates);
  };

  return (
    <div
      className="border-x border-b border-gray-400 rounded-b-lg flex flex-col gap-3 bg-black p-4 w-4/5 md:w-5/6 absolute top-10 md:top-12 font-medium"
      ref={ref}
    >
      {rates.map((rate) => (
        <button
          className="py-3 bg-white hover:bg-orange-400 rounded-lg"
          onClick={() => {
            handleRateChange(rate);
            toggleRates();
          }}
          key={rate}
        >
          {rate}
        </button>
      ))}
    </div>
  );
});

export default Rates;
