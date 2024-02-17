import { useState, useRef, useEffect, useContext } from "react";
import Rates from "./Rates";
import RatesContext from "../../contexts/RatesContext";
import SearchContext from "../../contexts/SearchContext";

const Filter = () => {
  const refForRates = useRef(null);
  const refFilterButton = useRef(null);
  const { showRates, setShowRates } = useContext(RatesContext);
  const [text, setText] = useState("");
  const { setTextSubmitted } = useContext(SearchContext);

  const handleMovieSearch = (e) => {
    e.preventDefault();
    setTextSubmitted(text);
  };

  const toggleRates = () => {
    setShowRates(!showRates);
  };

  const handleRatesClosing = (event) => {
    if (
      refForRates.current?.contains(event.target) === false &&
      refFilterButton.current?.contains(event.target) === false
    ) {
      setShowRates(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleRatesClosing);
    return () => {
      document.removeEventListener("click", handleRatesClosing);
    };
  }, []);

  return (
    <div className="bg-red-500 flex flex-col gap-2 md:gap-8 items-center p-5 md:pl-20 md:flex-row mt-[96px]">
      <form
        className="flex bg-yellow-400 w-fit"
        onSubmit={handleMovieSearch}
      >
        <input
          type="text"
          className="border w-5/6 md:w-96 py-2 md:py-3 rounded-l-full ps-4"
          placeholder="Search movie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 p-2 pr-4 rounded-r-full text-white">
          Search
        </button>
      </form>
      <div className="bg-yellow-200 flex flex-col items-center relative">
        <button
          onClick={toggleRates}
          className="bg-blue-500 py-2 px-12 md:py-3 rounded-full md:w-80 text-white"
          ref={refFilterButton}
        >
          Filter by rates
        </button>
        {showRates && <Rates ref={refForRates} />}
      </div>
    </div>
  );
};

export default Filter;
