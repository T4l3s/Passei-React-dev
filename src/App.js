import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { AuthProvider } from "react-auth-kit";
import { Router } from "./router";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <ThemeProvider theme={darkTheme}>
      <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
