import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SelectBox from "../SelectBox/SelectBox";
import SubCatDropList from "../SubCatDropList/SubCatDropList";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryTruckRadio from "../SubCategoryTruckRadio/SubCategoryTruckRadio";
import VolumeInputGroup from "../VolumeInputGroup/VolumeInputGroup";
import YearInputGroup from "../YearInputGroup/YearInputGroup";
import style from "./SubCatComTrucks.module.css";

const SubCatComTrucks = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [popType, setPopType] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [engine, setEngine] = useState([]);
  const [condition, setCondition] = useState([]);

  const [advancedSearch, setAdvancedSearch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/commercial_cat/get_trucks"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop_car_brand_arr);
      setAllBrands(res.brand_arr);
      setPopType(res.pop_tech_type_arr);
      setAllTypes(res.tech_type_arr);
      setEngine(res.engine_type_arr);
      setCondition(res.condition_type_arr);
    };
    getData();
  }, []);

  const onAdvancedSearch = () => {
    setAdvancedSearch((prev) => !prev);
  };

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <div className="col-8 ps-2">
          <SubCategoryInput />
        </div>
        <div className="col-auto">
          <Cities popCities={popCities} regionArr={regions} />
        </div>
        <div className="col-auto">
          <SubCatDropList popList={popType} fullList={allTypes} label="Тип" />
        </div>
        <div className="col-auto">
          <SubCatDropList
            popList={popBrands}
            fullList={allBrands}
            label="Марка"
          />
        </div>
        <div className="col-auto ps-2">
          <SubCategoryCheckbox label="С фото" />
        </div>
        <div className={`mb-3 p-3 ${advancedSearch && style.white}`}>
          <div className="col-auto">
            <a
              className={style.link}
              onClick={() => {
                onAdvancedSearch();
              }}
            >
              Расширенный поиск
            </a>
          </div>
          {advancedSearch && (
            <div className="row gx-3 my-2 d-flex justify-content-between">
              <div className="col-4">
                <span>Тип топлива</span>
                <SelectBox list={engine} defaultVal="Тип двигателя" />
              </div>
              <div className="col-4">
                <span>Состояние</span>
                <SelectBox list={condition} defaultVal="Состояние" />
              </div>
              <div className="col-4">
                <VolumeInputGroup />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-4 pe-4 py-3">
        <SubCategoryTruckRadio />
        <YearInputGroup />
        <PriceInputGroup />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatComTrucks;
