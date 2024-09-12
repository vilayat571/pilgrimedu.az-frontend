import  { useState } from "react";
import faaq from "../../../assets/images/faqcover.png";
import plusblur from "../../../assets/images/plusblur.png";
import minus from "../../../assets/images/minusblur.png";

import { IFAAQ } from "../../../modules/faq";

const FAAQ = () => {
  const [mod, setMod] = useState<boolean>(false);

  const [data, setData] = useState<IFAAQ[]>([
    {
      id: 1,
      title: "Siz nə iş görürsünüz",
      content: "Ən son xəbərləri və istənilən suallarınıza cavab tapmaq üçün bizim səhifəmizə abunə olun",
      status: false,
    },
    {
      id: 2,
      title: "Əsas maraq dairəniz hansı ölkələrdir?",
      content: "First, press Windows key+Alt+R. The small recording panel appears on the screen. Click the stop button when finished and then open Game Bar. Your new recording now appears in the Gallery window for you to play.M",
      status: false,
    },
    {
      id: 3,
      title: "Eşqidir mehrabi uca göyləri",
      content: "Ən son xəbərləri və istənilən suallarınıza cavab tapmaq üçün bizim səhifəmizə abunə olun",
      status: false,
    },
    {
      id: 4,
      title: "Həyat çətindirmi",
      content: "First, press Windows key+Alt+R. The small recording panel appears on the screen. Click the stop button when finished and then open Game Bar. Your new recording now appears in the Gallery window for you to play.M",
      status: false,
    },
    {
      id: 5,
      title: "Ay xanım yeri get?",
      content: "First, press Windows key+Alt+R. The small recording panel appears on the screen. Click the stop button when finished and then open Game Bar. Your new recording now appears in the Gallery window for you to play.M",
      status: false,
    },
  ]);

  const changeMode = (id:number) => {
    const filteredData = data.map((item: IFAAQ) => {
      return item.id == id ? { ...item, status: !item.status } : item;
    });

    setMod(!mod);
    setData(filteredData);
  };

  return (
    <div
      className=" xl:w-3/5 lg:w-full md:w-full sm:w-full 
      flex justify-center items-center py-20 my-12 bg-white 
    xl:px-20 lg:px-20 md:px-10 sm:px-4"
    >
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  w-full ">
        <div className="col-span-1 ">
          <p className="flex flex-col text-4xl font-semibold mb-8">
            <span className="text-black"> Tez-tez verilən</span>
            <span className="text-[#545454]">sualların cavabları</span>
          </p>
          <p className=" w-3/4 relative bottom-4 font-thin text-[15px] ">
            Əgər sizdə konsultasiyaya gəlməmişdən əvvəl bizim haqqımızda ətraflı məlumata sahib olmaq 
            istəyursinizsə o zaman suallara gz gəzdirin :)
          </p>
          <img src={faaq} alt="" />
        </div>

        <div
          id="faq"
          className="  outline-none col-span-1 rounded-r-xl
        "
        >
          <div>
            {data.map((item: IFAAQ) => {
              return (
                <div
                  key={item.id}
                  className="px-8 py-5 flex flex-col  h-auto items-center rounded-lg text-left w-full border mb-2"
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <span> {item.title} </span>

                    <img
                      id="img"
                      src={!item.status ? plusblur : minus}
                      onClick={() => changeMode(item.id)}
                      className={`w-10 h-10 
                      object-cover
                      cursor-pointer
                      flex justify-center items-center text-lg rounded-full bg-black text-white`}
                    />
                  </div>

                  {item.status && (
                    <div className="text-black border w-full mt-3 ">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAAQ;
