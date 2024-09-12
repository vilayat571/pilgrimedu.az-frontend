import Askquestion from "../../Main/Askquestion";
import Threeblogs from "../BlogsMini/Threeblogs";
import FAAQ from "../FAQ/FAAQ";
import Followme from "../Followme";
import Foot from "./Foot";
import FooterLayout from "../FooterLayout";

function Footer() {
  return (
    <div className="flex items-center justify-center flex-col">
      {window.location.pathname !== "/bloqlar" && <Threeblogs />}

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
