import { useState } from "react";
import style from "./MobSubCatCheckbox.module.css";

const MobSubCatCheckbox = ({ label, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <label htmlFor={label} className={style.label}>
        {label}
      </label>
      <input
        type="checkbox"
        id={label}
        className={style.checkbox}
        checked={isChecked}
        onChange={checkHandler}
      />
    </div>
  );
};

export default MobSubCatCheckbox;
