import { useState } from "react";

const AdTextarea = () => {
  const [motoTextarea, setMotoTextarea] = useState("");

  const onMotoTextareaChange = (e) => {
    setMotoTextarea(e.target.value);
  };

  return (
    <div className="col-7">
      <textarea
        rows={5}
        value={motoTextarea}
        onChange={(e) => onMotoTextareaChange(e)}
        maxLength={2100}
        className="w-100 h-100"
      />
      <div>
        <span>
          Максимальная длина текста 2100 знаков. Осталось{" "}
          {2100 - motoTextarea.length} знаков.
        </span>
      </div>
    </div>
  );
};

export default AdTextarea;
