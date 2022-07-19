import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../service/http";

interface FetchDataType {
  email: string;
  password: number;
}

export const fetchRegisterData: any = createAsyncThunk(
  "registerUser/registerUser",
  async (values: FetchDataType, { rejectWithValue }) => {
    try {
      await http.register(values);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const registerUser = createSlice({
  name: "registerUser",
  initialState: {
    todosData: [],
    isFetching: true,
  },
  reducers: {},
  extraReducers: {
    [fetchRegisterData.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchRegisterData.fulfilled]: (state, action) => {
      state.todosData = action.payload;
      state.isFetching = false;
    },
    [fetchRegisterData.rejected]: (state, action) => {
      state.isFetching = false;
    },
  },
});

export default registerUser.reducer;
