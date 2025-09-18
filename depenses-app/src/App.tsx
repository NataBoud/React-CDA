import { useSelector, useDispatch } from "react-redux";
import ExpenseForm from './components/ExpenseForm';
import ExpenseCard from './components/ExpenseCard';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from "date-fns/locale";
import type { RootState } from "./store/store";
import { removeExpense } from "./store/expensesSlice";
import { Stack, Paper } from "@mui/material";
import Dashboard from './components/Dashboard';

function App() {
  const expenses = useSelector((state: RootState) => state.expenses.list);
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>

      <div className="form-container">

        <Stack spacing={2} sx={{ my: 2 }}>
          <h1 >Suivi des Dépenses</h1>
  
          <Paper elevation={3} sx={{ p: 2, backgroundColor: "#f0f3f8ff", borderRadius: 2, }} >
            <Dashboard expenses={expenses} />
          </Paper>
          <ExpenseForm />
        </Stack>

        <Paper elevation={3} sx={{ p: 2, backgroundColor: "#f0f3f8ff", borderRadius: 2, }} >
          <Stack spacing={1} >
            {expenses.map(exp => (
              <ExpenseCard
                key={exp.id}
                expense={exp}
                onDelete={(id) => dispatch(removeExpense(id))}
              />
            ))}
          </Stack>
        </Paper>

      </div>
    </LocalizationProvider>
  )
}

export default App;
