import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { loginFormSender } from "../../redux/reducers/auth/loginSlice";
import bgCover from "../../assets/images/iconCover.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loginForm.email.length == 0 || loginForm.password.length == 0) {
      toast("Məlumatları tam doldurun!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "red", // Custom background color
          color: "white",
          borderRadius: "3px",
          fontFamily: "Poppins",
        },
      });
      return;
    }

    if (loginForm.email.length < 8) {
      toast("E-poçt adresinizi doğru qeyd edin!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "red", // Custom background color
          color: "white",
          borderRadius: "3px",
          fontFamily: "Poppins",
        },
      });
      return;
    }

    if (loginForm.password.length < 8) {
      toast("Şifrənin uzunluğu 8 simvoldan kiçik ola bilməz!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "red", // Custom background color
          color: "white",
          borderRadius: "3px",
          fontFamily: "Poppins",
        },
      });
      return;
    }

    if (loginForm.password.length >= 8 && loginForm.email.length >= 8) {
      dispatch(loginFormSender(loginForm)).then((ans) => {
        if (ans.payload.status == "OK") {
          toast(ans.payload.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: true,
            progress: undefined,
            style: {
              backgroundColor: "#4bb543", // Custom background color
              color: "white",
              borderRadius: "3px",
              fontFamily: "Poppins",
            },
          });
          localStorage.setItem("token", ans.payload.token);
          localStorage.setItem("user", JSON.stringify(ans.payload.user));
          setLoginForm({ email: "", password: "" });
          setTimeout(() => {
            navigate("/");
          }, 500);
          return;
        } else {
          toast(ans.payload.message, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: true,
            progress: undefined,
            style: {
              backgroundColor: "red", // Custom background color
              color: "white",
              borderRadius: "3px",
              fontFamily: "Poppins",
            },
          });
        }
      });
    }
  };

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
          className="object-cover relative right-12"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <Logo />

        <form
          onSubmit={(e) => handleSubmit(e)}
          id="formLogin"
          className="lg:w-2/5 z-10 xl:w-1/3 md:w-7/10 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <input
            id="email"
            onChange={(e) => handleChange(e)}
            value={loginForm.email}
            className="h-16 border-[#aca4a4] w-full px-2 py-2 block  bg-white text-black rounded 
             placeholder:text-[#343434] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="E-poçt adresiniz.."
            required={true}
            type="email"
          />
          <input
            id="password"
            onChange={(e) => handleChange(e)}
            value={loginForm.password}
            className="h-16 border-[#aca4a4] w-full px-2 py-2 block  bg-white text-black rounded 
             placeholder:text-[#000] indent-3 tracking-wide outline-none focus:outline-none mt-6"
            placeholder="Şifrəniz.."
            required={true}
            type={isVisiblePassword ? "text" : "password"}
          />
          <p className="text-white w-full mt-4 z-10 text-base flex text-left ">
            <input
              type="checkbox"
              className="mr-3"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            />
            Şifrəni göstər
          </p>
          <div className="flex flex-col items-center gap-2 tracking-wider">
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-[#7824D3] text-white rounded
            w-28 text-center px-6 mt-7 py-3 "
            >
              Daxil ol
            </button>
            <p className="text-base mt-1">
              <span className="text-[#fff]">Hesabınız yoxdur?</span>
              <Link to="/hesabac">
                <u className="text-white"> Hesab aç</u>
              </Link>
            </p>
            <Link to="/shifreyenile" className="text-white underline">
              Şifrəmi unutdum
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
