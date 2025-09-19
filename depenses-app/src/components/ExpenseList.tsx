import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeExpense } from "../store/expensesSlice";
import { Stack, Paper, Typography, Button } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
import { useNavigate } from "react-router-dom";

export default function ExpenseList() {
    const expenses = useSelector((state: RootState) => state.expenses.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Paper
            elevation={4}
            sx={{ p: 2, borderRadius: 2 }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "1rem" }}>
                <Typography variant="h6" fontWeight="bold">Derniers dépenses</Typography>
                <Button variant="outlined" color="primary" onClick={() => navigate("/form")}>Ajouter</Button>
            </Stack>

            <Stack spacing={2}>
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
