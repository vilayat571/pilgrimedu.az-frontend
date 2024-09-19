import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Btnconsultasiya = () => {
  const token = localStorage.getItem("token") || null;
  const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") || '');
  return (
    <Link
      className={
        !token
          ? "px-6 bg-[#fff] text-[#000] tracking-widest py-4 flex items-center rounded"
          : "text-white text-lg"
      }
      to={token ? `/istifadechihesabı` :"/daxilol"}
    >
      {token!=null && <FontAwesomeIcon className="mr-2" icon={faUser} />}
      {token!=null ? user.username : "Daxil ol"}
    </Link>
  );
};

export default Btnconsultasiya;
