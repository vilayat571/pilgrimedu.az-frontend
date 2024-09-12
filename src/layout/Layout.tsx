import React, { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          Loading
        </div>
      ) : (
        <div
          className=" 
         tracking-wide flex flex-col items-center "
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
