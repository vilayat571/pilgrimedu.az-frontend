import { ReactNode, useEffect } from "react";
import Loqo from "../../atoms/Layout/Loqo";
import { pagesRefs } from "../../modules/navrefs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserAltSlash } from "@fortawesome/free-solid-svg-icons/faUserAltSlash";
import { services } from "../../modules/services";

const DahsboardLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token") || null;

  useEffect(() => {
    if (token == null) {
      navigate("/");
    }
  }, [navigate, token]);

  const logOut = () => {
    const ans = confirm("Hesabdan çıxmaq istəyirsiniz?");
    if (ans) {
      toast("Hesabdan uğurla çıxdınız!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "green",
          color: "white",
          borderRadius: "3px",
          fontFamily: "Poppins",
          zIndex: "999",
        },
      });
      localStorage.clear();

      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <>
      {token != null && (
        <>
          {" "}
          <ToastContainer />
          <div className="bg-[#16022C] h-screen grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-1 sm:grid-cols-1">
            <div
              id="sidebar"
              className="col-span-1 xl:py-16 lg:py-16 md:py-3 sm:py-3 
  xl:justify-normal lg:justify-normal md:justify-between sm:justify-between
  xl:pl-12 lg:pl-12 md:pl-0 sm:pl-0 flex xl:items-start lg:items-start md:items-center sm:items-center
  xl:flex-col lg:flex-col md:flex-row sm:flex-row
  xl:h-screen lg:h-screen md:h-auto sm:h-auto "
            >
              <Loqo />
              <div
                id="links"
                className="xl:flex lg:flex md:hidden sm:hidden flex-col gap-y-4 text-lg mt-6"
              >
                {pagesRefs.map((link) => (
                  <a
                    key={link.id}
                    aria-label="The anchor tag to redirect WhatsApp account of Pilgrim MMC"
                    className="text-white block"
                    href={link.hrefs}
                  >
                    {link.text}
                  </a>
                ))}
                {services.map((service) => (
                  <a
                    aria-label="Pilgrim EDU MMC xidmətinə aparan link"
                    href="/#xidmetlerimiz"
                    key={service.id}
                    className="block text-white"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
              <div
                className="xl:mt-3 lg:mt-3 flex
      xl:flex-col md:flex-row lg:flex-col sm:flex-row gap-2
      md:mt-0 sm:mt-0"
              >
                <NavLink
                  to={"/"}
                  className="bg-white text-black rounded text-center p-3"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Geri
                </NavLink>
                <button
                  onClick={() => logOut()}
                  className="bg-white text-black rounded text-center p-3"
                >
                  <FontAwesomeIcon icon={faUserAltSlash} /> Hesabdan çıx
                </button>
              </div>
            </div>
            <div
              className="col-span-5 h-screen bg-white 
xl:py-24 lg:py-24 md:py-16 sm:py-16 
xl:px-12 lg:px-12 md:px-6 sm:px-6

"
            >
              {children}
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default DahsboardLayout;
