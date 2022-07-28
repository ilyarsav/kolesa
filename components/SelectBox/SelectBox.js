import { useEffect, useState } from "react";
import style from "./SelectBox.module.css";

const SelectBox = ({ value = 0, list, defaultVal }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(defaultVal);
  const [showList, setShowList] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", onCloseClick);
    }, 0);

    return () => {
      window.removeEventListener("click", onCloseClick);
    };
  }, [showList]);

  const onInputChange = (e) => {
    const keyword = e.target.value;

    if (keyword) {
      const results = list.filter((item) => {
        return item.name.toLowerCase().includes(keyword) && item;
      });
      setFilteredList(results);
    }

    setInputValue(keyword);
  };

  const onInputClick = () => {
    setInputValue("");
    setInputPlaceholder("Поиск...");
    setShowList(true);
  };

  const onCloseClick = () => {
    selectedValue !== 0
      ? setInputValue(list[selectedValue - 1]?.name)
      : (setInputValue(""), setInputPlaceholder(defaultVal));
    setShowList(false);
  };

  const onItemClick = (id, name) => {
    if (id === 0) {
      setInputPlaceholder(name);
      setInputValue("");
    } else {
      setInputValue(name);
    }

    setSelectedValue(id);
    setShowList(false);
  };

  return (
    <div className="col-auto">
      <div className={style.selectbox}>
        <input
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={(e) => onInputChange(e)}
          onClick={() => onInputClick()}
        />
        {!showList && <div className={style.arrow} />}
        {showList && (
          <div className={style.input__overflow}>
            <ul className={style.input__overflow__list}>
              {!inputValue && (
                <li
                  key={0}
                  onClick={() => onItemClick(0, defaultVal)}
                  className={selectedValue === 0 && style.choosen}
                >
                  {defaultVal}
                </li>
              )}
              {!inputValue &&
                list?.map(({ id, name }) => {
                  return (
                    <li
                      key={id}
                      onClick={() => onItemClick(id, name)}
                      className={selectedValue === id && style.choosen}
                    >
                      {name}
                    </li>
                  );
                })}
              {inputValue &&
                filteredList?.map(({ id, name }) => {
                  return (
                    <li
                      key={id}
                      onClick={() => onItemClick(id, name)}
                      className={selectedValue === id && style.choosen}
                    >
                      {name}
                    </li>
                  );
                })}
              {inputValue && filteredList.length < 1 && (
                <div>Совпадений не найдено</div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
