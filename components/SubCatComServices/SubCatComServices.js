import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCatDropList from "../SubCatDropList/SubCatDropList";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatComServices.module.css";

const SubCatComServices = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/commercial_cat/get_commercial_services"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop__brand_arr);
      setAllBrands(res.brand_arr);
    };
    getData();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <SubCategoryInput />
        <SubCategoryCheckbox label="Искать в тексте объявлений" />
        <SubCategoryCheckbox label="С фото" />
        <Cities popCities={popCities} regionArr={regions} />
        <SubCatDropList
          popList={popBrands}
          fullList={allBrands}
          label="Марка"
        />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatComServices;
