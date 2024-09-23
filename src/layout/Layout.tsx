import React, { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { motion } from "framer-motion";


interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  React.useEffect(() => {
    setLoading(false);

  }, []);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          Loading
        </div>
      ) : (
        <div className="tracking-wide flex flex-col items-center">
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
  </motion.div>
  );
};

export default Layout;
