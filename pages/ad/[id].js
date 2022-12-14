import Link from "next/link";
import { useRouter } from "next/router";
import AdAvailability from "../../components/AdAvailability/AdAvailability";
import AdCondition from "../../components/AdCondition/AdCondition";
import AdDelivery from "../../components/AdDelivery/AdDelivery";
import AdPrice from "../../components/AdPrice/AdPrice";
import AdTextarea from "../../components/AdTextarea/AdTextarea";
import AdYear from "../../components/AdYear/AdYear";
import EquipmentsBrandAndModel from "../../components/EquipmentsBrandAndModel/EquipmentsBrandAndModel";
import EquipmentsCode from "../../components/EquipmentsCode/EquipmentsCode";
import EquipmentsName from "../../components/EquipmentsName/EquipmentsName";
import PhotoDrop from "../../components/PhotoDrop/PhotoDrop";
import SelectBox from "../../components/SelectBox/SelectBox";
import SubCategoryCheckbox from "../../components/SubCategoryCheckbox/SubCategoryCheckbox";
import WaterTransType from "../../components/WaterTransType/WaterTransType";
import style from "../../styles/AdSub.module.css";
import AdType from "../../components/AdType/AdType";
import AdBrand from "../../components/AdBrand/AdBrand";
import AdEngine from "../../components/AdEngine/AdEngine";
import AdSeats from "../../components/AdSeats/AdSeats";
import AdMileage from "../../components/AdMileage/AdMileage";
import AdBrandsModal from "../../components/AdBrandsModal/AdBrandsModal";
import AdWorkingHours from "../../components/AdWorkingHours/AdWorkingHours";
import AdInput from "../../components/AdInput/AdInput";
import PhoneNum from "../../components/PhoneNum/PhoneNum";
import AdBrandsMap from "../../components/AdBrandsMap/AdBrandsMap";

