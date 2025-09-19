import { Stack, Typography } from "@mui/material";
import ExpenseList from "../components/ExpenseList";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const expenses = useSelector((state: RootState) => state.expenses.list);

  return (
    <>
      <div className="container">
        <Stack sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>Suivi des Dépenses</Typography>
          <Dashboard expenses={expenses} />
          <ExpenseList />
        </Stack>
      </div>
    </>

  );
}
