import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../service/http";
import { useDispatch } from "react-redux";

export interface FetchDataType {
    email: string;
    password: number;
}

export const fetchLoginData: any = createAsyncThunk(
    "loginUser/registerUser",
    async (values: FetchDataType, {rejectWithValue}) => {
        try {
            let res = await http.login(values);
            return res?.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const loginUser = createSlice({
    name: "loginUser",
    initialState: {
        errors: null,
        token: null,
        id: null,
        isFetching: true,
    },
    reducers: {
        logout(state) {
            state.token = null;
            state.id = null;
            state.errors = null;
            localStorage.removeItem('userData')
        },
        login(state, action) {

            state.token =  action.payload.token
            state.id = action.payload.userId
        },

    },
    extraReducers: {
        [fetchLoginData.pending]: (state, action) => {
            state.isFetching = true;
        },
        [fetchLoginData.fulfilled]: (state, action) => {
            state.token = action.payload.token;
            state.id = action.payload.userId;
            localStorage.setItem('userData', JSON.stringify({
                userId: action.payload.userId,
                token: action.payload.token
            }));
            state.isFetching = false;
        },
        [fetchLoginData.rejected]: (state, action) => {
            state.errors =  action.payload.response.data.error
            state.isFetching = false;
        },
    },
});
export const {logout, login} = loginUser.actions
export default loginUser.reducer;
