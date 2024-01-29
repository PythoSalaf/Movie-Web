import React from "react";
import { FiMenu, FiHeart, FiSearch } from "react-icons/fi";
import { BsBookmarkHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex fixed top-0 items-center justify-center w-full py-2 bg-white z-10">
      <div className="w-[95%] md:w-[98%] flex items-center justify-between">
        <div className="flex items-center w-[60%] md:w-[30%] lg:w-[20%] gap-2 md:gap-4">
          <FiMenu size={26} />
          <h2 className="flex items-center text-base md:text-xl">Mv-Movie</h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            type="search"
            className="border-[2px] border-black w-[60%] md:w-[60%] lg:w-[40%] h-[34px] md:h-[40px] rounded-l-xl  outline-none px-2"
          />
          <div className="border-[2px] h-[34px] md:h-[40px] flex items-center border-l-0 justify-center border-black px-[10px] rounded-r-xl ">
            <FiSearch size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-5 ">
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
