import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const loginAdminSlice = createAsyncThunk("/user/login-admin", async (userData, thunkAPI) => {
    try {
      return await userService.loginAdminService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(loginAdminSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdminSlice.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(loginAdminSlice.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
  },
});

export default userSlice.reducer;