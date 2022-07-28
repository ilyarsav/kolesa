import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatOther.module.css";

const SubCatOther = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/repairs_and_services_cat/get_other"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
    };
    getData();
  }, []);
  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 px-4 py-3">
        <SubCategoryInput />
        <SubCategoryCheckbox label="Искать в тексте объявлений" />
        <Cities popCities={popCities} regionArr={regions} />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatOther;
