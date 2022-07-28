import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import SubCatDropList from "../SubCatDropList/SubCatDropList";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import style from "./SubCatEquipmentsShop.module.css";

const SubCatEquipmentsShop = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [popBrands, setPopBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [popComBrands, setPopComBrands] = useState([]);
  const [allComBrands, setAllComBrands] = useState([]);

  useEffect(() => {
    const wheelsShopData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_spare_parts_stores_and_car_parsing"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setPopBrands(res.pop__brand_arr);
      setAllBrands(res.brand_arr);
      setPopComBrands(res.pop_commer_brand_arr);
      setAllComBrands(res.commer_brand_arr);
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
        <SubCatDropList
          popList={popBrands}
          fullList={allBrands}
          label="Марка"
        />
         <SubCatDropList
          popList={popComBrands}
          fullList={allComBrands}
          label="Марка(Коммерческая)"
        />
        <Cities popCities={popCities} regionArr={regions} />
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatEquipmentsShop;
