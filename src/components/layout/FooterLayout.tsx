import React from "react";

interface IFL {
  children: React.ReactNode;
}

const FooterLayout: React.FC<IFL> = ({ children }) => {
  return (
    <div
      className="xl:w-4/5 lg:w-full md:w-full sm:w-full 
  xl:px-0 lg:px-20 md:px-4 sm:px-0 flex bg-[#0000] flex-col"
    >
      {children}
    </div>
  );
};

export default FooterLayout;
