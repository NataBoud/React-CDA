import { Typography } from "@mui/material";
import ExpenseList from "../components/ExpenseList";

export default function Home() {


  return (
    <div className="form-container">
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, mt: 4 }}>Suivi des Dépenses</Typography>
      <ExpenseList />
    </div>
  );
}
