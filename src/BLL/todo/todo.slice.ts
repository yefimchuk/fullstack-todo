import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../service/http";


export const fetchTodos: any = createAsyncThunk(
    "todo/fetchTodos",
    async (userId: string, {rejectWithValue}) => {
        try {
            return await http.todos(userId);

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
export const addTodos: any = createAsyncThunk(
    "todo/addTodos",
    async ({text, userId}: { text: string, userId: string }, {rejectWithValue}) => {
        try {
            return await http.addTodos({text, userId});

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


export const todo = createSlice({
    name: "todo",
    initialState: {
        todos: null,
        isFetching: true,
    }as any,
    reducers: {},
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.isFetching = true;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.todos = action.payload.data;
            state.isFetching = false;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.isFetching = false;
        },
        [addTodos.fulfilled]: (state, action) => {
            state.todos.push(action.payload.data);
            state.isFetching = false;
        },
    },
});

export default todo.reducer;
