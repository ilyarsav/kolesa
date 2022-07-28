import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCatType from "../SubCatType/SubCatType";
import style from "./SubCatRepair.module.css";

const SubCatRepair = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/repairs_and_services_cat/get_repairs"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setType(res.type_arr);
    };
    getData();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 px-4 py-3">
        <SubCategoryInput />
        <SubCategoryCheckbox label="Искать в тексте объявлений" />
        <div className="row">
          <SubCatType typeArr={type} />
        </div>
        <Cities popCities={popCities} regionArr={regions} />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatRepair;
