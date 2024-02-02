import React, { useState } from "react";
import { FiMenu, FiHeart, FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { BsBookmarkHeart } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex fixed top-0 items-center justify-center w-full h-[70px] py-2 bg-white z-10">
      <div className="w-[95%] md:w-[98%] flex items-center justify-between">
        <div className="flex items-center w-[60%] md:w-[30%] lg:w-[20%] gap-2 md:gap-4">
          <div className="block md:hidden cursor-pointer ">
            {!toggle ? (
              <FiMenu size={26} onClick={() => setToggle(!toggle)} />
            ) : (
              <VscChromeClose size={26} onClick={() => setToggle(!toggle)} />
            )}
          </div>
          <Link
            to="/"
            className="flex items-center text-xl md:text-2xl uppercase font-serif font-semibold"
          >
            Mv-<span className="text-red-600">Movie</span>
          </Link>
        </div>
        {toggle && (
          <div className="flex items-center  flex-col md:hidden bg-black w-[250px]  h-[50vh] absolute left-0 top-[4.2rem] rounded-r-lg">
            <Link
              to="/"
              className="text-white text-xl font-serif font-semibold mb-7 mt-9"
              onClick={() => setToggle(!toggle)}
            >
              Home
            </Link>
            <Link
              to="discovery"
              className="text-white text-xl font-serif font-semibold mb-7"
              onClick={() => setToggle(!toggle)}
            >
              Discovery
            </Link>
            <Link
              to="now-playing"
              className="text-white text-xl font-serif font-semibold mb-7"
              onClick={() => setToggle(!toggle)}
            >
              Now Playing
            </Link>
            <Link
              to="top-rated"
              className="text-white text-xl font-serif font-semibold mb-7"
              onClick={() => setToggle(!toggle)}
            >
              Top Rated
            </Link>
            <Link
              to="upcoming"
              className="text-white text-xl font-serif font-semibold "
              onClick={() => setToggle(!toggle)}
            >
              Upcoming{" "}
            </Link>
          </div>
        )}
        <div className="flex items-center justify-center w-full">
          <input
            type="search"
            className="border-[2px] border-black w-[60%] md:w-[60%] lg:w-[40%] h-[34px] md:h-[40px] rounded-l-xl  outline-none px-2"
          />
          <div className="border-[2px] h-[34px] md:h-[40px] flex items-center border-l-0 justify-center border-black px-[10px] rounded-r-xl ">
            <FiSearch size={20} />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 md:gap-5 ">
          <FiHeart
            size={26}
            onClick={() => navigate("favourite")}
            className="cursor-pointer"
          />
          <BsBookmarkHeart
            size={26}
            onClick={() => navigate("watch-later")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
