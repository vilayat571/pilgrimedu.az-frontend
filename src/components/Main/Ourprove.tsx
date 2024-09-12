import TitleCard from "../../atoms/Main/TitleCard";
import StatisticCardParent from "./StatisticCardParent";

const Ourprove = () => {
  return (
    <div
    id="neticelerimiz"
      className="w-full flex justify-between items-center relative 
       xl:bottom-32 lg:bottom-32 md:bottom-0 sm:bottom-0
      flex-col xl:my-0 lg:my-0 md:my-12 sm:my-20"
    >
      <TitleCard />
      <StatisticCardParent />
    </div>
  );
};

export default Ourprove;
