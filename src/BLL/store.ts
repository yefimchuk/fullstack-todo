import { configureStore } from "@reduxjs/toolkit";
import {registerUser} from "./registerUser/registerUser.slice";

export const store = configureStore({
    reducer: {
        registerUser: registerUser.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;