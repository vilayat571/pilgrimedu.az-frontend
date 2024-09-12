import { useState } from "react";
import pilgrim_logo from "../../../assets/images/pilgrim_logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mode, setMode] = useState<boolean>(false);

  return (
    <div
      className="flex flex-row w-full
    justify-between xl:px-20 lg:px-20 md:px-4 sm:px-8 items-center 
     bg-[#0F0916] py-2 "
    >
      <Link to="/" role="logo">
        <img
          className="sm:w-24 lg:w-auto"
          src={pilgrim_logo}
          alt="the logo of Pilgrim MMC"
        />
      </Link>

      <div
        onClick={() => setMode(!mode)}
        className="xl:hidden lg:hidden md:block sm:block"
      >
        {!mode ? (
          <FaBars color="white" size={24} />
        ) : (
          <FaTimes color="white" size={24} />
        )}
      </div>

      {mode && <div
        className=" fixed top-14 left-0 
w-full h-screen z-10 bg-[#0F0916] p-6 text-white"
      >
        lorem
      </div> }

      <div
        className="
        xl:flex lg:flex md:hidden sm:hidden
      flex-row gap-6"
      >
        <Link className="text-white" to={"/teqaudler"}>
          Təqaüdlər
        </Link>
        <Link className="text-white" to={"/bloqlar"}>
          Bloqlar
        </Link>
        <a
          aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
          className="text-white"
          href="/"
        >
          Biz kimik?
        </a>
        <a
          aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
          className="text-white"
          href="#neticelerimiz"
        >
          Nəticələrimiz
        </a>
      </div>

      <div
        className=" flex-row gap-5 text-[15px]         
      xl:flex lg:flex md:hidden sm:hidden
"
      >
        <a
          aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
          className="px-4 bg-white text-black py-3 rounded"
          target="blank"
          href="https://wa.me/994508908727"
        >
          Konsultasiya
        </a>
        <Link
          className=" border-white border-[1px] px-6 text-white rounded py-3"
          to="/daxilol"
        >
          Daxil ol
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
