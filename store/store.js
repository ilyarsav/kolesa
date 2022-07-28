import { configureStore, combineReducers } from "@reduxjs/toolkit";
import equipomentsReducer from "./subCatEquipments.js";
import carsReducer from "./subCatCars.js";
import mobLightweightReducer from "./mobLightweightFilter.js";

const rootReducer = combineReducers({
  equipments: equipomentsReducer,
  cars: carsReducer,
  mobLightweightFilter: mobLightweightReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
