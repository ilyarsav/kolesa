import style from "./SubCategoryCarGeneration.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SubCategoryCarGeneration = ({ allGenerations, popGenerations }) => {
  const [generationList, setGenerationList] = useState(false);
  const [generation, setGeneration] = useState(null);

  const modelID = useSelector((state) => state.equipments.modelID);

  useEffect(() => {
    setGenerationList(false);
    setGeneration(null);
  }, [modelID]);

  const openGenerations = () => {
    modelID && setGenerationList((res) => !res);
  };

  const chooseGeneration = (id) => {
    setGeneration((prev) => (prev !== id ? id : null));
    setGenerationList(false);
  };

  return (
    <>
      <div className={`row p-2 ${generationList && style.white}`}>
        <div className="col-auto">
          <a className={style.link} onClick={openGenerations}>
            Поколение
          </a>
        </div>
        {!popGenerations?.some(({ id }) => id == generation) &&
          allGenerations
            ?.filter(({ id }) => id == generation)
            ?.map(({ id, name }) => {
              return (
                <div className="col-auto">
                  <a
                    key={id}
                    className={generation === id ? style.choosen : style.link}
                    onClick={() => {
                      chooseGeneration(id);
                    }}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
        {modelID &&
          popGenerations?.map(({ id, name }) => {
            return (
              <div className="col-auto" key={id}>
                <a
                  className={generation == id ? style.choosen : style.link}
                  onClick={() => chooseGeneration(id)}
                >
                  {name}
                </a>
              </div>
            );
          })}
        {modelID && (
          <div className="col-auto">
            <a className={style.link} onClick={openGenerations}>
              ещё
            </a>
          </div>
        )}
        {generationList && (
          <div className="row mb-3">
            <div className="row d-flex justify-content-between">
              {allGenerations?.map(({ id, name }) => {
                return (
                  <div className="col-auto my-2" key={id}>
                    <a
                      className={generation == id ? style.choosen : style.link}
                      onClick={() => chooseGeneration(id)}
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
    </>
  );
};

export default SubCategoryCarGeneration;
