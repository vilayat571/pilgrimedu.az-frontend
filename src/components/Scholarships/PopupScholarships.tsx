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
        className="bg-white xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-full h-auto 
     xl:mx-6 lg:mx-6 md:mx-6 sm:mx-0  gap-y-2 flex flex-col rounded 
     xl:px-10 lg:px-10 md:px-10 sm:px-4
      xl:py-10 lg:py-10 md:py-10 sm:py-4
"
      >
          <p className="mt-4 flex">
          <span className="px-3 py-2 text-base text-nowrap border-[1px] border-[#c8c8c8] mb-1 rounded text-center  ">
            Tipi:
          </span>
          <span className="w-full px-2 mt-2 text-left">{data?.type},</span>
        </p>
        
        <p className="mt-4 flex">
          <span className="px-3 py-2 text-base text-nowrap border-[1px] border-[#c8c8c8] mb-1 rounded text-center  ">
            Ölkə:
          </span>
          <span className="w-full px-2 mt-2 text-left">{data?.region},</span>
        </p>

        <p className="mt-4 flex">
          <span className="px-3 py-2 text-base text-nowrap border-[1px] border-[#c8c8c8] mb-1 rounded text-center  ">
            Təqaüd:
          </span>
          <span className="w-full px-2 mt-2 text-left">{data?.name},</span>
        </p>
     
      
     
        <p className="mt-4 flex">
          <span className="px-3 py-2 text-base text-nowrap border-[1px] border-[#c8c8c8] mb-1 rounded text-center  ">
            Təhsil pilləsi:
          </span>
          <span className="w-full px-2 mt-2 text-left">{data?.degree},</span>
        </p>
        <p className="mt-4 flex">
          <span className="px-3 py-2 text-base text-nowrap border-[1px] border-[#c8c8c8] mb-1 rounded text-center  ">
            Son müraciət tarixi:
          </span>
          <span className="w-full px-2 mt-2 text-left">{data?.deadline},</span>
        </p>

        <p className="mt-4 ">
          <span className="px-3 py-2 text-base text-nowrap border-[1px] border-[#c8c8c8] mb-1 rounded text-center  ">
            Haqqında:
          </span>
          <span className="w-full px-2 mt-5 text-left block  ">{data?.description}</span>
        </p>

        <button
          onClick={() => setData(null)}
          className=" px-5 w-20 py-3 mt-3 border-[1px] border-[#c8c8c8]  hover:text-white rounded text-sm hover:bg-[#16022C] bg-white text-black transition duration-200"
        >
          Bağla
        </button>
      </div>
    </div>
  );
};

export default PopupScholarships;
