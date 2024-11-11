import { useState } from "react";
import { allCountries, areas, ICountries } from "../../modules/countries";
import styles from "../../assets/styles/Countries.module.css";

const Countries = () => {
  const [category, setCategory] = useState("Bütün Ölkələr");

  const filteredData: ICountries[] =
    category == "Bütün Ölkələr"
      ? allCountries
      : allCountries.filter((country: ICountries) => {
          return country.area == category;
        });

  return (
    <div
    className={`flex items-center w-full  h-auto bg-black  my-16 xl:px-0 lg:px-0 md:px-6 sm:px-6 flex-col justify-center`}
  >
    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col items-start justify-between w-full text-white tracking-wider">
      <p className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl">
        Seçimini et və bizə burax!
        <br />
        <span className="text-[#6F2EB5]"> İstədiniz ölkədə təhsil al.</span>
      </p>
      <p className="text-white text-base xl:mt-0 lg:mt-0 md:mt-2 sm:mt-4">
        Təhsil üçün ideal yeri seçmək, karyeraınızın <br /> trayektoriyasını
        formalaşdıra biləcək əsas <br /> qərardır.
      </p>
    </div>
  
   <div className={`${styles.gradient1} w-full items-center  flex justify-center mt-8`}>
   <div className={`w-full ${styles.gradient2} px-4 py-3 flex gap-6 bg-white overflow-scroll  rounded-3xl`}>
      {areas.map((area) => (
        <button
          key={area}
          onClick={() => setCategory(area)}
          className={`text-xl px-5 py-4 text-nowrap z-0 rounded ${
            area === category ? "bg-[#6F2EB6] text-white" : "text-black"
          } mx-3`}
        >
          {area}
        </button>
      ))}
    </div>
   </div>
  
    <div className="w-full mt-6">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full">
        {filteredData.map((country) => (
          <div
            className="col-span-1 rounded-lg bg-[#6F2EB7] px-2 py-6 text-white flex items-center justify-center gap-4"
            key={country.id}
          >
            <span className="text-2xl">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Countries;
