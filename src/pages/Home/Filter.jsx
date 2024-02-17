import { useState, useRef, useEffect, useContext } from "react";
import Rates from "./Rates";
import { useNavigate } from "react-router-dom";
import RatesContext from "../../contexts/RatesContext";

const Filter = () => {
  const refForRates = useRef(null);
  const refFilterButton = useRef(null);
  const { showRates, setShowRates } = useContext(RatesContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleMovieSearch = (e) => {
    e.preventDefault();
    navigate(`/moviesbysearch/${text}`);
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
    <div className="flex flex-col gap-2 md:gap-8 items-center pt-7 md:pl-20 md:flex-row mt-[96px]">
      <form className="flex w-fit" onSubmit={handleMovieSearch}>
        <input
          type="text"
          className="border-y-2 border-s-2 border-black w-5/6 md:w-96 py-2 md:py-3 rounded-l-full ps-4"
          placeholder="Search movie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border-2 border-black bg-black hover:bg-orange-400 hover:border-black hover:border-s-orange-400 p-2 pr-4 md:py-3 rounded-r-full text-white">
          Search
        </button>
      </form>
      <div className="flex flex-col items-center relative">
        <button
          onClick={toggleRates}
          className="border-2 border-black bg-black hover:bg-orange-400 hover:border-orange-400 py-2 px-12 md:py-3 rounded-full md:w-80 text-white"
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
