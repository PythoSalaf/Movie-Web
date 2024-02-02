import React, { useState } from "react";
import { GenreList, Pagination, SkeletonCard } from "../Components";
import {
  useNowPlayingQuery,
  usePopularMoviesQuery,
} from "../Features/MoviesSlice";
import { Link, useNavigate } from "react-router-dom";
import { About } from "../Assets";

const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: Movies, isLoading } = usePopularMoviesQuery(currentPage);
  console.log(Movies);
  const { data: NowPlaying } = useNowPlayingQuery();
  const totalPage = Movies?.total_pages;
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
      <h2 className="font-serif text-xl md:text-2xl font-semibold mt-2 mb-4">
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
      <div className="w-full mt-10 mb-4">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-xl md:text-2xl font-semibold mt-2 mb-4 capitalize">
            now playing
          </h3>
          <button
            className="bg-white border border-black text-black rounded-lg px-4 font-semibold text-base lg:text-lg py-1"
            onClick={() => navigate("now-playing")}
          >
            More
          </button>
        </div>
        {isLoading ? (
          <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {[...Array(8).keys()].map((index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {NowPlaying?.results?.map((item) => (
              <Link
                to={`/movies/${item.id}`}
                className="w-[250px] md:w-full mb-3 bg-white rounded-lg pb-[6px] px-[6px] shadow-custom"
                key={item.id}
              >
                <img
                  src={
                    `http://image.tmdb.org/t/p/w500/${item.poster_path}` ||
                    About
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
                        src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt={item.title}
                        className="w-[41px] h-[41px]  rounded-full"
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
      </div>
    </div>
  );
};

export default Home;
