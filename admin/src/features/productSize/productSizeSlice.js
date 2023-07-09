import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import pSizeService from "./productSizeService";

export const getSizes = createAsyncThunk(
  "productSize/get-sizes",
  async (thunkAPI) => {
    try {
      return await pSizeService.getProductSizes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createSize = createAsyncThunk(
  "productSize/create-size",
  async (sizeData, thunkAPI) => {
    try {
      return await pSizeService.createSize(sizeData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAProductSize = createAsyncThunk(
  "productSize/update-size",
  async (size, thunkAPI) => {
    try {
      return await pSizeService.updateProductSize(size);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAProductSize = createAsyncThunk(
  "productSize/delete-size",
  async (id, thunkAPI) => {
    try {
      return await pSizeService.deleteProductSize(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAProductSize = createAsyncThunk(
  "productSize/get-product-size",
  async (id, thunkAPI) => {
    try {
      return await pSizeService.getProductSize(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("RevertAll");

const initialState = {
  pSizes: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const pSizeSlice = createSlice({
  name: "pSizes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSizes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSizes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pSizes = action.payload;
      })
      .addCase(getSizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createSize.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdSize = action.payload;
      })
      .addCase(createSize.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAProductSize.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAProductSize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedSize = action.payload;
      })
      .addCase(updateAProductSize.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAProductSize.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAProductSize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedSize = action.payload;
      })
      .addCase(deleteAProductSize.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProductSize.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProductSize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sizeName = action.payload.title;
      })
      .addCase(getAProductSize.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default pSizeSlice.reducer;