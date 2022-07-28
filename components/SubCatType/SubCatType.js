import { useState } from "react";
import style from "./SubCatType.module.css";

const SubCatType = ({ typeArr, sections = false }) => {
  const [type, setType] = useState(null);

  const chooseType = (id) => {
    setType((prev) => (prev !== id ? id : null));
  };

  return (
    <>
      <div className="col-auto">
        <b>{sections ? "Разделы" : "Тип"}</b>
      </div>
      <div className="col-10">
        {typeArr?.map(({ id, name }) => {
          return (
            <a
              key={id}
              className={type == id ? style.choosen : style.link}
              onClick={() => chooseType(id)}
            >
              {name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SubCatType;
