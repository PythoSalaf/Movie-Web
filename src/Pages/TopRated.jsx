import React, { useState } from "react";
import { Pagination, SkeletonCard } from "../Components";
import { About } from "../Assets";
import { Link } from "react-router-dom";
import { useTopRatedQuery } from "../Features/MoviesSlice";

const TopRated = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useTopRatedQuery(currentPage);
  const totalPage = data?.total_pages;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return (
    <div className="mt-5">
      <h2 className="mb-5 font-semibold text-xl md:text-2xl font-serif capitalize">
        Top Rated movies
      </h2>
      {isLoading ? (
        <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {[...Array(8).keys()].map((index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {data?.results?.map((item) => (
            <Link
              to={`/movies/${item.id}`}
              className="w-[270px] h-[260px] md:h-[250px] bg-gray-100 px-1 rounded-lg md:w-full mb-3"
              key={item.id}
            >
              <img
                src={
                  `http://image.tmdb.org/t/p/w500/${item.poster_path}` || About
                }
                alt={item.title}
                className="w-full h-[160px] rounded-lg"
              />
              <h4 className="w-full overflow-hidden hover:overflow-visible truncate text-sm mt-[9px] md:mt-[7px] mb-1 md:text-base font-semibold md:font-bold">
                {item.title}
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[70px]  rounded-full mt-2">
                    <img
                      src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt={item.title}
                      className="w-[40px] h-[40px]  rounded-full"
                    />
                  </div>
                  <div className="w-full flex items-center gap-1">
                    <h2 className="font-semibold text-sm md:text-base">
                      Popularity :
                    </h2>
                    <h2 className="font-semibold text-sm md:text-base">
                      {item.popularity}
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

export default TopRated;
