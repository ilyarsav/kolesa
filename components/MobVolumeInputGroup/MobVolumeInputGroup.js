import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEngineVolumeFrom,
  setEngineVolumeTo,
} from "../../store/mobLightweightFilter";
import style from "./MobVolumeInputGroup.module.css";

const MobVolumeInputGroup = ({ engineVolumeActive, onEngineValueModal }) => {
  const dispatch = useDispatch();
  const inputFromValue = useSelector(
    (state) => state.mobLightweightFilter.engineVolumeFrom
  );
  const inputToValue = useSelector(
    (state) => state.mobLightweightFilter.engineVolumeTo
  );

  const onInputFromChange = (e) => {
    dispatch(setEngineVolumeFrom(e.target.value));
  };

  const onInputToChange = (e) => {
    dispatch(setEngineVolumeTo(e.target.value));
  };

  return (
    <div
      className={engineVolumeActive ? style.active : style.modal}
      onClick={() => onEngineValueModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span>Объем двигателя, л</span>
          <div
            className={style.close}
            onClick={() => onEngineValueModal(false)}
          >
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className="input__group">
            <input
              id="from"
              type="number"
              className={style.input}
              placeholder="от"
              step={0.1}
              min={0.1}
              max={9.9}
              value={inputFromValue}
              onChange={(e) => {
                onInputFromChange(e);
              }}
            />
            <input
              id="to"
              type="number"
              className={style.input}
              placeholder="до"
              step={0.1}
              min={0.1}
              max={9.9}
              value={inputToValue}
              onChange={(e) => {
                onInputToChange(e);
              }}
            />
          </div>
        </div>
        <div className={style.modal__footer}>
          <button
            className={style.button}
            onClick={() => onEngineValueModal(false)}
          >
            Готово
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobVolumeInputGroup;
