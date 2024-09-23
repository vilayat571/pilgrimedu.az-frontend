import React from "react";
import { optionsDegree } from "../../modules/options";

const Options: React.FC<{ filterData: (value: string) => void }> = ({
  filterData,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row gap-x-5 mt-1 mb-6 overflow-auto items-start">
        {optionsDegree.map((option) => {
          return (
            <button
              className="text-white inline rounded bg-[#7924d3] px-4 py-3 whitespace-nowrap "
              key={option.id}
              onClick={() => filterData(option.value)}
            >
              {option.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
