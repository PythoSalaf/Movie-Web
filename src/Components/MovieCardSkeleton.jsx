import React from "react";
import Skeleton from "react-loading-skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="w-[250px] md:w-full mb-3 ">
      <div className="w-full h-[150px] ">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex items-center gap-3 mt-2">
        <Skeleton circle={true} height={45} width={45} />
        <Skeleton height={28} containerClassName="flex-1" />
      </div>
      <div className="mt-2">
        <Skeleton height={40} />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
