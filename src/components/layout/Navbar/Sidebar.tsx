import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IIHrefs } from "../../../modules/navrefs";

import Sidemode from "./Sidemode";

// eslint-disable-next-line react-refresh/only-export-components
const Sidebar = ({
  hrefs,
  mode,
  setMode,
}: {
  mode: boolean;
  setMode: (mode: boolean) => void;
  hrefs: IIHrefs[];
}) => {
  return (
    <>
      <div
        onClick={() => setMode(!mode)}
        className="xl:hidden lg:hidden relative top-1 md:block sm:block  right-2"
      >
        <FontAwesomeIcon
          icon={faBars}
          className="bg-[#6f2eb7] p-2 mr-2 rounded text-white text-xl"
        />
      </div>
      <Sidemode hrefs={hrefs} mode={mode} setMode={setMode} />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Sidebar);
