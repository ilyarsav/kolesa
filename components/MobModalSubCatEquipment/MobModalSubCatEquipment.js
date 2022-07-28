import style from "./MobModalSubCatEquipment.module.css";

const MobModalSubCatEquipment = ({
  equipmentModalActive,
  onEquipmentModal,
  onCutModal
}) => {
  return (
    <div
      className={equipmentModalActive ? style.active : style.modal}
      onClick={() => onEquipmentModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <div className={style.go__back} onClick={() => onCutModal(true)}>
            {"<"}
          </div>
          <span>Запчасти</span>
          <div className={style.close} onClick={() => onEquipmentModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item}>Автозапчасти</div>
          <div className={style.item}>Запчасти на коммерческие</div>
          <div className={style.item}>Мотозапчасти</div>
          <div className={style.item}>Шины</div>
          <div className={style.item}>Диски</div>
          <div className={style.item}>Аксессуары и мультимедия</div>
          <div className={style.item}>Масла и автохимия</div>
          <div className={style.item}>Авто на запчасти</div>
          <div className={style.item}>Магазины шин и дисков</div>
          <div className={style.item}>Магазины запчастей и авторазборы</div>
        </div>
      </div>
    </div>
  );
};

export default MobModalSubCatEquipment;
