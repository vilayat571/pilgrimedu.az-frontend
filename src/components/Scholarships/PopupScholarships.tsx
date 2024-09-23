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
      <div className="bg-white w-auto h-auto mx-6 gap-y-2 flex flex-col rounded px-10 py-10 ">
        <p className="text-lg">
          <span className="font-black">Adı : </span>
          {data?.name}
        </p>
        <p>
          <span className="font-black">Ölkə : </span>
          {data?.country}, {data?.region}
        </p>
        <p>
          <span className="font-black">Tipi : </span>
          {data?.type}
        </p>
        <p className="flex">
          <span className="font-black ">Haqqında : </span>
          {data?.description}
        </p>
        <p>
          <span className="font-black">Təhsil pilləsi : </span>
          {data?.degree}
        </p>
        <p>
          <span className="font-black">Son müraciət tarixi : </span>
          {data?.deadline}
        </p>
        <button
          onClick={() => setData(null)}
          className=" px-4 w-20 py-3 mt-3 bg-[#8515ff] text-white rounded text-sm hover:bg-white hover:text-black transition duration-200"
        >
          Bağla
        </button>
      </div>
    </div>
  );
};

export default PopupScholarships;
