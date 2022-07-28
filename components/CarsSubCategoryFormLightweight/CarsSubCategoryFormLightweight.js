import style from "./CarsSubCategoryFormLightweight.module.css";
import { useEffect, useState } from "react";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import Cities from "../Cities/Cities";
import YearInputGroup from "../YearInputGroup/YearInputGroup";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryCarBrands from "../SubCategoryCarBrands/SubCategoryCarBrands";
import SubCategoryCarModels from "../SubCategoryCarModels/SubCategoryCarModels";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCatLightWeightRadio from "../SubCatLightWeightRadio/SubCatLightWeightRadio";
import SelectBox from "../SelectBox/SelectBox";
import MileageInput from "../MileageInput/MileageInput";
import SubCategoryTruckRadio from "../SubCategoryTruckRadio/SubCategoryTruckRadio";
import VolumeInputGroup from "../VolumeInputGroup/VolumeInputGroup";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import { useSelector } from "react-redux";
import SelectBoxWheel from "../SelectBoxWheel/SelectBoxWheel";

const CarsSubCategoryFormLightweight = () => {
  const [regions, setRegions] = useState(null);
  const [popCities, setPopCities] = useState(null);

  const [popBrands, setPopBrands] = useState(null);
  const [allBrands, setAllBrands] = useState(null);

  const [popModels, setPopModels] = useState(null);
  const [allModels, setAllModels] = useState(null);

  const [advancedSearch, setAdvancedSearch] = useState(false);

  const [carBody, setCarBody] = useState(null);
  const [carEngine, setCarEngine] = useState(null);
  const [carGearBox, setCarGearBox] = useState(null);
  const [carDrive, setCarDrive] = useState(null);
  const [carBodyColor, setCarBodyColor] = useState(null);

  const brandID = useSelector((state) => state.cars.brandID);

  useEffect(() => {
    const carsLightweight = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/cars_cat/get_cars"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop_car_brand_arr);
      setAllBrands(res.brand_arr);
      setCarBody(res.car_body_arr);
      setCarEngine(res.car_engine_arr);
      setCarGearBox(res.car_gear_box);
      setCarDrive(res.car_drive);
      setCarBodyColor(res.car_body_color);
    };
    carsLightweight();
  }, []);

  useEffect(() => {
    const carModel = async () => {
      const res = await fetch(
        `http://qoldan-dev.com/api/car/cars_cat/get_cars/get_car_models?brand_id=${brandID}`
      ).then((res) => res.json());
      setAllModels(res.models_by_brand_arr);
      setPopModels(res.pop_model_by_brand_arr);
    };
    brandID && carModel();
  }, [brandID]);

  const modelsClear = () => {
    setAllModels(null);
    setPopModels(null);
  };

  const onAdvancedSearch = () => {
    setAdvancedSearch((prev) => !prev);
  };

  return (
    <>
      <div className={`row ${style.subcat__block}`}>
        <div className="col-md-8">
          <div className="mb-1">
            <Cities popCities={popCities} regionArr={regions} />
          </div>
          <div className="mb-1">
            <SubCategoryCarBrands
              popBrands={popBrands}
              allBrands={allBrands}
              modelsClear={modelsClear}
            />
          </div>
          <div className="mb-1">
            <SubCategoryCarModels popModels={popModels} allModels={allModels} />
          </div>
          <div className="mb-1">
            <SubCatLightWeightRadio />
          </div>
          <div className="row my-3">
            <SubCategoryCheckbox label="С фото" />
            <SubCategoryCheckbox label="Растаможен" />
            <SubCategoryCheckbox label="Аварийная/Не на ходу" />
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
              <>
                <div className="row g-3 my-2 d-flex justify-content-between">
                  <div className="col-4">
                    <SelectBox defaultVal="Кузов" list={carBody} />
                  </div>
                  <div className="col-4">
                    <SelectBox defaultVal="Тип двигателя" list={carEngine} />
                  </div>
                </div>
                <div className="row g-3 my-2 d-flex justify-content-between">
                  <div className="col-4">
                    <SelectBox defaultVal="КПП" list={carGearBox} />
                  </div>
                  <div className="col-4">
                    <SelectBoxWheel defaultVal="Расположение руля" />
                  </div>
                  <div className="col-4">
                    <SelectBox defaultVal="Привод" list={carDrive} />
                  </div>
                </div>
                <div className="row g-3 my-2 d-flex justify-content-between">
                  <div className="col-4">
                    <MileageInput />
                  </div>
                  <div className="col-4">
                    <SubCategoryTruckRadio />
                  </div>
                  <div className="col-4">
                    <VolumeInputGroup />
                  </div>
                </div>
                <div className="row g-3 my-2 d-flex justify-content-between">
                  <div className="col-4">
                    <SelectBox defaultVal="Цвет" list={carBodyColor} />
                  </div>
                  <div className="col-4">
                    <SubCategoryCheckbox label="От дилеров" />
                  </div>
                  <div className="col-4">
                    <SubCategoryCheckbox label="металлик" />
                  </div>
                </div>
                <div className="col-8 my-3">
                  <SubCategoryInput />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <YearInputGroup />
          <PriceInputGroup />
        </div>
        <SubCategoryButton />
      </div>
    </>
  );
};
export default CarsSubCategoryFormLightweight;
