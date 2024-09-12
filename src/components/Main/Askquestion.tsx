import { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import { postQuestion } from "../../redux/reducers/Main/questionSlice";


export interface IQuestionForm {
  username: string;
  email: string;
  phone: string;
  question: string;
  date:string,
}

const Askquestion = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<IQuestionForm>({
    username: "",
    email: "",
    phone: "",
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

    dispatch(postQuestion(form));
    setForm({ username: "", email: "", phone: "", question: "" , date:new Date().toISOString().split('T')[0]});

    // if (form.username.length < 10) {
    //   alert("İstifadəçi adı ən azı 10 simvoldan ibarət olmalıdır!");
    // }
    // if (form.question.length < 50) {
    //   alert("Sualınızı daha ətraflı və anlaşılan yazın!");
    // }
    // if (form.question.length < 50) {
    //   return null
    // }
  };


  
  return (
    <div
      className="flex justify-center items-center 
   
    "
    >
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  w-full ">
        <div
          className="col-span-1 rounded-l-xl  bg-white
         xl:pt-20 lg:pt-20 md:pt-10 sm:pt-8 xl:px-16 lg:px-16 
          md:px-10 sm:px-4"
        >
          <p className="text-[27px] font-semibold">
            Hər hansı bir sualınız varsa, <br /> əlaqə saxlayın.
          </p>
{}
          <form
            onSubmit={(e) => sendQuestion(e)}
            autoComplete={"on"}
            method="post"
            className="mt-10"
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
              value={form.phone}
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.906744206312!2d49.836129!3d40.3665921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db5eba71f3b%3A0xc3d7378f6b1dbfa9!2zxLDDp8mZcmkgxZ7JmWjJmXIsIDI1IEJveXVrIFFhbGEsIEJha3U!5e0!3m2!1sen!2saz!4v1719330760940!5m2!1sen!2saz"
          className="
         w-full h-[800px] 
          border-none outline-none col-span-1 rounded-r-xl
          "
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Askquestion;
// username, email, phone, question
