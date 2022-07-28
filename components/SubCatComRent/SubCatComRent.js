import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCatDropList from "../SubCatDropList/SubCatDropList";
import SubCatType from "../SubCatType/SubCatType";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatComRent.module.css";

const SubCatComRent = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [type, setType] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/commercial_cat/get_rent"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop_brand_arr);
      setAllBrands(res.brand_arr);
      setType(res.tech_type_arr);
    };
    getData();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <SubCategoryInput />
        <SubCategoryCheckbox label="Искать в тексте объявлений" />
        <Cities popCities={popCities} regionArr={regions} />
        <div className="row">
          <SubCatType typeArr={type} />
        </div>
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

export default SubCatComRent;
