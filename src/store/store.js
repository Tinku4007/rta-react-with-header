import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import authService from "./services/authService";

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [authService.reducerPath]: authService.reducer,
        // authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authService.middleware),
});