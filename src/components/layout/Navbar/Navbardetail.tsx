import { IIHrefs } from "../../../modules/navrefs";
import { Link } from "react-router-dom";

const Navbardetail: React.FC<{ hrefs: IIHrefs[] }> = ({ hrefs }) => {
  return (
    <div
      className="
  xl:flex lg:flex md:hidden sm:hidden
flex-row text-base tracking-wide"
    >
      {hrefs.map((link: IIHrefs, index) =>
        hrefs.length > 3 ? (
          <a
            key={index}
            aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
            className="text-white hover:bg-[#6F2EB5] transition duration-200 px-4 py-2 rounded"
            href={link.hrefs}
          >
            {link.text}
          </a>
        ) : (
          <Link
            key={index}
            aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
            className="text-white hover:bg-[#6F2EB5] transition duration-200 px-4 py-2 rounded"
            to={link.hrefs}
          >
            {link.text}
          </Link>
        )
      )}
    </div>
  );
};

export default Navbardetail;
