import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeExpense } from "../store/expensesSlice";
import { Stack, Paper } from "@mui/material";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
    const expenses = useSelector((state: RootState) => state.expenses.list);
    const dispatch = useDispatch();

    return (
        <Paper
            elevation={3}
            sx={{ p: 2, backgroundColor: "#f0f3f8ff", borderRadius: 2 }}
        >
            <Stack spacing={1}>
                {expenses.slice().reverse().map((exp) => (
                    <ExpenseItem
                        key={exp.id}
                        expense={exp}
                        onDelete={(id) => dispatch(removeExpense(id))}
                    />
                ))}
            </Stack>
        </Paper>
    );
}
