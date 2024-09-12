import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";

interface IPassReset {
  password: string;
  rpPassword: string;
}

const NewPass = () => {
  const [passForm, setPassForm] = useState<IPassReset>({
    password: "",
    rpPassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassForm({ ...passForm, [e.target.id]: e.target.value });
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
          className="lg:w-1/3 xl:w-1/3 md:w-3/5 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <input
            id="password"
            onChange={(e) => handleChange(e)}
            value={passForm.password}
            className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
     placeholder:text-[#d3d3d3] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="Yeni şifrə.."
            required={true}
            type="password"
          />
          <input
            id="rpPassword"
            onChange={(e) => handleChange(e)}
            value={passForm.rpPassword}
            className="h-14 border mt-4 border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
     placeholder:text-[#d3d3d3] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="Şifrənin təkrarı.."
            required={true}
            type="password"
          />

          <div className="flex flex-col items-center gap-2 tracking-wider">
            <button
              className="bg-white text-black rounded
    w-28 text-center px-6 mt-7 py-3 "
            >
              Yenilə
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
