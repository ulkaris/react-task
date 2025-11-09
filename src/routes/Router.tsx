import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import DashboardLayoutWrapper from "../components/Wrapper";

const About: React.FC = () => {
  return <div>About</div>;
};

const routes = [
  {
    path: "/",
    element: <DashboardLayoutWrapper />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

export default routes;
