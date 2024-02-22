import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navBarRef = useRef(null);
  const barsRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOpen = (event) => {
    if (
      navBarRef.current?.contains(event.target) === false &&
      barsRef.current?.contains(event.target) === false
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleMenuOpen);
    return () => {
      document.removeEventListener("click", handleMenuOpen);
    };
  }, []);

  return (
    <header className="fixed w-full shadow-md bg-black top-0 z-[20]">
      <div className="flex justify-between items-center  px-10 py-5">
        <Link to="/">
          <img
            src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
            className="h-14"
          />
        </Link>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:block absolute md:static top-[95px] right-0 bg-black w-5/12 md:w-fit justify-center`}
          ref={navBarRef}
        >
          <div className="flex flex-col md:flex-row pb-7 md:p-0 gap-5 md:gap-24">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 md:hover:underline"
                  : "text-white md:hover:underline"
              }
              onClick={toggleMenu}
            >
              <h4>Home</h4>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 md:hover:underline"
                  : "text-white md:hover:underline"
              }
              onClick={toggleMenu}
            >
              <h4>About</h4>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 md:hover:underline"
                  : "text-white md:hover:underline"
              }
              onClick={toggleMenu}
            >
              <h4>Contact</h4>
            </NavLink>
          </div>
        </nav>
        <div className="md:hidden" onClick={toggleMenu} ref={barsRef}>
          <FontAwesomeIcon icon={faBars} className="text-white text-4xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
