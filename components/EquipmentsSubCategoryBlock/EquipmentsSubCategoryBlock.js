import { useEffect, useState } from "react";
import style from "./EquipmentsSubCategoryBlock.module.css";
import SubCatCarEquipments from "../SubCatCarEquipments/SubCatCarEquipments";
import SubCatCommercialEquipments from "../SubCatCommercialEquipments/SubCatCommercialEquipments";
import SubCatTyre from "../SubCatTyre/SubCatTyre";
import SubCatMotoEquipments from "../SubCatMotoEquipments/SubCatMotoEquipments";
import SubCatWheels from "../SubCatWheels/SubCatWheels";
import SubCatAccessories from "../SubCatAccessories/SubCatAccessories";
import SubCatOils from "../SubCatOils/SubCatOils";
import SubCatCarOnEquipments from "../SubCatCarOnEquipments/SubCatCarOnEquipments";
import SubCatWheelsShops from "../SubCatWheelsShops/SubCatWheelsShops";
import SubCatEquipmentsShop from "../SubCatEquipmentsShop/SubCatEquipmentsShop";

const EquipmentsSubCategoryBlock = ({ autoEquipments }) => {
  const [showCarEquipments, setShowCarEquipments] = useState(false);
  const [showCommercialEquipments, setShowCommercialEquipments] =
    useState(false);
  const [showMotoEquipments, setShowMotoEquipments] = useState(false);
  const [showTyre, setShowTyre] = useState(false);
  const [showWheels, setShowWheels] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [showOils, setShowOils] = useState(false);
  const [showCarOnEquipments, setShowCarOnEquipments] = useState(false);
  const [showWheelsShops, setShowWheelsShops] = useState(false);
  const [showEquipmentsShops, setShoEquipmentsShops] = useState(false);

  const onCarEquipmentsClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowOils(false);
    setShowAccessories(false);
    setShowWheels(false);
    setShowTyre(false);
    setShowMotoEquipments(false);
    setShowCommercialEquipments(false);
    setShowCarEquipments((res) => !res);
  };
  const onCommercialEquipmentsClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowOils(false);
    setShowAccessories(false);
    setShowWheels(false);
    setShowTyre(false);
    setShowMotoEquipments(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments((res) => !res);
  };
  const onMotoEquipmentsClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowOils(false);
    setShowAccessories(false);
    setShowWheels(false);
    setShowTyre(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments((res) => !res);
  };
  const onTyreClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowOils(false);
    setShowAccessories(false);
    setShowWheels(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre((res) => !res);
  };
  const onWheelsClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowOils(false);
    setShowAccessories(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre(false);
    setShowWheels((res) => !res);
  };
  const onAccessoriesClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowOils(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre(false);
    setShowWheels(false);
    setShowAccessories((res) => !res);
  };
  const onOilsClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarOnEquipments(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre(false);
    setShowWheels(false);
    setShowAccessories(false);
    setShowOils((res) => !res);
  };
  const onCarOnEquipmentsClick = () => {
    setShoEquipmentsShops(false);
    setShowWheelsShops(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre(false);
    setShowWheels(false);
    setShowAccessories(false);
    setShowOils(false);
    setShowCarOnEquipments((res) => !res);
  };
  const onWheelsShopsClick = () => {
    setShoEquipmentsShops(false);
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre(false);
    setShowWheels(false);
    setShowAccessories(false);
    setShowOils(false);
    setShowCarOnEquipments(false);
    setShowWheelsShops((res) => !res);
  };
  const onEquipmentsShopsClick = () => {
    setShowCarEquipments(false);
    setShowCommercialEquipments(false);
    setShowMotoEquipments(false);
    setShowTyre(false);
    setShowWheels(false);
    setShowAccessories(false);
    setShowOils(false);
    setShowCarOnEquipments(false);
    setShowWheelsShops(false);
    setShoEquipmentsShops((res) => !res);
  };

  return (
    <>
      <div className={`row ${style.subcat}`}>
        <div className="col-auto">
          <a
            className={showCarEquipments ? style.active : style.link}
            onClick={() => onCarEquipmentsClick()}
          >
            Автозапчасти
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showCommercialEquipments ? style.active : style.link}
            onClick={() => onCommercialEquipmentsClick()}
          >
            Запчасти на коммерческие
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showMotoEquipments ? style.active : style.link}
            onClick={() => onMotoEquipmentsClick()}
          >
            Мотозапчасти
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showTyre ? style.active : style.link}
            onClick={() => onTyreClick()}
          >
            Шины
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showWheels ? style.active : style.link}
            onClick={() => onWheelsClick()}
          >
            Диски
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showAccessories ? style.active : style.link}
            onClick={() => onAccessoriesClick()}
          >
            Аксессуары и мультимедия
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showOils ? style.active : style.link}
            onClick={() => onOilsClick()}
          >
            Масла и автохимия
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showCarOnEquipments ? style.active : style.link}
            onClick={() => onCarOnEquipmentsClick()}
          >
            Авто на запчасти
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showWheelsShops ? style.active : style.link}
            onClick={() => onWheelsShopsClick()}
          >
            Магазины шин и дисков
          </a>
        </div>
        <div className="col-auto">
          <a
            className={showEquipmentsShops ? style.active : style.link}
            onClick={() => onEquipmentsShopsClick()}
          >
            Магазины запчастей и авторазборы
          </a>
        </div>
      </div>

      {showCarEquipments && <SubCatCarEquipments />}

      {showCommercialEquipments && <SubCatCommercialEquipments />}

      {showMotoEquipments && <SubCatMotoEquipments />}

      {showTyre && <SubCatTyre />}

      {showWheels && <SubCatWheels />}

      {showAccessories && <SubCatAccessories />}

      {showOils && <SubCatOils />}

      {showCarOnEquipments && <SubCatCarOnEquipments />}

      {showWheelsShops && <SubCatWheelsShops />}

      {showEquipmentsShops && <SubCatEquipmentsShop />}
    </>
  );
};

export default EquipmentsSubCategoryBlock;
