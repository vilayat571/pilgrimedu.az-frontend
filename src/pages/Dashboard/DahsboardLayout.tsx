import { ReactNode } from "react";
import Loqo from "../../atoms/Layout/Loqo";
import { pagesRefs } from "../../modules/navrefs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DahsboardLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

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
        },
      });
      localStorage.clear();

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className=" bg-[#fff] w-full h-screen flex justify-between items-start ">
      <ToastContainer />

      <div
        id="sidebar"
        className="w-1/5 py-16 pl-12 flex flex-col h-screen bg-[#16022C]"
      >
        <Loqo />
        <div id="links" className="flex flex-col gap-y-4 text-lg mt-8 ">
          {pagesRefs.map((link) => {
            return (
              <a
                key={link.id}
                aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                className="text-white block"
                href={link.hrefs}
              >
                {link.text}
              </a>
            );
          })}
        </div>
        <div>
          <button
            onClick={() => logOut()}
            className="bg-[#fff] text-black absolute bottom-12 rounded text-center px-6 mt-7 py-3 "
          >
            Hesabdan çıx
          </button>
        </div>
      </div>
      <div className="w-4/5 py-24 px-12">{children}</div>
    </div>
  );
};

export default DahsboardLayout;
