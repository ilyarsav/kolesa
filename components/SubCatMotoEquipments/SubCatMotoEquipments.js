import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryEquipmentsRadio from "../SubCategoryEquipmentsRadio/SubCategoryEquipmentsRadio";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCatMotoTechBrand from "../SubCatMotoTechBrand/SubCatMotoTechBrand";
import style from "./SubCatMotoEquipments.module.css";

const SubCatMotoEquipments = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    const motoEquip = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_mototech_parts"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop__brand_arr);
      setAllBrands(res.brand_arr);
    };
    motoEquip();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <div className="col-8">
          <SubCategoryInput />
        </div>
        <div className="row">
          <SubCategoryCheckbox
            label="Искать в тексте объявлений"
            checked={true}
          />
          <SubCategoryCheckbox label="Есть доставка" />
          <SubCategoryCheckbox label="С фото" />
        </div>
        <Cities popCities={popCities} regionArr={regions} />
        <SubCatMotoTechBrand popBrands={popBrands} allBrands={allBrands} />
      </div>
      <div className="col-4 pe-4 py-3">
        <SubCategoryEquipmentsRadio />
        <PriceInputGroup />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatMotoEquipments;
