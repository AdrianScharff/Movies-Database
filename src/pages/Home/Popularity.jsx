import React, { forwardRef, useContext } from "react";
import PopularityContext from "../../contexts/PopularityContext";
import { NavLink } from "react-router-dom";

const Popularities = forwardRef((props, ref) => {
  const popularities = ["0-40", "40-120", "120-500", "500-1000", "1000 +"];
  const { setShowPopularities } = useContext(PopularityContext);

  const togglePopularities = () => {
    setShowPopularities((prevShowPopularity) => !prevShowPopularity);
  };

  return (
    <div
      className="border-x border-b border-gray-400 rounded-b-lg flex flex-col gap-3 bg-black p-4 w-4/5 md:w-5/6 absolute top-[44px] md:top-[52px] font-medium"
      ref={ref}
    >
      {popularities.map((popularity) => (
        <NavLink
          to={`/moviesbypopularity/${popularity}`}
          className="py-3 bg-white hover:bg-orange-400 rounded-lg text-center"
          key={popularity}
          onClick={() => {
            togglePopularities();
          }}
        >
          {popularity}
        </NavLink>
      ))}
    </div>
  );
});

export default Popularities;
