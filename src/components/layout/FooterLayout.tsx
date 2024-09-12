import React from "react";

interface IFL {
  children: React.ReactNode;
}

const FooterLayout: React.FC<IFL> = ({ children }) => {
  return (
    <div
      className="xl:w-3/5 lg:w-full md:w-full sm:w-full 
  xl:px-0 lg:px-20 md:px-10 sm:px-4 flex bg-[#EDF3F5] flex-col"
    >
      {children}
    </div>
  );
};

export default FooterLayout;
