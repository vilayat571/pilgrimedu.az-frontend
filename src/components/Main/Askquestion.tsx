import { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import { postQuestion } from "../../redux/reducers/Main/questionSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export interface IQuestionForm {
  username: string;
  email: string;
  phone: string;
  question: string;
  date: string;
}

const Askquestion = () => {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState("");

  const [form, setForm] = useState<IQuestionForm>({
    username: "",
    email: "",
    phone: "(+994) 0",
    question: "",
    date: "",
  });

  const changeInpvalues = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const sendQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.username.length < 10) {
      alert("Ad və soyadınız ən azı 10 simvoldan ibarət olmalıdır!");
    }
    if (form.question.length < 50) {
      alert("Sualınızı daha ətraflı və anlaşılan yazın!");
    }
    if (form.phone.length !== 17) {
      alert("Nömrəni düzgün yazın və boşluq buraxmayın!");
    } else {
      dispatch(postQuestion(form));
      setMessage("Sualınız uğurla göndərilmişdir!");
      setTimeout(() => {
        setMessage('')
      }, 3000);
      setForm({
        username: "",
        email: "",
        phone: "",
        question: "",
        date: "Date",
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center 
   mb-16
    "
      id="elaqe"
    >
      {message.length > 0 && (
        <p className="fixed top-24 right-12 px-5 py-3 rounded text-white text-base z-50 bg-green-500">
          <FontAwesomeIcon icon={faCheck} className="text-xl" /> {message}
        </p>
      )}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-y-16  w-full ">
        <div
          className="col-span-1 xl:rounded-l-xl lg:rounded-none md:rounded-none sm:rounded-none bg-white
         xl:pt-20 lg:pt-20 md:pt-10 sm:pt-8 xl:px-16 lg:px-16 
          md:px-10 sm:px-2"
        >
          <p className="xl:text-[27px] lg:text-[27px] md:text-2xl sm:text-2xl sm:px-2 font-semibold">
            Hər hansı bir sualınız varsa, <br /> əlaqə saxlayın.
          </p>
          {}
          <form
            onSubmit={(e) => sendQuestion(e)}
            autoComplete={"on"}
            method="post"
            className="mt-10 pb-6"
          >
            <input
              required
              type="text"
              onChange={(e) => changeInpvalues(e)}
              placeholder="Ad və soyadınızı yazın..."
              id="username"
              value={form.username}
              className="mb-6 h-[70px] rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none   "
            />

            <input
              required
              type="email"
              onChange={(e) => changeInpvalues(e)}
              placeholder="E-poçt adresinizi yazın..."
              id="email"
              value={form.email}
              className="mb-6 h-[70px] rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none   "
            />

            <input
              required
              type="tel"
              onChange={(e) => changeInpvalues(e)}
              placeholder="Telefon nömrənizi yazın..."
              id="phone"
              value={`${form.phone}`}
              className="mb-6 h-[70px] rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none   "
            />

            <textarea
              typeof="text"
              onChange={(e) => changeInpvalues(e)}
              className="mb-6 h-36 pt-4 rounded-md text-[#454545] placeholder:text-[#454545] indent-4 border-[1px] border-[#E3E3E3] w-full outline-none focus:outline-none   "
              id="question"
              placeholder="Nə haqqında maraqlanırsınız..."
              value={form.question}
            />

            <button className="text-white px-6 py-3 rounded bg-[#0E0517]">
              Göndər
            </button>
          </form>
        </div>
        <iframe
        title="the location of Pilgrim EDU MMC"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8558785041982!2d49.8605446!3d40.3898867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d147ebe9949%3A0xbd1a03c2dc213e11!2sLuxen%20Plaza!5e0!3m2!1sen!2saz!4v1725468099143!5m2!1sen!2saz"
          className="w-full xl:h-[800px]  lg:h-[800px]  md:h-[600px] sm:h-[600px] xl:rounded-r-xl lg:rounded-none md:rounded-none sm:rounded-none "
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Askquestion;
// username, email, phone, question
