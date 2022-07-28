import { useState } from "react";

const AdSeats = () => {
  const [seatsInput, setSeatsInput] = useState("");

  const onSeatsInputChange = (e) => {
    setSeatsInput(e.target.value);
  };

  return (
    <div className="col-auto">
      <input
        type="number"
        min="0"
        value={seatsInput}
        onChange={(e) => {
          onSeatsInputChange(e);
        }}
      />
    </div>
  );
};

export default AdSeats;
