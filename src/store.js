import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { controlsReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { themeReducer } from "./features/theme/theme-slice";
import { detailsReducer } from "./features/details/details-slice";
import { toggleReducer } from "./features/toggle/toggle-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    toggle: toggleReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
