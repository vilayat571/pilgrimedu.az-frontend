import Askquestion from "../../Main/Askquestion";
import FAAQ from "../FAQ/FAAQ";
import Followme from "../Followme";
import Foot from "./Foot";
import FooterLayout from "../FooterLayout";

function Footer() {
  return (
    <div className="flex bg-[#000] items-center justify-center flex-col">
      <FAAQ />
      <FooterLayout>
        <Followme />
        <Askquestion />
        <Foot />
      </FooterLayout>
    </div>
  );
}

export default Footer;
