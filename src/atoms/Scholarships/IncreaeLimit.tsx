import React from "react";
import { IScholarship } from "../../pages/Scholarships/Scholarships";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";

const IncreaeLimit: React.FC<{
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  holeData: IScholarship[] | null;
  filteredData: IScholarship[] | undefined | IBlog;
}> = ({ setLimit, limit, holeData, filteredData }) => {
  return (
    <>
      {holeData?.length == filteredData?.length ? (
        <div className="my-7"></div>
      ) : (
        <div className="w-full flex items-center justify-center mt-12">
          <button
            disabled={holeData?.length == filteredData?.length && true}
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

export default IncreaeLimit;
