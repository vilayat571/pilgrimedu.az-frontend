import { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import { postQuestion } from "../../redux/reducers/Main/questionSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IQuestionForm {
  username: string;
  email: string;
  phone: string;
  question: string;
  date: string;
}

export type IForm<T> = (e: T) => void;

const Askquestion = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<IQuestionForm>({
    username: "",
    email: "",
    phone: "",
    question: "",
    date: "",
  });

  const changeInpvalues: IForm<
    React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  > = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const sendQuestion: IForm<React.FormEvent<HTMLFormElement>> = (e) => {
    e.preventDefault();

    if (form.username.length < 5) {
      toast("Ad və soyadınız ən azı 5 simvoldan ibarət olmalıdır!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          borderRadius: "5px",
        },
      });
      return;
    }
    if (form.question.length < 50) {
      toast("Daha ətraflı, ən azı 50 simvoldan ibarət olan sual yazın!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          borderRadius: "5px",
        },
      });
      return;
    }
    if (form.phone.length < 10) {
      toast("Nömrəni düzgün yazın və boşluq buraxmayın!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          borderRadius: "5px",
        },
      });
      return;
    } else {
      dispatch(postQuestion(form));
      toast("Sualınız uğurla göndərilmişdir!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "green",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          borderRadius: "5px",
        },
      });
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setForm({
        username: "",
        email: "",
        phone: "",
        question: "",
        date: "Date",
      });
      return;
    }
  };

  return (
    <div
      className="flex justify-center items-center mb-16"
      id="elaqe"
    >
      <ToastContainer />
      {message.length > 0 && (
        <p className="fixed top-24 right-12 px-5 py-3 rounded text-white text-base z-50 bg-green-500">
          <FontAwesomeIcon icon={faCheck} className="text-xl" /> {message}
        </p>
      )}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-y-16 w-full">
        <div className="col-span-1 xl:rounded-l-xl lg:rounded-none md:rounded-none sm:rounded-none bg-white xl:pt-20 lg:pt-20 md:pt-10 sm:pt-8 xl:px-16 lg:px-16 md:px-10 sm:px-2">
          <p className="xl:text-[27px] lg:text-[27px] md:text-2xl sm:text-2xl sm:px-2 font-semibold">
            Hər hansı bir sualınız varsa, <br /> əlaqə saxlayın.
          </p>
          <form
            onSubmit={(e) => sendQuestion(e)}
            autoComplete={"on"}
            method="post"
            className="mt-10 pb-6"
          >
            <input
              required
              type="text"
              placeholder="Ad və soyadınızı yazın..."
              id="username"
              value={form.username}
              onChange={changeInpvalues}
              className="mb-6 h-[70px] rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none"
            />

            <input
              required
              type="email"
              placeholder="E-poçt adresinizi yazın..."
              id="email"
              value={form.email}
              onChange={changeInpvalues}
              className="mb-6 h-[70px] rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none"
            />

            <input
              required
              type="tel"
              placeholder="Telefon nömrənizi yazın..."
              id="phone"
              value={form.phone}
              onChange={changeInpvalues}
              className="mb-6 h-[70px] rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none"
            />

            <textarea
              required
              className="mb-6 h-36 pt-4 rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none"
              id="question"
              placeholder="Nə haqqında maraqlanırsınız..."
              value={form.question}
              onChange={changeInpvalues}
            />

            <button className="text-white px-6 py-3 rounded bg-[#000] hover:bg-[#6F2EB5] hover:text-white transition duration-300">
              Göndər
            </button>
          </form>
        </div>
        <iframe
          title="the location of Pilgrim EDU MMC"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8558785041982!2d49.8605446!3d40.3898867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d147ebe9949%3A0xbd1a03c2dc213e11!2sLuxen%20Plaza!5e0!3m2!1sen!2saz!4v1725468099143!5m2!1sen!2saz"
          className="w-full xl:h-[800px] lg:h-[800px] md:h-[600px] sm:h-[600px] xl:rounded-r-xl lg:rounded-none md:rounded-none sm:rounded-none"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Askquestion;
