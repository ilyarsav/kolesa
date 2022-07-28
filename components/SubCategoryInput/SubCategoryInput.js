import { useState } from "react";

const SubCategoryInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="col">
      <input
        type="text"
        className="w-100 p-1"
        placeholder="Что ищем?"
        value={inputValue}
        onChange={handleChange}
      />
      <div id="emailHelp" className="form-text">
        Здесь пишут, что хотят.
      </div>
    </div>
  );
};

export default SubCategoryInput;
