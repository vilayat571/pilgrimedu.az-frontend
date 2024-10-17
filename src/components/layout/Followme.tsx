import follow from "../../assets/images/follow.png";

function Followme() {
  return (
    <div className="gradient mb-16 ">
      <div
        className="bg-[#000000] gradient2 w-full h-auto flex
xl:flex-row lg:flex-row md:flex-col sm:flex-col
"
      >
        <div
          className="w-full bg-[#000000] h-[250px]  inline-block xl:px-12 lg:px-12 md:px-4 sm:px-4 py-8 
  "
        >
          <span className="block text-lg mb-2 text-white">Instaqram</span>
          <p className="xl:text-lg lg:text-lg md:text-base sm:text-base mt-0 text-white">
            Ən son xəbərləri görmək və istənilən sualınıza cavab tapmaq
            <br />
            üçün bizim səhifəmizə abunə olun.
          </p>
          <div className="flex  mt-6 h-auto">
            <input
              readOnly
              type="text"
              value={"@pilgrimedu.az"}
              className="h-16  text-[#0E0517] rounded placeholder:text-[#454545] indent-4  
        border-[1px] border-[#E3E3E3] xl:w-2/3 lg:w-2/3 md:w-5/6 sm:w-1/2 outline-none focus:outline-none   "
            />
            <a
              href="https://www.instagram.com/pilgrimedu_az/"
              target="blank"
              aria-label="The link to redirect Pilgrim MMC instagram account"
              className="text-white flex justify-center items-center rounded cursor-pointer px-8 bg-[#6f2eb7]
                hover:bg-white hover:text-black transition duration-300
        ml-3"
            >
              İzlə
            </a>
          </div>
        </div>
        <img
          src={follow}
          className="object-cover relative right-10 xl:block lg:block md:hidden sm:hidden"
          alt="the image of follow me section"
        />
      </div>
    </div>
  );
}

export default Followme;
