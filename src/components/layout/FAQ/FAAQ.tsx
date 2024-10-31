import { useState } from "react";
import faaq from "../../../assets/images/faqcover.png";
import { IFAAQ } from "../../../modules/faq";
import { questions } from "../../../modules/questions";

const FAAQ = () => {
  const [mod, setMod] = useState<boolean>(false);

  const [data, setData] = useState<IFAAQ[]>(questions);

  const changeMode = (id: number) => {
    const filteredData = data.map((item: IFAAQ) => {
      return item.id == id ? { ...item, status: !item.status } : item;
    });

    setMod(!mod);
    setData(filteredData);
  };

  return (
    <div
      className="w-full 
      flex justify-between  items-center py-20  bg-[#000]"
    >
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  w-full ">
        <div className="col-span-1 xl:pl-0 md:pl-12 sm:pl-12 lg:pl-0">
          <p className="flex flex-col text-4xl font-semibold mb-8">
            <span className="text-[#fff]"> Tez-tez verilən</span>
            <span className="text-[#8516FF]">sualların cavabları!</span>
          </p>
          <p className=" w-3/4 relative text-white bottom-4 font-thin text-[15px] ">
            Əgər sizdə konsultasiyaya gəlməmişdən əvvəl bizim haqqımızda ətraflı
            məlumata sahib olmaq istəyirsinizsə o zaman suallara göz gəzdirin :)
          </p>
          <img src={faaq} alt="the image of FAQ section" />
        </div>

        <div
          id="faq"
          className=" mt-16 outline-none col-span-1 rounded-r-xl"
        >
          <div>
            {data.map((item: IFAAQ) => {
              return (
                <div
                onClick={() => changeMode(item.id)}

                  key={item.id}
                  className="xl:px-8 group lg:px-8 md:px-4  hover:bg-[#6F2EB5] cursor-pointer hover:text-white transition duration-300 sm:px-3 py-5 flex flex-col  items-center rounded-lg 
                  text-left w-full bg-white  mb-2"
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <span> {item.title} </span>

                  <button className="bg-black group-hover:bg-white text-white group-hover:text-black w-9 h-9 
                  transition duration-300 text-xl rounded-full">
                {!item.status ? '+' : '-'}
                  </button>
                  </div>

                  <div
                    className={`group-hover:text-white text-black w-full overflow-hidden transition-all duration-700 ${
                      item.status ? "max-h-screen mt-3" : "max-h-0"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAAQ;
