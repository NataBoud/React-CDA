import { Card, Typography, Stack, Paper } from "@mui/material";
import type { ExpenseInterface } from "../interfaces/ExpenseInterface";
import { categories } from "../constants/categories";


interface DashboardProps {
    expenses: ExpenseInterface[];
}

export default function Dashboard({ expenses }: DashboardProps) {

    // Total général
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    // Total par catégorie
    const totalByCategory = categories.map(cat => {
        const catTotal = expenses
            .filter(exp => exp.category === cat)
            .reduce((sum, exp) => sum + exp.amount, 0);
        return { category: cat, amount: catTotal };
    });

    return (
        <>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, mb: 2}} >

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>

                    <Card elevation={1} sx={{ p: 1, flex: 1, borderRadius: 2 }}>
                        <Typography variant="subtitle2">Total</Typography>
                        <Typography variant="subtitle1" fontWeight="bold">{total.toFixed(2)} €</Typography>
                    </Card>


                    {totalByCategory.map(cat => (
                        <Card key={cat.category} sx={{ p: 1, flex: 1, borderRadius: 2 }}>
                            <Typography variant="subtitle2">{cat.category}</Typography>
                            <Typography variant="subtitle1" fontWeight="bold">{cat.amount.toFixed(2)} €</Typography>
                        </Card>
                    ))}
                </Stack>
            </Paper>
        </>

    );
}
