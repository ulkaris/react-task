// import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes/Router";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
