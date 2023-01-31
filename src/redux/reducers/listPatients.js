import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosFetch } from "../../api/axiosFetch";

const initialState = {
  loading: true,
  // isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  // token: localStorage.getItem("token") || null,
  msg: "",
  listPatient: [],
};

export const getPatientAction = createAsyncThunk(
  "PATIENT/getPatients",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosFetch.get("/pacients");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("No se obtuvo la data");
    }
  }
);
export const patientSlice = createSlice({
  name: "PATIENT_REDUCER",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getPatientAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listPatient = action.payload;
      // state.isAuthenticated = true;
      // state.token = `Bearer ${action.payload.token}`;
      // state.photos = action.payload;
    });

    builder.addCase(getPatientAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const patientReducer = patientSlice.reducer;
export default patientReducer;
