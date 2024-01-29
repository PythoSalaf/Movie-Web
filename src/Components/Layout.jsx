import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import Skeleton from "react-loading-skeleton";
import {
  BsCpuFill,
  BsFillCollectionFill,
  BsFillEjectFill,
  BsFillXDiamondFill,
  BsSlashSquareFill,
} from "react-icons/bs";

const Layout = () => {
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
            <BsFillEjectFill size={20} />
            <Link to="/" className="text-lg font-serif">
              Explore
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsSlashSquareFill size={22} />
            <Link to="/" className="text-lg font-serif">
              {" "}
              Now Playing
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsFillXDiamondFill size={22} />
            <Link to="/" className="text-lg font-serif">
              Trending
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsCpuFill size={22} />
            <Link to="/" className="text-lg font-serif">
              Discovery
            </Link>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <BsFillCollectionFill size={22} />
            <Link to="/" className="text-lg font-serif">
              Popular movies
            </Link>
          </div>
        </div>
        <hr className="mt-[1.5rem] border-gray-400 w-[89%]" />
        <div className="w-[84%] mx-auto mt-[0.8rem]">
          <h2 className="capitalize font-serif text-xl">
            Lists of Popular TVs
          </h2>
          <div className="mt-2">
            <Skeleton count={8} width={150} height={20} className="mb-2" />
          </div>
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
