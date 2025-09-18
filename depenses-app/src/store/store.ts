import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice";

export const store = configureStore({
    reducer: {
        expenses: expensesReducer
    }
});
// Type pour le state global
export type RootState = ReturnType<typeof store.getState>;