import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatWheelsShops.module.css";

const SubCatWheelsShops = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const wheelsShopData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_disc_and_tire_shop"
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
          <SubCategoryCheckbox label="Искать в тексте объявлений" />
          <SubCategoryCheckbox label="Есть доставка" />
        </div>
        <Cities popCities={popCities} regionArr={regions} />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatWheelsShops;
