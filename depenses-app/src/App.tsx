import { useSelector } from "react-redux";
import ExpenseForm from './components/ExpenseForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from "date-fns/locale";
import type { RootState } from "./store/store";
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

function App() {
  const expenses = useSelector((state: RootState) => state.expenses.list);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
        <div className="form-container">
          <Dashboard expenses={expenses} />
          <ExpenseForm />
          <ExpenseList />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
