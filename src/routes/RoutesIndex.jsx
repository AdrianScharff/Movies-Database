import React from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Error404 from "../pages/Error404/Error404";
import MoviesBySearch from "../pages/MoviesBySearch/MoviesBySearch";
import MoviesByRate from "../pages/MoviesByRate/MoviesByRate";
import MoviesByPopularity from "../pages/MoviesByPopularity/MoviesByPopularity";

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="about" element={<About />}>
        <Route path="company" element={<About />} />
      </Route>

      <Route path="contact" element={<Contact />} />

      <Route path="moviesbysearch/" element={<MoviesBySearch />}>
        <Route path=":text" element={<MoviesBySearch />} />
      </Route>

      <Route path="moviesbyrate/" element={<MoviesByRate />}>
        <Route path=":rateAsString" element={<MoviesByRate />} />
      </Route>

      <Route path="moviesbypopularity/" element={<MoviesByPopularity />}>
        <Route path=":popularityRange" element={<MoviesByPopularity />} />
      </Route>

      <Route path="movie/" element={<MovieDetail />}>
        <Route path=":id" element={<MovieDetail />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Route>
  </Routes>
);

export default Router;
