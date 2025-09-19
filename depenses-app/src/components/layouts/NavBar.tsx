import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
          <nav style={{ display: "flex", gap: "1rem", padding: "1rem", width: '100%', maxWidth: '1200px', margin: '1rem auto' }}>
              <Button
                  component={NavLink} to="/" sx={{
                      textTransform: "none", "&.active": { color: "primary.main", fontWeight: "bold", },
                      "&:not(.active)": { color: "text.secondary", }
                  }}
              >
                  Accueil
              </Button>

              <Button component={NavLink} to="/form" sx={{
                  textTransform: "none", "&.active": { color: "primary.main", fontWeight: "bold", },
                  "&:not(.active)": { color: "text.secondary", },
              }}
              >
                  Formulaire
              </Button>

              <Button component={NavLink} to="/404" sx={{
                  textTransform: "none", "&.active": { color: "primary.main", fontWeight: "bold", },
                  "&:not(.active)": { color: "text.secondary", },
              }}
              >
                  À propos
              </Button>
          </nav>
    </>
  )
}
