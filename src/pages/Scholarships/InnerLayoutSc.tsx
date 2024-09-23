import React, { ReactNode } from "react";

const InnerLayoutSc: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full flex bg-[#16022C] items-center justify-center">
      <div
        id="scholarship"
        className="
    bg-[#16022C] h-auto flex-col justify-center
   pt-20 pb-12  xl:px-0 lg:px-20 md:px-4 sm:px-3
 xl:w-4/5 lg:w-full md:w-full sm:w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default InnerLayoutSc;
