import style from "./Cities.module.css";
import { useState } from "react";

const Cities = ({ popCities, regionArr }) => {
  const [regionList, setRegionList] = useState(false);
  const [citiesInRegionList, setCitiesInRegionList] = useState(false);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [cityInRegion, setCityInRegion] = useState(null);

  const whereToSearch = () => {
    region
      ? (setCitiesInRegionList((prev) => !prev), setRegionList(false))
      : setRegionList((prev) => !prev);

    // if (region) {
    //   setCitiesInRegionList((prev) => !prev);
    //   setRegionList(false);
    // } else {
    //   setRegionList((prev) => !prev);
    // }
  };

  const openAllRegions = () => {
    setCitiesInRegionList(false);
    setRegion(null);
    setCityInRegion(null);
    setRegionList(true);
  };

  const chooseCity = (id) => {
    setCity((prev) => (prev !== id ? id : null));
    setRegionList(false);
    setCitiesInRegionList(false);
    setCityInRegion(null);
  };

  const chooseRegion = (id) => {
    region != id ? setRegion(id) : setRegion(null);
    setCity(null), setRegionList(false), setCitiesInRegionList(true);
  };

  const chooseCityInRegion = (id) => {
    if (cityInRegion !== id) {
      setCityInRegion(id);
      setCitiesInRegionList(false);
    } else {
      setCityInRegion(null);
    }
  };

  const onChoosenRegion = () => {
    setRegion(null);
    setCitiesInRegionList(false);
  };

  const onChoosenCity = () => {
    setCityInRegion(null);
    setRegion(null);
    setCitiesInRegionList(false);
  };

  return (
    <div className={`p-2 ${(regionList || citiesInRegionList) && style.white}`}>
      <div className="row">
        <div className="col-auto pe-1">
          <a className={style.link} onClick={whereToSearch}>
            Где искать
          </a>
        </div>
        <div className="col-auto">
          <div className="row">
            <div className="col-auto px-1">
              {region &&
                !cityInRegion &&
                !city &&
                regionArr
                  .filter(({ id }) => id == region)
                  .map(({ id, name }) => {
                    return (
                      <a
                        key={id}
                        className={region === id ? style.choosen : style.link}
                        onClick={() => {
                          onChoosenRegion(id);
                        }}
                      >
                        {name}
                      </a>
                    );
                  })}
              {/* {city &&
                regionArr[region]?.subCat
                  ?.filter(({ id }) => id == city)
                  .map(({ id, name }) => {
                    return (
                      <a
                        key={id}
                        className={city === id ? style.choosen : style.link}
                        onClick={() => {
                          onChoosenCity();
                        }}
                      >
                        {name}
                      </a>
                    );
                  })} */}
              {cityInRegion &&
                regionArr[region]?.subCat
                  ?.filter(({ id }) => id == cityInRegion)
                  .map(({ id, name }) => {
                    return (
                      <a
                        key={id}
                        className={
                          cityInRegion === id ? style.choosen : style.link
                        }
                        onClick={() => {
                          onChoosenCity();
                        }}
                      >
                        {name}
                      </a>
                    );
                  })}
            </div>
            {cityInRegion || region
              ? popCities?.slice(0, 4).map(({ id, name }) => {
                  return (
                    <div className="col-auto px-1" key={id}>
                      <a
                        className={city === id ? style.choosen : style.link}
                        onClick={() => {
                          chooseCity(id);
                        }}
                      >
                        {name}
                      </a>
                    </div>
                  );
                })
              : popCities?.map(({ id, name }) => {
                  return (
                    <div className="col-auto px-1" key={id}>
                      <a
                        className={city === id ? style.choosen : style.link}
                        onClick={() => {
                          chooseCity(id);
                        }}
                      >
                        {name}
                      </a>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="col-auto">
          <a className={style.link} onClick={whereToSearch}>
            ещё
          </a>
        </div>
      </div>

      {regionList && (
        <div className="row mb-3 d-flex justify-content-between">
          {regionArr?.map(({ id, name }) => {
            return (
              <div className="col-6 my-2" key={id}>
                <a
                  className={style.link}
                  onClick={() => {
                    chooseRegion(id);
                  }}
                >
                  {name}
                </a>
              </div>
            );
          })}
        </div>
      )}

      {citiesInRegionList && (
        <div className="row my-3">
          <div className="col-auto">
            <a className={style.link} onClick={openAllRegions}>
              Все регионы
            </a>
            <span className="mx-2">{">"}</span>
            {regionArr
              ?.filter(({ id }) => id == region)
              .map(({ id, name }) => {
                return (
                  <a
                    key={id}
                    className={
                      // !city && region === id
                      //   ? style.choosen__region
                      // :
                      style.link
                    }
                  >
                    {name}
                  </a>
                );
              })}
          </div>
          <div className="row d-flex justify-content-between">
            {regionArr[region]?.subCat.map(({ id, name }) => {
              return (
                <div className="col-6 my-2" key={id}>
                  <a
                    className={cityInRegion === id ? style.choosen : style.link}
                    onClick={() => {
                      chooseCityInRegion(id);
                    }}
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

export default Cities;
