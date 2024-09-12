import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { loginFormSender } from "../../redux/reducers/auth/loginSlice";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginForm.password.length < 7) {
      alert("Şifrənin uzunluğu minimum 8 simvol olmalıdır!");
    }
    if (loginForm.email.length < 14) {
      alert("email uzunluğu minimum 15 simvol olmalıdır!");
    } else if (loginForm.email.length > 14 && loginForm.password.length > 7) {
      dispatch(loginFormSender(loginForm))
        .then((ans) => console.log(ans));
    }
  };

  return (
    <div
      id="formDiv"
      className="flex justify-center items-center bg-[#0F0916] w-full 
     h-screen "
    >
      <div className="flex flex-col items-center w-full">
        <Logo />

        <form
          onSubmit={(e) => handleSubmit(e)}
          id="formLogin"
          className="lg:w-2/5 xl:w-1/3 md:w-3/5 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <input
            id="email"
            onChange={(e) => handleChange(e)}
            value={loginForm.email}
            className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
             placeholder:text-[#d3d3d3] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="E-poçt adresiniz.."
            required={true}
            type="email"
          />
          <input
            id="password"
            onChange={(e) => handleChange(e)}
            value={loginForm.password}
            className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
             placeholder:text-[#d3d3d3] indent-3 tracking-wide outline-none focus:outline-none mt-6"
            placeholder="Şifrəniz.."
            required={true}
            type="password"
          />
          <div className="flex flex-col items-center gap-2 tracking-wider">
            <button
              className="bg-white text-black rounded
            w-28 text-center px-6 mt-7 py-3 "
            >
              Daxil ol
            </button>
            <p className="text-lg mt-4">
              <span className="text-[#929292]">Hesabınız yoxdur?</span>
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
