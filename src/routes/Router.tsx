import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import DashboardLayoutWrapper from "../components/Wrapper";

const routes = [
  {
    path: "/",
    element: <DashboardLayoutWrapper />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

export default routes;
