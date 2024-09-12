import ImageofKeys from "../../atoms/Main/ImageofKeys";
import InnerDiv1 from "./InnerDiv1";

const Aboutusinner = () => {
  return (
    <div
      className="w-full 
grid grid-cols-2 gap-y-16
xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
"
    >
      <InnerDiv1 />
      <ImageofKeys />
    </div>
  );
};

export default Aboutusinner;
