import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { studentsData } from "../../modules/studentsData";

const Studentsthoughts = () => {
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
            className="col-span-1 flex justify-center relative w-full border-[1px] rounded border-[#363636]"
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
