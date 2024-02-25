import React, { useState } from "react";
import { Pagination, SkeletonCard } from "../Components";
import { useNowPlayingQuery } from "../Features/MoviesSlice";
import { Link } from "react-router-dom";
import { About, About1 } from "../Assets";

const NowPlaying = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useNowPlayingQuery(currentPage);
  const totalPage = data?.total_pages;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return (
    <div className="mt-4">
      <h2 className="mb-4 font-semibold text-xl md:text-2xl font-serif capitalize">
        Now Playing
      </h2>
      {isLoading ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {[...Array(8).keys()].map((index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {data?.results?.map((item) => (
            <Link
              to={`/movies/${item.id}`}
              className="w-[250px] md:w-full mb-3 bg-white rounded-lg pb-[6px] px-[6px] shadow-custom"
              key={item.id}
            >
              <img
                src={
                  item.poster_path
                    ? `http://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : About1
                }
                alt={item.title}
                className="w-full h-[150px] rounded-lg"
              />
              <h4 className="w-full overflow-hidden hover:overflow-visible truncate text-[12px] mt-[7px] mb-1 md:text-[15px] font-semibold md:font-bold">
                {item.title}
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[60px]  rounded-full mt-2">
                    <img
                      src={
                        item.backdrop_path
                          ? `http://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                          : About
                      }
                      alt={item.title}
                      className="w-[41px] h-[41px]  rounded-full"
                    />
                  </div>
                  <div className="w-full flex items-center gap-1">
                    <h2 className="font-semibold text-sm md:text-base">
                      Popularity :
                    </h2>
                    <h2 className="font-semibold text-sm md:text-base">
                      {Math.round(item.popularity)}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="w-full mt-2  mb-3 flex justify-center items-center md:justify-end md:items-end relative">
        <Pagination total={totalPage} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default NowPlaying;
