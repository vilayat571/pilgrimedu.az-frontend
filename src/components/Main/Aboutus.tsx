import Aboutusinner from "./Aboutusinner";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        id="haqqımızda"
        className="
        xl:px-0 lg:px-28 md:px-12 sm:px-3 py-16
        xl:my-0 lg:my-0 md:my-16 sm:my-8 text-[#fff]"
      >
        <Aboutusinner />
      </div>
    </motion.div>
  );
};

export default Aboutus;
