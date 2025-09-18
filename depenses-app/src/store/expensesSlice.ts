import { createSlice } from "@reduxjs/toolkit";
import type { ExpenseInterface } from "../interfaces/ExpenseInterface";
import { v4 as uuidv4 } from "uuid";

const initialState: { list: ExpenseInterface[] } = {
    list: [
        {
            id: uuidv4(),
            label: "Courses",
            amount: 45.5,
            category: "Alimentation",
            date: new Date().toISOString()
        },
        {
            id: uuidv4(),
            label: "Abonnement Netflix",
            amount: 12.99,
            category: "Loisirs",
            date: new Date().toISOString()
        }
    ]
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