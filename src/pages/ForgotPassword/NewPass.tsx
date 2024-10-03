import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";
import bgCover from "../../assets/images/iconCover.png";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IPassReset {
  password: string;
  rpPassword: string;
}

const NewPass = () => {
  const [passForm, setPassForm] = useState<IPassReset>({
    password: "",
    rpPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `http://localhost:3001/api/v1/users/shifreyenile/${id}`;

    if (passForm.password.length < 7) {
      toast("Şifrənin uzunluğu 8 simvoldan az ola bilməz!", {
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
    } else if (passForm.password !== passForm.rpPassword) {
      toast("Şifrənin təkrarı şifrə ilə eyni deyil!", {
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
      setLoading(true);
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: passForm.password }),
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
        setTimeout(() => {
          navigate('/daxilol')
        }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassForm({ ...passForm, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  return (
    <div
      id="formDiv"
      className="flex justify-center items-center bg-[#16022C] w-full 
h-screen "
    >
      <ToastContainer />

      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <img
          src={bgCover}
          alt="The cover image of Login page of Pilgrim MMC"
          className="object-cover relative right-12 top-8"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <Logo />

        <form
          onSubmit={(e) => handleSubmit(e)}
          id="formLogin"
          className="lg:w-1/3 z-10 xl:w-1/3 md:w-3/5 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <input
            id="password"
            onChange={(e) => handleChange(e)}
            value={passForm.password}
            className="h-14 border  w-full px-2 py-2 block  bg-white text-black rounded 
     placeholder:text-[#000] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="Yeni şifrə.."
            required={true}
            type={!isVisiblePassword ? "password" : "text"}
          />
          <input
            id="rpPassword"
            onChange={(e) => handleChange(e)}
            value={passForm.rpPassword}
            className="h-14 border mt-4  w-full px-2 py-2 block  bg-white text-black rounded 
     placeholder:text-[#000] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="Şifrənin təkrarı.."
            required={true}
            type={!isVisiblePassword ? "password" : "text"}
          />
          <p className="text-white w-full mt-4 z-10 text-base flex text-left ">
            <input
              type="checkbox"
              className="mr-3"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            />
            Şifrəni göstər
          </p>

          <div className="flex flex-row items-center gap-2 tracking-wider">
            <button
              className={`bg-white text-black rounded ${loading ? 'w-32' : 'w-28'} text-center px-6 mt-7 py-3 `}
            >
              {loading ? "Göndərilir.." : "Göndər"}
            </button>
            <button
              onClick={() => navigate("/")}
              className="border text-white hover:bg-white hover:text-black transition duration-300 rounded
    w-28 text-center px-6 mt-7 py-3 "
            >
              Geri
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
