import { useState } from "react";
import style from "./AdBrand.module.css";

const AdBrand = ({ adBrandList }) => {
  const [adBrand, setAdBrand] = useState(null);
  const [adBrandInputValue, setAdBrandInputValue] = useState("");
  const [adBrandFilteredList, setAdBrandFilteredList] = useState([]);

  const onAdBrandInputChange = (e) => {
    const keyword = e.target.value;

    if (keyword) {
      const results = adBrandList.filter((item) => {
        return item.name.toLowerCase().includes(keyword) && item;
      });
      setAdBrandFilteredList(results);
    }

    setAdBrandInputValue(keyword);
  };

  const onAdBrandClick = (id) => {
    adBrand != id ? setAdBrand(id) : setAdBrand(null);
  };

  return (
    <div className="col-auto">
      <div className={style.selectbox}>
        <input
          type="text"
          placeholder="Поиск"
          value={adBrandInputValue}
          onChange={(e) => onAdBrandInputChange(e)}
        />
        <div className={style.input__overflow}>
          <ul className={style.input__overflow__list}>
            {!adBrandInputValue &&
              adBrandList &&
              adBrandList.map(({ id, name }) => {
                return (
                  <li
                    key={id}
                    onClick={() => onAdBrandClick(id, name)}
                    className={adBrand === id ? style.moto__choosen : null}
                  >
                    {name}
                  </li>
                );
              })}
            {adBrandInputValue &&
              adBrandFilteredList &&
              adBrandFilteredList.map(({ id, name }) => {
                return (
                  <li
                    key={id}
                    onClick={() => onAdBrandClick(id, name)}
                    className={adBrand === id ? style.moto__choosen : null}
                  >
                    {name}
                  </li>
                );
              })}
            {adBrandInputValue && adBrandFilteredList.length < 1 && (
              <div className="ps-2">Совпадений не найдено</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdBrand;
