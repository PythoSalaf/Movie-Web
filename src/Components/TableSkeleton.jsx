import React from "react";
import Skeleton from "react-loading-skeleton";

const TableSkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-500">
        <thead>
          <tr>
            {Array.from({ length: 4 }, (_, index) => (
              <th
                key={index}
                className="p-2 border-b border-gray-500 text-center"
              >
                <Skeleton width={90} height={20} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 4 }, (_, colIndex) => (
                <td
                  key={colIndex}
                  className="p-2 border-b border-r border-black text-center"
                >
                  <Skeleton width={70} height={20} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
