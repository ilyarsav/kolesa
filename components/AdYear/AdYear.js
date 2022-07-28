import { useState } from "react";

const AdYear = () => {
  const [motoYearInput, setMotoYearInput] = useState("");

  const onMotoYearInputChange = (e) => {
    setMotoYearInput(e.target.value);
  };

  return (
    <div className="col-auto">
      <input
        type="number"
        min="1900"
        max="2022"
        value={motoYearInput}
        onChange={(e) => {
          onMotoYearInputChange(e);
        }}
      />
      <div>Например, 1998 или 2007</div>
      {+motoYearInput > 2022 && (
        <div className="text-danger">Ожидается число меньше 2022</div>
      )}
      {motoYearInput.length > 1 && +motoYearInput < 1900 && (
        <div className="text-danger">Ожидается число больше 1900</div>
      )}
    </div>
  );
};

export default AdYear;
