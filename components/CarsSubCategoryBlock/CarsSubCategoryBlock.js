import { useState } from "react";
import CarsSubCategoryFormDilers from "../CarsSubCategoryFormDilers/CarsSubCategoryFormDilers";
import CarsSubCategoryFormLightweight from "../CarsSubCategoryFormLightweight/CarsSubCategoryFormLightweight";
import CarsSubCategoryFormMototech from "../CarsSubCategoryFormMototech/CarsSubCategoryFormMototech";
import CarsSubCategoryFormWaterTrans from "../CarsSubCategoryFormWaterTrans/CarsSubCategoryFormWaterTrans";
import style from "./CarsSubCategoryBlock.module.css";

const CarsSubCategoryBlock = ({ subcatList }) => {
  const [clickOnDilers, setClickOnDilers] = useState(false);
  const [clickOnMototech, setClickOnMototech] = useState(false);
  const [clickOnLightweight, setClickOnLightweight] = useState(false);
  const [clickOnWaterTrans, setClickOnWaterTrans] = useState(false);

  const onDilersClick = () => {
    setClickOnMototech(false);
    setClickOnWaterTrans(false);
    setClickOnLightweight(false);
    setClickOnDilers((res) => !res);
  };
  const onMototechClick = () => {
    setClickOnDilers(false);
    setClickOnLightweight(false);
    setClickOnWaterTrans(false);
    setClickOnMototech((res) => !res);
  };
  const onLightweightClick = () => {
    setClickOnDilers(false);
    setClickOnMototech(false);
    setClickOnWaterTrans(false);
    setClickOnLightweight((res) => !res);
  };
  const onWaterTransClick = () => {
    setClickOnDilers(false);
    setClickOnLightweight(false);
    setClickOnMototech(false);
    setClickOnWaterTrans((res) => !res);
  };

  return (
    <>
      <div className={`row ${style.subcat}`}>
        <div className="col-auto">
          <a
            className={clickOnLightweight ? style.active : style.link}
            onClick={() => onLightweightClick()}
          >
            Легковые
          </a>
        </div>
        <div className="col-auto">
          <a
            className={clickOnDilers ? style.active : style.link}
            onClick={() => onDilersClick()}
          >
            Дилеры
          </a>
        </div>
        <div className="col-auto">
          <a
            className={clickOnMototech ? style.active : style.link}
            onClick={() => onMototechClick()}
          >
            Мототехника
          </a>
        </div>
        <div className="col-auto">
          <a
            className={clickOnWaterTrans ? style.active : style.link}
            onClick={() => onWaterTransClick()}
          >
            Водный транспорт
          </a>
        </div>
      </div>
      {clickOnDilers && <CarsSubCategoryFormDilers />}
      {clickOnMototech && <CarsSubCategoryFormMototech />}
      {clickOnLightweight && <CarsSubCategoryFormLightweight />}
      {clickOnWaterTrans && <CarsSubCategoryFormWaterTrans />}
    </>
  );
};

export default CarsSubCategoryBlock;
