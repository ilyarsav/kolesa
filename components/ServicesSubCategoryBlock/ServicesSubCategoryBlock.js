import { useState } from "react";
import style from "./ServicesSubCategoryBlock.module.css";
import SubCatRepair from "../SubCatRepair/SubCatRepair";
import SubCatService from "../SubCatService/SubCatService";
import SubCatTuning from "../SubCatTuning/SubCatTuning";
import SubCatOther from "../SubCatOther/SubCatOther";

const ServicesSubCategoryBlock = () => {
  const [activeRepair, setActiveRepair] = useState(false);
  const [activeService, setActiveService] = useState(false);
  const [activeTuning, setActiveTuning] = useState(false);
  const [activeOther, setActiveOther] = useState(false);

  const onRepairClick = () => {
    setActiveOther(false);
    setActiveTuning(false);
    setActiveService(false);
    setActiveRepair((prev) => !prev);
  };

  const onServiceClick = () => {
    setActiveOther(false);
    setActiveTuning(false);
    setActiveRepair(false);
    setActiveService((prev) => !prev);
  };

  const onTuningClick = () => {
    setActiveRepair(false);
    setActiveOther(false);
    setActiveService(false);
    setActiveTuning((prev) => !prev);
  };

  const onOtherClick = () => {
    setActiveRepair(false);
    setActiveTuning(false);
    setActiveService(false);
    setActiveOther((prev) => !prev);
  };

  return (
    <>
      <div className={`row ${style.subcat}`}>
        <div className="col-auto">
          <a
            className={activeRepair ? style.active : style.link}
            onClick={() => onRepairClick()}
          >
            Ремонт
          </a>
        </div>
        <div className="col-auto">
          <a
            className={activeService ? style.active : style.link}
            onClick={() => onServiceClick()}
          >
            Услуги
          </a>
        </div>
        <div className="col-auto">
          <a
            className={activeTuning ? style.active : style.link}
            onClick={() => onTuningClick()}
          >
            Тюнинг
          </a>
        </div>
        <div className="col-auto">
          <a
            className={activeOther ? style.active : style.link}
            onClick={() => onOtherClick()}
          >
            Другие
          </a>
        </div>
      </div>

      {activeRepair && <SubCatRepair />}

      {activeService && <SubCatService />}

      {activeTuning && <SubCatTuning />}

      {activeOther && <SubCatOther />}
    </>
  );
};

export default ServicesSubCategoryBlock;
