import { IService } from "../../modules/services";
import ServicesMap from "./ServicesMap";
import Popup from "./Popup";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ServicesContext = ({
    data,
    setData,
  }: {
    data: IService | null;
    setData: React.Dispatch<React.SetStateAction<IService | null>>;
  }) => {

  return (
    <div id="xidmetlerimiz" className="bg-[#210442] w-full xl:px-12 rounded-xl lg:px-28 md:px-12 3 lg:mb-0 xl:my-6 lg:my-0 md:my-16 sm:my-8 text-[#fff]">
    <Popup data={data} setData={setData} />
    <ServicesMap setData={setData} />
  </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ServicesContext)
