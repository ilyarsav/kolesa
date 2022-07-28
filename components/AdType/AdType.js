import { useState } from "react";
import style from "./AdType.module.css";

const AdType = ({ adTypeList }) => {
  const [adType, setAdType] = useState(null);

  const chooseAdType = (id) => {
    adType != id ? setAdType(id) : setAdType(null);
  };

  return (
    <div className="col-7">
      <div className="row">
        {adTypeList &&
          adTypeList.map(({ id, name }) => {
            return (
              <div className="col-auto">
                <a
                  className={adType == id ? style.choosen : style.link}
                  onClick={() => chooseAdType(id)}
                  key={id}
                >
                  {name}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdType;
