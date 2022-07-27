import { configureStore } from "@reduxjs/toolkit";
import {registerUser} from "./registerUser/registerUser.slice";
import { loginUser } from "./loginUser/loginUser.slice";
import { todo } from "./todo/todo.slice";

export const store = configureStore({
    reducer: {
        registerUser: registerUser.reducer,
        loginUser: loginUser.reducer,
        todo: todo.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;