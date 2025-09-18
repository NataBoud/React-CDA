import { createSlice } from "@reduxjs/toolkit";
import type { ExpenseInterface } from "../interfaces/ExpenseInterface";
import { v4 as uuidv4 } from "uuid";

const initialState: { list: ExpenseInterface[] } = {
    list: []
};

const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const { label, amount, category, date } = action.payload;
            state.list.push({
                id: uuidv4(),
                label,
                amount,
                category,
                date
            });
        },
        removeExpense: (state, action) => {
            state.list = state.list.filter(exp => exp.id !== action.payload);
        }
    }

})

export const { addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;