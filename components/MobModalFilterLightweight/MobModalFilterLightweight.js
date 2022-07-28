import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAvailabilityValueChange,
  setCarBodyTypeID,
  setEngineVolumeFrom,
  setEngineVolumeTo,
  setMileageValue,
  setEngineTypeID,
  setSelectedOptionAvailability,
  setCarGearBoxID,
  setSelectedWheel,
  setWheelValue,
  setCarDriveID,
  setCarColorID,
} from "../../store/mobLightweightFilter";
import MobModalAvailability from "../MobModalAvailability/MobModalAvailability";
import MobModalFilter from "../MobModalFilter/MobModalFilter";
import MobModalMileage from "../MobModalMileage/MobModalMileage";
import MobModalWheel from "../MobModalWheel/MobModalWheel";
import MobPriceInputGroup from "../MobPriceInputGroup/MobPriceInputGroup";
import MobSubCatCheckbox from "../MobSubCatCheckbox/MobSubCatCheckbox";
import MobSubCatInput from "../MobSubCatInput/MobSubCatInput";
import MobSubCatLightWeightRadio from "../MobSubCatLightWeightRadio/MobSubCatLightWeightRadio";
import MobVolumeInputGroup from "../MobVolumeInputGroup/MobVolumeInputGroup";
import MobYearInputGroup from "../MobYearInputGroup/MobYearInputGroup";
import style from "./MobModalFilterLightweight.module.css";

