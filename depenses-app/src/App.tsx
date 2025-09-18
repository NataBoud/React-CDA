import { useSelector } from "react-redux";
import ExpenseForm from './components/ExpenseForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from "date-fns/locale";
import type { RootState } from "./store/store";
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';

function App() {
  const expenses = useSelector((state: RootState) => state.expenses.list);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
        <Dashboard expenses={expenses} />
        <ExpenseForm />
        <ExpenseList />
    </LocalizationProvider>
  )
}

export default App;
