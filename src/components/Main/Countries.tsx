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
    className={`flex items-center w-full  h-auto bg-black  my-16 flex-col justify-center`}
  >
    <div className="flex items-start justify-between w-full text-white tracking-wider">
      <p className="text-5xl">
        Seçimini et və bizə burax
        <br />
        <span className="text-[#6F2EB5]"> İstədiniz ölkədə təhsil al</span>
      </p>
      <p className="text-white text-base">
        Təhsil üçün ideal yeri seçmək, karyeraınızın <br /> trayektoriyasını
        formalaşdıra biləcək əsas <br /> qərardır.
      </p>
    </div>
  
   <div className={`${styles.gradient1} w-full items-center flex justify-center mt-8`}>
   <div className={`w-full ${styles.gradient2} px-4 py-3 flex gap-6 bg-white  rounded-3xl`}>
      {areas.map((area) => (
        <button
          key={area}
          onClick={() => setCategory(area)}
          className={`text-xl px-5 py-4 rounded ${
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
            <img
              src={country.url}
              className="w-16 h-16 object-cover rounded-full"
              alt={`The image of flag of ${country.name}`}
            />
            <span className="text-2xl">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Countries;