const  MobModalFilterLightweight = ({ filterActive, onFilterActive }) => {
  const [mileageModalActive, setMileageModalActive] = useState(false);
  const [availabilityModalActive, setAvailabilityModalActive] = useState(false);
  const [engineTypeActive, setEngineTypeActive] = useState(false);
  const [engineVolumeActive, setEngineVolumeActive] = useState(false);
  const [carBodyActive, setCarBodyActive] = useState(false);
  const [carGearBoxActive, setCarGearBoxActive] = useState(false);
  const [wheelActive, setWheelActive] = useState(false);
  const [carDriveActive, setCarDriveActive] = useState(false);
  const [carColorActive, setCarColorActive] = useState(false);

  const [carBody, setCarBody] = useState(null);
  const [carEngine, setCarEngine] = useState(null);
  const [carGearBox, setCarGearBox] = useState(null);
  const [carDrive, setCarDrive] = useState(null);
  const [carBodyColor, setCarBodyColor] = useState(null);

  const dispatch = useDispatch();

  const availabilityValue = useSelector(
    (state) => state.mobLightweightFilter.availabilityValue
  );
  const engineTypeID = useSelector(
    (state) => state.mobLightweightFilter.engineTypeID
  );

  const engineVolumeFrom = useSelector(
    (state) => state.mobLightweightFilter.engineVolumeFrom
  );

  const engineVolumeTo = useSelector(
    (state) => state.mobLightweightFilter.engineVolumeTo
  );

  const mileageValue = useSelector(
    (state) => state.mobLightweightFilter.mileageValue
  );

  const carBodyID = useSelector(
    (state) => state.mobLightweightFilter.carBodyTypeID
  );

  const carGearBoxID = useSelector(
    (state) => state.mobLightweightFilter.carGearBoxID
  );

  const wheelValue = useSelector(
    (state) => state.mobLightweightFilter.wheelValue
  );

  const carDriveID = useSelector(
    (state) => state.mobLightweightFilter.carDriveID
  );

  const carColorID = useSelector(
    (state) => state.mobLightweightFilter.carColorID
  );

  useEffect(() => {
    const advancedSearch = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/cars_cat/get_cars"
      ).then((res) => res.json());
      setCarBody(res.car_body_arr);
      setCarEngine(res.car_engine_arr);
      setCarGearBox(res.car_gear_box);
      setCarDrive(res.car_drive);
      setCarBodyColor(res.car_body_color);
    };
    advancedSearch();
  }, []);

  const onCarBodyModal = (val) => {
    setCarBodyActive(val);
  };

  const onMileageModal = (val) => {
    setMileageModalActive(val);
  };

  const onAvailabilityModal = (val) => {
    setAvailabilityModalActive(val);
  };

  const onEngineTypeModal = (val) => {
    setEngineTypeActive(val);
  };

  const onEngineValumeModal = (val) => {
    setEngineVolumeActive(val);
  };

  const onCarGearBoxModal = (val) => {
    setCarGearBoxActive(val);
  };

  const onWheelModal = (val) => {
    setWheelActive(val);
  };

  const onCarDriveModal = (val) => {
    setCarDriveActive(val);
  };

  const onCarColorModal = (val) => {
    setCarColorActive(val);
  };

  return (
    <div
      className={filterActive ? style.modal__active : style.modal__content}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={style.modal__header}>
        <span className={style.close} onClick={() => onFilterActive(false)}>
          X
        </span>
        <span>Фильтр</span>
      </div>
      <div className={style.modal__body}>
        <div className={style.modal__body__inner}>
          <span>Состояние</span>
          <MobSubCatLightWeightRadio />
          <MobPriceInputGroup />
          <MobYearInputGroup />
        </div>
        <div className={style.modal__body__inner}>
          <MobSubCatCheckbox label="С фото" />
          <MobSubCatCheckbox label="От дилеров" />
          <MobSubCatCheckbox label="Растаможен в Казахстане" />
          <MobSubCatCheckbox label="Аварийная/Не на ходу" />
        </div>
        <div className={style.modal__body__inner}>
          <div className={style.item} onClick={() => onMileageModal(true)}>
            <p>Пробег не более, км </p>
            {mileageValue ? (
              <span>
                {mileageValue}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(), dispatch(setMileageValue(""))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalMileage
              onMileageModal={onMileageModal}
              mileageModalActive={mileageModalActive}
            />
          </div>
          <div className={style.item} onClick={() => onAvailabilityModal(true)}>
            <p>Наличие</p>
            {availabilityValue ? (
              <span>
                {availabilityValue}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(),
                    dispatch(setSelectedOptionAvailability(null)),
                    dispatch(onAvailabilityValueChange(""))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalAvailability
              onAvailabilityModal={onAvailabilityModal}
              availabilityModalActive={availabilityModalActive}
            />
          </div>
          <div className={style.item} onClick={() => onEngineTypeModal(true)}>
            <p>Тип топлива</p>
            {engineTypeID ? (
              <span>
                {carEngine.map((item) => item.id === engineTypeID && item.name)}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(), dispatch(setEngineTypeID(null))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalFilter
              theme="Тип топлива"
              optionArr={carEngine}
              whereToDispatch={setEngineTypeID}
              onModal={onEngineTypeModal}
              active={engineTypeActive}
            />
          </div>
          <div className={style.item} onClick={() => onEngineValumeModal(true)}>
            <p>Объем двигателя, л</p>
            {engineVolumeFrom || engineVolumeTo ? (
              <span>
                {engineVolumeFrom && `от ${engineVolumeFrom}`}{" "}
                {engineVolumeTo && `до ${engineVolumeTo}`}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(),
                    dispatch(setEngineVolumeFrom("")),
                    dispatch(setEngineVolumeTo(""))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobVolumeInputGroup
              engineVolumeActive={engineVolumeActive}
              onEngineValueModal={onEngineValumeModal}
            />
          </div>
          <div className={style.item} onClick={() => onCarBodyModal(true)}>
            <p>Кузов</p>
            {carBodyID ? (
              <span>
                {carBody.map((item) => item.id === carBodyID && item.name)}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(), dispatch(setCarBodyTypeID(null))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalFilter
              theme="Кузов"
              optionArr={carBody}
              whereToDispatch={setCarBodyTypeID}
              onModal={onCarBodyModal}
              active={carBodyActive}
            />
          </div>
          <div className={style.item} onClick={() => onCarGearBoxModal(true)}>
            <p>Коробка передач</p>
            {carGearBoxID ? (
              <span>
                {carGearBox.map(
                  (item) => item.id === carGearBoxID && item.name
                )}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(), dispatch(setCarGearBoxID(null))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalFilter
              theme="Коробка передач"
              optionArr={carGearBox}
              whereToDispatch={setCarGearBoxID}
              onModal={onCarGearBoxModal}
              active={carGearBoxActive}
            />
          </div>
          <div className={style.item} onClick={() => onWheelModal(true)}>
            <p>Руль</p>
            {wheelValue ? (
              <span>
                {wheelValue}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(),
                    dispatch(setSelectedWheel(null)),
                    dispatch(setWheelValue(""))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalWheel onModal={onWheelModal} modalActive={wheelActive} />
          </div>
          <div className={style.item} onClick={() => onCarDriveModal(true)}>
            <p>Привод</p>
            {carDriveID ? (
              <span>
                {carDrive.map((item) => item.id === carDriveID && item.name)}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(), dispatch(setCarDriveID(null))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalFilter
              theme="Привод"
              optionArr={carDrive}
              whereToDispatch={setCarDriveID}
              onModal={onCarDriveModal}
              active={carDriveActive}
            />
          </div>
          <div className={style.item} onClick={() => onCarColorModal(true)}>
            <p>Цвет</p>
            {carColorID ? (
              <span>
                {carBodyColor.map(
                  (item) => item.id === carColorID && item.name
                )}
                <span
                  className={style.item__delete}
                  onClick={(e) => (
                    e.stopPropagation(), dispatch(setCarColorID(null))
                  )}
                >
                  X
                </span>
              </span>
            ) : (
              <span>{">"}</span>
            )}
            <MobModalFilter
              theme="Цвет"
              optionArr={carBodyColor}
              whereToDispatch={setCarColorID}
              onModal={onCarColorModal}
              active={carColorActive}
            />
          </div>
          <MobSubCatCheckbox label="металлик" />
        </div>
        <div className={style.modal__body__inner__last}>
          <MobSubCatInput />
        </div>
      </div>
    </div>
  );
};

export default MobModalFilterLightweight;
