import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosFetch } from "../../api/axiosFetch";

const initialState = {
  loading: true,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  token: localStorage.getItem("token") || null,
  msg: "",
};

export const postLoginAction = createAsyncThunk(
  "LOGIN/postLogin",
  async ({ email, password, toast }, { rejectWithValue }) => {
    try {
      const { data } = await axiosFetch.post("signin", { email, password });
      toast.success("Ingreso exitoso");
      console.log(toast);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(toast);
      return rejectWithValue("Error, verifique los datos");
    }
  }
);

export const loginSlice = createSlice({
  name: "LOGIN_REDUCER",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLoginAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(postLoginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = `Bearer ${action.payload.token}`;
      // state.photos = action.payload;
    });

    builder.addCase(postLoginAction.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.payload;
    });
  },
});

const loginReducer = loginSlice.reducer;
export default loginReducer;
