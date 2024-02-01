import React, { useState } from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { useDiscoverMoviesQuery } from "../Features/MoviesSlice";
import Pagination from "./Pagination";
import { About } from "../Assets";
import { Link } from "react-router-dom";

const Movie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useDiscoverMoviesQuery(currentPage);
  const totalPage = data?.total_pages;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return (
    <div>
      <h2 className="mb-4 font-semibold text-xl md:text-2xl font-serif capitalize">
        Movie
      </h2>
      {isLoading ? (
        <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {[...Array(8).keys()].map((index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {data?.results?.map((item) => (
            <Link
              to={`/movies/${item.id}`}
              className="w-[250px] md:w-full mb-3"
              key={item.id}
            >
              <img
                src={
                  `http://image.tmdb.org/t/p/w500/${item.poster_path}` || About
                }
                alt={item.title}
                className="w-full h-[150px] rounded-lg"
              />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px]  rounded-full mt-2">
                    <img
                      src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt={item.title}
                      className="w-[40px] h-[40px]  rounded-full"
                    />
                  </div>
                  <h4 className="w-full text-[12px] md:text-base font-semibold md:font-bold ">
                    {item.title}
                  </h4>
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

export default Movie;
