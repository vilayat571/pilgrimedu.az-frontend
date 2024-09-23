import ATag from "../../atoms/Layout/ATag";
import PTag from "../../atoms/Layout/PTag";
import Fourkeys from "../../atoms/Main/Fourkeys";
import { PTags } from "../../modules/Ptags";

const InnerDiv1 = () => {
  return (
    <div  data-aos="fade-left" className="flex flex-col col-span-1">
      {PTags.map((item) => {
        return <PTag key={item.id} style={item.style} text={item.text} />;
      })}

      <Fourkeys />
      <ATag
        href="#neticelerimiz"
        style="w-28 text-center hover:bg-white hover:text-black transition duration-200 tracking-wider text-white bg-[#6f2eb7] px-3 mt-5 py-3 rounded"
        text="Ətraflı"
        label="Pilgrim MMC - nin nəticələri"
      />
    </div>
  );
};

export default InnerDiv1;
