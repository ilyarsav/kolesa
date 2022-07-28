import { useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";

const AdWorkingHours = () => {
  const [showAll, setShowAll] = useState(false);

  const onShowOpen = () => {
    setShowAll(true);
  };

  const onShowClose = () => {
    setShowAll(false);
  };

  return (
    <div className="col-7">
      {!showAll && (
        <>
          <div className="row">
            <div className="col-2">Будни</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2">Перерыв</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row mb-3">
            <div className="col-2"></div>
            <div className="col-auto">
              <a className="" onClick={onShowOpen}>
                Показать все рабочие дни
              </a>
            </div>
          </div>
        </>
      )}
      {showAll && (
        <>
          <div className="row">
            <div className="col-2">Понедельник</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2">Перерыв</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row mt-3">
            <div className="col-2">Вторник</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2">Перерыв</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row">
            <div className="col-2">Среда</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2">Перерыв</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row">
            <div className="col-2">Четверг</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2">Перерыв</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row">
            <div className="col-2">Пятница</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2">Перерыв</div>
            <SelectBox />
            <SelectBox />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row mt-3">
            <div className="col-2"></div>
            <SubCategoryCheckbox label="Выходной" />
            <SubCategoryCheckbox label="Без перерыва" />
          </div>
          <div className="row mb-3">
            <div className="col-2"></div>
            <div className="col-auto">
              <a className="" onClick={onShowClose}>
                Скрыть рабочие дни
              </a>
            </div>
          </div>
        </>
      )}

      <div className="row">
        <div className="col-2">Суббота</div>
        <SelectBox />
        <SelectBox />
      </div>
      <div className="row mt-3">
        <div className="col-2">Перерыв</div>
        <SelectBox />
        <SelectBox />
      </div>
      <div className="row mt-3">
        <div className="col-2"></div>
        <SubCategoryCheckbox label="Выходной" />
        <SubCategoryCheckbox label="Без перерыва" />
      </div>
      <div className="row">
        <div className="col-2">Восресенье</div>
        <SelectBox />
        <SelectBox />
      </div>
      <div className="row mt-3">
        <div className="col-2">Перерыв</div>
        <SelectBox />
        <SelectBox />
      </div>
      <div className="row mt-3">
        <div className="col-2"></div>
        <SubCategoryCheckbox label="Выходной" />
        <SubCategoryCheckbox label="Без перерыва" />
      </div>
    </div>
  );
};

export default AdWorkingHours;
