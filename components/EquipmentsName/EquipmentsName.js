import { useState } from "react";

const EquipmentsName = () => {
  const [motoModelInput, setMotoModelInput] = useState("");

  const onMotoModelInputChange = (e) => {
    setMotoModelInput(e.target.value);
  };

  return (
    <div className="col-7">
      <input
        type="text"
        value={motoModelInput}
        onChange={(e) => onMotoModelInputChange(e)}
        maxLength={75}
        className="w-100"
      />
      <div>
        <span>
          Максимальная длина текста 75 знаков. Осталось{" "}
          {75 - motoModelInput.length} знаков.
        </span>
      </div>
    </div>
  );
};

export default EquipmentsName;
