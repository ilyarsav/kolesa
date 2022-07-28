import { useState } from "react";
import style from "./SubCatMotoTechBrand.module.css";

const SubCatMotoTechBrand = ({ allBrands, popBrands }) => {
  const [brandsList, setBrandsList] = useState(false);
  const [motoBrand, setMotoBrand] = useState([]);

  const openBrands = () => {
    setBrandsList((res) => !res);
  };

  const chooseMotoBrand = (id) => {
    if (!motoBrand.includes(id)) {
      if (motoBrand.length <= 5) {
        setMotoBrand((prev) => [...prev, id]);
      }
      if (motoBrand.length >= 4) {
        setBrandsList(false);
      }
    } else {
      setMotoBrand((prev) => prev.filter((elem) => elem !== id));
    }

    // setMotoBrand((state) =>
    //   state.some((elem) => elem === id)
    //     ? state.filter((elem) => elem !== id)
    //     : [...state, id]
    // );
  };

  return (
    <>
      <div className="row mb-3 mt-4">
        <div className="col-auto">
          <a className={style.link} onClick={openBrands}>
            Марка
          </a>
        </div>
        <div className="col-9">
          <div className="row">
            {allBrands
              ?.filter(({ id }) => motoBrand.includes(id))
              ?.map(({ id, name }) => {
                return (
                  <div className="col-auto">
                    <a
                      key={id}
                      className={
                        motoBrand.includes(id) ? style.choosen : style.link
                      }
                      onClick={() => {
                        chooseMotoBrand(id);
                      }}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
            {popBrands
              ?.filter(({ id }) => !motoBrand.includes(id))
              ?.map(({ id, name }) => {
                return (
                  <div className="col-auto" key={id}>
                    <a
                      className={
                        motoBrand.length == 5
                          ? style.grey
                          : motoBrand.includes(id)
                          ? style.choosen
                          : style.link
                      }
                      onClick={() => chooseMotoBrand(id)}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
            <div className="col-auto">
              <a className={style.link} onClick={openBrands}>
                ещё
              </a>
            </div>
          </div>
        </div>
      </div>
      {brandsList && (
        <div className="row mb-3">
          <div className="row d-flex justify-content-between">
            {allBrands.map(({ id, name }) => {
              return (
                <div className="col-3 my-2" key={id}>
                  <a
                    className={
                      motoBrand.length == 5
                        ? style.grey
                        : motoBrand.includes(id)
                        ? style.choosen
                        : style.link
                    }
                    onClick={() => chooseMotoBrand(id)}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SubCatMotoTechBrand;
