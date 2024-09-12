import { statisticsData } from "../../modules/statistic";
import Statisticard from "./Statisticard";

const StatisticCardParent = () => {
  return (
    <div
      className="grid z-20 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 text-white sm:grid-cols-1
    gap-6  justify-center items-center px-4 md:w-full sm:w-full lg:w-auto xl:w-auto"
    >
      {statisticsData.map((stat) => (
        <Statisticard
          key={stat.id}
          color={stat.color}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default StatisticCardParent;
