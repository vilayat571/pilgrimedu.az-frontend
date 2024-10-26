import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Btnconsultasiya = () => {
  const token = localStorage.getItem("token") || null;
  const user =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user") || "");
  return (
    <div
      className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col
     xl:items-center lg:items-center md:items-start sm:items-start gap-6"
    >
      <a
        aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
        className="px-6 border border-white text-nowrap text-[#fff] text-sm
         hover:bg-white hover:text-black tracking-widest py-4 flex items-center xl:flex md:hidden sm:hidden lg:hidden  rounded transition duration-200"
        target="blank"
        href="https://wa.me/994705959023"
      >
        Konsultasiya
      </a>
      <Link
        className={
          "px-7 bg-[#6F2EB6] text-[#fff] text-nowrap hover:bg-white hover:text-black tracking-widest py-4  flex cursor-pointer items-center rounded transition duration-200"
        }
        to={token ? `/istifadechihesabı` : "/daxilol"}
      >
        {token != null && <FontAwesomeIcon className="mr-2" icon={faUser} />}
        {token != null ? user?.username : "Daxil ol"}
      </Link>
    </div>
  );
};

export default Btnconsultasiya;
