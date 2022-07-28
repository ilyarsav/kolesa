import { useState } from "react";

const SubCategoryCheckbox = ({ label, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="col-auto">
      <input
        type="checkbox"
        id={label}
        className="me-2"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default SubCategoryCheckbox;
