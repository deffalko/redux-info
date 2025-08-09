import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
  type: "all",
  filterStatus: "", // или по умолчанию "all" или "" для фильтрации по статусу
  remove: [],
  items: [
    // Здесь вы можете инициализировать состояние на основе данных
    // например, так:
    { id: 1, name: "DevLens", isActive: true },
    { id: 2, name: "StyleSpy", isActive: true },
    { id: 3, name: "SpeedBoost", isActive: false },
    { id: 4, name: "JSONWizard", isActive: true },
    { id: 5, name: "TabMaster Pro", isActive: true },
    { id: 6, name: "ViewportBuddy", isActive: false },
    { id: 7, name: "Markup Notes", isActive: true },
    { id: 8, name: "GridGuides", isActive: false },
    { id: 9, name: "Palette Picker", isActive: true },
    { id: 10, name: "LinkChecker", isActive: true },
    { id: 11, name: "DOM Snapshot", isActive: false },
    { id: 12, name: "ConsolePlus", isActive: true },
    // добавьте остальные элементы из data.json
  ],
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
    setRemove: (state, action) => {
      // state.remove = action.payload;
      if (!state.remove.includes(action.payload)) {
        state.remove.push(action.payload);
      }
    },
    clearRemove: (state) => {
      state.remove = [];
    },
    // setRemove: (state, action) => {
    //   // return state.items.filter((card) => card.id !== action.payload);
    //   const idToRemove = action.payload;
    //   state.items = state.items.filter((card) => card.id !== idToRemove);
    // },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const {
  setRegion,
  setSearch,
  setType,
  setRemove,
  setFilterStatus,
  clearControls,
} = controlSlice.actions;
export const controlsReducer = controlSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectType = (state) => state.controls.type;
export const selectRegion = (state) => state.controls.region;
export const selectFilterStatus = (state) => state.controls.filterStatus;
export const selectControls = (state) => state.controls;
export const selectRemove = (state) => state.controls.remove;
