import React from "react";
import { AuthProvider } from "react-auth-kit";
import { Router } from "./router";

function App() {
  return (
    <AuthProvider authType={'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
    <Router />
    </AuthProvider>
  );
}

export default App;
