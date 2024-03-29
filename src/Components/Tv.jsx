import React, { useState } from "react";
import { useDiscoverTvQuery } from "../Features/MoviesSlice";
import Pagination from "./Pagination";
import TableSkeleton from "./TableSkeleton";

const Tv = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useDiscoverTvQuery(currentPage);
  const totalPage = data?.total_pages;
  const itemPerPage = 20;
  const startSerial = (currentPage - 1) * itemPerPage + 1;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return (
    <div className="overflow-x-auto">
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-black">
              <tr>
                <th className="p-2 border-b text-center text-white text-base md:text-lg lg:text-xl">
                  S/N
                </th>
                <th className="p-2 border-b text-center text-white text-base md:text-lg lg:text-xl">
                  Name
                </th>
                <th className="p-2 border-b text-center text-white text-base md:text-lg lg:text-xl">
                  First Air Date
                </th>
                <th className="p-2 border-b text-center text-white text-base md:text-lg lg:text-xl">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.results.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-2 px-1 border-b border-r text-center">
                    {startSerial + index}
                  </td>
                  <td className="py-2 px-1 border-b border-r text-center">
                    {item.name}
                  </td>
                  <td className="py-2 px-1 border-b border-r text-center">
                    {item.first_air_date}
                  </td>
                  <td className="py-2 px-1 border-b border-r text-center">
                    {Math.round(item.popularity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="w-full mt-2  mb-3 flex justify-center items-center md:justify-end md:items-end relative">
        <Pagination total={totalPage} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Tv;
