import React from "react";
import { IScholarship } from "./Scholarships";

const ShowScholarships: React.FC<{
  data: IScholarship[] | null | undefined;
  setData: React.Dispatch<React.SetStateAction<IScholarship | null>>;
}> = ({ data, setData }) => {
  return (
    <div className="grid grid-cols-3 mt-4 gap-4">
      {data?.map((scholarship: IScholarship) => {
        return (
          <div className="col-span-1 text-base  px-5 py-5 rounded bg-white text-black flex flex-col gap-2 items-start">
            <p className="text-lg">
              <span className="font-black">Adı : </span>
              {scholarship.name}
            </p>
            <p>
              <span className="font-black">Ölkə : </span>
              {scholarship.country}, {scholarship.region}
            </p>
            <p>
              <span className="font-black">Tipi : </span>
              {scholarship.type}
            </p>
            <p className="flex">
              <span className="font-black ">Haqqında : </span>
              {scholarship.description.slice(0, 10)}..
            </p>
            <p>
              <span className="font-black">Təhsil pilləsi : </span>
              {scholarship.degree.slice(0, 15)}
            </p>
            <p>
              <span className="font-black">Son müraciət tarixi : </span>
              {scholarship.deadline}
            </p>
            <button
              onClick={() => setData(scholarship)}
              className=" px-4 py-3 mt-3 bg-[#8515ff] text-white rounded text-sm"
            >
              Ətraflı oxu
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowScholarships;
