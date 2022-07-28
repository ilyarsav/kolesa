import { useState } from "react";

const AdPrice = () => {
  const [motoPriceInput, setMotoPriceInput] = useState("");

  const onMotoPriceInputChange = (e) => {
    setMotoPriceInput((v) => (e.target.validity.valid ? e.target.value : v));
  };
  return (
    <div className="col-auto">
      <input
        type="text"
        pattern="[0-9]*"
        maxLength={12}
        value={motoPriceInput}
        onChange={(e) => {
          onMotoPriceInputChange(e);
        }}
      />
      <span> тенге</span>
      {motoPriceInput.length > 0 && +motoPriceInput < 100 && (
        <div className="text-danger">Ожидается число больше 100</div>
      )}
    </div>
  );
};

export default AdPrice;
