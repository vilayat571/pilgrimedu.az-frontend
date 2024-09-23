import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Loqo from "../../../atoms/Layout/Loqo";
import { homeHrefs, IIHrefs, pagesRefs } from "../../../modules/navrefs";
import Btnconsultasiya from "../../../atoms/Layout/Btnconsultasiya";
import { Link, useLocation } from "react-router-dom";

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
      className="w-full sticky top-0 z-50 gradient flex justify-center bg-[#210442] items-center"
    >
      <div
        className="flex gradient3 flex-row xl:w-4/5 lg:w-full md:w-full sm:w-full
    justify-between xl:px-0 lg:px-20 md:px-4 sm:px-0 items-center 
      py-4 "
      >
        <Loqo />

        <Sidebar hrefs={hrefs} mode={mode} setMode={setMode} />

        <div
          className="
        xl:flex lg:flex md:hidden sm:hidden
      flex-row gap-2 text-base tracking-wide"
        >
          {hrefs.map((link: IIHrefs, index) =>
            hrefs.length > 3 ? (
              <a
                key={index}
                aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                className="text-white hover:bg-white hover:text-black transition duration-200 px-4 py-2 rounded"
                href={link.hrefs}
              >
                {link.text}
              </a>
            ) : (
              <Link
                key={index}
                aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                className="text-white hover:bg-white hover:text-black transition duration-200 px-4 py-2 rounded"
                to={link.hrefs}
              >
                {link.text}
              </Link>
            )
          )}
        </div>

        <div
          className=" flex-row gap-5 text-[15px]         
      xl:flex lg:flex md:hidden sm:hidden
"
        >
          <Btnconsultasiya />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
