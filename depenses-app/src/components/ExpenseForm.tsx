import { useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../constants/categories"; // valeur (le tableau)
import type { Category } from "../constants/categories"; // type
import { addExpense } from "../store/expensesSlice";
import { Card, TextField, MenuItem, Button, Stack, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from "react-router-dom";

export default function ExpenseForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [label, setLabel] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [category, setCategory] = useState<Category>("Alimentation");
    const [date, setDate] = useState<Date | null>(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!label || !amount || !date) return;

        dispatch(addExpense({
            label,
            amount: Number(amount),
            category,
            date: date.toISOString()
        }));

        // reset form
        setLabel("");
        setAmount("");
        setCategory("Alimentation");
        setDate(null);
    }

    return (
        <Card sx={{p: 2, borderRadius: 2, boxShadow: 3}}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    {/* Libellé */}
                    <Stack spacing={1}>
                        <Typography variant="caption" color="text.secondary" align="left">
                            Libellé
                        </Typography>
                        <TextField
                            label="Ex. Courses"
                            value={label}
                            onChange={e => setLabel(e.target.value)}
                            required
                        />
                    </Stack>

                    {/* Montant */}
                    <Stack spacing={1}>
                        <Typography variant="caption" color="text.secondary" align="left">
                            Montant (€)
                        </Typography>
                        <TextField
                            label="Ex. 12.50"
                            type="number"
                            value={amount}
                            onChange={e => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                            required
                        />
                    </Stack>

                    {/* Catégorie */}
                    <Stack spacing={1}>
                        <Typography variant="caption" color="text.secondary" align="left">
                            Sélectionnez une catégorie
                        </Typography>
                        <TextField
                            select
                            value={category}
                            onChange={e => setCategory(e.target.value as Category)}
                            fullWidth
                        >
                            {categories.map(cat => (
                                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                            ))}
                        </TextField>
                    </Stack>

                    {/* Date */}
                    <Stack spacing={1}>
                        <Typography variant="caption" color="text.secondary" align="left">
                            Sélectionnez une date
                        </Typography>
                        <DatePicker
                            label="Ex. jj/mm/aaaa"
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            slotProps={{textField: {required: true,},}}
                        />
                    </Stack>

                    <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 4 }}>
                        <Button variant="outlined" color="primary" onClick={() => navigate("/")}>Retour</Button>
                        <Button type="submit" variant="contained" color="primary">Créer</Button> 
                    </Stack>
                </Stack>
            </form>
        </Card>
    )
}
