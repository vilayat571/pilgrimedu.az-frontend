import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Loqo from "../../../atoms/Layout/Loqo";
import { homeHrefs, IIHrefs, pagesRefs } from "../../../modules/navrefs";
import Btnconsultasiya from "../../../atoms/Layout/Btnconsultasiya";
import { useLocation } from "react-router-dom";
import Navbardetail from "./Navbardetail";

function Navbar() {
  const [mode, setMode] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [hrefs, setHrefs] = useState<IIHrefs[]>(homeHrefs);

  useEffect(() => {
    if (pathname == "/") {
      setHrefs(homeHrefs);
    } else {
      setHrefs(pagesRefs);
    }
  }, [setHrefs, pathname]);

  return (
    <div
      id="nav"
      className="w-full sticky top-0 z-10 gradient flex justify-center bg-[#210442] items-center"
    >
      <div
        className="flex gradient3 flex-row xl:w-4/5 lg:w-full md:w-full sm:w-full
    justify-between xl:px-0 lg:px-20 md:px-4 sm:px-0 items-center 
      py-4 "
      >
        <Loqo />
        <Sidebar hrefs={hrefs} mode={mode} setMode={setMode} />
        <Navbardetail hrefs={hrefs} />
        <div
          className="flex-row text-sm       
      xl:flex lg:flex md:hidden sm:hidden"
        >
          <Btnconsultasiya />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
