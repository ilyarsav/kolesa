import { useState } from "react";
import style from "./WheelType.module.css";

const WheelType = ({ tyreType }) => {
  const [type, setType] = useState(null);

  const chooseType = (id) => {
    type === id ? setType(null) : setType(id);
  };

  return (
    <div className="col-auto">
      {tyreType &&
        tyreType.map(({ id, name }) => {
          return (
            <a
              className={type == id ? style.choosen : style.link}
              onClick={() => chooseType(id)}
            >
              {name}
            </a>
          );
        })}
    </div>
  );
};

export default WheelType;
