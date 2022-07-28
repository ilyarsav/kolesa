import { useState } from "react";
import MobModalCut from "../components/MobModalCut/MobModalCut";
import MobModalFilterLightweight from "../components/MobModalFilterLightweight/MobModalFilterLightweight";
import MobModalSubCatCar from "../components/MobModalSubCatCar/MobModalSubCatCar";
import MobModalSubCatCommercial from "../components/MobModalSubCatCommercial/MobModalSubCatCommercial";
import MobModalSubCatEquipment from "../components/MobModalSubCatEquipment/MobModalSubCatEquipment";
import MobModalSubCatServices from "../components/MobModalSubCatServices/MobModalSubCatServices";
import style from "../styles/Search.module.css";

const Search = () => {
  const [carModalActive, setCarModalActive] = useState();
  const [equipmentModalActive, setEquipmentModalActive] = useState();
  const [commercialModalActive, setCommercialModalActive] = useState();
  const [servicesModalActive, setServicesModalActive] = useState();
  const [cutModalActive, setCutModalActive] = useState();

  const [filterActive, setFilterActive] = useState();

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

  const onFilterActive = (val) => {
    setFilterActive(val);
  };

  return (
    <>
      <div className={style.header}>
        <div className={style.header__cut} onClick={() => onCutModal(true)}>
          Легковые
        </div>
        <div
          className={style.header__filter}
          onClick={() => onFilterActive(true)}
        >
          Фильтр
        </div>
      </div>
      <div className={style.content}></div>

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
      <MobModalFilterLightweight
        filterActive={filterActive}
        onFilterActive={onFilterActive}
      />
    </>
  );
};

export default Search;
