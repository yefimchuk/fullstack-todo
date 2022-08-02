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
export const deleteTodo: any = createAsyncThunk(
    "todo/deleteTodo",
    async (id: number, {rejectWithValue}) => {
        try {
            return await http.deleteTodo(id);

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
export const importantTodo: any = createAsyncThunk(
    "todo/importantTodo",
    async (id: number, {rejectWithValue}) => {
        try {
            return await http.importantTodo(id);

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
export const completeTodo: any = createAsyncThunk(
    "todo/completeTodo",
    async (id: number, {rejectWithValue}) => {
        try {
            return await http.completeTodo(id);

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
        deleteIsLoading: false,
    } as any,
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
        [addTodos.pending]: (state, action) => {
            state.isFetching = true;
        },
        [addTodos.fulfilled]: (state, action) => {
            state.todos.push(action.payload.data);
            state.isFetching = false;
        },
        [addTodos.rejected]: (state, action) => {
            state.isFetching = false;
        },
        [deleteTodo.pending]: (state, action) => {

            state.deleteIsLoading = true;
        },
        [deleteTodo.fulfilled]: (state, action) => {
            state.deleteIsLoading = false;
        },
        [importantTodo.fulfilled]: (state, action) => {
            state.todos.map((item: any, index: number) => {
                if (action.payload.data._id === item._id) {
                    state.todos[index] = action.payload.data;
                }
            });
            state.isFetching = false;
        },

        [completeTodo.fulfilled]: (state, action) => {
            state.todos.map((item: any, index: number) => {
                if (action.payload.data._id === item._id) {
                    state.todos[index] = action.payload.data;
                }
            });
            state.isFetching = false;
        },


    },
});

export default todo.reducer;
