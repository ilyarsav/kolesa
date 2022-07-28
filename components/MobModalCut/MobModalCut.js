import style from "./MobModalCut.module.css";

const MobModalCut = ({
  cutModalActive,
  onCutModal,
  onCarModal,
  onEquipmentModal,
  onCommercialModal,
  onServicesModal,
}) => {
  return (
    <div
      className={cutModalActive ? style.active : style.modal}
      onClick={() => onCutModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span>Выберите категорию</span>
          <div className={style.close} onClick={() => onCutModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item} onClick={() => onCarModal(true)}>
            Машины
          </div>
          <div className={style.item} onClick={() => onEquipmentModal(true)}>
            Запчасти
          </div>
          <div className={style.item} onClick={() => onCommercialModal(true)}>
            Коммерческие
          </div>
          <div className={style.item} onClick={() => onServicesModal(true)}>
            Ремонт и услуги
          </div>
          <div className={style.item}>Прочее</div>
        </div>
      </div>
    </div>
  );
};

export default MobModalCut;
