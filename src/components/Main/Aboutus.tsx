import cap from "../../assets/images/graduation.png";

const Aboutus = () => {
  return (
    <div
      className="
        xl:px-0 lg:px-28  md:px-12 sm:px-6
        my-16"
    >
      <div
        className="w-full 
    grid grid-cols-2 gap-4
    xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
    "
      >
        <div className="flex flex-col col-span-1 ">
          <p className="text-4xl font-semibold text-[#0F0916]">
            2019-ci ildən - bənzərsiz
            <br />
            hərtərəfli xaricdə təhsil şirkət
          </p>
          <p id="ptag" className="text-[16px] text-[#4F4F4F] mt-4">
            Tələbə vizasına müraciət prosesində inamla və müvəffəqiyyətlə
            getməyinizə kömək edəcək ekspert məsləhətləri, addım-addım
            təlimatlar və insayder məsləhətləri Sadələşdirilmiş addımlar, sübut
            edilmiş strategiyalar, sarsılmaz dəstək!
          </p>
          <a
            href="#results"
            className=" w-40 text-center tracking-wider
      text-white bg-[#E82518] 
      px-3 mt-5 py-3 rounded"
          >
            Tələbələrimiz
          </a>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <img
            src={cap}
            className=" w-96 h-72 object-cover"
            alt="The Image of Pilgrim MMC website About Us section"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
