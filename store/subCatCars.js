import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  brandID: null,
  modelID: null,
  // popBrands: [],
  // allBrands: [],
  // popCities: [],
  // regions: [],
};

// export const fetchCarEquipments = createAsyncThunk(
//   "subCatEquipments/fetchCarEquipments",
//   async () => {
//     const res = await fetch(
//       "http://qoldan-dev.com/api/car/ca_cat/get_cat_info"
//     ).then((res) => res.json());
//     return res;
//   }
// );

export const carsSlice = createSlice({
  name: "subCatCars",
  initialState,
  reducers: {
    getCarsBrandsID: (state, action) => {
      state.brandID = action.payload;
    },
    getCarsModelsID: (state, action) => {
      state.modelID = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCarEquipments.fulfilled, (state, action) => {
  //       state.popBrands = action.payload.pop_car_brand_arr;
  //       // state.popCities.push(action.payload.pop_city_arr);
  //       state.allBrands = action.payload.brand_arr;
  //       state.popCities = action.payload.pop_city_arr;
  //       state.regions = action.payload.region_arr;
  //     })
  //     .addDefaultCase(() => {});
  // },
});

export const { getCarsBrandsID, getCarsModelsID } = carsSlice.actions;

export default carsSlice.reducer;
