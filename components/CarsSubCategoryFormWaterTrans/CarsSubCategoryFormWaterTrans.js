import { useEffect, useState } from "react";
import style from "./CarsSubCategoryFormWaterTrans.module.css";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCatType from "../SubCatType/SubCatType";

const SubCategoryFormWaterTrans = () => {
  
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [waterTransArr, setWaterTransArr] = useState([]);

  useEffect(() => {
    const waterTransData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/cars_cat/get_water_transport"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setWaterTransArr(res.tech_type_arr);
    };
    waterTransData();
  }, []);


  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="row px-4 py-3">
        <div className="col-8">
          <div className="col-8 mb-3">
            <SubCategoryInput />
          </div>

          <div className="col-auto mb-3">
            <Cities popCities={popCities} regionArr={regions} />
          </div>

          <div className="row">
            <SubCatType typeArr={waterTransArr}/>
          </div>

          <div className="col-auto mt-3">
            <SubCategoryCheckbox label="С фото" />
          </div>
        </div>

        <div className="col-4">
          <PriceInputGroup />
        </div>
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCategoryFormWaterTrans;
