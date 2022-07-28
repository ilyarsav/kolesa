import style from "./MobModalSubCatCommercial.module.css";

const MobModalSubCatCommercial = ({
  commercialModalActive,
  onCommercialModal,
  onCutModal
}) => {
  return (
    <div
      className={commercialModalActive ? style.active : style.modal}
      onClick={() => onCommercialModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <div className={style.go__back} onClick={() => onCutModal(true)}>
            {"<"}
          </div>
          <span>Коммерческие</span>
          <div className={style.close} onClick={() => onCommercialModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item}>Грузовики</div>
          <div className={style.item}>Автобусы</div>
          <div className={style.item}>Спецтехника</div>
          <div className={style.item}>Продавцы спецтехники</div>
          <div className={style.item}>Аренда</div>
          <div className={style.item}>Услуги(коммерческие)</div>
        </div>
      </div>
    </div>
  );
};

export default MobModalSubCatCommercial;
