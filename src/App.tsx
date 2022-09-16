import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./libs/requests";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow
        fetchUrl={requests.netflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.trendingMovies} />
      <Row title="Top rated" fetchUrl={requests.topRated} />
      <Row title="Action movies" fetchUrl={requests.actionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.comedyMovies} />
      <Row title="Romance movies" fetchUrl={requests.romanceMovies} />
      <Row title="Horror movies" fetchUrl={requests.horrorMovies} />
      <Row
        title="Documentaries movies"
        fetchUrl={requests.documentariesMovies}
      />
    </>
  );
}
