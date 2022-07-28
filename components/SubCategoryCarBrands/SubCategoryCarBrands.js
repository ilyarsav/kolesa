import style from "./SubCategoryCarBrands.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCarsBrandsID } from "../../store/subCatCars";

const SubCategoryCarBrands = ({ popBrands, allBrands, modelsClear }) => {
  const [brandsList, setBrandsList] = useState(false);
  const [brand, setBrand] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsBrandsID(brand));
  }, [brand]);

  const openBrands = () => {
    setBrandsList((res) => !res);
  };

  const chooseBrand = (id) => {
    setBrand((prev) => (prev !== id ? id : (null, modelsClear())));
    setBrandsList(false);
  };

  return (
    <div className={`p-2 ${brandsList && style.white}`}>
      <div className="row">
        <div className="col-auto">
          <a className={style.link} onClick={openBrands}>
            Марка
          </a>
        </div>
        {!popBrands?.some(({ id }) => id == brand) &&
          allBrands
            ?.filter(({ id }) => id == brand)
            ?.map(({ id, name }) => {
              return (
                <div className="col-auto">
                  <a
                    key={id}
                    className={brand === id ? style.choosen : style.link}
                    onClick={() => {
                      chooseBrand(id);
                    }}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
        {popBrands?.map(({ id, name }) => {
          return (
            <div className="col-auto" key={id}>
              <a
                className={brand == id ? style.choosen : style.link}
                onClick={() => chooseBrand(id)}
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
      {brandsList && (
        <div className="row mb-3">
          <div className="row d-flex justify-content-between">
            {allBrands.map(({ id, name }) => {
              return (
                <div className="col-3 mt-1" key={id}>
                  <a
                    className={brand == id ? style.choosen : style.link}
                    onClick={() => chooseBrand(id)}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCategoryCarBrands;
