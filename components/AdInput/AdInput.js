import { useState } from "react";

const AdInput = () => {
  const [nameInput, setNameInput] = useState("");

  const onNameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <div className="col-7">
      <input
        type="text"
        value={nameInput}
        onChange={(e) => onNameInputChange(e)}
        className="w-100"
      />
      
    </div>
  );
};

export default AdInput;
