import React from "react";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";

const IncreaseLimit: React.FC<{
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  holeData: IBlog[] | null | undefined; // Accepting IBlog[] | null | undefined
  filteredData: IBlog[] | undefined; // Accepting IBlog[] | undefined
}> = ({ setLimit, limit, holeData, filteredData }) => {
  const isDataExhausted = holeData?.length === filteredData?.length;

  return (
    <>
      {isDataExhausted ? (
        <div className="my-7"></div>
      ) : (
        <div className="w-full flex items-center justify-center mt-12">
          {!isDataExhausted && filteredData?.length!=0  && (
            <button
              disabled={isDataExhausted}
              onClick={() => setLimit(limit + 6)}
              className={`rounded px-5 py-3 bg-[#7924d3] text-white`}
            >
              Daha çox
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default IncreaseLimit;
