import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatComEquipSellers.module.css";

const SubCatComEquipSellers = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/commercial_cat/get_special_equipment_seller"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
    };
    getData();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <SubCategoryInput />
        <SubCategoryCheckbox label="Искать в тексте объявлений" />
        <Cities popCities={popCities} regionArr={regions} />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatComEquipSellers;
