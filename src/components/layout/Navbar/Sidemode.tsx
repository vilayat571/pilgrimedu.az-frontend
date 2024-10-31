import React from "react";
import {  IIHrefs } from "../../../modules/navrefs";
import { services } from "../../../modules/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Loqo from "../../../atoms/Layout/Loqo";
import Btnconsultasiya from "../../../atoms/Layout/Btnconsultasiya";

const Sidemode: React.FC<{
  mode: boolean;
  hrefs: IIHrefs[];
  setMode: (mode: boolean) => void;
}> = ({ mode, setMode, hrefs }) => {
  return (
    <>
      {mode && (
        <div
          className=" fixed top-0 left-0 
w-full h-screen z-10 bg-[#210442] xl:px-0 lg:px-20 md:px-4 sm:px-0 pt-4 text-white"
        >
          <div className="flex justify-between  items-center">
            <Loqo />
            <div
              onClick={() => setMode(false)}
              className=" top-1 md:block sm:block  relative right-2"
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="bg-[#6f2eb7] p-2 mr-2 rounded text-white text-xl"
              />
            </div>
          </div>
          <div
            onClick={() => setMode(false)}
            className="flex flex-col gap-y-8 pl-4 mt-6"
          >
            <div className="flex flex-col gap-y-4">
              {hrefs.map((link: IIHrefs) => {
                return (
                  <a
                    key={link.id}
                    aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                    className="text-white block"
                    href={link.hrefs}
                  >
                    {link.text}
                  </a>
                );
              })}
              {services.map((service) => (
                <a
                  aria-label="Pilgrim EDU MMC xidmətinə aparan link"
                  href="/#xidmetlerimiz"
                  key={service.id}
                  className="block hover:underline"
                >
                  {service.title}
                </a>
              ))}
            </div>
            <div className="flex-row text-sm  ">
              <Btnconsultasiya />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidemode;
