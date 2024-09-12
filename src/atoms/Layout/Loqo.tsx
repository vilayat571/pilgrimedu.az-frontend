import { Link } from "react-router-dom";
import pilgrim_logo from "../../assets/images/pilgrim_logo.png";

const Loqo = () => {
  return (
    <Link to="/" className="relative lg:right-5" role="logo">
      <img
        className="sm:w-[110px] lg:w-auto"
        src={pilgrim_logo}
        alt="The logo of Pilgrim MMC"
      />
    </Link>
  );
};

export default Loqo;
