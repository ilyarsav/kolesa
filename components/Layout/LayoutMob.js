import style from "./LayoutMob.module.css";

const LayoutMob = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div className={style.navbar}>
        <div className={style.col}>
          <img src="home.svg" />
          <span>Kolesa.kz</span>
        </div>
        <div className={style.col}>
          <img src="favorite.svg" />
          <span>Избранное</span>
        </div>
        <div className={style.col}>
          <img src="add_box.svg" />
          <span>Подать</span>
        </div>
        <div className={style.col}>
          <img src="mail.svg" />
          <span>Сообщения</span>
        </div>
        <div className={style.col}>
          <img src="account_circle.svg" />
          <span>Кабинет</span>
        </div>
      </div>
    </>
  );
};

export default LayoutMob;
