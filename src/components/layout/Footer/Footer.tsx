import Askquestion from "../../Main/Askquestion";
import FAAQ from "../FAQ/FAAQ";
import Followme from "../Followme";
import Foot from "./Foot";
import FooterLayout from "../FooterLayout";
import Threeblogs from "./Threeblogs";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <div className="flex bg-[#000] items-center justify-center xl:px-0 lg:px-0 md:px-0 sm:px-3 flex-col">
      {pathname != "/bloqlar" && <Threeblogs />}
      <FooterLayout>
        <FAAQ />
        <Followme />
        <Askquestion />
        <Foot />
      </FooterLayout>
    </div>
  );
}

export default Footer;
