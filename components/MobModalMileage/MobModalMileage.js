import style from "./MobModalMileage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMileageValue } from "../../store/mobLightweightFilter";

const MobModalMileage = ({ mileageModalActive, onMileageModal }) => {
  const dispatch = useDispatch();

  const mileageValue = useSelector(
    (state) => state.mobLightweightFilter.mileageValue
  );

  const onMileageValueChange = (e) => {
    dispatch(setMileageValue(e.target.value));
  };

  return (
    <div
      className={mileageModalActive ? style.active : style.modal}
      onClick={() => onMileageModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span>Пробег не более, км</span>
          <div className={style.close} onClick={() => onMileageModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <input
            type="text"
            id="mileageInput"
            value={mileageValue}
            onChange={(e) => onMileageValueChange(e)}
          />
        </div>
        <div className={style.modal__button}>
          <button
            className={style.button}
            onClick={() => onMileageModal(false)}
          >
            Готово
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobModalMileage;
