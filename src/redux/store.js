import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./reducers/listPatients";

import loginReducer from "./reducers/loginReducer";
export const store = configureStore({
  reducer: {
    Login: loginReducer,
    Patient: patientReducer,
  },
});
