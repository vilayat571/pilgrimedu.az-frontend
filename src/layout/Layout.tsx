import React, { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { motion } from "framer-motion";
import Scroll from "../components/layout/Scroll";

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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          Loading
        </div>
      ) : (
        <div className="tracking-wide flex flex-col items-center">
          <Scroll />
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </motion.div>
  );
};

export default Layout;
