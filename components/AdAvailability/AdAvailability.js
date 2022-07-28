import { useState } from "react";
import style from "./AdAvailability.module.css";

const AdAvailability = () => {
  const [selectedOption, setSelectedOption] = useState("Got");

  const changeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const onOptionClick = (e) => {
    e.target.value == selectedOption && setSelectedOption("");
  };

  return (
    <div className="col-auto">
      <div className={style.radio}>
        <input
          label="В наличии"
          type="radio"
          id="radioGot"
          value="Got"
          checked={selectedOption === "Got"}
          onChange={(e) => changeOption(e)}
          onClick={(e) => onOptionClick(e)}
        />
        <input
          label="На заказ"
          type="radio"
          id="radioDontGot"
          value="DontGot"
          checked={selectedOption === "DontGot"}
          onChange={(e) => changeOption(e)}
          onClick={(e) => onOptionClick(e)}
        />
      </div>
    </div>
  );
};

export default AdAvailability;
