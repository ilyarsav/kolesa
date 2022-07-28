import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  onAvailabilityValueChange,
  setSelectedOptionAvailability,
} from "../../store/mobLightweightFilter";
import style from "./MobModalAvailability.module.css";

const MobModalAvailability = ({
  onAvailabilityModal,
  availabilityModalActive,
}) => {
  const dispatch = useDispatch();

  const onAvailableClick = () => {
    dispatch(setSelectedOptionAvailability(true));
    dispatch(onAvailabilityValueChange("В наличии"));
    onAvailabilityModal(false);
  };

  const onToOrderClick = () => {
    dispatch(setSelectedOptionAvailability(false));
    dispatch(onAvailabilityValueChange("На заказ"));
    onAvailabilityModal(false);
  };

  return (
    <div
      className={availabilityModalActive ? style.active : style.modal}
      onClick={() => onAvailabilityModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span>Наличие</span>
          <div
            className={style.close}
            onClick={() => onAvailabilityModal(false)}
          >
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item} onClick={() => onAvailableClick()}>
            В наличии
          </div>
          <div className={style.item} onClick={() => onToOrderClick()}>
            На заказ
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobModalAvailability;
