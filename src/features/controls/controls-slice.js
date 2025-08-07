import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
  type: "all",
  filterStatus: "", // или по умолчанию "all" или "" для фильтрации по статусу
};

const controlSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setRegion, setSearch, setType, setFilterStatus, clearControls } =
  controlSlice.actions;
export const controlsReducer = controlSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectType = (state) => state.controls.type;
export const selectRegion = (state) => state.controls.region;
export const selectFilterStatus = (state) => state.controls.filterStatus;
export const selectControls = (state) => state.controls;
