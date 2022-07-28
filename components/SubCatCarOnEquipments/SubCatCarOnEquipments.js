import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryEquipmentsBrands from "../SubCategoryEquipmentsBrands/SubCategoryEquipmentsBrands";
import SubCategoryEquipmentsModels from "../SubCategoryEquipmentsModels/SubCategoryEquipmentsModels";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import YearInputGroup from "../YearInputGroup/YearInputGroup";
import style from "./SubCatCarOnEquipments.module.css";

const SubCatCarOnEquipments = () => {
  const [regions, setRegions] = useState(null);
  const [popCities, setPopCities] = useState(null);

  const [popBrands, setPopBrands] = useState(null);
  const [allBrands, setAllBrands] = useState(null);

  const [popModels, setPopModels] = useState(null);
  const [allModels, setAllModels] = useState(null);

  const brandID = useSelector((state) => state.equipments.brandID);

  useEffect(() => {
    const carsLightweight = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_car_for_spare_parts"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop_car_brand_arr);
      setAllBrands(res.brand_arr);
    };
    carsLightweight();
  }, []);

  useEffect(() => {
    const carModel = async () => {
      const res = await fetch(
        `http://qoldan-dev.com/api/car/spare_parts_cat/get_car_for_spare_parts/get_models?brand_id=${brandID}`
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

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <SubCategoryInput />
        <div className="row">
          <SubCategoryCheckbox label="Искать в тексте объявлений" />
          <SubCategoryCheckbox label="Есть доставка" />
          <SubCategoryCheckbox label="С фото" />
        </div>
        <Cities popCities={popCities} regionArr={regions} />
        <SubCategoryEquipmentsBrands
          popBrands={popBrands}
          allBrands={allBrands}
          modelsClear={modelsClear}
        />
        <SubCategoryEquipmentsModels
          popModels={popModels}
          allModels={allModels}
        />
      </div>
      <div className="col-4 pe-4 py-3">
        <YearInputGroup />
        <PriceInputGroup />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatCarOnEquipments;
