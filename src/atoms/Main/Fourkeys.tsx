import { foursteps } from "../../modules/fourkeys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Fourkeys = () => {
  return (
    <div className=" flex flex-col gap-y-2 mt-3 mb-2">
      {foursteps.map((step) => {
        return (
          <p key={step.id} className="text-white text-base ">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            {step.text}
          </p>
        );
      })}
    </div>
  );
};

export default Fourkeys;
