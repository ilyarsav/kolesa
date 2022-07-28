import { useState } from "react";
import style from "./AdDelivery.module.css";

const AdDelivery = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("No");

  const changeDelivery = (e) => {
    setSelectedDelivery(e.target.value);
  };

  const onDeliveryClick = (e) => {
    e.target.value == selectedDelivery && setSelectedDelivery("");
  };

  return (
    <div className="col-auto">
      <div className={style.radio}>
        <input
          label="Нет"
          type="radio"
          id="radioNo"
          value="No"
          checked={selectedDelivery === "No"}
          onChange={(e) => changeDelivery(e)}
          onClick={(e) => onDeliveryClick(e)}
        />
        <input
          label="Да"
          type="radio"
          id="radioYes"
          value="Yes"
          checked={selectedDelivery === "Yes"}
          onChange={(e) => changeDelivery(e)}
          onClick={(e) => onDeliveryClick(e)}
        />
      </div>
    </div>
  );
};

export default AdDelivery;
