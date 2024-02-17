import React, { forwardRef, useContext } from "react";
import RatesContext from "../../contexts/RatesContext";
import { NavLink } from "react-router-dom";

const Rates = forwardRef((props, ref) => {
  const rates = [5, 6, 7, 8];
  const { setShowRates } = useContext(RatesContext);

  const toggleRates = () => {
    setShowRates((prevShowRates) => !prevShowRates);
  };

  return (
    <div
      className="border-x border-b border-gray-400 rounded-b-lg flex flex-col gap-3 bg-black p-4 w-4/5 md:w-5/6 absolute top-10 md:top-[52px] font-medium"
      ref={ref}
    >
      {rates.map((rate) => (
        <NavLink
          to={`/moviesbyrate/${rate}`}
          className="py-3 bg-white hover:bg-orange-400 rounded-lg text-center"
          key={rate}
          onClick={() => {
            toggleRates();
          }}
        >
          {rate}
        </NavLink>
      ))}
    </div>
  );
});

export default Rates;
