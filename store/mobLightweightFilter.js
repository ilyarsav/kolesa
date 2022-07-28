import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  mileageValue: "",

  selectedAvailability: null,
  availabilityValue: "",

  engineTypeID: null,

  engineVolumeFrom: "",
  engineVolumeTo: "",

  carBodyTypeID: null,

  carGearBoxID: null,

  selectedWheel: null,
  wheelValue: "",

  carDriveID: null,

  carColorID: null,
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

export const lightweightFilterSlice = createSlice({
  name: "mobLightweightFilter",
  initialState,
  reducers: {
    setMileageValue: (state, action) => {
      state.mileageValue = action.payload;
    },

    setSelectedOptionAvailability: (state, action) => {
      state.selectedAvailability = action.payload;
    },
    onAvailabilityValueChange: (state, action) => {
      state.availabilityValue = action.payload;
    },

    setEngineTypeID: (state, action) => {
      state.engineTypeID = action.payload;
    },

    setEngineVolumeFrom: (state, action) => {
      state.engineVolumeFrom = action.payload;
    },
    setEngineVolumeTo: (state, action) => {
      state.engineVolumeTo = action.payload;
    },

    setCarBodyTypeID: (state, action) => {
      state.carBodyTypeID = action.payload;
    },

    setCarGearBoxID: (state, action) => {
      state.carGearBoxID = action.payload;
    },

    setSelectedWheel: (state, action) => {
      state.selectedWheel = action.payload;
    },
    setWheelValue: (state, action) => {
      state.wheelValue = action.payload;
    },

    setCarDriveID: (state, action) => {
      state.carDriveID = action.payload;
    },

    setCarColorID: (state, action) => {
      state.carColorID = action.payload;
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

export const {
  setMileageValue,
  setSelectedOptionAvailability,
  onAvailabilityValueChange,
  setEngineTypeID,
  setEngineVolumeFrom,
  setEngineVolumeTo,
  setCarBodyTypeID,
  setCarGearBoxID,
  setSelectedWheel,
  setWheelValue,
  setCarDriveID,
  setCarColorID
} = lightweightFilterSlice.actions;

export default lightweightFilterSlice.reducer;
