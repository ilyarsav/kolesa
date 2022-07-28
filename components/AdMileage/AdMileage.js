import { useState } from "react";
import AdType from "../AdType/AdType";
import style from "./AdMileage.module.css";

const AdMileage = ({ adTypeList }) => {
  const [mileageInput, setMileageInput] = useState("");

  const onMileageInputChange = (e) => {
    setMileageInput(e.target.value);
  };

  return (
    <div className="col-auto">
      <div className="row">
        <div className="col-auto">
          <input
            type="number"
            min="0"
            value={mileageInput}
            onChange={(e) => {
              onMileageInputChange(e);
            }}
          />
        </div>
        <AdType adTypeList={adTypeList} />
      </div>
    </div>
  );
};

export default AdMileage;
