import { useState } from "react";
import style from "./WaterTransType.module.css";

const WaterTransType = ({ waterTransType }) => {
  const [waterTrans, setWaterTrans] = useState(null);

  const chooseWaterTransType = (id) => {
    waterTrans != id ? setWaterTrans(id) : setWaterTrans(null);
  };

  return (
    <div className="col-auto">
      {waterTransType &&
        waterTransType.slice(0, 5).map(({ id, name }) => {
          return (
            <a
              className={waterTrans == id ? style.choosen : style.link}
              onClick={() => chooseWaterTransType(id)}
              key={id}
            >
              {name}
            </a>
          );
        })}
    </div>
  );
};

export default WaterTransType;
