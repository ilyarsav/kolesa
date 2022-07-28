import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";
import SelectBox from "../SelectBox/SelectBox";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import SubCategoryEquipmentsRadio from "../SubCategoryEquipmentsRadio/SubCategoryEquipmentsRadio";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryTruckRadio from "../SubCategoryTruckRadio/SubCategoryTruckRadio";
import SubCatType from "../SubCatType/SubCatType";
import style from "./SubCatTyre.module.css";

const SubCatTyre = () => {
  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [tyres, setTyres] = useState([]);
  const [width, setWidth] = useState([]);
  const [profile, setProfile] = useState([]);
  const [diameter, setDiameter] = useState([]);

  useEffect(() => {
    const carEquipments = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/spare_parts_cat/get_tires"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setTyres(res.type_arr);
      setWidth(res.width_arr);
      setProfile(res.profile_arr);
      setDiameter(res.diameter_arr);
    };
    carEquipments();
  }, []);

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8 ps-4 py-3">
        <div className="col-8">
          <SubCategoryInput />
        </div>
        <div className="row">
          <SubCategoryCheckbox
            label="Искать в тексте объявлений"
            checked={true}
          />
          <SubCategoryCheckbox label="Есть доставка" />
        </div>
        <Cities popCities={popCities} regionArr={regions} />
        <div className="row">
          <SubCatType typeArr={tyres} />
        </div>
        <div className="row mt-3">
          <div className="col-auto">
            <b>Размер</b>
          </div>
          <div className="col-3">
            <SelectBox list={width} defaultVal="Ширина" />
          </div>
          /
          <div className="col-3">
            <SelectBox list={profile} defaultVal="Профиль" />
          </div>
          <div className="col-3">
            <SelectBox list={diameter} defaultVal="Диаметр" />
          </div>
        </div>
      </div>
      <div className="col-4 pe-4 py-3">
        <div className="col mb-3">
          <SubCategoryEquipmentsRadio />
        </div>
        <div className="col mb-3">
          <SubCategoryTruckRadio />
        </div>
        <div className="col mb-3">
          <PriceInputGroup />
        </div>
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCatTyre;
