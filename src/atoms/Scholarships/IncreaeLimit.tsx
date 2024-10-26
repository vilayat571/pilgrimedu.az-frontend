import React from "react";
import { IScholarship } from "../../pages/Scholarships/Scholarships";

const IncreaseLimit: React.FC<{
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  holeData: IScholarship[] | null; // Changed to IBlog[]
  filteredData: IScholarship[] | undefined; // Changed to IBlog[]
}> = ({ setLimit, limit, holeData, filteredData }) => {
  const isDataExhausted = holeData?.length === filteredData?.length;

  return (
    <>
      {isDataExhausted || filteredData?.length==0 ? (
        <div className="my-7"></div>
      ) : (
        <div className="w-full flex items-center justify-center mt-12">
          <button
            disabled={isDataExhausted}
            onClick={() => setLimit(limit + 6)}
            className={`rounded px-5 py-3 bg-[#7924d3] text-white`}
          >
            Daha çox
          </button>
        </div>
      )}
    </>
  );
};

export default IncreaseLimit;
