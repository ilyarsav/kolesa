import { useEffect, useState } from "react";
import style from "./MobPriceInputGroup.module.css";

const MobPriceInputGroup = ({ onPriceInputChange }) => {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  // useEffect(() => {
  //   onPriceInputChange(inputFromValue, inputToValue);
  // }, [inputFromValue, inputToValue]);

  const onInputFromChange = (e) => {
    setInputFromValue((v) => (e.target.validity.valid ? e.target.value : v));
  };

  const onInputToChange = (e) => {
    setInputToValue((v) => (e.target.validity.valid ? e.target.value : v));
  };

  return (
    <>
      <div className="row mt-2">
        <label htmlFor="from">Цена</label>
        <div className={style.input__group}>
          <input
            id="from"
            name="from"
            type="text"
            pattern="[0-9]*"
            className={style.input}
            placeholder="от"
            value={inputFromValue}
            onChange={(e) => {
              onInputFromChange(e);
            }}
          />
          <input
            id="to"
            name="to"
            type="text"
            pattern="[0-9]*"
            className={style.input}
            placeholder="до"
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

export default MobPriceInputGroup;
