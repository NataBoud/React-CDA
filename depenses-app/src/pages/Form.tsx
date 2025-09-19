import ExpenseForm from "../components/ExpenseForm";
import { Typography } from "@mui/material";

export default function FormPage() {
    return (
        <div className="form-container">
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, mt: 4 }}>Ajouter une dépense</Typography>
            <ExpenseForm />
        </div>
    );
}
