import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IService, services } from "../../modules/services";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const ServicesMap = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<IService | null>>;
}) => {
  return (
    <div className="flex w-full flex-col py-24   ">
      <div className="text-left w-full">
        <p className="text-white text-lg">Xidmətlərimiz</p>
        <p className="text-white text-3xl mt-3">Asanlıqla xaricdə təhsil</p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:gap-y-20 gap-6 sm:grid-cols-1 mt-12">
          {services.map((service) => (
            <div key={service.id} className="col-span-1">
              <span>
                <FontAwesomeIcon
                  className="text-5xl text-[#fff] mb-5"
                  icon={service.icon}
                />
              </span>
              <p className="text-lg mt-2">{service.title}</p>
              <p className="text-[14px] line-clamp-2 tracking-widest leading-[22px] mt-2">
                {service.description}
              </p>
              <button
                onClick={() => {
                  setData(service);
                }}
                className="bg-[#6f2eb7] px-4 py-2 text-white text-sm mt-6 rounded tracking-wide"
              >
                Tam bax
                <FontAwesomeIcon icon={faExpand} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMap;
