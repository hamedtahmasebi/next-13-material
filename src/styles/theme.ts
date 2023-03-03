"use client";

import { ThemeOptions, createTheme } from "@mui/material/styles";

const baseTheme: ThemeOptions = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "1em",
                    fontWeight: 600,
                },
            },
            defaultProps: {
                variant: "contained",
            },
        },
    },
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FF1B1C",
        },
    },
    ...baseTheme,
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#FF1B1C",
        },
    },
    ...baseTheme,
});
