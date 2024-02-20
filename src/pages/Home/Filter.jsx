import { useState, useRef, useEffect, useContext } from "react";
import Rates from "./Rates";
import { useNavigate } from "react-router-dom";
import RatesContext from "../../contexts/RatesContext";
import Popularities from "./Popularity";
import PopularityContext from "../../contexts/PopularityContext";

const Filter = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const refForRates = useRef(null);
  const refRatesButton = useRef(null);
  const { showRates, setShowRates } = useContext(RatesContext);

  const refForPopularities = useRef(null);
  const refPopularitiesButton = useRef(null);
  const { showPopularities, setShowPopularities } =
    useContext(PopularityContext);

  const handleMovieSearch = (e) => {
    e.preventDefault();
    navigate(`/moviesbysearch/${text}`);
  };

  const toggleRates = () => {
    setShowRates(!showRates);
  };

  const togglePopularities = () => {
    setShowPopularities(!showPopularities);
  };

  const handleRatesClosing = (event) => {
    if (
      refForRates.current?.contains(event.target) === false &&
      refRatesButton.current?.contains(event.target) === false
    ) {
      setShowRates(false);
    }
  };

  const handlePopularitiesClosing = (event) => {
    if (
      refForPopularities.current?.contains(event.target) === false &&
      refPopularitiesButton.current?.contains(event.target) === false
    ) {
      setShowPopularities(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleRatesClosing);
    document.addEventListener("click", handlePopularitiesClosing);
    return () => {
      document.removeEventListener("click", handleRatesClosing);
      document.removeEventListener("click", handlePopularitiesClosing);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 md:gap-8 items-center pt-7 md:pb-7 md:pl-20 md:flex-row mt-[96px]">
      <form className="flex w-fit" onSubmit={handleMovieSearch}>
        <input
          type="text"
          className="border-y-2 border-s-2 border-black w-5/6 md:w-96 py-2 md:py-3 rounded-l-full ps-4"
          placeholder="Search movie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border-2 border-black bg-black hover:bg-orange-400 hover:border-orange-400 hover:border-s-orange-400 p-2 pr-4 md:py-3 rounded-r-full text-white">
          Search
        </button>
      </form>
      <div className="flex w-[277px] md:w-fit justify-center md:justify-normal gap-1">
        <div className="flex flex-col items-end relative w-1/2 md:w-fit">
          <button
            onClick={toggleRates}
            className="border-2 border-black bg-black hover:bg-orange-400 hover:border-orange-400 py-2 md:py-3 rounded-l-full w-full md:w-44 text-white"
            ref={refRatesButton}
          >
            <span className="2xl:hidden">By </span>
            <span className="hidden 2xl:inline">Filter by </span>
            <span>rates</span>
          </button>
          {showRates && <Rates ref={refForRates} />}
        </div>
        <div className="flex flex-col items-start relative w-1/2 md:w-fit">
          <button
            onClick={togglePopularities}
            className="border-2 border-black bg-black hover:bg-orange-400 hover:border-orange-400 py-2 md:py-3 rounded-r-full w-full md:w-44 text-white"
            ref={refPopularitiesButton}
          >
            <span className="2xl:hidden">By </span>
            <span className="hidden 2xl:inline">Filter by </span>
            <span>popularity</span>
          </button>
          {showPopularities && <Popularities ref={refForPopularities} />}
        </div>
      </div>
    </div>
  );
};

export default Filter;
