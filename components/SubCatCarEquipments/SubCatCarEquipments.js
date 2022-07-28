import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCarBrands from "../SubCategoryCarBrands/SubCategoryCarBrands";
import SubCategoryCarGeneration from "../SubCategoryCarGeneration/SubCategoryCarGeneration";
import SubCategoryCarModels from "../SubCategoryCarModels/SubCategoryCarModels";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryEquipmentsRadio from "../SubCategoryEquipmentsRadio/SubCategoryEquipmentsRadio";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryTruckRadio from "../SubCategoryTruckRadio/SubCategoryTruckRadio";
import style from "./SubCatCarEquipments.module.css";
import { useSelector } from "react-redux";
import SubCategoryEquipmentsBrands from "../SubCategoryEquipmentsBrands/SubCategoryEquipmentsBrands";
import SubCategoryEquipmentsModels from "../SubCategoryEquipmentsModels/SubCategoryEquipmentsModels";

const SubCatCarEquipments = () => {
  const [regions, setRegions] = useState(null);
  const [popCities, setPopCities] = useState(null);

  const [popBrands, setPopBrands] = useState(null);
  const [allBrands, setAllBrands] = useState(null);

  const [popModels, setPopModels] = useState(null);
  const [allModels, setAllModels] = useState(null);

  const [popGenerations, setPopGenerations] = useState(null);
  const [allGenerations, setAllGenerations] = useState(null);

  const brandID = useSelector((state) => state.equipments.brandID);
  const modelID = useSelector((state) => state.equipments.modelID);

  useEffect(() => {
    const carEquipments = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_auto_parts"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop_car_brand_arr);
      setAllBrands(res.brand_arr);
    };
    carEquipments();
  }, []);

  useEffect(() => {
    const carModel = async () => {
      const res = await fetch(
        `http://qoldan-dev.com/api/car/spare_parts_cat/get_auto_parts/get_models?brand_id=${brandID}`
      ).then((res) => res.json());
      setAllModels(res.models_by_brand_arr);
      setPopModels(res.pop_model_by_brand_arr);
    };
    brandID && carModel();
  }, [brandID]);

  useEffect(() => {
    const carGeneration = async () => {
      const res = await fetch(
        `http://qoldan-dev.com/api/car/spare_parts_cat/get_auto_parts/get_models/get_generations?model_id=${modelID}`
      ).then((res) => res.json());
      console.log();
      setAllGenerations(res.generation_by_model_arr);
      setPopGenerations(res.pop_generation_by_model_arr);
    };
    modelID && carGeneration();
  }, [modelID]);

  const modelsClear = () => {
    setAllModels(null);
    setPopModels(null);
  };

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <div className="col-8 mb-3">
          <SubCategoryInput />
        </div>
        <SubCategoryCheckbox
          label="Искать в тексте объявлений"
          checked={true}
        />
        <SubCategoryCheckbox label="Есть доставка" />
        <SubCategoryCheckbox label="С фото" />
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
        <SubCategoryCarGeneration
          popGenerations={popGenerations}
          allGenerations={allGenerations}
        />
      </div>
      <div className="col-4 pe-4 py-3">
        <div className="mb-3">
          <SubCategoryEquipmentsRadio />
        </div>
        <SubCategoryTruckRadio />
        <PriceInputGroup />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatCarEquipments;
