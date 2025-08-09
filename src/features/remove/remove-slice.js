import { createSlice } from "@reduxjs/toolkit";

// Предположим, у вас есть массив данных, который нужно управлять
// В реальности вы можете загрузить это с сервера или импортировать из файла
// Для примера возьмем массив данных (можно заменить на вашу структуру)

// const initialState = {
//   items: [
//     // Здесь вы можете инициализировать состояние на основе данных
//     // например, так:
//     { id: 1, name: "DevLens", isActive: true },
//     { id: 2, name: "StyleSpy", isActive: true },
//     { id: 3, name: "SpeedBoost", isActive: false },
//     { id: 4, name: "JSONWizard", isActive: true },
//     { id: 5, name: "TabMaster Pro", isActive: true },
//     { id: 6, name: "ViewportBuddy", isActive: false },
//     { id: 7, name: "Markup Notes", isActive: true },
//     { id: 8, name: "GridGuides", isActive: false },
//     { id: 9, name: "Palette Picker", isActive: true },
//     { id: 10, name: "LinkChecker", isActive: true },
//     { id: 11, name: "DOM Snapshot", isActive: false },
//     { id: 12, name: "ConsolePlus", isActive: true },
//     // добавьте остальные элементы из data.json
//   ],
// };

// const removeSlice = createSlice({
//   name: "@@remove",
//   initialState,
//   reducers: {
//     removeCard: (state, action) => {
//       const idToRemove = action.payload;
//       return {
//         ...state,
//         items: state.items.filter((card) => card.id !== idToRemove),
//       };
//     },
//   },
// });

// export const { removeCard } = removeSlice.actions;
// export const removeReducer = removeSlice.reducer;

const initialState = {
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

const removeSlice = createSlice({
  name: "@@remove",
  initialState,
  reducers: {
    removeCard: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((card) => card.id !== idToRemove);
    },
  },
});

export const { removeCard } = removeSlice.actions;
export const removeReducer = removeSlice.reducer;
