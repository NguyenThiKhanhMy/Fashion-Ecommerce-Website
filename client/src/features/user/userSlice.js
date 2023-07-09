import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

export const registerUserSlice  = createAsyncThunk("user/register",async (userData, thunkAPI) => {
  try {
    return await userService.registerUserService(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}
);

export const loginUserSlice = createAsyncThunk("user/login",async (userData, thunkAPI) => {
    try {
      return await userService.loginUserService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserWishlist = createAsyncThunk("user/login",async (userData, thunkAPI) => {
  try {
    return await userService.loginUserService(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}
);


const initialState = {
  user:"",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message:"",
}

export const userSlice = createSlice({
  name: "user",
  initialState:initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
    .addCase(registerUserSlice.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registerUserSlice.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.message = "success";
      if (state.isSuccess === true) {
        toast.info("Success")
      }
    })
    .addCase(registerUserSlice.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      state.isLoading = false;
      if (state.isError === true) {
        toast.info(action.error)
      }
    })
    .addCase(loginUserSlice.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginUserSlice.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.message = "Thành công";
      if (state.isSuccess === true) {
        toast.info("Success")
      }
    })
    .addCase(loginUserSlice.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      state.isLoading = false;
      if (state.isError === true) {
        toast.info(action.error)
      }
    })
  },
});

export default userSlice.reducer;