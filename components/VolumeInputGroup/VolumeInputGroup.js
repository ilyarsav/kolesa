import { useEffect, useState } from "react";

const VolumeInputGroup = ({ onYearInputChange }) => {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  // useEffect(() => {
  //   onYearInputChange(inputFromValue, inputToValue);
  // }, [inputFromValue, inputToValue]);

  const onInputFromChange = (e) => {
    setInputFromValue(e.target.value);
  };

  const onInputToChange = (e) => {
    setInputToValue(e.target.value);
  };

  return (
    <>
      <div className="col-auto">
        <label htmlFor="from" className="px-0">
          Объем двигателя, л
        </label>
        <div className="row p-0">
          <div className="input-group">
            <input
              id="from"
              type="number"
              placeholder="от"
              className="form-control"
              value={inputFromValue}
              onChange={(e) => {
                onInputFromChange(e);
              }}
            />
            <input
              id="to"
              type="number"
              placeholder="до"
              className="form-control"
              value={inputToValue}
              onChange={(e) => {
                onInputToChange(e);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VolumeInputGroup;
