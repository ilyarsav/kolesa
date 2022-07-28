import { useEffect, useState } from "react";
import style from "./SelectBoxWheel.module.css";

const SelectBoxWheel = ({ defaultVal }) => {
  const [list, setList] = useState([
    { id: 1, name: "справа" },
    { id: 2, name: "слева" },
  ]);

  const [showList, setShowList] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", onCloseClick);
    }, 0);

    return () => {
      window.removeEventListener("click", onCloseClick);
    };
  }, [showList]);

  const onInputClick = () => {
    setShowList(true);
  };

  const onCloseClick = () => {
    setShowList(false);
  };

  const onItemClick = (id) => {
    setSelectedValue(id);
    setShowList(false);
  };

  return (
    <div className="col-auto">
      <div className={style.selectbox}>
        {!showList && (
          <div className={style.input} onClick={() => onInputClick()}>
            {!selectedValue && defaultVal}
            {selectedValue && list[selectedValue - 1]?.name}
          </div>
        )}
        {!showList && <div className={style.arrow} />}
        {showList && (
          <div className={style.input__overflow}>
            <ul className={style.input__overflow__list}>
              <li
                onClick={() => onItemClick(null)}
                className={selectedValue === null && style.choosen}
              >
                {defaultVal}
              </li>
              {list.map(({ id, name }) => {
                return (
                  <li
                    key={id}
                    onClick={() => onItemClick(id)}
                    className={selectedValue === id && style.choosen}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBoxWheel;
