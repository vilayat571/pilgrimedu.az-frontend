import { IService } from "../../modules/services";
import { useState } from "react";
import ServicesImg from "../../atoms/Main/ServicesImg";
import { motion } from "framer-motion";
import ServicesContext from "./ServicesContext";

const Services = () => {
  const [data, setData] = useState<IService | null>(null);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <ServicesContext data={data} setData={setData} />
      <ServicesImg />
    </motion.div>
  );
};

export default Services;