const AdSub = ({
  motoTypeList,
  motoBrandList,
  motoConditionList,
  waterTransType,
  tyreType,
  equipmentModel,
  repairType,
  serviceType,
  tuningType,
  truckType,
  truckBrandList,
  fuelTypeList,
  busTypeList,
  busBrandList,
  mileageTypeList,
  specialEquipmentTypeList,
  specialEquipmentBrandList,
}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <div className=".row mt-4">
        <h3>???????????? ???????????????????? ???? ????????????</h3>
      </div>
      <div className="row mt-4">
        <p className="fs-5">
          ???????? ?????????? ???????????????????? ???? ?????????? ??? 7 ????????. ???????????????? ???????????????????? ?????????? ??
          ?????????? ???????????? ????????????????.
        </p>
      </div>
      <div className="row">
        <p className="fs-5">
          ????????, ???????????????????????? ?? ????????????????????, <b>?????????? ?????????? *</b>
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-auto">
          <b>???????????????? ?????????????????? *</b>
        </div>
        <div className="col-auto">
          <Link href="/ad">
            <a>
              ???????????? -{">"} {}
            </a>
          </Link>
        </div>
      </div>

      {id === "2" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????? ?????????????? *</b>
          </div>
          <AdType adTypeList={motoTypeList} />
        </div>
      )}

      {id === "14" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????? ?????????????? *</b>
          </div>
          <AdType adTypeList={repairType} />
        </div>
      )}

      {id === "15" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????? ???????????? *</b>
          </div>
          <AdType adTypeList={serviceType} />
        </div>
      )}

      {id === "16" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????? ?????????????? *</b>
          </div>
          <AdType adTypeList={tuningType} />
        </div>
      )}

      {id === "18" && (
        <div className="row mt-4">
          <div className="col-2">?????? ??????????????</div>
          <AdType adTypeList={truckType} />
        </div>
      )}

      {id === "20" && (
        <div className="row mt-4">
          <div className="col-2">?????? ??????????????</div>
          <AdType adTypeList={specialEquipmentTypeList} />
        </div>
      )}

      {id === "19" && (
        <div className="row mt-4">
          <div className="col-2">?????? ????????????????</div>
          <AdType adTypeList={busTypeList} />
        </div>
      )}

      {id === "3" && (
        <div className="row mt-4">
          <div className="col-2">?????? ?????????????????</div>
          <WaterTransType waterTransType={waterTransType} />
        </div>
      )}

      {(id == "5" || id === "23") && (
        <div className="row mt-4">
          <div className="col-2">?????? ?????????? *</div>
          <AdBrandsModal adBrandsModalList={truckBrandList} />
        </div>
      )}

      {id == "13" && (
        <div className="row mt-4">
          <div className="col-2">?????? ??????????</div>
          <AdBrandsModal adBrandsModalList={truckBrandList} />
        </div>
      )}

      {id == "13" && (
        <div className="row mt-4">
          <div className="col-2">?????? ???????????????????????? ??????????</div>
          <AdBrandsModal adBrandsModalList={truckBrandList} />
        </div>
      )}

      {id == "22" && (
        <div className="row mt-4">
          <div className="col-2">?????????? *</div>
          <AdBrandsModal adBrandsModalList={truckBrandList} />
        </div>
      )}

      {id === "18" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????????? *</b>
          </div>
          <AdBrand adBrandList={truckBrandList} />
        </div>
      )}

      {id === "19" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????????? *</b>
          </div>
          <AdBrand adBrandList={busBrandList} />
        </div>
      )}

      {id === "20" && (
        <div className="row mt-4">
          <div className="col-2">
            <b>?????????? *</b>
          </div>
          <AdBrand adBrandList={specialEquipmentBrandList} />
        </div>
      )}

      {(id !== "1" ||
        id !== "3" ||
        id !== "11" ||
        id !== "22" ||
        id !== "23") && (
        <div className="row mt-4">
          {(id === "2" || id === "18" || id === "19" || id === "20") && (
            <div className="col-2">????????????</div>
          )}
          {(id === "4" || id === "6" || id === "5") && (
            <div className="col-2">???????????????????????? ????????????????</div>
          )}
          {(id === "7" ||
            id === "8" ||
            id === "9" ||
            id === "10" ||
            id === "14" ||
            id === "15" ||
            id === "16" ||
            id === "17" ||
            id === "24") && (
            <div className="col-2">
              <b>?????????????????? ???????????????????? *</b>
            </div>
          )}
          {(id === "12" || id === "13" || id === "21") && (
            <div className="col-2">????????????????</div>
          )}
          <EquipmentsName />
        </div>
      )}

      {id === "2" && (
        <div className="row mt-4">
          <div className="col-2">??????????</div>
          <AdBrand adBrandList={motoBrandList} />
        </div>
      )}

      {id === "6" && (
        <div className="row mt-4">
          <div className="col-2">??????????</div>
          <AdBrand adBrandList={motoBrandList} />
        </div>
      )}

      {(id === "2" || id === "4" || id === "6") && (
        <div className="row mt-4">
          {(id === "2" || id === "6") && <div className="col-2">????????????</div>}
          {id === "4" && <div className="col-2">???????????????????????? ????????????????</div>}
          <EquipmentsName id={id} />
        </div>
      )}

      {id === "11" && (
        <div className="row mt-4">
          <div className="col-2">?????????? ?? ???????????? *</div>
          <EquipmentsBrandAndModel
            waterTransType={waterTransType}
            equipmentModel={equipmentModel}
          />
        </div>
      )}

      {id === "4" && (
        <div className="row mt-4">
          <div className="col-2">?????? ????????????????</div>
          <EquipmentsCode />
        </div>
      )}

      {(id === "2" ||
        id === "11" ||
        id === "18" ||
        id === "19" ||
        id === "20") && (
        <div className="row mt-4">
          <div className="col-2">?????? ?????????????? *</div>
          <AdYear />
        </div>
      )}

      {(id === "2" ||
        id === "3" ||
        id === "6" ||
        id === "4" ||
        id === "7" ||
        id === "8" ||
        id === "9" ||
        id === "10" ||
        id === "11" ||
        id === "18" ||
        id === "19" ||
        id === "20") && (
        <div className="row mt-4">
          <div className="col-2">????????</div>
          <AdPrice />
        </div>
      )}

      {(id === "18" || id === "19") && (
        <div className="row mt-4">
          <div className="col-2">??????????????????</div>
          {/* ?????????????????? */}
          <AdEngine />
        </div>
      )}

      {id === "7" && (
        <div className="row mt-4">
          <div className="col-2">??????</div>
          <AdType adTypeList={tyreType} />
        </div>
      )}

      {id === "8" && (
        <div className="row mt-4">
          <div className="col-2">??????</div>
          <AdType adTypeList={tyreType} />
        </div>
      )}

      {(id === "18" || id === "19" || id === "20") && (
        <div className="row mt-4">
          <div className="col-2">?????? ??????????????</div>
          <AdType adTypeList={fuelTypeList} />
        </div>
      )}

      {(id === "12" || id === "13" || id === "21") && (
        <div className="row mt-4">
          <div className="col-2">?????????? ????????????</div>
          <AdWorkingHours />
        </div>
      )}

      {id === "7" && (
        <div className="row mt-4">
          <div className="col-2">???????????? *</div>
          <SelectBox />
        </div>
      )}

      {id === "7" && (
        <div className="row mt-4">
          <div className="col-2">?????????????? *</div>
          <SelectBox />
        </div>
      )}

      {(id === "7" || id === "8") && (
        <div className="row mt-4">
          <div className="col-2">?????????????? *</div>
          <SelectBox />
        </div>
      )}

      {id === "8" && (
        <div className="row mt-4">
          <div className="col-2">???????????? (PCD) *</div>
          <SelectBox />
        </div>
      )}

      {/* ?????????? ???????? ???????????????????? ?????? */}

      {id === "19" && (
        <div className="row mt-4">
          <div className="col-2">??????</div>
          <SelectBox />
        </div>
      )}

      {id === "22" && (
        <div className="row mt-4">
          <div className="col-2">??????</div>
          <SelectBox />
        </div>
      )}

      {id === "24" && (
        <div className="row mt-4">
          <div className="col-2">???????????????? ??????????????</div>
          <SelectBox />
        </div>
      )}

      {/* ?????????? ???????? ???????????????????? ?????? */}

      {(id === "22" || id === "23") && (
        <div className="row mt-4">
          <div className="col-2">????????????????????????</div>
          <AdInput />
        </div>
      )}

      {(id === "2" ||
        id === "6" ||
        id === "4" ||
        id === "7" ||
        id === "8" ||
        id === "9" ||
        id === "10" ||
        id === "18" ||
        id === "19" ||
        id === "20") && (
        <div className="row mt-4">
          <div className="col-2">?????????????????? *</div>
          <AdCondition id={id} motoConditionList={motoConditionList} />
        </div>
      )}

      {(id === "4" ||
        id === "5" ||
        id === "7" ||
        id === "8" ||
        id === "9" ||
        id === "10" ||
        id === "18" ||
        id === "19" ||
        id === "20") && (
        <div className="row mt-4">
          <div className="col-2">?????????????? *</div>
          <AdAvailability />
        </div>
      )}

      {id === "19" && (
        <div className="row mt-4">
          <div className="col-2">???????????????????? ????????</div>
          <AdSeats />
        </div>
      )}

      {id === "19" && (
        <div className="row mt-4">
          <div className="col-2">????????????</div>
          <AdMileage adTypeList={mileageTypeList} />
        </div>
      )}

      {(id === "4" ||
        id === "5" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "10" ||
        id === "11" ||
        id === "12" ||
        id === "13") && (
        <div className="row mt-4">
          <div className="col-2">???????? ????????????????</div>
          <AdDelivery />
        </div>
      )}

      {id !== "1" && (
        <div className="row mt-4">
          {id === "12" ||
          id === "13" ||
          id === "21" ||
          id === "22" ||
          id === "23" ? (
            <div className="col-2">????????????????</div>
          ) : (
            <div className="col-2">?????????? ????????????????????</div>
          )}
          <AdTextarea />
        </div>
      )}

      {(id === "2" ||
        id === "3" ||
        id === "4" ||
        id === "5" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "9" ||
        id === "10" ||
        id === "11" ||
        id === "12" ||
        id === "13" ||
        id === "14" ||
        id === "15" ||
        id === "16" ||
        id === "17" ||
        id === "18" ||
        id === "19" ||
        id === "20" ||
        id === "21" ||
        id === "22" ||
        id === "23" ||
        id === "24") && (
        <div className="row mt-5">
          <div className="col-2">????????????????????</div>
          <PhotoDrop />
        </div>
      )}

      <div className="row mt-5">
        <h3>???????????????????? ????????????????????</h3>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <b>???????????? *</b>
        </div>
        <SelectBox />
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <b>?????????? *</b>
        </div>
        <SelectBox />
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <b>????????????????*</b>
        </div>
        <div className="col-auto">
          <SubCategoryCheckbox label="+7 707 456 45 45" checked="true" />
          <div className="row">
            <PhoneNum />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-2">???????????????????????? ???? ??????????</div>
        <AdBrandsMap />
      </div>

      <div className="row mt-4">
        <div className="col-2"></div>
        <SubCategoryCheckbox
          label="???????????????? ?? ?????????????????? ???????????????????? ????????????????????"
          checked="true"
        />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const motoTypeList = await fetch(
      "http://localhost:3000/api/get-truck-type-list"
    ).then((res) => res.json());

    const motoBrandList = await fetch(
      "http://localhost:3000/api/get-truck-type-list"
    ).then((res) => res.json());

    const motoConditionList = await fetch(
      "http://localhost:3000/api/get-moto-condition-list"
    ).then((res) => res.json());

    const waterTransType = await fetch(
      "http://localhost:3000/api/get-car-brand-list"
    ).then((res) => res.json());

    const tyreType = await fetch(
      "http://localhost:3000/api/get-tyre-type-list"
    ).then((res) => res.json());

    const equipmentModel = await fetch(
      "http://localhost:3000/api/get-car-model-list"
    ).then((res) => res.json());

    const repairType = await fetch(
      "http://localhost:3000/api/get-repair-subcat-list"
    ).then((res) => res.json());

    const serviceType = await fetch(
      "http://localhost:3000/api/get-services-in-services-subcat-list"
    ).then((res) => res.json());

    const tuningType = await fetch(
      "http://localhost:3000/api/get-tuning-subcat-list"
    ).then((res) => res.json());

    const truckType = await fetch(
      "http://localhost:3000/api/get-truck-type-list"
    ).then((res) => res.json());

    const truckBrandList = await fetch(
      "http://localhost:3000/api/get-truck-brand-list"
    ).then((res) => res.json());

    const fuelTypeList = await fetch(
      "http://localhost:3000/api/get-fuel-type-list"
    ).then((res) => res.json());

    const busTypeList = await fetch(
      "http://localhost:3000/api/get-bus-type-list"
    ).then((res) => res.json());

    const busBrandList = await fetch(
      "http://localhost:3000/api/get-bus-brand-list"
    ).then((res) => res.json());

    const mileageTypeList = await fetch(
      "http://localhost:3000/api/get-mileage-type-list"
    ).then((res) => res.json());

    const specialEquipmentTypeList = await fetch(
      "http://localhost:3000/api/get-special-equipment-type-list"
    ).then((res) => res.json());

    const specialEquipmentBrandList = await fetch(
      "http://localhost:3000/api/get-special-equipment-brand-list"
    ).then((res) => res.json());

    return {
      props: {
        motoTypeList,
        motoBrandList,
        motoConditionList,
        waterTransType,
        tyreType,
        equipmentModel,
        repairType,
        serviceType,
        tuningType,
        truckType,
        truckBrandList,
        fuelTypeList,
        busTypeList,
        busBrandList,
        mileageTypeList,
        specialEquipmentTypeList,
        specialEquipmentBrandList,
      },
    };
  } catch (error) {
    console.log("error");
  }
}

export default AdSub;
