import { useEffect, useState } from "react";
import style from "./OtherSubCatBlock.module.css";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryCheckbox from "../SubCategoryCheckbox/SubCategoryCheckbox";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import SubCatType from "../SubCatType/SubCatType";

const OtherSubCatBlock = () => {
  const [other, setOther] = useState(true);
  const [section, setSection] = useState(false);

  const [popCities, setPopCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://qoldan-dev.com/api/car/other_cat/get_other"
      ).then((res) => res.json());
      setRegions(res.region_arr);
      setPopCities(res.pop_city_arr);
      setSections(res.cat_arr);
    };
    getData();
  }, []);

  return (
    <>
      <div className={`row ${style.subcat}`}>
        <div className="col-auto">
          <a className={style.active}>Прочее</a>
        </div>
      </div>
      {other && (
        <div className={`row ${style.subcat__block}`}>
          <div className="col-8 ps-4 py-3">
            <SubCategoryInput />
            <SubCategoryCheckbox label="Искать в тексте объявлений" />
            <Cities popCities={popCities} regionArr={regions} />
            <div className="row">
              <SubCatType sections={true} typeArr={sections} />
            </div>
          </div>
          <SubCategoryButton />
        </div>
      )}
    </>
  );
};

export default OtherSubCatBlock;
