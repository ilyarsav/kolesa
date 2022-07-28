import { useState } from "react";
import style from './PhoneNum.module.css'

const PhoneNum = () => {
  const [addPhoneNum, setAddPhoneNum] = useState(false);
  const [nameInput, setNameInput] = useState("+7 7");

  const onNameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  const onAddPhoneNum = () => {
    setAddPhoneNum(true);
  };

  return (
    <>
      {!addPhoneNum ? (
        <a className={style.link} onClick={() => onAddPhoneNum()}>
          Добавить телефон
        </a>
      ) : (
        <>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => onNameInputChange(e)}
            className="w-100"
          />
          <span className="p-0 mb-2">Например: +7 701 100 00 00</span>
          <button className={style.button} disabled={true}>Подтвердить</button>
        </>
      )}
    </>
  );
};

export default PhoneNum;
