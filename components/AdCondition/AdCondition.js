import { useState } from "react";
import style from "./AdCondition.module.css";

const AdCondition = ({ id, motoConditionList }) => {
  const [motoCondition, setMotoCondition] = useState(null);
  const [selectedCondition, setSelectedСondition] = useState("NotNew");

  const changeCondition = (e) => {
    setSelectedСondition(e.target.value);
  };

  const onConditionClick = (e) => {
    e.target.value == selectedCondition && setSelectedСondition("");
  };

  const onMotoConditionClick = (id) => {
    motoCondition != id ? setMotoCondition(id) : setMotoCondition(null);
  };

  return (
    <div className="col-auto">
      {(id === "2" || id === "18" || id === "19") &&
        motoConditionList &&
        motoConditionList.map(({ id, name }) => {
          return (
            <a
              className={motoCondition == id ? style.choosen : style.link}
              onClick={() => onMotoConditionClick(id)}
              key={id}
            >
              {name}
            </a>
          );
        })}
      {(id === "4" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "9" ||
        id === "10") && (
        <div className={style.radio}>
          <input
            label="б/у"
            type="radio"
            id="radioNotNew"
            value="NotNew"
            checked={selectedCondition === "NotNew"}
            onChange={(e) => changeCondition(e)}
            onClick={(e) => onConditionClick(e)}
          />
          <input
            label="новые"
            type="radio"
            id="radioNew"
            value="New"
            checked={selectedCondition === "New"}
            onChange={(e) => changeCondition(e)}
            onClick={(e) => onConditionClick(e)}
          />
        </div>
      )}
    </div>
  );
};

export default AdCondition;
