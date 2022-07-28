import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatCommercialEquipments.module.css";
import SubCatDropList from "../SubCatDropList/SubCatDropList";

const SubCatCommercialEquipments = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    const waterTransData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_spare_parts_for_commercial"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop__brand_arr);
      setAllBrands(res.brand_arr);
    };
    waterTransData();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 py-3">
        <div className="col-10 mb-3">
          <SubCategoryInput />
        </div>
        <div className="row">
          <SubCategoryCheckbox label="Искать в тексте объявлений" />
          <SubCategoryCheckbox label="Есть доставка" />
          <SubCategoryCheckbox label="С фото" />
        </div>
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

export default SubCatCommercialEquipments;
