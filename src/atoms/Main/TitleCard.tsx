import thanks from "../../assets/images/thanks.png";

const TitleCard = () => {
  return (
    <p
      className="relative xl:top-12 lg:top-12 md:top-0 sm:top-0
    text-center 
     xl:text-4xl lg:text-4xl md:text-3xl  sm:text-2xl 
    flex 
   xl:flex-row lg:flex-row md:flex-col sm:flex-col
   items-center justify-between text-white"
    >
      <span> Bizi göstəricilərimiz sübut edir!</span>
      <img
        className="xl:w-[400px] lg:w-[400px] md:w-[240px] sm:w-[240px] relative"
        src={thanks}
        alt="Image of Pilgrim Education MMC"
      />
    </p>
  );
};

export default TitleCard;
