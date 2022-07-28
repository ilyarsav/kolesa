import { useEffect, useState } from "react";
import style from "./AdBrandsMap.module.css";
import dynamic from "next/dynamic";

const AdBrandsMap = () => {
  const [mapActive, setMapActive] = useState(false);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onMapActive(false);
    }
  };

  const onMarkClick = (val) => {
    setMarker(val)
  } 

  const onMapActive = (val) => {
    setMapActive(val);
  };

  const Map = dynamic(
    () => import("../Map/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );

  return (
    <div className="col-auto">
      {!mapActive && (
        <a onClick={() => onMapActive(true)} className={style.link}>
          Укажите ваш объект на карте
        </a>
      )}

      <div
        className={mapActive ? style.active : style.modal}
        onClick={() => onMapActive(false)}
      >
        <div
          className={style.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          <Map onMapActive={onMapActive} onMarkClick={onMarkClick} marker={marker}/>
        </div>
      </div>
    </div>
  );
};

export default AdBrandsMap;
