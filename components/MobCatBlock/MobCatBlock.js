import { useState } from "react";
import MobModalCut from "../MobModalCut/MobModalCut";
import MobModalSubCatCar from "../MobModalSubCatCar/MobModalSubCatCar";
import MobModalSubCatCommercial from "../MobModalSubCatCommercial/MobModalSubCatCommercial";
import MobModalSubCatEquipment from "../MobModalSubCatEquipment/MobModalSubCatEquipment";
import MobModalSubCatServices from "../MobModalSubCatServices/MobModalSubCatServices";
import style from "./MobCatBlock.module.css";

const MobCatBlock = () => {
  const [carModalActive, setCarModalActive] = useState();
  const [equipmentModalActive, setEquipmentModalActive] = useState();
  const [commercialModalActive, setCommercialModalActive] = useState();
  const [servicesModalActive, setServicesModalActive] = useState();
  const [cutModalActive, setCutModalActive] = useState();

  const onCarModal = (val) => {
    setCarModalActive(val);
    setCutModalActive(false);
  };

  const onEquipmentModal = (val) => {
    setEquipmentModalActive(val);
    setCutModalActive(false);
  };

  const onCommercialModal = (val) => {
    setCommercialModalActive(val);
    setCutModalActive(false);
  };

  const onServicesModal = (val) => {
    setServicesModalActive(val);
    setCutModalActive(false);
  };

  const onCutModal = (val) => {
    setServicesModalActive(false);
    setCommercialModalActive(false);
    setEquipmentModalActive(false);
    setCarModalActive(false);
    setCutModalActive(val);
  };

  return (
    <div className={style.container}>
      <div className={style.item} onClick={() => onCarModal(true)}>
        <img src="car-svgrepo-com.svg" />
        <span>Машины</span>
      </div>
      <div className={style.item} onClick={() => onEquipmentModal(true)}>
        <img src="car-door-svgrepo-com.svg" />
        <span>Запчасти</span>
      </div>
      <div className={style.item} onClick={() => onCommercialModal(true)}>
        <img src="agriculture_car.svg" />
        <span>Коммерческие</span>
      </div>
      <div className={style.item} onClick={() => onServicesModal(true)}>
        <img src="tools_wrench.svg" />
        <span>
          Ремонт и <br /> услуги
        </span>
      </div>
      <div className={style.item}>
        <img src="helicopter-svgrepo-com.svg" />
        <span>Прочее</span>
      </div>

      <MobModalSubCatCar
        carModalActive={carModalActive}
        onCarModal={onCarModal}
        onCutModal={onCutModal}
      />
      <MobModalSubCatEquipment
        onEquipmentModal={onEquipmentModal}
        equipmentModalActive={equipmentModalActive}
        onCutModal={onCutModal}
      />
      <MobModalSubCatCommercial
        onCommercialModal={onCommercialModal}
        commercialModalActive={commercialModalActive}
        onCutModal={onCutModal}
      />
      <MobModalSubCatServices
        onServicesModal={onServicesModal}
        servicesModalActive={servicesModalActive}
        onCutModal={onCutModal}
      />
      <MobModalCut
        onCutModal={onCutModal}
        cutModalActive={cutModalActive}
        onCarModal={onCarModal}
        onEquipmentModal={onEquipmentModal}
        onCommercialModal={onCommercialModal}
        onServicesModal={onServicesModal}
      />
    </div>
  );
};

export default MobCatBlock;
