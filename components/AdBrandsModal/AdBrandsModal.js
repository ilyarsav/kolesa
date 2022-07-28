import { useEffect, useState } from "react";
import style from "./AdBrandsModal.module.css";

const AdBrandsModal = ({ adBrandsModalList }) => {
  const [modalActive, setModalActive] = useState(false);
  const [adBrand, setAdBrand] = useState([]);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onModalActive(false);
    }
  };

  const chooseAdBrand = (id) => {
    // const ver = adBrand.every((item) => item != id);
    // ver
    //   ? setAdBrand((prev) => [...prev, id])
    //   : setAdBrand((prev) => prev.filter((item) => item !== id));

    setAdBrand((prev) =>
      prev.every((item) => item !== id)
        ? [...prev, id]
        : prev.filter((item) => item !== id)
    );
  };

  const deleteBrand = (id) => {
    setAdBrand((prev) => prev.filter((item) => item !== id));
  };

  const onModalActive = (val) => {
    setModalActive(val);
  };

  return (
    <div className="col-auto">
      {adBrand.length < 1 && <a onClick={() => onModalActive(true)}>Выбрать</a>}
      {adBrand &&
        adBrandsModalList &&
        adBrandsModalList
          .filter(({ id }) => adBrand.includes(id))
          .map(({ id, name }) => {
            return (
              <span key={id}>
                <a
                  className="me-2"
                  onClick={() => onModalActive(true)}
                  key={id}
                >
                  {name}
                </a>
                <button className="me-2" onClick={() => deleteBrand(id)}>
                  x
                </button>
              </span>
            );
          })}

      <div
        className={modalActive ? style.active : style.modal}
        onClick={() => onModalActive(false)}
      >
        <div
          className={style.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.modal__header}>
            <h4>Для марок</h4>
          </div>
          <div className={style.modal__body}>
            {adBrandsModalList &&
              adBrandsModalList.map(({ id, name }) => {
                return (
                  <div className="col-auto" key={id}>
                    <a
                      className={
                        adBrand.some((item) => item === id)
                          ? style.choosen
                          : style.link
                      }
                      onClick={() => chooseAdBrand(id)}
                      key={id}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className={style.modal__footer}>
            <button
              className="btn btn-primary"
              onClick={() => onModalActive(false)}
            >
              ОК, выбрано
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBrandsModal;
