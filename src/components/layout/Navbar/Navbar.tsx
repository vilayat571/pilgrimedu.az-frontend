import { useState } from "react";
import Sidebar from "./Sidebar";
import Loqo from "../../../atoms/Layout/Loqo";
import { navhrefs, navhrefs2 } from "../../../modules/navrefs";
import Btnconsultasiya from "../../../atoms/Layout/Btnconsultasiya";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [mode, setMode] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleNavigationToResults = () => {
    navigate("/"); // Navigate to home page
    setTimeout(() => {
      window.location.hash = "#neticelerimiz"; // Set the hash after navigation
    }, 0);
  };

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

        <Sidebar mode={mode} setMode={setMode} />

        <div
          className="
        xl:flex lg:flex md:hidden sm:hidden
      flex-row gap-6 text-base tracking-wide"
        >
          {navhrefs.map((link) => {
            return (
              <a
                key={link.id}
                aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                className="text-white cursor-pointer"
                onClick={() => handleNavigationToResults()}
              >
                {link.text}
              </a>
            );
          })}
          {navhrefs2.map((link) => {
            return (
              <Link
                key={Math.random()}
                onClick={() => handleNavigationToResults()}
                aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                className="text-white"
                to={link.hrefs}
              >
                {link.text}
              </Link>
            );
          })}
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
