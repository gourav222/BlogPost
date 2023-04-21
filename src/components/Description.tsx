import { Dispatch, SetStateAction } from "react";
import closeIcon from "../images/close-icon.png";

interface DescriptionProps {
  setShowDescription: Dispatch<SetStateAction<boolean>>;
  description: string;
}

function Description({ setShowDescription, description }: DescriptionProps) {
  return (
    <>
      <div className="description">
        <h4>Description</h4>
        <p>{description}</p>
        <button
          onClick={() => {
            setShowDescription(false);
          }}
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <div className="outer"></div>
    </>
  );
}

export default Description;
