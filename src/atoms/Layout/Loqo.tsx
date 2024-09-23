import { Link } from "react-router-dom";
import pilgrim_logo from "../../assets/images/pilgrim_logo.png";
import pilgrim_logo2 from "../../assets/images/pilgrim_logo2.png";
import { useState } from "react";

const Loqo = () => {
  const [logoUrl, setLogoUrl] = useState<string>(pilgrim_logo);

  const handleHover = (caseImg: boolean) => {
    setLogoUrl(caseImg ? pilgrim_logo2 : pilgrim_logo);
  };

  return (
    <Link
      onMouseOver={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      to="/"
      className="relative lg:right-5 transition duration-200"
      role="logo"
    >
      <img
        className="w-48"
        src={logoUrl}
        alt="The logo of Pilgrim MMC"
      />
    </Link>
  );
};

export default Loqo;
