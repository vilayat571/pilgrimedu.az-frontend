import React, { ReactNode } from 'react'

const InnerLayoutSc:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div
    id="scholarship"
    className="
    bg-[#16022C] h-auto flex-col 
    px-6 pt-20 pb-12 
 xl:w-4/5 lg:w-full md:w-full sm:w-full"
    >
      {children}
    </div>
  )
}

export default InnerLayoutSc
