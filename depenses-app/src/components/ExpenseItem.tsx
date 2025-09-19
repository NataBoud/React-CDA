import { Card, Typography, Chip, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { ExpenseInterface } from "../interfaces/ExpenseInterface";

interface ExpenseCardProps {
    expense: ExpenseInterface;
    onDelete?: (id: string) => void;
}

export default function ExpenseItem({ expense, onDelete }: ExpenseCardProps) {
    return (
        <Card elevation={1} sx={{ display: "flex", justifyContent: "space-between", p: 2, borderRadius: 2 }}>
            <Stack>
                <Typography variant="body1" fontWeight="bold">
                    {expense.label}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label={expense.category} size="small"/>
                    <Typography variant="caption" color="text.secondary">
                        {expense.date}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                <Typography variant="subtitle1" fontWeight="bold">{expense.amount} €</Typography>
                {onDelete && (
                    <IconButton size="small" onClick={() => onDelete(expense.id)}>
                        <DeleteIcon fontSize="small" color="error"/>
                    </IconButton>
                )}
            </Stack>
        </Card>
    );
}
