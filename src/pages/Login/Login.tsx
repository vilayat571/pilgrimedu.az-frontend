import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { loginFormSender } from "../../redux/reducers/auth/loginSlice";
import bgCover from "../../assets/images/iconCover.png";

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

  const dispatch = useAppDispatch();

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  
    if (loginForm.email.length < 8) {
      alert("E-poçt adresinizi doğru qeyd edin!");
      return;
    }
  
    if (loginForm.password.length < 8) {
      alert("Şifrənin uzunluğu 8 simvoldan kiçik ola bilməz!");
      return;
    }
  
    if (loginForm.password.length >= 8 && loginForm.email.length >= 8) {
      dispatch(loginFormSender(loginForm)).then((ans) => console.log(ans.payload));
    }
  };
  

  return (
    <div
      id="formDiv"
      className="flex justify-center items-center bg-[#16022C] w-full 
     h-screen "
    >
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <img
          src={bgCover}
          alt="The cover image of Login page of Pilgrim MMC"
          className="object-cover relative right-12"
        />
      </div>{" "}
      <div className="flex flex-col items-center w-full">
        <Logo />

        <form
          onSubmit={(e) => handleSubmit(e)}
          id="formLogin"
          className="lg:w-2/5 z-10  xl:w-1/3 md:w-7/10 sm:w-11/12 flex flex-col items-center mt-6"
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
            type="text"
          />
          <div className="flex flex-col items-center gap-2 tracking-wider">
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-[#7824D3] text-white rounded
            w-28 text-center px-6 mt-7 py-3 "
            >
              Daxil ol
            </button>
            <p className="text-lg mt-6">
              <span className="text-[#fff]">Hesabınız yoxdur?</span>
              <Link to="/hesabac">
                <u className="text-white"> Hesab aç</u>
              </Link>
            </p>
            <Link to="/shifreyenile" className="text-white">
              Şifrəmi unutdum
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
