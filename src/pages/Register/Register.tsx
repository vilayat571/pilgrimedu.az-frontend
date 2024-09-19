import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { sendRegisterForm } from "../../redux/reducers/auth/registerSlice";
import Logo from "../../atoms/Auth/Logo";
import bgCover from "../../assets/images/iconCover.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (form.username.length < 7 || form.username.length == 7) {
      toast("Ad və soyadı minimum 8 simvol olmalıdır", {
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
    } else if (form.password.length < 7 || form.password.length == 7) {
      toast("Şifrə minimum 8 simvol olmalıdır", {
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
    } else if (!validatePhoneNumber(form.phone)) {
      toast("Uyğunsuz nömrə!", {
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
    } else if (form.degree.length == 0 || form.service.length == 0) {
      toast("Formu tam doldurun!", {
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
      dispatch(sendRegisterForm(form)).then((response) => {
        toast(response.payload.message, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: true,
          pauseOnHover: true,
          progress: undefined,
          style: {
            backgroundColor: response.payload.status !== "OK" ? "red" : "green", // Custom background color
            color: "white",
            borderRadius: "3px",
            fontFamily: "Poppins",
          },
        });

        response.payload.status == "OK" &&
          setTimeout(() => {
            setForm({
              username: "",
              email: "",
              phone: "",
              password: "",
              degree: "",
              service: "",
              status: "Qeydiyyatdan keçdi",
            });
            navigate("/daxilol");
          }, 2000);
      });
    }
  };

  return (
    <div
      id="register"
      className="flex justify-center items-center bg-[#16022C] w-full 
      xl:h-screen lg:h-screen md:h-screen sm:h-auto text-center py-8 "
    >
      <ToastContainer />
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <img
          src={bgCover}
          alt="The cover image of Login page of Pilgrim MMC"
          className="object-cover relative right-12"
        />
      </div>{" "}
      <div className="flex flex-col z-10 items-center w-full">
        <Logo />

        <form
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
          className="lg:w-full xl:w-3/5 md:w-3/5 sm:w-11/12 flex flex-col items-center mt-6"
        >
          <div
            className="w-full   h-auto 
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
                className="h-16  text-[16px] px-2 py-2 block placeholder:text-black text-black bg-white rounded 
              indent-3 tracking-wide outline-none focus:outline-none w-full"
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
                className="h-16 w-full text-black px-2 py-2 block placeholder:text-black bg-white rounded 
              indent-3 tracking-wide outline-none focus:outline-none"
                placeholder="Məsələn: anar@gmail.com"
                required={true}
                type="email"
              />
            </div>
          </div>

          <div className="w-full   mt-6 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 ">
            <div className="col-span-1 flex flex-col">
              <p className="my-2 text-white w-full text-left tracking-wider text-lg">
                Telefon nömrəsi:
              </p>
              <input
                id="phone"
                onChange={(e) => handleChange(e)}
                value={form.phone}
                className="h-16 w-full text-black placeholder:text-black px-2 py-2 block  bg-white rounded 
              indent-3 tracking-wide outline-none focus:outline-none "
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
                className="h-16 w-full placeholder:text-black text-black px-2 py-2 block  bg-white rounded 
              indent-3 tracking-wide outline-none focus:outline-none "
                placeholder="xxxxxxxx"
                required={true}
                type={isVisiblePassword ? "text" : "password"}
              />
            </div>
          </div>

          <div className="w-full   mt-12 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
            <select
              required
              onChange={(e) => handleChange(e)}
              className="h-16 w-full text-black py-2  mt-3 block  bg-white rounded indent-3 tracking-wide outline-none focus:outline-none col-span-1"
              value={form.degree}
              id="degree"
              aria-required
            >
              <option value="Təhsil səviyyəniz" className="text-[#fff]">
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
              className="h-16 w-full text-black px-1 mt-3 py-2  block rounded bg-white indent-3 tracking-wide outline-none focus:outline-none col-span-1"
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
          <p className="text-white w-full mt-4 z-10 text-base flex text-left ">
            <input
              type="checkbox"
              className="mr-3"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            />
            Şifrəni göstər
          </p>

          <button
            onSubmit={(e) => handleSubmit(e)}
            className="text-white mt-10 tracking-wider px-8 py-4 rounded z-10 bg-[#7824D3]"
          >
            Hesab aç
          </button>

          <p className="text-[#fff] mt-6 tracking-widest">
            Artıq hesabın var?{" "}
            <Link to="/daxilol">
              <u className="text-white">Daxil ol</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
