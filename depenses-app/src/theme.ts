// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        // CssBaseline pour appliquer styles globaux au body
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    maxWidth: "900px",
                    width: "90%",
                    margin: "1rem auto",
                    backgroundColor: "#efeeefff",
                },
            },
        },

        // Override TextField / OutlinedInput globalement
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: "0.8rem",
                    "& input": {
                        padding: "14px",
                    },
                    "&.Mui-focused input": {
                        padding: "14px",
                    },
                    "&.Mui-error input": {
                        padding: "14px",
                    },
                },
            },
        },

        // Override InputLabel globalement
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "0.8rem",
                },
            },
        },

        // Override Select globalement
        MuiSelect: {
            styleOverrides: {
                select: {
                    fontSize: "0.8rem",
                    padding: "14px",
                    color: 'rgba(0,0,0,0.87)',
                },
            },
        },
    },
});

export default theme;
