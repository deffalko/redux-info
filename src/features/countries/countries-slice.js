// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import data from "../../data.json";

// // export const loadCountries = createAsyncThunk(
// //   "@@countries/load-countries",
// //   (_, { extra: { client, api } }) => {
// //     return client.get(api.ALL_COUNTRIES);
// //   }
// // );

// // export const loadCountries = createAsyncThunk(
// //   "@@countries/load-countries",
// //   () => {
// //     // Можно просто вернуть данные
// //     return { data };
// //   }
// // );
// export const loadCountries = createAsyncThunk(
//   "@@countries/load-countries",
//   () => {
//     // data — это уже массив
//     return data; // возвращаем массив напрямую
//   }
// );

// const initialState = {
//   status: "idle",
//   error: null,
//   list: [],
// };

// const countrySlice = createSlice({
//   name: "@@countries",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // builder
//     //   .addCase(loadCountries.pending, (state) => {
//     //     state.status = "loading";
//     //     state.error = null;
//     //   })
//     //   .addCase(loadCountries.rejected, (state, action) => {
//     //     state.status = "rejected";
//     //     state.error = action.payload || action.meta.error;
//     //   })
//     //   .addCase(loadCountries.fulfilled, (state, action) => {
//     //     state.status = "received";
//     //     state.list = action.payload.data;
//     //   });
//     // builder.addCase(loadCountries.fulfilled, (state, action) => {
//     //   console.log("Fulfilled payload:", action.payload);
//     //   state.status = "received";
//     //   state.list = Array.isArray(action.payload.data)
//     //     ? action.payload.data
//     //     : [];
//     // });
//     builder.addCase(loadCountries.fulfilled, (state, action) => {
//       state.status = "received";
//       state.list = action.payload; // теперь это массив
//     });
//   },
// });

// export const countryReducer = countrySlice.reducer;

// export const selectCountriesInfo = (state) => ({
//   status: state.countries.status,
//   error: state.countries.error,
//   qty: state.countries.list.length,
// });

// export const selectAllCountries = (state) => state.countries.list;
// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  () => {
    return { data };
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((it) => it.id === itemId);
      if (item) {
        item.isActive = !item.isActive;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.status = "received";
      state.list = action.payload.data;
    });
  },
});
export const { toggleItem } = countrySlice.actions;
export const countryReducer = countrySlice.reducer;

export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;
// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) &&
//       (region ? item.description.includes(region) : true)
//   );
// };
export const selectVisibleCountries = (
  state,
  { search = "", region = "", filterStatus = "" }
) => {
  return state.countries.list.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = region ? item.description.includes(region) : true;
    let matchesStatus = true;

    if (filterStatus === "true") {
      matchesStatus = item.isActive === true;
    } else if (filterStatus === "false") {
      matchesStatus = item.isActive === false;
    }
    // Если filterStatus пустая строка, фильтр по статусу не применяется
    return matchesSearch && matchesRegion && matchesStatus;
  });
};
