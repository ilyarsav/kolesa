import { useEffect, useState } from "react";
import style from "./MobYearInputGroup.module.css";

const MobYearInputGroup = ({ onYearInputChange }) => {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  // useEffect(() => {
  //   onYearInputChange(inputFromValue, inputToValue);
  // }, [inputFromValue, inputToValue]);

  const onInputFromChange = (e) => {
    setInputFromValue(e.target.value);
  };

  const onInputToChange = (e) => {
    setInputToValue(e.target.value);
  };

  return (
    <>
      <div className="row mt-2">
        <label htmlFor="from">Год выпуска</label>
        <div className={style.input__group}>
          <input
            id="from"
            name="from"
            type="number"
            className={style.input}
            placeholder="от"
            min="1900"
            max="2022"
            value={inputFromValue}
            onChange={(e) => {
              onInputFromChange(e);
            }}
          />
          <input
            id="to"
            name="to"
            type="number"
            className={style.input}
            placeholder="до"
            min="1900"
            max="2022"
            value={inputToValue}
            onChange={(e) => {
              onInputToChange(e);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MobYearInputGroup;
