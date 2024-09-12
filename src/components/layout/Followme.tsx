
function Followme() {
  return (
    <div
      className="bg-white w-full h-auto flex
    
    xl:flex-row lg:flex-row md:flex-col sm:flex-col
    
    mb-16 rounded-xl "
    >
      <div className="w-full bg-white h-[250px] inline-block px-12 py-8 rounded-lg">
        <span className="block text mb-2">Instagram</span>
        <p className="text-lg mt-0">
          Ən son xəbərləri və istənilən suallarınıza cavab tapmaq
          <br />
          üçün bizim səhifəmizə abunə olun.
        </p>
        <div className="flex  mt-6 h-auto">
          <input
            readOnly
            type="text"
            value={"pilgrim_edu"}
            className="h-16 rounded-md text-[#0E0517] placeholder:text-[#454545] indent-4  
            border-[1px] border-[#E3E3E3] w-1/2 outline-none focus:outline-none   "
          />
          <a
            href="https://www.instagram.com/pilgrimedu_az/?hl=en"
            target="blank"
            aria-label="The link to redirect Pilgrim MMC instagram account"
            className="text-white flex justify-center items-center cursor-pointer px-8 rounded-md bg-[#0E0517] ml-3"
          >
            İzlə
          </a>
        </div>
      </div>
      <img
        src="https://www.bu.edu/files/2023/02/study-abroad-planning-tips-tricks-and-insights-1200x1200.jpg"
        className="h-[250px] w-[250px] object-cover rounded-xl xl:block lg:block md:hidden sm:hidden"
        alt=""
      />
    </div>
  );
}

export default Followme;
