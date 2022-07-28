import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import style from "./Map.module.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const Map = ({ onMapActive, onMarkClick, marker }) => {

  const onSaveLocation = (val) => {
    onMapActive(false);
  };

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        onMarkClick(e.latlng);
      },
    });

    return marker === null ? null : (
      <Marker position={marker}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <>
      <MapContainer
        center={[43.2389494, 76.889709]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      <button className={style.save__location} onClick={() => onSaveLocation()}>
        Сохранить <br /> расположение
      </button>
    </>
  );
};

export default Map;
