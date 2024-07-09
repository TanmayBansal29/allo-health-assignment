import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "../slices/passemgerSlice";

export const store = configureStore({
    reducer: {
        passenger: passengerReducer
    }
})