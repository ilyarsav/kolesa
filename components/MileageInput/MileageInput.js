import { useState } from "react";

const MileageInput = () => {
  const [mileageValue, setMileageValue] = useState("");

  const onMileageValueChange = (e) => {
    setMileageValue(e.target.value);
  };

  return (
    <div className="col-auto">
      <label htmlFor="mileageInput">Пробег не более, км</label>
      <input
        type="number"
        id="mileageInput"
        value={mileageValue}
        onChange={(e) => onMileageValueChange(e)}
      />
    </div>
  );
};

export default MileageInput;
