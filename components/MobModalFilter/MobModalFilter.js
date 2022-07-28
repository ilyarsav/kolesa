import { useDispatch } from "react-redux";
import style from "./MobModalFilter.module.css";

const MobModalFilter = ({
  theme,
  optionArr,
  onModal,
  active,
  whereToDispatch,
}) => {
  const dispatch = useDispatch();

  const onOptionClick = (id) => {
    dispatch(whereToDispatch(id));
    onModal(false);
  };

  return (
    <div
      className={active ? style.active : style.modal}
      onClick={() => onModal(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span>{theme}</span>
          <div className={style.close} onClick={() => onModal(false)}>
            X
          </div>
        </div>
        <div className={style.modal__body}>
          {optionArr?.map(({ id, name }) => (
            <div
              className={style.item}
              onClick={() => onOptionClick(id)}
              key={id}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobModalFilter;
