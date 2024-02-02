import React from "react";
import {
  useMovieDetailQuery,
  useSimilarMoviesQuery,
} from "../Features/MoviesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { About } from "../Assets";
import { SkeletonCard } from "../Components";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useMovieDetailQuery(id);
  const { data: similarMovies, isLoading } = useSimilarMoviesQuery(id);

  if (error) {
    console.log("Something went wromg");
  }

  return (
    <div className="w-full mt-5">
      <div
        className="w-[80px] px-2 py-1 mb-6 rounded-lg  bg-black cursor-pointer  flex items-center justify-center"
        onClick={() => navigate("/", { replace: true })}
      >
        <HiArrowNarrowLeft color="white" size={25} />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 md:items-start md:gap-3 md:flex-row">
        <div className="w-full flex items-center md:items-start justify-center md:justify-start flex-col">
          <img
            src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}` || About}
            alt={data?.name}
            className="w-[95%] md:w-[80%] h-[180px] md:h-[210px] rounded-lg"
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {data?.title}
          </h2>
          <div className="flex items-center gap-3 my-3 ">
            <h3 className="font-semibold text-base lg:text-lg">
              Released Date:
            </h3>
            <h3 className="font-semibold text-base lg:text-lg">
              {data?.release_date}
            </h3>
          </div>
          <div className="flex items-center gap-3 mb-3 ">
            <h3 className="font-semibold text-base lg:text-lg capitalize">
              popularity:
            </h3>
            <h3 className="font-semibold text-base lg:text-lg">
              {data?.popularity}
            </h3>
          </div>
          <div className="flex items-center gap-3 mb-3 ">
            <h3 className="font-semibold text-base lg:text-lg capitalize">
              status:
            </h3>
            <h3 className="font-semibold text-base lg:text-lg">
              {data?.status}
            </h3>
          </div>
          <p className="font-serif text-base lg:text-lg">{data?.overview}</p>
          <div className="flex items-start justify-center md:justify-normal gap-4 mt-4">
            <button className="bg-black text-white text-sm md:text-base lg:text-lg font-semibold capitalize px-3 py-1 rounded-lg">
              add to Favourite
            </button>
            <button className="bg-black text-white text-sm md:text-base lg:text-lg font-semibold capitalize px-3 py-1 rounded-lg">
              add to watch list
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <h2 className="mb-4 font-serif text-xl font-semibold capitalize md:text-2xl">
          similar movies
        </h2>
        {isLoading ? (
          <div className="w-full grid grid-cols-1 gap-4 my-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {[...Array(8).keys()].map((index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 gap-4 mt-3 mb-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {similarMovies?.results?.map((item) => (
              <div
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
