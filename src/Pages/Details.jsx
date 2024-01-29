import React from "react";
import { useMovieQuery } from "../Features/MoviesSlice";
import { useParams } from "react-router-dom";
import { About } from "../Assets";

const Details = () => {
  const { id } = useParams();
  const { data, error } = useMovieQuery(id);
  console.log("DATA", data);

  if (error) {
    console.log("Something went wromg");
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 md:items-start md:gap-3 md:flex-row">
      <div className="w-full">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          similique.
        </h2>
        <img
          src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}` || About}
          alt={data?.name}
        />
        <h2>{data?.id}</h2>
      </div>
      <div className="w-full md:w-[70%] h-[90vh] shadow-custom overflow-y-auto">
        <h2 className="py-2 font-serif text-lg text-center capitalize md:text-xl">
          similar movies
        </h2>
        <div className="w-full mt-2">
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-5 w-[90%] mx-auto mb-3">
            <div className="w-[140px]">
              <img
                src={About}
                alt="about"
                className="w-[85%] h-16 rounded-lg"
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
