import style from "./SubCategoryCarModels.module.css";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModelsID } from "../../store/subCatEquipments";
import { getCarsModelsID } from "../../store/subCatCars";

const SubCategoryCarModels = ({ allModels, popModels }) => {
  const [modelsList, setModelsList] = useState(false);
  const [model, setModel] = useState(null);

  const dispatch = useDispatch();
  const brandID = useSelector((state) => state.cars.brandID);

  useEffect(() => {
    dispatch(getCarsModelsID(model));
  }, [model]);

  useEffect(() => {
    setModelsList(false);
    setModel(null);
  }, [brandID]);

  const openModels = () => {
    brandID && setModelsList((res) => !res);
  };

  const chooseModel = (id) => {
    setModel((prev) => (prev !== id ? id : null));
    setModelsList(false);
    // model != id ? setModel(id) : setModel(null);
  };

  return (
    <div className={`p-2 ${modelsList && style.white}`}>
      <div className="row">
        <div className="col-auto">
          <a className={style.link} onClick={openModels}>
            Модель
          </a>
        </div>
        {!popModels?.some(({ id }) => id == model) &&
          allModels
            ?.filter(({ id }) => id == model)
            ?.map(({ id, name }) => {
              return (
                <div className="col-auto">
                  <a
                    key={id}
                    className={model === id ? style.choosen : style.link}
                    onClick={() => {
                      chooseModel(id);
                    }}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
        {popModels?.map(({ id, name }) => {
          return (
            <div className="col-auto" key={id}>
              <a
                className={model == id ? style.choosen : style.link}
                onClick={() => chooseModel(id)}
              >
                {name}
              </a>
            </div>
          );
        })}
        {allModels && (
          <div className="col-auto">
            <a className={style.link} onClick={openModels}>
              ещё
            </a>
          </div>
        )}
      </div>
      {modelsList && (
        <div className="row mb-3">
          <div className="row d-flex justify-content-between">
            {allModels?.map(({ id, name }) => {
              return (
                <div className="col-3 my-2" key={id}>
                  <a
                    className={model == id ? style.choosen : style.link}
                    onClick={() => chooseModel(id)}
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

export default SubCategoryCarModels;
