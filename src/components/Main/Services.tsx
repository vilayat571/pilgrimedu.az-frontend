import { IService } from "../../modules/services";
import { useState } from "react";
import ServicesImg from "../../atoms/Main/ServicesImg";

import ServicesContext from "./ServicesContext";

const Services = () => {
  const [data, setData] = useState<IService | null>(null);

  return (
    <>
      <ServicesContext data={data} setData={setData} />
      <ServicesImg />
    </>
  );
};

export default Services;
