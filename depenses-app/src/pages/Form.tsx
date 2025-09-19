import ExpenseForm from "../components/ExpenseForm";
import { Typography, Stack } from "@mui/material";

export default function FormPage() {
    return (
        <div className="container">
            <Stack sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>Ajouter une dépense</Typography>
                <ExpenseForm />
            </Stack>
        </div>
    );
}
