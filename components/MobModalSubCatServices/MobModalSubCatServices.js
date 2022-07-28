import style from "./MobModalSubCatServices.module.css";

const MobModalSubCatServices = ({
  servicesModalActive,
  onServicesModal,
  onCutModal,
}) => {
  return (
    <div
      className={servicesModalActive ? style.active : style.modal}
      onClick={() => onServicesModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <div className={style.go__back} onClick={() => onCutModal(true)}>
            {"<"}
          </div>
          <span>Ремонт и услуги</span>
          <div className={style.close} onClick={() => onServicesModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          <div className={style.item}>Ремонт</div>
          <div className={style.item}>Услуги</div>
          <div className={style.item}>Тюнинг</div>
          <div className={style.item}>Другие</div>
        </div>
      </div>
    </div>
  );
};

export default MobModalSubCatServices;
