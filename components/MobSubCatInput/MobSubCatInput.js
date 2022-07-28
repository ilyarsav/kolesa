import { useState } from "react";
import style from './MobSubCatInput.module.css'

const MobSubCatInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={style.container}>
      <label htmlFor="input" className={style.label}>Что ищем?</label>
      <input
        type="text"
        id="input"
        className={style.input}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default MobSubCatInput;
