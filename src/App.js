import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Layout, Topbar } from "./Components";
import { Routes, Route, Navigate } from "react-router-dom";
import { Details, Favourite, Home, WatchLater } from "./Pages";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<Details />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="watch-later" element={<WatchLater />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
