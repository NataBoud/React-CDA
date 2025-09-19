import { NavLink, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { fr } from "date-fns/locale";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import FormPage from "./pages/Form";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
        {/* Barre de navigation */}
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
          <Button
            component={NavLink} to="/" sx={{textTransform: "none", "&.active": {color: "primary.main", fontWeight: "bold",},
              "&:not(.active)": {color: "text.secondary",}}}
          >
            Accueil
          </Button>

          <Button component={NavLink}to="/form" sx={{textTransform: "none","&.active": {color: "primary.main",fontWeight: "bold",},
              "&:not(.active)": {color: "text.secondary",},}}
          >
            Formulaire
          </Button>

          <Button component={NavLink} to="/404" sx={{textTransform: "none","&.active": { color: "primary.main", fontWeight: "bold",},
              "&:not(.active)": {color: "text.secondary",},}}
          >
            À propos
          </Button>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<FormPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
