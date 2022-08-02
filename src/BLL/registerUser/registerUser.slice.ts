import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../service/http";

interface FetchDataType {
    email: string;
    password: number;
}

export const fetchRegisterData: any = createAsyncThunk(
    "registerUser/fetchRegisterData",
    async (values: FetchDataType, {rejectWithValue}) => {
        try {
            return await http.register(values);

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
        errors: null,
        status: null
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

            state.errors = action.payload.response.data.error
            if (action.payload.response.data.message) {
                state.errors = action.payload.response.data.message[0]
            }
            state.isFetching = false;
        },
    },
});

export default registerUser.reducer;
