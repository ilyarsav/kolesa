import style from "./CarsSubCategoryFormDilers.module.css";
import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";

const SubCategoryFormDillers = () => {
  const [regions, setRegions] = useState(null);
  const [popCities, setPopCities] = useState(null);

  useEffect(() => {
    const cities = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/cars_cat/get_dealers"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
    };
    cities();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="row px-4">
        <div className="row my-3">
          <Cities popCities={popCities} regionArr={regions} />
        </div>
        <div className="row mb-3">
          <div className="col-7">
            <SubCategoryInput />
          </div>
        </div>
        <div className="col mb-2">
          <SubCategoryCheckbox label="Искать в тексте объявлений" />
        </div>
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCategoryFormDillers;
