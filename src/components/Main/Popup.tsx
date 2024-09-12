import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IService } from "../../modules/services";

const Popup = ({
  data,
  setData,
}: {
  data: IService | null;
  setData: React.Dispatch<React.SetStateAction<IService | null>>;
}) => {
  return (
    <div
      className={`fixed w-full h-screen left-0 top-0 text-white z-50 flex items-center justify-center
      px-4 py-2 transition-opacity  ease-in-out ${
        data ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{
        transition: "opacity 0.4s ease-in-out, visibility 0.4s ease-in-out",
      }}
    >
      <div className="text-red-500 absolute top-0 left-0 w-full h-screen bg-[#9b9b9b] opacity-50"></div>
      <div className="bg-[#210442] px-10 py-10 rounded xl:w-1/3 lg:w-1/3 sm:w-11/12 md:w-3/4 absolute z-100">
        {data?.icon && (
          <span>
            <FontAwesomeIcon
              className="text-5xl text-[#fff] mb-5"
              icon={data.icon}
            />
          </span>
        )}
        <p className="text-lg mt-2">{data?.title}</p>
        <p className="text-[14px] tracking-widest leading-[22px] mt-2">
          {data?.description}
        </p>
        <button
          onClick={() => setData(null)}
          className="bg-[#6f2eb7] px-4 py-2 text-white cursor-pointer text-sm mt-6 rounded tracking-wide "
        >
          Bağla
          <FontAwesomeIcon icon={faMinimize} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
