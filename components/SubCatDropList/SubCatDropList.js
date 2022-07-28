import style from "./SubCatDropList.module.css";
import { useState } from "react";

const SubCatDropList = ({ popList, fullList, label }) => {
  const [showFullList, setShowFullList] = useState(false);
  const [value, setValue] = useState(null);

  const chooseValue = (id) => {
    setValue((prev) => (prev !== id ? id : null));
    setShowFullList(false);
  };

  const onShowFullList = () => {
    setShowFullList((prev) => !prev);
  };

  return (
    <>
      <div className={`row p-2 ${showFullList && style.white}`}>
        <div className="col-auto">
          <a className={style.link} onClick={onShowFullList}>
            {label}
          </a>
        </div>
        {!popList?.some(({ id }) => id == value) &&
          fullList
            ?.filter(({ id }) => id == value)
            ?.map(({ id, name }) => {
              return (
                <div className="col-auto" key={id}>
                  <a
                    className={value === id ? style.choosen : style.link}
                    onClick={() => {
                      chooseValue(id);
                    }}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
        {popList?.map(({ id, name }) => {
          return (
            <div className="col-auto" key={id}>
              <a
                className={value == id ? style.choosen : style.link}
                onClick={() => chooseValue(id)}
              >
                {name}
              </a>
            </div>
          );
        })}
        <div className="col-auto">
          <a className={style.link} onClick={onShowFullList}>
            ещё
          </a>
        </div>
        {showFullList && (
          <div className="row mb-3">
            <div className="row d-flex justify-content-between">
              {fullList?.map(({ id, name }) => {
                return (
                  <div className="col-3 my-2" key={id}>
                    <a
                      className={value == id ? style.choosen : style.link}
                      onClick={() => chooseValue(id)}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubCatDropList;
