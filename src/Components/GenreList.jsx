import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import { useGenreQuery } from "../Features/MoviesSlice";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const GenreList = () => {
  const { data, isLoading, error } = useGenreQuery();
  console.log("Data", data);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    draggable: true,
    prevArrow: <FaArrowAltCircleLeft color="black" />,
    nextArrow: <FaArrowAltCircleRight color="black" />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (error) {
    return (
      <h2 className="flex items-center justify-center w-full text-red-600">
        something went wrong
      </h2>
    );
  }

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex items-center gap-4 flex-row">
          <Skeleton containerClassName="flex-1" height={30} />
          <Skeleton containerClassName="flex-1" height={30} />
          <Skeleton containerClassName="flex-1" height={30} />
          <Skeleton containerClassName="flex-1" height={30} />
        </div>
      ) : (
        <Slider {...settings}>
          {data?.genres?.map((item) => (
            <div key={item.id} className="px-2">
              <h3 className="flex items-center justify-center px-2 py-1 text-sm bg-gray-400 rounded-lg md:text-base">
                {item.name}
              </h3>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default GenreList;
