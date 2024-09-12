import cover from "../../assets/images/cover2.png";

const Cover = () => {
  return (
    <div className=" justify-center flex w-full items-center">
      <a href="#neticelerimiz">
        <img
          src={cover}
          className="object-cover w-full "
          alt="the cover image of Pilgrim MMC"
        />
      </a>
    </div>
  );
};

export default Cover;
