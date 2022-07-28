import { useState } from "react";
import style from "./SubCategoryTruckRadio.module.css";

const SubCategoryTruckRadio = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const changeOption = (e) => {
    setSelectedOption(true);
  };

  const changeOption2 = (e) => {
    setSelectedOption(false);
  };

  const onOptionClick = (e) => {
    setSelectedOption((prev) => (prev === true || prev === false) && null);
  };

  return (
    <div className="row">
      <label htmlFor="radioAvailable" className="px-0">
        Наличие
      </label>
      <div className={`px-0 ${style.radio}`}>
        <input
          label="В наличии"
          type="radio"
          id="radioAvailable"
          value="Available"
          checked={selectedOption}
          onChange={(e) => changeOption(e)}
          onClick={(e) => onOptionClick(e)}
        />
        <input
          label="На заказ"
          type="radio"
          id="radioToOrder"
          value="ToOrder"
          checked={selectedOption === false}
          onChange={(e) => changeOption2(e)}
          onClick={(e) => onOptionClick(e)}
        />
      </div>
    </div>
  );
};

export default SubCategoryTruckRadio;
