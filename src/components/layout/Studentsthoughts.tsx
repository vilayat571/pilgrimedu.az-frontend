import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import student1 from "../../assets/images/student1.webp";
import student2 from "../../assets/images/student2.webp";
import student3 from "../../assets/images/student3.webp";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Studentsthoughts = () => {
  const studentsData = [
    {
      img: student1,
      title: "UNIVE",
      description: `"İxtisasım müraciət edəcəyim sahədən fərqlənsə də təqaüd üçün xüsusi müraciət videosu hazırlamışdıq. Bu video sayəsində mən artıq “Ca’Foscari Venice” (İtaliya) universitetinin 14 min EUR-luq təqaüdünün qaliblərindən biriyəm. Bu yolda mənə dəstək olan komandaya minnətdaram."`,
      name: "Sədaqət Qasımova",
    },
    {
      img: student2,
      title: "UCL",
      description: `"Pilgrim vasitəsilə mən top 10-da olan UK universiteti - UCL’dan, həmçinin ABŞ’da yerləşən Maryland və Texas A&M universitetlərindən, Vytautas Magnus (Litva) 9 min EUR təqaüd, və s qəbullar əldə etmişəm. Həmişə mənə motivasiya və dəstək olan Mərkəzə bu nəticələrə görə minnətdaram."`,
      name: "Ülkər Nəsibli",
    },
    {
      img: student3,
      title: "BME",
      description: `"Pilgrim Education ilə 1 ildir ki əməkdaşlıq edirəm. Mərkəzin düzgün yönləndirməsi və işi sayəsində bu il Stipendium Hungaricum (Macarıstan) təqaüdünü qazanan 129 tələbədən biriyəm. Təhsilimi isə Logistics Engineering sahəsi üzrə davam etdirəcəyəm."`,
      name: "Kamil Paşabeyli",
    },
  ];

  return (
    <div
      className="flex justify-center flex-col xl:px-20 lg:px-20 md:px-10 sm:px-2 
    
    py-20 items-center w-full bg-[#000] "
    >
      <p className="text-3xl text-white text-left mb-4">
        Tələbələrin şərhləri!
      </p>

      <div className=" grid xl:grid-cols-3 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
        {studentsData.map((student, index) => (
          <div
            key={index}
            className="col-span-1 flex justify-center relative w-full"
          >
            <img
              className="rounded-xl opacity-40 object-cover"
              src={student.img}
              alt={student.name}
            />
            <div className="absolute py-12 px-6 bg-black opacity-90 inset-0 bg-transparent rounded-xl flex justify-between flex-col items-start">
              <p className="xl:text-xl lg:text-xl md:text-lg sm:text-base relative top-4 text-white flex items-center">
                <span className="text-lg bg-[#6f2eb7] text-white rounded-full mr-2 p-3 flex justify-center items-center">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <span className="text-lg">{student.title}</span>
              </p>
              <p className="text-base text-white">{student.description}</p>
              <p className="text-white  xl:text-xl lg:text-xl md:text-lg sm:text-base">
                {student.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studentsthoughts;
