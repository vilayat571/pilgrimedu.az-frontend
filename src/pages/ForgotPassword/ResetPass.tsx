import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";
import bgCover from "../../assets/images/iconCover.png";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://pilgrimbackend.onrender.com/api/v1/users/forgotPassword`;
    setLoading(true);
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((payload) => {
        if (payload.status !== "OK") {
          toast(payload.message, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: true,
            progress: undefined,
            style: {
              backgroundColor: "red",
              color: "white",
              borderRadius: "3px",
              fontFamily: "Poppins",
            },
          });
        } else {
          toast(payload.message, {
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
        }
      })
      .then(() => setLoading(false));
  };

  return (
    <div
      id="formDiv"
      className="flex justify-center items-center bg-[#16022C] w-full 
 h-screen "
    >
      <ToastContainer />
      <div className="flex flex-col items-center w-full">
        <Logo />
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          <img
            src={bgCover}
            alt="The cover image of Login page of Pilgrim MMC"
            className="object-cover relative right-12 top-8"
          />
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          id="formLogin"
          className="lg:w-1/3 xl:w-1/3 md:w-3/5 sm:w-11/12 flex flex-col z-10 items-center mt-6"
        >
          <input
            id="email"
            onChange={(e) => handleChange(e)}
            value={email}
            className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-white text-black rounded 
         placeholder:text-[#000] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="E-poçt adresiniz.."
            required={true}
            type="email"
          />

          <div className="flex flex-row items-center gap-2  tracking-wider">
            <button
              className={`text-white px-6 py-3 rounded bg-[#6F2EB5] hover:bg-[#fff] hover:text-black transition 
              duration-300 mt-7 ${loading ? "w-32" : "w-28"} `}
            >
              {loading ? " Göndərilir.." : " Göndər"}
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-white px-6 py-3 rounded border hover:bg-[#fff] hover:text-black transition duration-300 mt-7 w-28 "
            >
              Geri
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPass;
