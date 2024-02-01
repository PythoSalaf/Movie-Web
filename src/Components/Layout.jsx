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
      <div className="hidden w-[20%] fixed md:block h-[85vh] overflow-y-auto mt-5">
        <div className="w-[88%] mx-auto ">
          <div className="flex items-center gap-5 mb-4">
            <GoHomeFill size={22} />
            <Link to="/" className="text-lg font-serif">
              Home
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-4">
            <BsFillEjectFill size={22} />
            <Link to="/discovery" className="text-lg font-serif">
              Discovery
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsSlashSquareFill size={22} />
            <Link to="/now-playing" className="text-lg font-serif">
              {" "}
              Now Playing
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsFillXDiamondFill size={22} />
            <Link to="/top-rated" className="text-lg font-serif">
              Top Rated
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-4">
            <BsFillCollectionFill size={22} />
            <Link to="/upcoming" className="text-lg font-serif">
              Upcoming Movies
            </Link>
          </div>
        </div>
        <hr className="mt-[1.5rem] border-gray-400 w-[89%]" />
        <div className="w-[84%] mx-auto mt-[0.8rem]">
          <h2 className="capitalize font-serif text-xl">
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
      <div className="w-full md:w-[74%] relative bg-white ml-auto">
        <div className="w-[92%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
