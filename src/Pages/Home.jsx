import React, { useState } from "react";
import { GenreList, Pagination, SkeletonCard } from "../Components";
import { usePopularMoviesQuery } from "../Features/MoviesSlice";
import { Link } from "react-router-dom";
import { About } from "../Assets";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: Movies, isLoading } = usePopularMoviesQuery(currentPage);
  console.log("Movies Data", Movies);
  const totalPage = Movies?.total_pages;
  console.log("Total Page", totalPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className="w-full mt-[0.8rem]">
      <hr className="mb-[0.7rem] border-gray-400 w-full" />
      <div className=" w-full flex items-center gap-6 mx-[]6px">
        <GenreList />
      </div>
      <hr className="mt-[0.7rem] border-gray-400 w-full" />
      <h2 className="font-serif text-xl md:text-2xl mt-2 mb-4">
        Popular Movies
      </h2>
      {isLoading ? (
        <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {[...Array(8).keys()].map((index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {Movies?.results?.map((item) => (
            <Link
              to={`/movies/${item.id}`}
              className="w-[250px] md:w-full mb-1"
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

export default Home;
