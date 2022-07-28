import { useState } from "react";
import style from "./CommercialSubCategoryBlock.module.css";
import SubCatComTrucks from "../SubCatComTrucks/SubCatComTrucks";
import SubCatComBuses from "../SubCatComBuses/SubCatComBuses";
import SubCatComEquipments from "../SubCatComEquipments/SubCatComEquipments";
import SubCatComEquipSellers from "../SubCatComEquipSellers/SubCatComEquipSellers";
import SubCatComRent from "../SubCatComRent/SubCatComRent";
import SubCatComServices from "../SubCatComServices/SubCatComServices";

const CommercialSubCategoryBlock = () => {
  const [showTrucks, setShowTrucks] = useState(false);
  const [showBuses, setShowBuses] = useState(false);
  const [showSpecialEquipment, setShowSpecialEquipment] = useState(false);
  const [showSpecialEquipmentSellers, setShowSpecialEquipmentSellers] =
    useState(false);
  const [showRent, setShowRent] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const onTrucksClick = () => {
    setShowSpecialEquipment(false);
    setShowBuses(false);
    setShowSpecialEquipmentSellers(false);
    setShowRent(false);
    setShowServices(false);
    setShowTrucks((prev) => !prev);
  };

  const onBusesClick = () => {
    setShowSpecialEquipment(false);
    setShowTrucks(false);
    setShowSpecialEquipmentSellers(false);
    setShowRent(false);
    setShowServices(false);
    setShowBuses((prev) => !prev);
  };

  const onSpecialEquipmentClick = () => {
    setShowTrucks(false);
    setShowRent(false);
    setShowBuses(false);
    setShowSpecialEquipmentSellers(false);
    setShowServices(false);
    setShowSpecialEquipment((prev) => !prev);
  };

  const onSpecialEquipmentSellersClick = () => {
    setShowSpecialEquipment(false);
    setShowBuses(false);
    setShowTrucks(false);
    setShowRent(false);
    setShowServices(false);
    setShowSpecialEquipmentSellers((prev) => !prev);
  };

  const onRentClick = () => {
    setShowSpecialEquipment(false);
    setShowBuses(false);
    setShowSpecialEquipmentSellers(false);
    setShowTrucks(false);
    setShowServices(false);
    setShowRent((prev) => !prev);
  };

  const onServicesClick = () => {
    setShowSpecialEquipment(false);
    setShowSpecialEquipmentSellers(false);
    setShowTrucks(false);
    setShowRent(false);
    setShowBuses(false);
    setShowServices((prev) => !prev);
  };

  return (
    <>
      <div className={`row ${style.subcat}`}>
        <div className="col-auto">
          <a
            className={showTrucks ? style.active : style.link}
            onClick={() => onTrucksClick()}
          >
            Грузовики
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showBuses ? style.active : style.link}
            onClick={() => onBusesClick()}
          >
            Автобусы
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showSpecialEquipment ? style.active : style.link}
            onClick={() => onSpecialEquipmentClick()}
          >
            Спецтехника
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showSpecialEquipmentSellers ? style.active : style.link}
            onClick={() => onSpecialEquipmentSellersClick()}
          >
            Продавцы спецтехники
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showRent ? style.active : style.link}
            onClick={() => onRentClick()}
          >
            Аренда
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showServices ? style.active : style.link}
            onClick={() => onServicesClick()}
          >
            Услуги(коммерческие)
          </a>
        </div>
      </div>

      {showTrucks && <SubCatComTrucks />}

      {showBuses && <SubCatComBuses />}

      {showSpecialEquipment && <SubCatComEquipments />}

      {showSpecialEquipmentSellers && <SubCatComEquipSellers />}

      {showRent && <SubCatComRent />}

      {showServices && <SubCatComServices />}
    </>
  );
};

export default CommercialSubCategoryBlock;
