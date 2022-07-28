import { useState } from "react";
import style from "./SubCatLightWeightRadio.module.css";


const SubCatLightWeightRadio = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  
  const changeOption = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="row">
      <div className={style.radio}>
        <input
          type="radio"
          id="radioAll"
          value="All"
          checked={selectedOption === "All"}
          label="Все"
          onChange={(e) => changeOption(e)}
        />
        <input
          label="Новая"
          type="radio"
          id="radioNew"
          value="New"
          checked={selectedOption === "New"}
          onChange={(e) => changeOption(e)}
        />
        <input
          label="С пробегом"
          type="radio"
          id="radioNotNew"
          value="NotNew"
          checked={selectedOption === "NotNew"}
          onChange={(e) => changeOption(e)}
        />
      </div>
    </div>
  );
};

export default SubCatLightWeightRadio;
