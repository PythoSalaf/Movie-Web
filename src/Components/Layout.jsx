import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import Skeleton from "react-loading-skeleton";
import {
  BsFillCollectionFill,
  BsFillEjectFill,
  BsFillXDiamondFill,
  BsSlashSquareFill,
} from "react-icons/bs";
import { useTvListQuery } from "../Features/MoviesSlice";

const Layout = () => {
  const { data: tvList, isLoading } = useTvListQuery();
  return (
    <div className="flex flex-col md:flex-row items-start justify-between mt-[3.5rem] ">
      <div className="hidden md:w[25%] lg:w-[20%] fixed md:block h-[85vh] overflow-y-auto mt-5">
        <div className="md:w-[92%] lg:w-[88%] mx-auto ">
          <div className="flex items-center gap-5 mb-4">
            <GoHomeFill size={22} />
            <Link to="/" className="md:text-base lg:text-lg font-serif">
              Home
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-4">
            <BsFillEjectFill size={22} />
            <Link
              to="/discovery"
              className="md:text-base lg:text-lg font-serif"
            >
              Discovery
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsSlashSquareFill size={22} />
            <Link
              to="/now-playing"
              className="md:text-base lg:text-lg font-serif"
            >
              {" "}
              Now Playing
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsFillXDiamondFill size={22} />
            <Link
              to="/top-rated"
              className="md:text-base lg:text-lg font-serif"
            >
              Top Rated
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-4">
            <BsFillCollectionFill size={22} />
            <Link to="/upcoming" className="md:text-base lg:text-lg font-serif">
              Upcoming Movies
            </Link>
          </div>
        </div>
        <hr className="mt-[1.5rem] border-gray-400 w-[89%]" />
        <div className="w-[84%] mx-auto mt-[0.8rem]">
          <h2 className="capitalize font-serif text-lg lg:text-xl">
            Lists of Popular TVs
          </h2>
          {isLoading ? (
            <div className="mt-2">
              <Skeleton count={8} width={150} height={20} className="mb-2" />
            </div>
          ) : (
            <ul className="mt-2 ml-2">
              {tvList?.genres.map((item) => (
                <li key={item.id} className="mb-1">
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-full md:w-[80%] lg:w[80%] relative ml-auto">
        <div className="w-[93%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
