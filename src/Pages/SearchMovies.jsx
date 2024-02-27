import React from "react";
import { useSelector } from "react-redux";
import { SkeletonCard } from "../Components";
import { Link } from "react-router-dom";
import { About, About1 } from "../Assets";
const SearchMovies = () => {
  const { data, loading, error } = useSelector((state) => state.search);
  console.log("Latest Data", data);
  if (error) {
    return <div>{error?.message}</div>;
  }
  return (
    <div className="mt-6">
      {loading ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {[...Array(8).keys()].map((index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {data?.map((item) => (
            <Link
              to={`/movies/${item.id}`}
              className="w-[270px] h-[260px] md:h-[250px] bg-gray-100 px-1 rounded-lg md:w-full mb-3"
              key={item.id}
            >
              <img
                src={
                  item.poster_path
                    ? `http://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : About1
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
                      src={
                        item.backdrop_path
                          ? `http://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                          : About
                      }
                      alt={item.title}
                      className="w-[40px] h-[40px]  rounded-full"
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
    </div>
  );
};

export default SearchMovies;
