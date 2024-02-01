import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Movie, Tv } from "../Components";

const Discovery = () => {
  return (
    <div className="mt-5">
      <div className="mb-5 flex items-center gap-6">
        <NavLink
          to="/discovery"
          end
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          discovered Movies
        </NavLink>
        <NavLink
          to="tv"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          discovered Tvs
        </NavLink>
      </div>
      <Routes>
        <Route index element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
    </div>
  );
};

export default Discovery;
