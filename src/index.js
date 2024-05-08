import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
    palette: {
        primary: {
            light: "#c9faec",
            main: "#54efc3",
            dark: "#11b385",
            darker: "3063e2e"
        }
    }
});

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);
