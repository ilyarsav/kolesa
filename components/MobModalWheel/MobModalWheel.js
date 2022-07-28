import { useDispatch } from "react-redux";
import { setSelectedWheel, setWheelValue } from "../../store/mobLightweightFilter";
import style from "./MobModalWheel.module.css";

const MobModalWheel = ({ onModal, modalActive }) => {
  const dispatch = useDispatch();

  const onLeftClick = () => {
    dispatch(setSelectedWheel(false));
    dispatch(setWheelValue('слева'))
    onModal(false);
  };

  const onRightClick = () => {
    dispatch(setSelectedWheel(true));
    dispatch(setWheelValue('справа'))
    onModal(false);
  };

  return (
    <div
      className={modalActive ? style.active : style.modal}
      onClick={() => onModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span>Руль</span>
          <div className={style.close} onClick={() => onModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item} onClick={() => onLeftClick()}>
            слева
          </div>
          <div className={style.item} onClick={() => onRightClick()}>
            справа
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobModalWheel;
