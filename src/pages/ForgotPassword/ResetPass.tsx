import React, { useState } from "react";
import Logo from "../../atoms/Auth/Logo";

const ResetPass = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/users/forgotPassword`;

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
      body: JSON.stringify({email}),
    })
      .then((res) => res.json())
      .then((payload) => console.log(payload));
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
          className="lg:w-1/3 xl:w-1/5 md:w-3/5 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <input
            id="email"
            onChange={(e) => handleChange(e)}
            value={email}
            className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
         placeholder:text-[#d3d3d3] indent-3 tracking-wide outline-none focus:outline-none"
            placeholder="E-poçt adresiniz.."
            required={true}
            type="email"
          />

          <div className="flex flex-col items-center gap-2 tracking-wider">
            <button
              className="bg-white text-black rounded
        w-28 text-center px-6 mt-7 py-3 "
            >
              Göndər
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPass;
