import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Statistic } from "../../modules/statistic";

const Statisticard: React.FC<Statistic> = ({ icon, value, label, color }) => {


  return (
    <div className="col-span-1 mx-auto p
    xl:w-full md:w-full sm:w-full lg:w-full
     bg-[#210442] rounded-xl xl:px-8 lg:px-8 md:px-2 sm:px-3
    
    xl:py-12 lg:py-12 md:py-12 sm:py-12 flex justify-center items-center">
      <div className="flex flex-row items-center justify-center  sm:justify-between gap-8 w-full">
        <div
          className={`p-8 xl:w-32 lg:w-32 md:w-32 sm:w-24 xl:h-32 lg:h-32 md:h-32 sm:h-24 
            ${color}
 rounded-full flex justify-center  items-center `}
        >
          <FontAwesomeIcon
            className="xl:text-7xl lg:text-5xl md:text-6xl sm:text-5xl text-[#fff]"
            icon={icon}
          />
        </div>
        <div className="flex flex-col text-white tracking-wider ml-">
          <p>
            <span className="xl:text-7xl lg:text-7xl md:text-7xl sm:text-5xl text-white">
              {value}
            </span>
            <sub className="text-white xl:text-7xl lg:text-7xl md:text-7xl sm:text-4xl">
              +
            </sub>
          </p>
          <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-[14px] text-[#fff] py-2">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statisticard;
