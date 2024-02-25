import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Layout, Topbar } from "./Components";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Details,
  Discovery,
  Favourite,
  Home,
  NowPlaying,
  SearchMovies,
  TopRated,
  Upcoming,
  WatchLater,
} from "./Pages";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<Details />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/discovery/*" element={<Discovery />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/result" element={<SearchMovies />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
