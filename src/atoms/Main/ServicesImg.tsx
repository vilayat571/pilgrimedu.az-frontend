import promoimg from "../../assets/images/promoimg.png";
const ServicesImg = () => {
  return (
    <a
      className="w-full cover relative bottom-12 flex items-center justify-center"
      aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
      target="blank"
      href="https://wa.me/994705959023"
    >
      <img src={promoimg} alt="İmage of Pilgrim MMC" />
    </a>
  );
};

export default ServicesImg;
