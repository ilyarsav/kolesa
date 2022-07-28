import style from "./MobModalSubCatCar.module.css";

const MobModalSubCatCar = ({ carModalActive, onCarModal, onCutModal }) => {
  return (
    <div
      className={carModalActive ? style.active : style.modal}
      onClick={() => onCarModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <div className={style.go__back} onClick={() => onCutModal(true)}>
            {"<"}
          </div>
          <span>Машины</span>
          <div className={style.close} onClick={() => onCarModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item}>Легковые</div>
          <div className={style.item}>Новые авто из салона</div>
          <div className={style.item}>Мототехника</div>
          <div className={style.item}>Водный транспорт</div>
        </div>
      </div>
    </div>
  );
};

export default MobModalSubCatCar;
