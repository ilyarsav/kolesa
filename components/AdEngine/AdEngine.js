import { useState } from "react";

const AdEngine = () => {
  const [adEngineInput, setAdEngineInput] = useState("");

  const onMotoPriceInputChange = (e) => {
    const text = e.target.value;
    const rgx = /^[0-9]*\.?[0-9]*$/;

    setAdEngineInput((v) =>
      text.replace(/,/g, ".").match(rgx) ? text.replace(/,/g, ".") : v
    );
  };
  return (
    <div className="col-auto">
      <input
        type="text"
        // pattern="[0-9]*"
        value={adEngineInput}
        onChange={(e) => {
          onMotoPriceInputChange(e);
        }}
      />
      <span> л.</span>

      {+adEngineInput > 30 && (
        <div className="text-danger">Ожидается число меньше 30</div>
      )}
    </div>
  );
};

export default AdEngine;
