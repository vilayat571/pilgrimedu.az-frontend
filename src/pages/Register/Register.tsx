import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { sendRegisterForm } from "../../redux/reducers/auth/registerSlice";
import Logo from "../../atoms/Auth/Logo";

export interface IRegisterForm {
  username: string;
  email: string;
  phone: string;
  password: string;
  degree: string;
  service: string;
  status: string;
}

export interface IDegrees {
  id: number;
  name: string;
}

const degrees: IDegrees[] = [
  {
    id: 1,
    name: "Bakalavr",
  },
  {
    id: 2,
    name: "Magistr",
  },
  {
    id: 3,
    name: "Dokturantura",
  },
];

const services: IDegrees[] = [
  {
    id: 1,
    name: "Xaricdə təhsil",
  },
  {
    id: 2,
    name: "Xaricdə layihə",
  },
  {
    id: 3,
    name: "Xaricdə iş",
  },
];

const Register = () => {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<string>("");

  const [form, setForm] = useState<IRegisterForm>({
    username: "",
    email: "",
    phone: "",
    password: "",
    degree: "",
    service: "",
    status: "Qeydiyyatdan keçdi",
  });

  const validatePhoneNumber = (number: string) => {
    const regex =
      /^(?:0|994)(?:12|51|50|55|70|77)[^\w]{0,2}[2-9][0-9]{2}[^\w]{0,2}[0-9]{2}[^\w]{0,2}[0-9]{2}$/;
    return regex.test(number);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.username.length < 7 || form.username.length == 7) {
      setMessage("Ad və soyadı minimum 8 simvol olmalıdır");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (form.password.length < 7 || form.password.length == 7) {
      setMessage("Şifrə minimum 8 simvol olmalıdır");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (
      form.email.slice(0, form.email.indexOf("@")).length < 4 ||
      form.email.slice(0, form.email.indexOf("@")).length == 4
    ) {
      setMessage("Emailin əsas hissəsi minimum 5 simvol olmalıdır");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (!validatePhoneNumber(form.phone)) {
      setMessage("Uyğunsuz nömrə: Doğru forma - 0509999999");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (form.degree.length == 0 || form.service.length == 0) {
      setMessage("Formu tam doldurun!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      dispatch(sendRegisterForm(form)).then((data)=>console.log(data));
    }
  };

  return (
    <div
      id="register"
      className="flex justify-center items-center bg-[#0F0916] w-full 
      xl:h-screen lg:h-screen md:h-screen sm:h-auto text-center py-8 "
    >
      <div className="flex flex-col items-center w-full">
        <Logo />

        <form
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
          className="lg:w-full xl:w-3/5 md:w-3/5 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <div
            className="w-3/5 xl:w-3/5 lg:w-3/5  md:w-4/5 sm:w-full   h-auto 
          grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6"
          >
            <div className="col-span-1 flex flex-col">
              <p className="my-2 text-white w-full text-left tracking-wider text-lg">
                Ad və soyad:
              </p>
              <input
                id="username"
                onChange={(e) => handleChange(e)}
                value={form.username}
                className="h-14 border border-[#aca4a4] placeholder:text-[15px] text-[16px] px-2 py-2 block  bg-transparent text-white rounded 
             placeholder:text-[#949494] indent-3 tracking-wide outline-none focus:outline-none w-full"
                placeholder="Məsələn: Anar Anarov"
                required={true}
                type="text"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <p className="my-2 text-white w-full text-left tracking-wider text-lg">
                Email adresi:
              </p>
              <input
                id="email"
                onChange={(e) => handleChange(e)}
                value={form.email}
                className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
             placeholder:text-[#949494] indent-3 tracking-wide outline-none focus:outline-none"
                placeholder="Məsələn: anar@gmail.com"
                required={true}
                type="email"
              />
            </div>
          </div>

          <div className="w-3/5 xl:w-3/5 lg:w-3/5  md:w-4/5 sm:w-full   mt-6 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 ">
            <div className="col-span-1 flex flex-col">
              <p className="my-2 text-white w-full text-left tracking-wider text-lg">
                Telefon nömrəsi:
              </p>
              <input
                id="phone"
                onChange={(e) => handleChange(e)}
                value={form.phone}
                className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
             placeholder:text-[#949494] indent-3 tracking-wide outline-none focus:outline-none "
                placeholder="Məsələn: 0519999999"
                required={true}
                type="text"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <p className="my-2 text-white w-full text-left tracking-wider text-lg">
                Şifrə:
              </p>
              <input
                id="password"
                onChange={(e) => handleChange(e)}
                value={form.password}
                className="h-14 border border-[#aca4a4] w-full px-2 py-2 block  bg-transparent text-white rounded 
             placeholder:text-[#949494] indent-3 tracking-wide outline-none focus:outline-none "
                placeholder="xxxxxxxx"
                required={true}
                type="password"
              />
            </div>
          </div>

          <div className="w-3/5 xl:w-3/5 lg:w-3/5  md:w-4/5 sm:w-full   mt-6 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
            <select
              required
              onChange={(e) => handleChange(e)}
              className="h-14 border border-[#aca4a4] w-full py-2 mt-3 block text-[#949494] bg-transparent rounded 
             placeholder:text-[#949494] indent-3 tracking-wide outline-none focus:outline-none col-span-1"
              value={form.degree}
              id="degree"
              aria-required
            >
              <option value="Təhsil səviyyəniz" className="text-[#000000]">
                Təhsil səviyyəniz
              </option>
              {degrees.map((degree: IDegrees) => {
                return (
                  <option
                    className="text-[#352f2f]"
                    key={Math.random()}
                    value={degree.name}
                  >
                    {degree.name}
                  </option>
                );
              })}
            </select>

            <select
              required
              onChange={(e) => handleChange(e)}
              className="h-14 border border-[#aca4a4] w-full px-1 mt-3 py-2 text-[#949494] block  bg-transparent rounded 
             placeholder:text-[#949494] indent-3 tracking-wide outline-none focus:outline-none col-span-1"
              value={form.service}
              id="service"
            >
              <option value="Maraqlandığınız xidmət">
                Maraqlandığınız xidmət
              </option>
              {services.map((service: IDegrees) => {
                return (
                  <option key={Math.random()} value={service.name}>
                    {service.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button className="text-white mt-10 tracking-wider bg-transparent px-6 py-3 border rounded">
            Hesab aç
          </button>

          <p className="text-[#d6d6d6] mt-6 tracking-widest">
            Artıq hesabın var?{" "}
            <Link to="/daxilol">
              <u className="text-white">Daxil ol</u>
            </Link>
          </p>
        </form>
      </div>
      {message.length > 0 && (
        <div
          className="text-[#ffffff] px-3 py-2 bg-[#ff0606] 
        text-center tracking-wider rounded-sm 
        absolute right-8 bottom-10 text-[15px] "
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;
