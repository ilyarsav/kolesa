import { useState } from "react";
import style from "./SubCategoryEquipmentsRadio.module.css";

const SubCategoryEquipmentsRadio = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const changeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const onOptionCick = (e) => {
    e.target.value == selectedOption && setSelectedOption("");
  };

  return (
    <div className="row">
      <label htmlFor="radioNotNew" className="px-0" >Состояние</label>
      <div className={`col-auto px-0 ${style.radio}`}>
        <input
          label="б/у"
          type="radio"
          id="radioNotNew"
          value="NotNew"
          checked={selectedOption === "NotNew"}
          onChange={(e) => changeOption(e)}
          onClick={(e) => onOptionCick(e)}
        />
        <input
          label="новые"
          type="radio"
          id="radioNew"
          value="New"
          checked={selectedOption === "New"}
          onChange={(e) => changeOption(e)}
          onClick={(e) => onOptionCick(e)}
        />
      </div>
    </div>
  );
}

export default SubCategoryEquipmentsRadio