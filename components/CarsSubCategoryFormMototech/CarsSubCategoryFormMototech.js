import { useEffect, useState } from "react";
import style from "./CarsSubCategoryFormMototech.module.css";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import Cities from "../Cities/Cities";
import YearInputGroup from "../YearInputGroup/YearInputGroup";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCatType from "../SubCatType/SubCatType";
import SubCatMotoTechBrand from "../SubCatMotoTechBrand/SubCatMotoTechBrand";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SelectBoxState from "../SelectBoxState/SelectBoxState";

const CarsSubCategoryFormMototech = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [motoTypeArr, setMotoTypeArr] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    const motoTechData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/cars_cat/get_mototech"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setMotoTypeArr(res.tech_type_arr);
      setPopBrands(res.pop__brand_arr);
      setAllBrands(res.brand_arr);
    };
    motoTechData();
  }, []);

  const onAdvancedSearch = () => {
    setAdvancedSearch((prev) => !prev);
  };

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="row p-3">
        <div className="col-8">
          <div className="col mb-3">
            <Cities popCities={popCities} regionArr={regions} />
          </div>
          <div className="row">
            <SubCatType typeArr={motoTypeArr} />
          </div>
          <div className="col-10">
            <SubCatMotoTechBrand popBrands={popBrands} allBrands={allBrands} />
          </div>
          <div className="row mb-2">
            <SubCategoryCheckbox label="С фото" />
          </div>
          <div className={`p-3 ${advancedSearch && style.white}`}>
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
              <>
                <div className="row g-3 my-2 d-flex justify-content-between">
                  <div className="col-4">
                    <SelectBoxState defaultVal="Состояние" />
                  </div>
                  <div className="col-9">
                    <SubCategoryInput />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <YearInputGroup />
          <PriceInputGroup />
        </div>
      </div>

      <SubCategoryButton />
    </div>
  );
};

export default CarsSubCategoryFormMototech;
