import { useState } from "react";
import faaq from "../../../assets/images/faqcover.png";
import plus from "../../../assets/images/plus.png";
import minus from "../../../assets/images/minus.png";

import { IFAAQ } from "../../../modules/faq";

const FAAQ = () => {
  const [mod, setMod] = useState<boolean>(false);

  const [data, setData] = useState<IFAAQ[]>([
    {
      id: 1,
      title: "- Konsultasiyalarınız hansı formatda olur?",
      content:
        "+ Konsultasiyalarımız həm onlayn, həm də oflayn şəkildə olur və xaricdə təhsil üzrə ekspertlərimiz tərəfindən olur. İlkin konsultasiyalar ödənişsizdir. Konsultasiyamıza yazılmaq üçün saytda konsultasiya və ya əlaqə bölməsinə keçid edə bilərsiniz.",
      status: false,
    },
    {
      id: 2,
      title: "- Neçə paketiniz var? Nəyə əsasən formalaşır?",
      content:
        "+ Paketlərimiz tələbənin göstəricisinə və istəyinə əsasən formalaşır. Avropa və Amerika regionu, eləcə də Asiya paketlərimiz ayrıdır. Bəzi hallarda onları mix də edə bilirik. Bir-çox tələbəmiz limitsiz paketi seçir, hansına bir-neçə ölkə daxil olur. Təbii ki burada biz real imkanları analiz edirik və real təkliflər veririk.",
      status: false,
    },
    {
      id: 3,
      title: "- Neçə mərhələləli prosedurunuz var?",
      content:
        "+ Əslində bu xidmətə görə dəyişsə də ümumən 5 hissədən ibarət olur: Siz xüsusi linkadan qeydiyyat keçirsiniz - Məlumatlarınıza əsasən araşdırma aparılır və sənədlər hazır edilir - Müraciətlər aparılır - Müsahibə və ya entrance exam hazırlığı olur - Viza mərhələsi gəlir. İstər təhsil, istərsə də Ausbildungda proseslər bu şəkildə olur",
      status: false,
    },
    {
      id: 4,
      title: "-Dil sertifikatını gözləyib müraciət etməliyəm ya indi?",
      content:
        "+ Xeyr. Siz öncədən bizimlə müraciət edərək ən azından şərti-qəbul ala bilərsiniz. Bir - çox son müraciət tarixi olan tam-təqaüdlər dil sertifikatını əvvəlcədən istəmir, odur ki hazırlaşmağa həmişə vaxtınız olur. Çalışın ki C1 (yəni IELTS 7.0, TOEFL 95) alasınız. Həm öncədən müraciət etməklə vaxtınızı daha doğru analiz edə bilərsiniz.",
      status: false,
    },
    {
      id: 5,
      title: "-Hansı xidmətləri göstərirsiniz?",
      content:
        "+ Xaricdə təhsil və iş/layihələr üzrə dəstək aparırıq. Müxtəlif ölkələr üzrə müraciətlər edirik (bura aiddir həm universitetlərə müraciətlər, həm təqaüdlərə müraciətlər), sənədləşmə işini aparırıq (motivasiya və tövsiyə məktubları, CV və s sənədləri hazır edirik), portfoliolar tərtib edirik. Hər xidmətimizdə kurator xidməti də var.",
      status: false,
    },
    {
      id: 6,
      title: "-Qəbul olma ehtimalım neçə faizdir? Bunu necə ölçə bilərik?",
      content:
        "+ İlk öncə bizim xüsusi tərtib etdiyimiz testlər sayəsində siz həm ixtisas istiqamətinizi, həm də ölkəni müəyyənləşdirə bilərsiniz. Təbii ki ekspertlərimiz artıq göstəricilərinizə əsasən hansısa regionun sizə görə daha uyğun olduğunu müəyyən edə bilərlər. Bunun üçün müştərilərimiz linkdan qeyydiyyatdan keçir və həmin məlumatlar 2-3 həftə ərzində yoxlanılır.",
      status: false,
    },
  ]);

  const changeMode = (id: number) => {
    const filteredData = data.map((item: IFAAQ) => {
      return item.id == id ? { ...item, status: !item.status } : item;
    });

    setMod(!mod);
    setData(filteredData);
  };

  return (
    <div
      className=" xl:w-4/5 lg:w-full md:w-full sm:w-full 
      flex justify-center items-center py-20  bg-[#000] 
    xl:px-20 lg:px-20 md:px-10 sm:px-2"
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
          className=" mt-16 outline-none col-span-1 rounded-r-xl
        "
        >
          <div>
            {data.map((item: IFAAQ) => {
              return (
                <div
                  key={item.id}
                  className="xl:px-8 lg:px-8 md:px-4 sm:px-2 py-5 flex flex-col  items-center rounded-lg 
                  text-left w-full bg-white border mb-2"
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <span> {item.title} </span>

                    <img
                      id="img"
                      src={!item.status ? plus : minus}
                      onClick={() => changeMode(item.id)}
                      className={`w-8 h-8 
                      object-cover
                      cursor-pointer
                      flex justify-center items-center text-lg rounded-full bg-[black] text-white`}
                    />
                  </div>

                  <div
                    className={`text-black w-full overflow-hidden transition-all duration-700 ${
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

export default FAAQ;
