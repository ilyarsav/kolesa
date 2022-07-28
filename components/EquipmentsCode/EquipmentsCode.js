import { useState } from "react";

const EquipmentsCode = () => {
  const [autoEquipment, setAutoEquipment] = useState("");

  const onAutoEquipmentInputChange = (e) => {
    setAutoEquipment(e.target.value);
  };

  return (
    <div className="col-auto">
      <input
        type="text"
        value={autoEquipment}
        onChange={(e) => onAutoEquipmentInputChange(e)}
        maxLength={75}
        className="w-100"
      />
    </div>
  );
};

export default EquipmentsCode;
