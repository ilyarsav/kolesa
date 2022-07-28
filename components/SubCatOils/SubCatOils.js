import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryEquipmentsRadio from "../SubCategoryEquipmentsRadio/SubCategoryEquipmentsRadio";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryTruckRadio from "../SubCategoryTruckRadio/SubCategoryTruckRadio";
import style from "./SubCatOils.module.css";

const SubCatOils = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const wheelsShopData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_oils_and_auto_chemicals"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
    };
    wheelsShopData();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <SubCategoryInput />
        <div className="row">
          <SubCategoryCheckbox
            label="Искать в тексте объявлений"
            checked={true}
          />
        </div>
        <Cities popCities={popCities} regionArr={regions} />
      </div>
      <div className="col-4 pe-4 py-3">
        <SubCategoryEquipmentsRadio />
        <SubCategoryTruckRadio />
        <PriceInputGroup />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatOils;
