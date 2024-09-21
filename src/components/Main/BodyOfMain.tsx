import Studentsthoughts from "../layout/Studentsthoughts";
import Aboutus from "./Aboutus";
import Add from "./Add";
import Countries from "./Countries";
import Ourprove from "./Ourprove";
import Results from "./Results";
import Services from "./Services";

const BodyOfMain = () => {
  return (
    <div className="flex flex-col justify-center items-center  xl:w-4/5 lg:w-full md:w-full sm:w-full">
      <Aboutus />
      <Services />
      <Ourprove />
      <Add />
      <Results />
      <Countries />
      <Studentsthoughts />
    </div>
  );
};

export default BodyOfMain;
