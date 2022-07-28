import { useState } from "react";
import style from "./EquipmentsBrandAndModel.module.css";

const EquipmentsBrandAndModel = ({ waterTransType, equipmentModel }) => {
  const [brand, setBrand] = useState(null);
  const [brandInputValue, setBrandInputValue] = useState("");
  const [brandFilteredList, setBrandFilteredList] = useState([]);

  const [model, setModel] = useState(null);
  const [modelInputValue, setModelInputValue] = useState("");
  const [modelFilteredList, setModelFilteredList] = useState([]);

  const onBrandInputChange = (e) => {
    const keyword = e.target.value;

    if (keyword) {
      const results = waterTransType.filter((item) => {
        return item.name.toLowerCase().includes(keyword) && item;
      });
      setBrandFilteredList(results);
    }

    setBrandInputValue(keyword);
  };

  const onBrandClick = (id) => {
    brand != id ? setBrand(id) : setBrand(null);
  };

  const onModelInputChange = (e) => {
    const keyword = e.target.value;

    if (keyword) {
      const results = equipmentModel.filter((item) => {
        return item.name.toLowerCase().includes(keyword) && item;
      });
      setModelFilteredList(results);
    }

    setModelInputValue(keyword);
  };

  const onModelClick = (id) => {
    model != id ? setModel(id) : setModel(null);
  };

  return (
    <>
      <div className="col-auto">
        <div className={style.selectbox}>
          <input
            type="text"
            placeholder="Поиск"
            value={brandInputValue}
            onChange={(e) => onBrandInputChange(e)}
          />
          <div className={style.input__overflow}>
            <ul className={style.input__overflow__list}>
              {!brandInputValue &&
                waterTransType &&
                waterTransType.map(({ id, name }) => {
                  return (
                    <li
                      key={id}
                      onClick={() => onBrandClick(id, name)}
                      className={brand === id ? style.moto__choosen : null}
                    >
                      {name}
                    </li>
                  );
                })}
              {brandInputValue &&
                brandFilteredList &&
                brandFilteredList.map(({ id, name }) => {
                  return (
                    <li
                      key={id}
                      onClick={() => onBrandClick(id, name)}
                      className={brand === id ? style.moto__choosen : null}
                    >
                      {name}
                    </li>
                  );
                })}
              {brandInputValue && brandFilteredList.length < 1 && (
                <div className="ps-2">Совпадений не найдено</div>
              )}
            </ul>
          </div>
        </div>
      </div>

      {brand && (
        <div className="col-auto">
          <div className={style.selectbox}>
            <input
              type="text"
              placeholder="Поиск"
              value={modelInputValue}
              onChange={(e) => onModelInputChange(e)}
            />
            <div className={style.input__overflow}>
              <ul className={style.input__overflow__list}>
                {!modelInputValue &&
                  equipmentModel &&
                  equipmentModel.map(({ id, name }) => {
                    return (
                      <li
                        key={id}
                        onClick={() => onModelClick(id, name)}
                        className={model === id ? style.moto__choosen : null}
                      >
                        {name}
                      </li>
                    );
                  })}
                {modelInputValue &&
                  modelFilteredList &&
                  modelFilteredList.map(({ id, name }) => {
                    return (
                      <li
                        key={id}
                        onClick={() => onModelClick(id, name)}
                        className={model === id ? style.moto__choosen : null}
                      >
                        {name}
                      </li>
                    );
                  })}
                {modelInputValue && modelFilteredList.length < 1 && (
                  <div className="ps-2">Совпадений не найдено</div>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EquipmentsBrandAndModel;
