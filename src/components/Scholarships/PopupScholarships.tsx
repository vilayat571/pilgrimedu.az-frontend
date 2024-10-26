import React from "react";
import { IScholarship } from "../../pages/Scholarships/Scholarships";
import styles from "../../assets/styles/PopupSc.module.css";

const PopupScholarships: React.FC<{
  data: IScholarship | null;
  setData: React.Dispatch<React.SetStateAction<IScholarship | null>>;
}> = ({ data, setData }) => {
  return (
    <div
      className={`
        ${
          data != null ? styles.open : styles.close
        } flex items-center justify-center`}
    >
      <div
        className="bg-white xl:w-auto lg:w-auto md:w-auto sm:w-full h-auto 
     xl:mx-6 lg:mx-6 md:mx-6 sm:mx-0  gap-y-2 flex flex-col rounded 
     xl:px-10 lg:px-10 md:px-10 sm:px-4
      xl:py-10 lg:py-10 md:py-10 sm:py-4
"
      >
        <p className="mb-3">
          <span className="font-black bg-black text-white px-2 py-2 text-sm  inline-block rounded  ">
            Təqad:
          </span>
          <p className="w-full px-2 mt-2 text-left">{data?.name}</p>
        </p>
        <p className="mt-2">
          <span className="font-black bg-black text-white px-2 py-2 text-sm  inline-block rounded  ">
            Ölkə:
          </span>
          <p className="w-full px-2 mt-2 text-left">{data?.region}</p>
        </p>
        <p className="mt-2">
          <span className="font-black bg-black text-white px-2 py-2 text-sm  inline-block rounded  ">
            Tipi:
          </span>
          <p className="w-full px-2 mt-2 text-left">{data?.type}</p>
        </p>
        <p className="mt-2">
          <span className="font-black bg-black text-white px-2 py-2 text-sm  inline-block rounded  ">
            Haqqında:
          </span>
          <p className="w-full px-2 mt-2 text-left">{data?.description}</p>
        </p>
        <p className="mt-2">
          <span className="font-black bg-black text-white px-2 py-2 text-sm  inline-block rounded  ">
            Təhsil pilləsi:
          </span>
          <p className="w-full px-2 mt-2 text-left">{data?.degree}</p>
        </p>
        <p className="mt-2">
          <span className="font-black bg-black text-white px-2 py-2 text-sm  inline-block rounded  ">
            Son müraciət tarixi:
          </span>
          <p className="w-full px-2 mt-2 text-left">{data?.deadline}</p>
        </p>

        <button
          onClick={() => setData(null)}
          className=" px-5 w-20 py-3 mt-3 border-[1px]  hover:text-white rounded text-sm hover:bg-black bg-white text-black transition duration-200"
        >
          Bağla
        </button>
      </div>
    </div>
  );
};

export default PopupScholarships;
